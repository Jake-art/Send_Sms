import React, { useRef, useState, useEffect } from 'react';
import './home.css';
import axios from "axios";

function Home() {
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const chatContainerRef = useRef(null);
  
    useEffect(() => {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [chatMessages]);
  
    function handleKeyPress(e) {
      if (e.key === 'Enter') {
        handleSubmit(e);
        setMessage('');
      }
    }
  
    function handleChange(e) {
      setMessage(e.target.value);
    }
  
    async function handleSubmit(e) {
        e.preventDefault();
        if (message.trim() === '' || phoneNumber.trim() === '') {
          return;
        }
      
        try {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', message: message },
          ]);
      
          await new Promise((resolve) => setTimeout(resolve, 1000));
      
          const responseMessage = `Message sent to : ${phoneNumber}`;
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'recipient', message: responseMessage },
          ]);
          
          let data = JSON.stringify({
            "SenderId": "Mobitext",
            "MessageParameters": [
              {
                "Number": "254722352740",
                "Text": "moses"
              }
            ],
            "ApiKey": "zpEdD5mAa6itV2YhC4lrZc8e1LMwuxPFn9vB0b3G7UJkgoKj",
            "ClientId": "Jake"
          });

          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://apis.onfonmedia.co.ke/v1/sms/SendBulkSMS',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      
          setMessage('');
          //setPhoneNumber(''); // Commenting this out so the phone number remains for subsequent messages
        } catch (error) {
          console.error('Error:', error);
        }
      }      
  
    return (
      <div className="night-sky">
        <div className="container">
            <input
              type="tel"
              className="form-control-a"
              placeholder="Enter Recipient's Phone..."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              autoComplete="off"
            />
          <div id="chatContainer" className="card" ref={chatContainerRef}>
            <div id="chatMessages" className="card-body">
              {chatMessages.map((chatMessage, index) => (
                <div key={index} className={`message ${chatMessage.sender === 'user' ? 'user-message-container' : 'response-message'}`}>
                  {chatMessage.message}
                </div>
              ))}
            </div>
          </div>
          <form className="input-group" onSubmit={handleSubmit}>
 
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={message}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              autoComplete="off"
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
          <footer className="footer">&copy; All rights reserved Solutions</footer>
        </div>

        <div class="moon"></div>

        <div class="shooting-star shooting-star1"></div>
        <div class="shooting-star shooting-star2"></div>
        <div class="shooting-star shooting-star3"></div>
        
        <div class="star star1"></div>
        <div class="star star2"></div>
        <div class="star star3"></div>
        <div class="star star4"></div>
        <div class="star star5"></div>
        <div class="star star6"></div>
        <div class="star star7"></div>
        <div class="star star8"></div>
        <div class="star star9"></div>
        <div class="star star10"></div>
        <div class="star star11"></div>
        <div class="star star12"></div>
        <div class="star star13"></div>
        <div class="star star14"></div>
        <div class="star star15"></div>
        <div class="star star16"></div>
        <div class="star star17"></div>
        <div class="star star18"></div>
        <div class="star star19"></div>
        <div class="star star20"></div>
        <div class="star star21"></div>
        <div class="star star22"></div>
        <div class="star star23"></div>
        <div class="star star24"></div>
        <div class="star star25"></div>
        <div class="star star26"></div>
        <div class="star star27"></div>
        <div class="star star28"></div>
        <div class="star star29"></div>
        <div class="star star30"></div>
     </div> 
  );
}

export default Home;
