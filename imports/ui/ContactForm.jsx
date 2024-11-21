
import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactForm = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");

    const saveContact = () => {
        ContactsCollection.insert({ name, email, imageUrl });
        setName("");
        setEmail("");
        setImageUrl("");
    }

    return (
        <form>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input id='name' 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            type="text"  />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'/>
      </div>
      <div>
        <label htmlFor="imageURL">Image URL</label>
        <input 
            type="text" 
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            id='imageUrl'/>
      </div>
      <div>
        <button type="button" onClick={saveContact}>Save Contact</button>
      </div>
    </form>
    )
}