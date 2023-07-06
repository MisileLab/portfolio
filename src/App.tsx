import { createSignal } from 'solid-js';
import BleedingEdge from './pages/bleedingedge';
import OpenSource from './pages/open-source';
import MultiLang from './pages/multilang';
import styles from './App.module.css';
import Projects from './pages/projects';
import History from './pages/history';
import About from './pages/about';
import './theme.css';
import './custom.css';

const App = () => {
  const [currentOption, setCurrentOption] = createSignal('option1');
  const [currentOption2, setCurrentOption2] = createSignal('option2');

  function handleChange(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    setCurrentOption2(value);
  }

  function handleChangeForOption(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    setCurrentOption(value);
  }

  function renderPage() {
    switch (currentOption()) {
      case 'opensource':
        return <OpenSource />;
      case 'multilang':
        return <MultiLang />;
      default:
        return <BleedingEdge />;
    }
  }

  function renderPage2() {
    switch (currentOption2()) {
      case 'history':
        return <History />
      case 'about':
        return <About />
      default:
        return <Projects />;
    }
  }

  return (
    <div class={styles.App}>
      <div id="container">
        <h1>
          The{' '}
          <select
            name="everything"
            id="everything"
            style="margin-right: 5px;"
            onChange={handleChangeForOption}
          >
            <option value="bleedingedge">Bleeding-Edge</option>
            <option value="opensource">Open-source</option>
            <option value="multilang">Multi-Language</option>
          </select>
          Laboratory - MisileLaboratory/
          <select name="selectorhistory" id="selectorhistory" onChange={handleChange}>
            <option value="projects">Projects</option>
            <option value="about">About</option>
            <option value="history">History</option>
          </select>
        </h1>
      </div>
      {renderPage()}
      {renderPage2()}
    </div>
  );
};

export default App;
