import "./ModalForm.css";
import { useState } from "react";
import { sendEmail } from "../../utils/sendEmail";
import { useScrollLock } from "../../hooks/useScrollLock";

export const ModalForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail(name,email, message);
    onClose();
    setEmail("");
    setName("");
    setMessage("");
  };

  useScrollLock(isOpen);
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal__title">Отправить сообщение</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal__input"
            required
          />
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="modal__input"
            required
          />
          <textarea
            placeholder="Введите сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="modal__textarea"
            required
          ></textarea>
          <button type="submit" className="modal__button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};
