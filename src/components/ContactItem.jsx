import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

function ContactItem({ contact }) {
  const { state, dispatch } = useContext(ContactContext);

  return (
    <li className="contact-item">
      <input
        type="checkbox"
        checked={state.selected.includes(contact.id)}
        onChange={() =>
          dispatch({ type: "SELECT_CONTACT", payload: contact.id })
        }
      />
      <div>
        <strong>
          {contact.firstName} {contact.lastName}
        </strong>
        <br />
        📧 {contact.email} <br />
        📞 {contact.phone}
      </div>
      <button onClick={() => dispatch({ type: "SET_EDITING", payload: contact })}>
        ✏️
      </button>
      <button onClick={() => dispatch({ type: "DELETE_CONTACT", payload: contact.id })}>
        🗑
      </button>
    </li>
  );
}

export default ContactItem;
