
import type { Component } from 'solid-js';

import '../theme.css';
import '../custom.css';

const Projects: Component = () => {
return (
    <div id="container" style="width: 100%; white-space: nowrap; display: inline-block;">
        <h1>Projects</h1>
        <ul>
            <li><a href="https://github.com/misilelab/portfolio">Portfolio | This page</a></li>
            <li><a href="https://github.com/misilelab/ignofierplus">IgnofierPlus | Get gitignore with Rust program</a></li>
            <li><a href="https://github.com/lawnseol/klojure">Klojure | Search koreanbots easy and efficient</a></li>
            <li><a href="https://github.com/mcCmd-language/mcCmd">McCmd | Minecraft-style Interpreter</a></li>
            <li><a href="https://github.com/misilelab/h3/tree/main/projects/dsb/ch">Crypto Hashing | Encrypting text</a></li>
            <li><a href="https://github.com/misilelab/h3/tree/main/projects/sntapi">sntapi | Sunrint Meal Backend of </a><a href="https://www.instagram.com/today.sunrin.meal">instagram bot</a></li>
        </ul>
    </div>
    );
};

export default Projects;
