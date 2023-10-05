import './Welcome.css'
import doggydaycare from "./doggydaycare.png";


const Welcome = () => {
    
    return (
        <div id="welcome">
            <img
            src={doggydaycare}
            />
            <div id="welcome_content">
                <h2>Doggy DayCare</h2>
                <p>Welcome to Doggy DayCare!</p>
            </div>
        </div>
    )
}

export default Welcome;