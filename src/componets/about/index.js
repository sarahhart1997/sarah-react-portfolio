import React from 'react';
import profileImage from "../../assets/about-photos/sarah-profile.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">A little bit about me...</h1>
            <img src={profileImage} className="my-2" style={{ width: "100%" }} alt="profile photo" />
        </section>
    );
}

export default About;