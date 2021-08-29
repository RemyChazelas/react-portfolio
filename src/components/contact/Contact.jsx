import { useState } from "react";

import "./contact.scss";

export default function Contact() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = 'none';
            return true;
        } else {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            setTimeout (() => {
                mail.style.animation = 'none';
            }, 1000);
            return false;
        }
    }

    const failMessage = (message) => {
        let formMess = document.querySelector('.form-message');
        
        formMess.innerHTML = message;
        formMess.style.opacity = 1;


        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    }

    const successMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = 'merci ! je vous réponds rapidement';
        formMess.style.opacity = 1;

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        setTimeout (() => {
            formMess.style.opacity = 0;
        }, 5000) ;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && isEmail() && message) {
        sendFeedback("template_fqqhmzn", {
            name,
            email,
            message,
          });
        } else {
            failMessage('veuillez remplir tous les champs correctement');
        }
    };

    const sendFeedback = (templateId, variables) => {

        window.emailjs
          .send("service_5boiahl", "template_fqqhmzn", variables)
          .then((res) => {
            successMessage();
            setName("");
            setEmail("");
            setMessage("");
          })
          .catch(
            (err) => {
                failMessage("Une erreur s'est produite, veuillez réessayer.")
            }
          );
      };


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2><span>C</span>ontact</h2>
                <form>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="nom"
                        value={name}
                        autoComplete="off"
                        />
                    <label id="not-mail">Email non valide</label>
                    <input
                        type="mail"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        value={email}
                        autoComplete="off" 
                     />
                    <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message"
                        value={message}
                     />
                    <button type="submit" onClick={handleSubmit}>Envoyer</button>
                        <div className="form-message"></div>
                </form>
            </div>
        </div>
    );
}