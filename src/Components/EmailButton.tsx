import React, { useState } from "react";
import "./Button.css";

interface EmailButtonProps {
    name: string;
    url: string;
    buttonClassIndex: number;
    AppIconClass: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({
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
    const [text, setText] = useState<string>(name);
    const onClick = () => {
        setText("Copied");
        navigator.clipboard.writeText(url);
    };
    const onMouseOut = () => {
        setText("Copy Email");
    };
    return (
        <div className={buttonClassName}>
            <span className="mas">{text}</span>
            <button
                onClick={onClick}
                onMouseOut={onMouseOut}
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

export default EmailButton;
