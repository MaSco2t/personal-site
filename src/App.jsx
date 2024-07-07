import {useState, useEffect} from "react"

import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import WorkExperience from "./components/WorkExperience.jsx"
import ParticlesComponent from "./components/Particles.jsx"

function App() {
    
    const [active,setActive] = useState([1,0,0])

    function setActiveHelper(num){
        var arr = [0,0,0]
        arr[num]=1;
        setActive(arr)
    }

    return(
        <div className="app">
            <div className="content">
                <Navbar setActiveHelper={setActiveHelper}/>
                {active[0]==1 && <About/>}
                {active[1]==1 && <Projects/>}
                {active[2]==1 && <WorkExperience/>}
            </div>
            <ParticlesComponent id="particles"></ParticlesComponent>
        </div>
    )
}

export default App
