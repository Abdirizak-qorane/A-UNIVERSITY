import React from 'react'
import './Contact.css'
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
  
      formData.append("access_key", "3ef352dc-fe00-4d7f-95ee-27e962aa5c49");
  
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
        <h3>send us amessage <img src={msg_icon} alt=""/></h3>
        <p>
        University contact information typically
         includes the institution's physical address,
          phone numbers for various departments, email
           addresses, and often a general inquiry or 
           support contact. 
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@au.edu.so</li>
            <li><img src={phone_icon} alt="" />+252612341585</li>
            <li><img src={location_icon} alt="" />Banaadir street km5-mogadishu-somalia</li>
        </ul>
     </div> 
     <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name'
            required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' 
            required/>
            <label>Write your message here</label>
            <textarea name="message"rows="6" placeholder='Enter your 
            message'required></textarea>
            <button type='submit' className='btn dark-btn'>submit now 
                <img src={white_arrow} alt="" /></button>
        </form>
        <span>{}result</span>
    </div> 
    </div>
  )
}

export default Contact
