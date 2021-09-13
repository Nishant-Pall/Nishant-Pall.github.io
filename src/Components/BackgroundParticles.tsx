import React, { Component } from "react";
import Particles from "react-tsparticles";

class BackgroundParticles extends Component {
    constructor(props: any) {
        super(props);

        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main: any) {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container: any) {
        console.log(container);
    }

    render() {
        return (
            <div>
                <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#000010",
                            },
                        },
                        fpsLimit: 400,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: [],
                                },
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                    parallax: {
                                        enable: false,
                                        force: 2,
                                        smooth: 10,
                                    },
                                },
                                resize: false,
                            },
                            modes: {
                                attract: {
                                    distance: 400,
                                    duration: 0.4,
                                    factor: 4,
                                    maxSpeed: 2,
                                    speed: 0.5,
                                },
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 1,
                                    size: 1,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#5cbdaa",
                            },
                            links: {
                                color: "#5cbdaa",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 3,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.8,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 3,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        );
    }
}
export default BackgroundParticles;
