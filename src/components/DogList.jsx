import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import DogInfo from '../components/doginfo'
import './DogList.css';
import fallback from "./doggydog.png";



const DogList = (params) => {

    const [dogComponents, setDogComponents] = useState([]);
    
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
        //let routesList = [];

        dogs.forEach(dog => {
            const newDog = Dog(dog);
            //const newRoute = DogRoute(dog);
            //console.log(newRoute);
            //routesList.push(newRoute);
            dogList.push(newDog);
        })

        setDogComponents(dogList);
        //params.setRoutes(routesList);
        //console.log(params.routesList);
    }

    

    return (
        <div id="dogGrid">
            {dogComponents}
        </div>
    )
}

// const DogRoute = (dog) => {
//     const path = "../doginfo/" + dog.chipNumber
//     return (
//         <Route key={path} path={path} element={<DogInfo/>} />
       
//     )
// }


const Dog = (dog) => {
    const path = "../doginfo/" + dog.chipNumber
    return (
        <Link to={path} className="dog" key={dog.chipNumber}>
            <h3 >{dog.name}</h3>
            <img className="dog_image"
                src={dog.img} 
                onError={(e) => (e.currentTarget.src = fallback)}/>
        </Link>
    )
}


export default DogList;