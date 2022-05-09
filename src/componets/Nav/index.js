import React from 'react';

const projects = [
    {
        name: "Bootcamp",
        description: "Projects from Columbia Full Stack Coding Bootcamp",
    }, 
    {
        name: "Personal", 
        description: "Personal Projects to test skills", 
    },
]

function projectSelected(name) {
    console.log(`${name} clicked`)
}

function Nav() {

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="computer">👩‍💻</span> Let's code!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    {projects.map((project) => (
                            <li 
                            className="mx-1"
                            key={project.name}
                            >
                                <span onClick={() => projectSelected(project.name)}>
                                    {project.name}
                                </span>
                            </li>
                        ))}
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;