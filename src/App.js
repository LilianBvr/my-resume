import './css/App.css';

import LandingPage from './LandingPage';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact'

import GitHub from './img/github.svg';

function App() {
  return (
    <div className='app'>
      <LandingPage/>
      <Experience/>
      <Skills/>
      <Contact/>
      <a className='github-link' href='https://github.com/LilianBvr'>
        <img src={GitHub} alt=""/>
      </a>
    </div>
  );
}

export default App;
