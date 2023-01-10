import './App.css';
import Sidebar from './component/Sidebar';
import Data from './Pages/Data';
import Home from './Pages/Home';
import Progress from './Pages/Progress';
import TroubleShooting from './Pages/TroubleShooting';


function App() {
  let Navigation = Home;
  switch (window.location.pathname) {
    case "/Home":
      Navigation = Home
      break;
    case "/Data":
      Navigation = Data
      break;
    case "/Progress":
      Navigation = Progress
      break;
    case "/TroubleShooting":
      Navigation = TroubleShooting
      break;

  }
  return (
    <div className="App">
      <Sidebar />
      <Navigation />
    </div>
  );
}

export default App;
