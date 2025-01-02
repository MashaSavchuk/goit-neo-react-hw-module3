import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

// import contacts from "./contacts.json";
import initialContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedCont = localStorage.getItem("contacts");
    return savedCont === null ? initialContacts : JSON.parse(savedCont);
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox search={search} onSearch={setSearch} />
        {/* <ContactList contacts={contacts} /> */}
        <ContactList contacts={searchedContacts} onDelete={deleteContacts} />
      </div>
    </>
  );
}

export default App;
