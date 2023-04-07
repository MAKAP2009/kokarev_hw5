
import ConvertNumbers from '../ConvertNumbers';
import Form from '../Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1 className='animated'>
          Homework 5
        </h1>         
        <Form />
        <div className='margins'>
          <ConvertNumbers />
        </div>
      </header>
    </div>
  );
}

export default App;
