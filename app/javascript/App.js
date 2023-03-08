import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './components/Home';

function App() {
    return (
        <div class='greetDiv'>
            <div className='routes'>
                <Link to="/greeting" className='link'>View Greetings</Link>
                <Link to="/" className='link'>Home </Link>
            </div>
            <Routes className='center'>
                <Route path="/" element={<Home />} />
                <Route path="/greeting" element={<Greeting />} />
            </Routes>
        </div>
    )
}

export default App;