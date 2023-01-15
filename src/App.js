import logo from './logo.svg';
import './App.css';
import ImageFinder from './Component/ImageFinder';
import Topic from './Component/Topic';
import Test from "./TestComponent/Test"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"50%"}}>
          <Test/>
          </div>
        
     {/* <Topic/> */}
      </header>
    </div>
  );
}

export default App;
