import type { Component } from 'solid-js';

import '../theme.css';
import '../custom.css';

const About: Component = () => {
return (
    <div id="container" style="width: 100%; white-space: nowrap; display: inline-block;">
        <h1>About</h1>
        <h2>Discord: misile</h2>
        <h2>Github, Gitlab: MisileLab</h2>
    </div>
    );
};

export default About;
