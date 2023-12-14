
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
            <li><a href="https://github.com/MisileLab/h3/tree/78c1d37ace0c612915e44e91e6cfec38d7842508/projects/dsb/ch">Crypto Hashing | Encrypting text</a></li>
            <li><a href="https://github.com/MisileLab/h3/tree/78c1d37ace0c612915e44e91e6cfec38d7842508/archives/sntapi">sntapi | Sunrint Meal Backend of </a><a href="https://www.instagram.com/today.sunrin.meal">instagram bot</a></li>
            <li><a href="https://github.com/chat-ana/ana-chat">ana chat | Just simple chat using shuttle and Next.JS</a></li>
        </ul>
    </div>
    );
};

export default Projects;
