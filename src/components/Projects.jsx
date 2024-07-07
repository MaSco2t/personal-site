import "../styles/projects.css"
function Projects(){
    return(
        <div className="projects">
            <div className="project">
                    <p>My Workout</p>
                    <p>A website for people to log and track their workouts.</p>
                    <p>Users can add workouts, view their previous workouts, edit their previous workouts, and delete workouts.</p>
                    <p>The site has user authentication and account creation features.</p>
                    <p>Used: React, Express, MySQL, CSS</p>
                    <div>
                        <a href="https://www.youtube.com/watch?v=xtrAAvgbkp0" target="_blank"><button className="site">Video Demo</button></a>
                        <a href="https://github.com/MaSco2t/my-workout" target="_blank"><button className="github">Github</button></a>
                    </div>
            </div>
            <div className="project">
                    <p>Dining Hall Web Scraper</p>
                    <p>A Python web scraper that gets my college dining hall's meal options for the day and emails them to me.</p>
                    <p>Used: Python, Selenium</p>
                    <div>
                        <a href="https://www.youtube.com/watch?v=sIH4yZ7Vtxs" target="_blank"><button className="site">Video Demo</button></a>
                        <a href="https://github.com/MaSco2t/dining-hall-web-scraper" target="_blank"><button className="github">Github</button></a>
                    </div>
            </div>
        </div>
    )
}
export default Projects;