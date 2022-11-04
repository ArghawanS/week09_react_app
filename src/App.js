import logo from './logo.svg';
import './App.css';
import StudentDetails from './lab09';

let std = { sId:'101334946',
            snm:'Arghawan Ghulam Siddiq',
            coll:'Geotge Brown College',
            city:'Tornot'


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <StudentDetails studentDetails= {std} />
      </header>
    </div>

  );
}

export default App;
