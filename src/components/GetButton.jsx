const GetButton = ({ imgSrc, text,onClick = () => {} }) => {
    return (
      <button className="button--get-course button" onClick = {onClick }>
        {imgSrc && <img src={imgSrc} alt="button icon" className="img--get-course" />}
        <span>{text}</span>
      </button>
    );
  };

  export default GetButton