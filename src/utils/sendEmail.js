import emailjs from "emailjs-com";

export const sendEmail = async (name,email, message) => {
    const templateParams = {
      name,
      email,
      message,
    };
  
    try {
      await emailjs.send(
        "service_3mg8uh9", // Ваш Service ID
        "template_cqcsfnb", // Ваш Template ID
        templateParams,
        "2k6jz4F5MTpc4IDnW" // Ваш Public Key
      );
    } catch (error) {
      console.error("Ошибка при отправке email:", error);
    }
  };
  