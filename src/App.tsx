import React from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
     <body className="flex flex-row h-screen">
        <aside className="h-screen flex">
          <Navbar />
        </aside>
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
          <header className="w-full items-center bg-white">
            <Header />
          </header>
          <div className="w-full h-full overflow-x-hidden flex flex-col">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
