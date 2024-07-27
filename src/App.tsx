import React, {useState} from 'react';
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import GamesPage from "./pages/GamesPage";
import Callout from "./components/Callout";
import ReadmePage from "./pages/ReadmePage";

function App() {
    const [showCallout, setShowCallout] = useState(true);
    const callout_content = (
        <Callout>
            <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                <a href="https://www.linkedin.com/in/barbosathiagodev/" target={"_blank"} rel={"noreferrer"}>
                    i'm currently #opentowork
                </a>
            </div>
            <button onClick={() => setShowCallout(false)} className="h-full ml-auto px-4 text-gray-11 hover:text-[#EFF7FFCC] focus:text-[#EFF7FFCC] active:text-gray-12 hover:bg-highlight-1 active:bg-highlight-2 focus:bg-highlight-1 focus:outline-none">esc</button>
        </Callout>
    )
    return (
        <div>
            {showCallout && callout_content}
            <Routes>
                <Route path="/" element={<ContactPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/games" element={<GamesPage/>}/>
                <Route path="/readme" element={<ReadmePage/>}/>
            </Routes>
            <Header/>
        </div>
    )
}

export default App;
