import { Cards, Card } from "nextra/components";
import { useEffect, useState } from "react";

type GithubFile = {
  name: string,
  path: string,
  sha: string,
  size: number,
  url: string,
  html_url: string,
  git_url: string,
  download_url: string,
  type: string,
  _links: {
    self: string,
    git: string,
    html: string
  }
}



export async function RawDocuments(folder: string | undefined, returnDocs?: GithubFile[]): Promise<GithubFile[]>;
export async function RawDocuments(url: string | undefined, returnDocs?: GithubFile[]): Promise<GithubFile[]>;
export async function RawDocuments(a: string | undefined, returnDocs?: GithubFile[]): Promise<GithubFile[]> {
  if (!returnDocs) returnDocs = []

  let fetchURL = `https://api.github.com/repos/nickmackenzie/dont-get-zohod/contents/pages/${a}`;
  if (isUrl(a)) {
    fetchURL = a;
  }

  try {
    const response = await fetch(fetchURL);
    const data = await response.json();

    for (const item of data) {
      if (item.type === "dir") {
        // Recursively fetch documents for directories
        returnDocs = await RawDocuments(item.url, returnDocs);
      } else {
        // Add documents to the result array for files
        returnDocs.push(item);
      }
    }
  } catch (error) {
    console.error('Error fetching file list:', error);
  }

  return returnDocs;

}

export const DocumentCards = (props) => {
  const [documents, setDocuments] = useState<any[]>([])

  useEffect(() => {
    const func = async () => {
      const docList = []
      const documents = await RawDocuments(props.folder)
      if (Object.keys(documents).includes("message")) return
      for (const document of documents.filter(doc => { return doc.name.includes(".md") && !doc.name.includes("index") })) {
        let metadata = await FetchContent(document.git_url);
        if (typeof metadata == 'undefined') {
          metadata = { title: document.name.replace(/.[^\/\.]+$/, '') }
        }
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
      icon={<></>}
      children={<></>}
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

const isUrl = (urlString: string) => {
  var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
  return !!urlPattern.test(urlString);
}