import React from "react";
import "./Button.css";

interface LinkButtonProps {
  name: string;
  url: string;
  buttonClassIndex: number;
  AppIconClass: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  buttonClassIndex,
  name,
  url,
  AppIconClass,
}) => {
  const buttonClassName = `button-container-${buttonClassIndex}`;
  const style = {
    fontSize: "3em",
    color: "black",
  };
  const onClick = () => {
    window.open(url);
  };
  return (
    <div className={buttonClassName}>
      <span className="mas">{name}</span>
      <button
        onClick={onClick}
        className="btn"
        id="work"
        type="button"
        name="Hover"
      >
        <i className={AppIconClass} style={style}></i>
      </button>
    </div>
  );
};

export default LinkButton;
