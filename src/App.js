import './App.css';
import AlbumList from "./components/AlbumList";
import Navigation from './components/Navigation';
import AlbumForm from './components/AlbumForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navigation />{/* everything have to inside of the BrowersRouter*/}
  <Routes>
    <Route path="/" exact={true} element={<AlbumList />} />
    <Route path="/form" element={<AlbumForm />} />
  </Routes>
</BrowserRouter>
    
  
  );
}

export default App;
/*  <div className='App'>
      <Navigation />
      <AlbumList />
    </div> */