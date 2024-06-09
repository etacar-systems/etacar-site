import React from 'react';
import './App.scss';
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage";
import ServicesPage from '../components/ServicesPage/services-page';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            {/* <HomePage/> */}
            <ServicesPage/>
        </div>
    );
}

export default App;
