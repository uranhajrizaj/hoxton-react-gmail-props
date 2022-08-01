import { Email } from "../data/emails";

type Props = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  hideRead: boolean;
  setHideRead: React.Dispatch<React.SetStateAction<boolean>>;
  unreadEmails: Email[];
  starredEmails: Email[];
};

export default function Leftmenu({
  currentTab,
  setCurrentTab,
  unreadEmails,
  starredEmails,
  hideRead,
  setHideRead
}: Props) {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === "inbox" ? "active" : ""}`}
          onClick={() => setCurrentTab("inbox")}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadEmails.length}</span>
        </li>
        <li
          className={`item ${currentTab === "starred" ? "active" : ""}`}
          onClick={() => setCurrentTab("starred")}
        >
          <span className="label">Starred</span>
          <span className="count">{starredEmails.length}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={(e) => setHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  );
}
