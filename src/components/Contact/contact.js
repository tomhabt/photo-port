import React, {useState} from 'react'

export default function ContactForm () {
    
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

   function  handleChange(e)  {
        setFormState({...formState, [e.target.name]:e.target.value})
    };

    console.log(formState);

   function  handleSubmit(e)  {
        e.preventDefault();
        // fetch API back end work will be iserted ...
        // here by the back end developed later
        console.log(formState);
    };

    console.log(formState);

  return (
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}
