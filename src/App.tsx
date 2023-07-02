import type { Component } from 'solid-js';

import styles from './App.module.css';
import './theme.css';
import './custom.css';
import BleedingEdge from './pages/bleedingedge';
import OpenSource from './pages/open-source';
import MultiLang from './pages/multilang';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div id="container">
      <h1>The 
        <select name="everything" id="everything" style="margin-right: 5px;">
          <option value="bleedingedge">Bleeding-Edge</option>
          <option value="opensource">Open-source</option>
          <option value="multilang">Multi-Language</option>
        </select>
        Laboratory - MisileLaboratory/
        <select name="selectorhistory" id="selectorhistory">
          <option value="projects">Projects</option>
          <option value="about">About</option>
          <option value="history">History</option>
        </select>
      </h1>
      </div>
      <BleedingEdge></BleedingEdge>
      <OpenSource></OpenSource>
      <MultiLang></MultiLang>
    </div>
  );
};

export default App;
