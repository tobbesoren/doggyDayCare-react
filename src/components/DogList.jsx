import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import './DogList.css';
import fallback from "./doggydog.png";



const DogList = (props) => {
    
    const [dogComponents, setDogComponents] = useState([]);
    //const params = useParams();
    
    useEffect (()=> {
        fetchData();
      }, []);

    useEffect (()=> {}, [dogComponents]);

    const fetchData = async () => {
        
        const apiURL = 'https://api.jsonbin.io/v3/b/651bd5c054105e766fbd1056'
        const accessKey ='$2a$10$xkrw9EmCeBEQhtB.7ID2GeWEc/z.PKgRQ1dt5Xb/pVBKBwiGwGWKu'
    
        const response = await fetch(apiURL, {
            headers: {
                'X-Access-Key' : accessKey,
            }
        });
        const dogsData = await response.json();
        const dogs = dogsData.record;

        createDogList(dogs);
    }
    
    const createDogList = (dogs) => {
        
        let dogList = [];

        dogs.forEach(dog => {
            const newDog = Dog(dog);
            dogList.push(newDog);
        })

        setDogComponents(dogList);
        
    }

    const Dog = (dog) => {
        const path = "../doginfo/" + dog.chipNumber;
        return (
            <Link to={path} className="dog" key={dog.chipNumber} onClick={() => setDog(dog)}>
                <h3>{dog.name}</h3>
                <img className="dog_image"
                    src={dog.img}
                    onError={(e) => (e.currentTarget.src = fallback)} />
            </Link>
        );
    }

    const setDog = (dog) => {
        //console.log(dog.chipNumber);
        props.setDog(dog);
    }

    return (
        <div id="dogGrid">
            {dogComponents}
        </div>
    )
}








export default DogList;