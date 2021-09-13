import React from "react";
import "./Button.css";
import "./Styles.css";
import "./Info.css";
import LinkButton from "./LinkButton";
import EmailButton from "./EmailButton";

export const Info: React.FC = () => {
    const infoLinks = [
        {
            url: "https://drive.google.com/file/d/1HNXYWz8V85zYMWx_pzEAUs-Ph9W5xGz-/view?usp=sharing",
            name: "CV",
            classIndex: 2,
            iconClass: "far fa-file-alt",
        },
        {
            url: "https://www.linkedin.com/in/nishant-pall-9b44ba189",
            name: "LinkedIn",
            classIndex: 1,
            iconClass: "fab fa-linkedin",
        },
        {
            url: "https://www.twitch.tv/prhyme89",
            name: "Twitch",
            classIndex: 3,
            iconClass: "fab fa-twitch",
        },
        {
            url: "https://twitter.com/PallNishant",
            name: "Twitter",
            classIndex: 1,
            iconClass: "fab fa-twitter",
        },
        {
            url: "https://github.com/Nishant-Pall",
            name: "Github",
            classIndex: 2,
            iconClass: "fab fa-github",
        },
    ];

    return (
        <div className="container">
            <div id="intro">
                <div className="flex-container container">
                    <div className="cybr-btn-name">
                        Nishant<span aria-hidden></span>
                        <span aria-hidden className="cybr-btn__glitch">
                            Nishant
                        </span>
                        <span aria-hidden className="cybr-btn__tag"></span>
                    </div>
                    <div className="cybr-btn-name">
                        Singh<span aria-hidden></span>
                        <span aria-hidden className="cybr-btn__glitch">
                            Singh
                        </span>
                        <span aria-hidden className="cybr-btn__tag"></span>
                    </div>
                    <div className="cybr-btn-name">
                        Pall<span aria-hidden></span>
                        <span aria-hidden className="cybr-btn__glitch">
                            Pall
                        </span>
                        <span aria-hidden className="cybr-btn__tag"></span>
                    </div>
                </div>
                <div className="flex-container container">
                    <div className="row">
                        {infoLinks.map((link) => (
                            <LinkButton
                                key={link.name}
                                url={link.url}
                                name={link.name}
                                buttonClassIndex={link.classIndex}
                                AppIconClass={link.iconClass}
                            />
                        ))}
                        <EmailButton
                            url="nishantpall877@gmail.com"
                            name="Copy Email"
                            AppIconClass="far fa-envelope"
                            buttonClassIndex={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
