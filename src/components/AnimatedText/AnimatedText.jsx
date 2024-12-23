import './AnimatedText.css';

const AnimatedText = ({
  text,
  containerAdditionalClasses = "",
  textAdditionalClasses = "",
}) => {
  return (
    <div className={`animated-text-container ${containerAdditionalClasses}`}>
      <p className={`animated-text ${textAdditionalClasses}`}>{text}</p>
    </div>
  );
};

export default AnimatedText;
