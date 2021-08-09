import './App.css';
import Navi from './component/navi';
import Header from './component/header';
import Project from './component/project';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Header/>
      <main>
        <Project />
      </main>
    </div>
  );
}

export default App;
