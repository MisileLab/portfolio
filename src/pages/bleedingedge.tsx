import type { Component } from 'solid-js';

import '../theme.css';
import '../custom.css';

const BleedingEdge: Component = () => {
return (
    <div>
        <div id="container" style="width: 100%; white-space: nowrap; display: inline-block;">
            <h1>Operating Systems</h1>
            <ul>
                <li>Bleeding-edge NixOS</li>
            </ul>
            {/* <b><h2><a href="https://status.misilelaboratory.xyz" style="color: var(--ctp-mocha-text); text-decoration: underline">My open-source hosting</a></h2></b> */}
        </div>
    </div>
    );
};

export default BleedingEdge;
