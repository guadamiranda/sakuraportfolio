import './Styles/App.scss';

import { Navbar } from './Components/Navbar/Navbar'; 
import { CardSkill } from './Components/CardSkill/CardSkill';
import { TitleSection } from './Components/TitleSection/TitleSection';

function App() {
  return (
    <div className="app">
      <Navbar/>

      <section className='app__skill-section'>
        <TitleSection/>
        <CardSkill/>
      </section>
      
    </div>
  );
}

export default App;
