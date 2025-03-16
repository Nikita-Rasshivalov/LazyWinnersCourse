import emailjs from "emailjs-com";

export const sendEmail = async (name,email, message) => {
    const templateParams = {
      name,
      email,
      message,
    };
  
    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID , //  Service ID
        process.env.REACT_APP_TEMPLATE_ID , //  Template ID
        templateParams,
        process.env.REACT_APP_API_KEY //  Public Key
      );
    } catch (error) {
      console.error("Error with email:", error);
    }
  };
  


  