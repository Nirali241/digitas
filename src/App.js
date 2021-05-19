import Navbarheader from './Navbarheader';
import './App.css';
import Footerstyle from './Footerstyle';
import Maincontent from './Maincontent';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#c0c0c2'}} >
      <div style={{width: '80vw', marginLeft: '10vw'}}>   
      <Navbarheader />   
      </div>
      <div style={{width: '80vw', marginLeft: '10vw'}}>   
      <Maincontent />
      </div>
      <Footerstyle />
    </div>
  );
}

export default App;
