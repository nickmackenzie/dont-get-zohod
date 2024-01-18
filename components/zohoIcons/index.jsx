import styles from "./zohoIcons.module.css";

const IconBase = (props) => {
  return <span className={styles.zicon} style={{ ...props.style }} />;
};

export const TestIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-360px -40px" }} />;
};

export const AssistIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-720px 0" }} />;
};

export const BooksIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "0 -40px" }} />;
};

export const CampaignsIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-440px 0" }} />;
};

export const CatalystIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-400px -80px" }} />;
};

export const CommerceIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-280px -80px" }} />;
};

export const CrmIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-320px 0" }} />;
};

export const CreatorIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-720px -40px" }} />;
};

export const DelugeIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-720px -120px" }} />;
};

export const DeskIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-680px 0" }} />;
};

export const FormsIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-560px 0" }} />;
};

export const InventoryIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-40px -40px" }} />;
};

export const InvoiceIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-160px -40px" }} />;
};

export const MailIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-360px -40px" }} />;
};

export const MeetingsIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-760px 0" }} />;
};

export const PeopleIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-280px -40px" }} />;
};

export const RecruitIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-240px -40px" }} />;
};

export const SalesIqIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-360px 0" }} />;
};

export const SignIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-640px 0" }} />;
};

export const SitesIcon = ({ style }) => {
  return <IconBase style={{ ...style, backgroundPosition: "-600px 0" }} />;
};
