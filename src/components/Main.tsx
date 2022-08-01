import { Email } from "../data/emails";

type Props = {
  toggleRead: (targetEmail: Email) => void;
  toggleStar: (targetEmail: Email) => void;
  getFilteredEmails: () => Email[];
};

export default function Main({
  getFilteredEmails,
  toggleRead,
  toggleStar
}: Props) {
  return (
    <main className="emails">
      <ul>
        {getFilteredEmails().map((email, index) => (
          <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => toggleRead(email)}
              />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => toggleStar(email)}
              />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
