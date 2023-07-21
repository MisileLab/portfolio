import type { Component } from 'solid-js';

import '../theme.css';
import '../custom.css';

const History: Component = () => {
return (
    <div id="container" style="width: 100%; white-space: nowrap; display: inline-block;">
        <h1>History</h1>
        <h1>2023</h1>
        <ul>
            <li>Join Sunrin Internet High School</li>
            <li>Join AnA</li>
            <li>Sunrinthon</li>
        </ul>
    </div>
    );
};

export default History;

