import { Cards, Card } from "nextra/components";
import { useEffect, useState } from "react";

export const RawDocuments = async (folder) => {
  return await fetch(`https://api.github.com/repos/nickmackenzie/dont-get-zohod/contents/pages/${folder}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching file list:', error);
    });
}

export const DocumentCards = (props) => {
  const [documents, setDocuments] = useState<any[]>([])

  useEffect(() => {
    const func = async () => {
      const docList = []
      const documents = await RawDocuments(props.folder)
      for (const document of documents.filter(doc => doc.name.includes(".md"))) {
        const metadata = await FetchContent(document.git_url);
        docList.push({ ...document, ...metadata })
      }
      setDocuments(docList);
    }
    func()
  }, [])

  const cards = documents?.sort((a, b) => {
    let ta = a.title.toLowerCase(), tb = b.title.toLowerCase();
    //if {ta} is first else if {tb} is fist else 0
    return ta < tb ? -1 : ta > tb ? 1 : 0
  }).map((doc, index) => (
    <Card
      key={index}
      title={doc.title}
      href={doc.path.replace(/(pages\/)/, '').replace(/.[^\/\.]+$/, '')}
    />
  ))

  return (
    <Cards>
      {cards}
    </Cards>
  )
}

const FetchContent = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .then(data => extractMetadataFromMarkdown(Buffer.from(data.content, 'base64').toString()))
    .catch(error => {
      console.error('Error fetching file list:', error);
    });
}

const extractMetadataFromMarkdown = (markdown) => {
  const charactersBetweenGroupedHyphens = /^---([\s\S]*?)---/;
  const metadataMatched = markdown.match(charactersBetweenGroupedHyphens);
  const metadata = metadataMatched[1];

  if (!metadata) {
    return {};
  }

  const metadataLines = metadata.split("\n");
  const metadataObject = metadataLines.reduce((accumulator, line) => {
    const [key, ...value] = line.split(":").map((part) => part.trim());

    if (key)
      accumulator[key] = value[1] ? value.join(":") : value.join("");
    return accumulator;
  }, {});

  return metadataObject;
};