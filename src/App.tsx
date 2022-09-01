import React from 'react';
import { Routes, Route } from "react-router-dom"
import AboutScreen from './pages/Abouts';


function App() {
  return (
    <div className="App">
         <Routes>
               <Route path='/about' element={<AboutScreen/>}/>
         </Routes>
    </div>
  );
}

export default App;
