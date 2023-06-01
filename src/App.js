import React from 'react'
import './App.css'
import Navbar from './components/AppHeader/Navbar';
import PageContent from './components/PageContent/PageContent';
import Sidebar from './components/SideBar/Sidebar';
import Home from './pages/home/Home';
const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
}

export default App