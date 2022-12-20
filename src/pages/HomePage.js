import React from "react";
import AddContacts from "../components/AddContacts";
import ContactList from "../components/ContactList";
import EditContacts from "../components/EditContacts";

const HomePage = () => {
  return (
    <>
      <AddContacts />
      <ContactList />
    </>
  );
};

export default HomePage;
