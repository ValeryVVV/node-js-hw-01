const contactsSetvice = require("./contacts");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsSetvice.listContacts();
      return console.log(allContacts);

    case "get":
      const contactByID = await contactsSetvice.getContactById();
      return console.log(contactByID);

    case "add":
      const newContact = await contactsSetvice.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);

    case "remove":
      const deletedContact = await contactsSetvice.deletedContact(id);
      return console.log(deletedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
