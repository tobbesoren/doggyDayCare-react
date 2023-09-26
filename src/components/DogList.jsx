import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './DogList.css'
import fallback from "./doggydog.png"



const DogList = () => {

    const [dogComponents, setDogComponents] = useState([]);

    useEffect (()=> {
        console.log('useEffect []')
        fetchData();
      }, []);

      useEffect (()=> {
        console.log('useEffect [data]')
      }, [dogComponents]);

      const fetchData = async () => {
        const apiURL = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683"
    
        const response = await fetch(apiURL);
        const dogsData = await response.json();
        const dogs = dogsData.record;

        createDogList(dogs);
    
        //console.log("Dogs:", dogs);
    }
    
    const createDogList = (dogs) => {
        
        let dogList = [];

        dogs.forEach(dog => {
            const newDog = Dog(dog);
            //console.log(newDog);
            dogList.push(newDog);
        })
        setDogComponents(dogList);
        //console.log(dogs);
    }

    return (
        <div id="dogGrid">
            {dogComponents}
        </div>
    )
}


const Dog = (dog) => {
    return (
        <div className="dog" key={dog.chipNumber}>
            <h3 >{dog.name}</h3>
            <img className="dog_image"
                src={dog.img} 
                onError={(e) => (e.currentTarget.src = fallback)}
            />
        </div>
    )
}



export default DogList;