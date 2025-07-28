import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactItem from "./ContactItem";

function ContactList() {
  const { state, dispatch } = useContext(ContactContext);

  const filtered = state.contacts.filter((c) =>
    [c.firstName, c.lastName, c.email, c.phone].some((field) =>
      field.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <ul className="contact-list">
        {filtered.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
      {state.selected.length > 0 && (
        <button
          className="delete-selected"
          onClick={() => dispatch({ type: "DELETE_SELECTED" })}
        >
          🗑 Delete Selected
        </button>
      )}
    </>
  );
}

export default ContactList;
