import "./ModalForm.css";

import { useState, useEffect } from "react";

export const ModalForm = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, message });
    onClose();
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    if (!isOpen) {
      setEmail("");
      setMessage("");
    }

    return () => {
      document.body.style.overflow = "auto";
      setEmail("");
      setMessage("");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
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
