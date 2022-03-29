
import Header from './components/Header';
import './App.css';
import Buttons from './components/Buttons';
import About from './components/About'
import Interests from './components/Interests'
import Icons from './components/Icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './images/passport-card.jpg';

function App() {
  return (
    <div className="App">
    <div className='inner'>
    <img className="profile--cover" src={profile} width={317} height={400} />
      <div className="rec">
        <Header />
        <Buttons />
        <About/>
        <Interests/>
        </div>
     
      <Icons/>
    </div>
    </div>
  );
}

export default App;
