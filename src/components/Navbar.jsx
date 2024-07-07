import "../styles/navbar.css"
function Navbar(props){
    return(
        <nav>
            <h1>Marcus Scott</h1>
            <li>
                <ul onClick={()=>props.setActiveHelper(0)}>About</ul>
                <ul onClick={()=>props.setActiveHelper(1)}>Projects</ul>
                <ul onClick={()=>props.setActiveHelper(2)}>Work Experience</ul>
            </li>
        </nav>
    );
}

export default Navbar;