import React, { useContext, useState } from "react";
import { contactContext } from "../context/ContactsContext";

const AddContacts = () => {
  const { addContact } = useContext(contactContext);
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    number: "",
  });

  function handleInput(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    addContact(contact);
  }

  return (
    <>
      <h1 style={{ justifyContent: "center", display: "flex" }}>
        Contact Book
      </h1>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        className="inputs"
      >
        <input
          name="name"
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="name"
        />
        <input
          name="surname"
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="surname"
        />
        <input
          name="number"
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="number"
        />
        <button onClick={handleClick}>add</button>
      </div>
    </>
  );
};

export default AddContacts;
