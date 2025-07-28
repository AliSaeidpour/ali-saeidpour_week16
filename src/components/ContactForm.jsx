import { useState, useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";

function ContactForm() {
  const { state, dispatch } = useContext(ContactContext);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (state.editing) {
      setFormData(state.editing);
    }
  }, [state.editing]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch({ type: "EDIT_CONTACT", payload: formData });
    } else {
      const newContact = { ...formData, id: Date.now().toString() };
      dispatch({ type: "ADD_CONTACT", payload: newContact });
    }
    setFormData({ id: "", firstName: "", lastName: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <button type="submit">
        {formData.id ? "Edit Contact" : "Add Contact"}
      </button>
    </form>
  );
}

export default ContactForm;