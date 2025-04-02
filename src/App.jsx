import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import "./themes.css";
import { DeviceProvider } from './context/DeviceContext';

const themeContext = createContext();

// functional Arrow component
const App = () => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    // Apply the selected theme to the body or root element
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  // console.log(theme);

  return (
    <DeviceProvider>
      <BrowserRouter>
        <div className={`relative z-0 ${theme}`}>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar theme={theme} handleThemeChange={handleThemeChange} />
          </div>

          {/* added routes */}
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <themeContext.Provider value={{ theme, handleThemeChange }}>
                  <About />
                </themeContext.Provider>
                <Experience theme={theme} />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            } />
            <Route path="/about" element={
              <themeContext.Provider value={{ theme, handleThemeChange }}>
                <About />
              </themeContext.Provider>
            } />
            <Route path="/work" element={<Works />} />
            <Route path="/contact" element={
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            } />
          </Routes>
          
        </div>
      </BrowserRouter>
    </DeviceProvider>
  );
};

export default App;
export { themeContext };