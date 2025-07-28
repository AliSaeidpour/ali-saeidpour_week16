import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

function SearchBar() {
  const { dispatch } = useContext(ContactContext);
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by name, email, or phone..."
      onChange={(e) =>
        dispatch({ type: "SET_SEARCH", payload: e.target.value })
      }
    />
  );
}

export default SearchBar;