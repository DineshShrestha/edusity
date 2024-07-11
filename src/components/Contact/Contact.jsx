import React from 'react'
import "./Contact.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e17c9ca7-595b-4b29-9836-2c042f4f9ca6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id, odio ipsum sunt,
            aspernatur quae fuga et voluptas nobis nisi cumque corrupti obcaecati quod earum reprehenderit repellat qui laboriosam quasi!</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@Great.dev</li>
                <li><img src={phone_icon} alt="" />+156566666</li>
                <li><img src={location_icon} alt="" />77 Masscuceh, USA</li>
            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your telephone number' required/>
            <label>Write your message here</label>
           <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
           <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
