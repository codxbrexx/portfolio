import React from "react";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

import wave from "./assets/wave.jpg";
import wave1 from "./assets/wave1.jpg";

function AnimatedRoutes() {
  const element = useRoutes([
    { path: "/", element: <Home /> }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <div className="bg-[var(--background)] max-w-screen min-h-screen text-slate-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <CustomCursor />
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
