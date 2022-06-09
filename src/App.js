import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CreateToDo from './Pages/CreateToDo';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/todo" element={<CreateToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
