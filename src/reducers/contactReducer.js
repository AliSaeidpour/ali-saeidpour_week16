export const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
        editing: null,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
        selected: state.selected.filter((id) => id !== action.payload),
      };
    case "SET_EDITING":
      return {
        ...state,
        editing: action.payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SELECT_CONTACT":
      return {
        ...state,
        selected: state.selected.includes(action.payload)
          ? state.selected.filter((id) => id !== action.payload)
          : [...state.selected, action.payload],
      };
    case "DELETE_SELECTED":
      return {
        ...state,
        contacts: state.contacts.filter(
          (c) => !state.selected.includes(c.id)
        ),
        selected: [],
      };
    default:
      return state;
  }
};
