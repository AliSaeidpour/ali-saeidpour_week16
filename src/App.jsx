import { ContactProvider } from "./context/ContactContext";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <ContactProvider>
      <div className="app">
        <h1>📇 Contact App - Flux Style</h1>
        <SearchBar />
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
}

export default App;