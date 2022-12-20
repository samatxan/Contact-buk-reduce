import React from "react";

const EditContacts = (id) => {
  return (
    <div>
      <input name="name" type="text" placeholder="name" />
      <input name="surname" type="text" placeholder="surname" />
      <input name="number" type="text" placeholder="number" />
      <button>save</button>
    </div>
  );
};

export default EditContacts;
