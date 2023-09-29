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
        
        const apiURL = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683"
    
        const response = await fetch(apiURL);
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
        console.log(dog.chipNumber);
        props.setDog(dog);
    }

    return (
        <div id="dogGrid">
            {dogComponents}
        </div>
    )
}








export default DogList;