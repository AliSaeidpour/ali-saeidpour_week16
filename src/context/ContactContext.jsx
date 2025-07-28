import { createContext, useReducer, useEffect } from "react";
import { contactReducer } from "../reducers/contactReducer";

export const ContactContext = createContext();

const initialState = {
  contacts: [],
  editing: null,
  searchTerm: "",
  selected: [],
};

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Optional: Fetch from json-server
  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((contact) =>
          dispatch({ type: "ADD_CONTACT", payload: contact })
        );
      });
  }, []);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};