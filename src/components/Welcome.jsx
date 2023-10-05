import './Welcome.css'
import doggydaycare from "./doggydaycare.png";
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div id="welcome">
            <img id="doggydaycare"
            src={doggydaycare}
            />
            <div id="welcome_content">
                <h2>Doggy DayCare</h2>
                <p>Welcome to Doggy DayCare!</p>
                <button onClick={() => {navigate('/doglist')}}>See all dogs</button>
            </div>
        </div>
    )
}

export default Welcome;