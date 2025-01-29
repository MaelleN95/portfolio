import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Notification from '../../components/notification/Notification';

const Contact = () => {
  const [notification, setNotification] = useState({ type: '', message: '' });
  // eslint-disable-next-line no-unused-vars
  const [successSend, setSuccessSend] = useState(false);
  const [timerNotification, setTimerNotification] = useState(false);

  const showNotification = () => {
    setTimerNotification(true);
    setTimeout(() => {
      setTimerNotification(false);
    }, 5000);
  };

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const verifyNameInput = (name) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿō -]+$/;
    if (!regex.test(name)) {
      setNotification({ type: 'error', message: "Le nom n'est pas valide." });
      return false;
    }
    return true;
  };

  const verifyEmailInput = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      setNotification({ type: 'error', message: "L'email n'est pas valide." });
      return false;
    }
    return true;
  };

  const verifyMessageInput = (message) => {
    const dangerousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /<img\b[^<]*(?:(?!<\/img>)<[^<]*)*<\/img>/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(message)) {
        setNotification({
          type: 'error',
          message:
            "Bah alors ? Qu'est-ce que tu fais ? Tu veux hack ? ET BIEN C'EST RATÉ ! MOUAHAHAHAH",
        });
        return false;
      }
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setNotification({ type: '', message: '' });

    let successSend = true;

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    if (
      !verifyNameInput(formData.name) ||
      !verifyEmailInput(formData.email) ||
      !verifyMessageInput(formData.message)
    ) {
      showNotification();
      return;
    }

    emailjs
      .send(
        'service_ax7cobd',
        'portfolio',
        {
          name: formData.name,
          message: formData.message,
          user_email: formData.email,
        },
        'KKodTS7xvMcCsCohY'
      )
      .then(
        () => {
          setSuccessSend(true);
        },
        () => {
          setSuccessSend(false);
        }
      );

    if (successSend) {
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
      setNotification({ type: 'success', message: 'Message envoyé !' });
    } else {
      setNotification({
        type: 'error',
        message: "Erreur lors de l'envoi du message.",
      });
    }
    showNotification();
  };

  return (
    <section id="contact">
      {timerNotification && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}

      <h2>Me contacter</h2>
      <div className="contact-block">
        <div>
          <p>
            Une envie de discuter à propos d&apos;un projet ou une demande ?
          </p>
          <p>
            N&apos;hésitez surtout pas à me contacter en remplissant le
            formulaire et je vous répondrai dans les plus brefs délais !
          </p>
          <p>
            Si vous préférez par mail, c’est par{' '}
            <a href="mailto:nioche.maelle@gmail.com">ici</a>.
          </p>
          <div className="img-form">
            <img
              src="/social_networking.svg"
              alt="Illustration de 2 personnes qui discutent via SMS"
            />
          </div>
        </div>
        <div className="form-block">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              ref={nameRef}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
            <textarea
              name="message"
              type="textarea"
              placeholder="Message"
              ref={messageRef}
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
