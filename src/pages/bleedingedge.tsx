import type { Component } from 'solid-js';

import '../theme.css';
import '../custom.css';

const BleedingEdge: Component = () => {
return (
    <div>
        <div id="container" style="width: 50%; white-space: nowrap; display: inline-block;">
            <h1>Operating Systems</h1>
            <ul>
                <li>Bleeding-edge Arch and EndeavourOS</li>
                <li>Void linux from scratch</li>
                <li>Backup for bleeding-edge bugs</li>
            </ul>
            <b><h2><a href="https://status.misilelaboratory.xyz" style="color: var(--ctp-mocha-text); text-decoration: underline">My open-source hosting</a></h2></b>
        </div>
        <div id="container" style="width: 50%; white-space: nowrap; display: inline-block;">
            <h1>Pull requests</h1>
            <ul>
                <li><a href="https://github.com/RustPython/RustPython/pull/5004">RustPython - fix warning about mutable</a></li>
                <li><a href="https://github.com/tauri-apps/tauri-docs/pull/1263">Tauri - Void linux prerequisities wrong</a></li>
                <li><a href="https://github.com/v1rbox/discox/pull/164">Discox - simple typo error</a></li>
                <li><a href="https://github.com/ziglang/www.ziglang.org/pull/240">Ziglang - llvm changelog link is invaild</a></li>
                <li><a href="https://github.com/refinedmods/refinedstorage/pull/3395">Refined storages - fix splash in site does not work</a></li>
                <li><a href="https://github.com/josh-project/josh/pull/1095">Josh - fix splash in site does not work</a></li>
                <li><a href="https://github.com/tkellogg/dura/pull/84">Dura - Update for new install way</a></li>
                <li><a href="https://github.com/v1rbox/discox/pull/53">Discox - Simple fix about typo error</a></li>
                <li><a href="https://github.com/RustPython/RustPython/pull/4281">Rustpython - replace deprecated function to new one</a></li>
                <li><a href="https://github.com/topgrade-rs/topgrade/pull/8">Topgrade - change the repository link in Cargo.toml</a></li>
                <li><a href="https://github.com/mindstorm38/portablemc/pull/101">PortableMC - implement quilt</a></li>
                <li><a href="https://github.com/RustPython/rustpython.github.io/pull/57">Rustpython - Python version upgraded</a></li>
                <li><a href="https://github.com/seanmonstar/reqwest/pull/1527">Reqwest - Update apache license copyright</a></li>
                <li><a href="https://github.com/DisnakeDev/disnake/pull/207">fix disnake banner does not display in pypi page</a></li>
            </ul>
        </div>
    </div>
    );
};

export default BleedingEdge;
