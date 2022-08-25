import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import CartModal from './Components/CartModal';
import AboutUs from './Pages/AboutUs';
import Recipes from './Pages/Recipes';
import Footer from './Components/Footer';

function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isBottom, setIsBottom] = useState(false);
    console.log(isBottom, 'is bot');
    const scrollIsAtBottom = true;

    return (
        <div
            style={{
                height: '100vh',
            }}
        >
            <BrowserRouter>
                <Navbar setShowSidebar={setShowSidebar} />
                <div
                    className="ui attached pushable"
                    style={{
                        height: scrollIsAtBottom ? 'calc(100vh - 150px)' : 'calc(100vh - 90px)',
                    }}
                >
                    <CartModal setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
                    <Routes>
                        <Route path="/" element={<Home setIsBottom={setIsBottom} />} />
                        <Route path="/aboutUs" element={<AboutUs setIsBottom={setIsBottom} />} />
                        <Route path="/recipes" element={<Recipes setIsBottom={setIsBottom} />} />
                    </Routes>
                </div>
                {scrollIsAtBottom && <Footer />}
            </BrowserRouter>
        </div>
    );
}

export default App;
