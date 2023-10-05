import { useState, useEffect } from "react";
import fallback from "./doggydog.png";
import { useNavigate, useParams } from "react-router-dom";


const DogInfo = () => {

    const navigate = useNavigate();

    const params = useParams();
    const [infoComponent, setInfoComponent] = useState();
    
    useEffect (()=> {setDog()}, []);
    useEffect(() => {}, [infoComponent])

    const setDog = () => {
        if ('chipnumber' in params) {
            fetchDogData(params.chipnumber);
        } else {
            setInfoComponent(ErrorComponent('No dog selected'));
        }
        
    }

    const ErrorComponent = (error) => {
        return (
            <div>
                <div>{error}</div>
                <button onClick={() => {navigate('/doglist')}}>Dog list</button>
            </div>
        )
    }


    const fetchDogData = async (chipnumber) => {
        
        const apiURL = 'https://api.jsonbin.io/v3/b/651bd5c054105e766fbd1056'
        const accessKey ='$2a$10$xkrw9EmCeBEQhtB.7ID2GeWEc/z.PKgRQ1dt5Xb/pVBKBwiGwGWKu'
        
        try{
            const response = await fetch (apiURL, {
                headers: {
                    'X-Access-Key' : accessKey,
                    'X-JSON-Path' : `$..[?(@.chipNumber=='${chipnumber}')]`,
                }
            });
            const dogsData = await response.json();
        
            const dogs = dogsData.record;
            const dog = dogs[0];
            setInfoComponent(InfoComponent(dog));
        } catch (error) {
            setInfoComponent(ErrorComponent("Couldn't find any dog with chipnumber: " + chipnumber));
        }
    }
    

    const InfoComponent = (dog) => {
        let present = "";

        if (dog.present) {
            present = 'Present';
        } else {
            present = 'Absent'
        }

        return (
            <div>
                <h2>
                    {dog.name}
                </h2>
                <h3>
                    {present}
                </h3>
                <h3>
                    Sex: {dog.sex}
                </h3>
                <h3>
                    Breed: {dog.breed}
                </h3>
                
                <h3>
                    Age: {dog.age}
                </h3>
                <h3>
                    Chip number: {dog.chipNumber}
                </h3>
                <h3>
                    Owner: {dog.owner.name} {dog.owner.lastName}
                </h3>
                <h3>
                    Phone: {dog.owner.phoneNumber}
                </h3>
                <img className="dog_image"
                        src={dog.img}
                        onError={(e) => (e.currentTarget.src = fallback)} />
            </div>
        )
    }

    

    return (
        <div>
            {infoComponent}
        </div>
    )
}
export default DogInfo;