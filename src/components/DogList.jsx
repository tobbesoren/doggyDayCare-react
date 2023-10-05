import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './DogList.css';
import fallback from "./doggydog.png";



const DogList = () => {
    
    const [dogComponents, setDogComponents] = useState([]);
   
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
        const sortedDogs = sortDogs(dogs);

        createDogList(sortedDogs);
    }
    
    const createDogList = (dogs) => {
        
        let dogList = [];

        dogs.forEach(dog => {
            const newDog = Dog(dog);
            dogList.push(newDog);
        })
        
        setDogComponents(dogList);
        
    }


    const sortDogs = (dogs) => {
        const sortedDogs = dogs
        .filter(dog => dog.present)
        .sort((a, b) => {return a.name.localeCompare(b.name)})
        .concat(dogs
            .filter(dog => !dog.present)
            .sort((a, b) => {return a.name.localeCompare(b.name)})
            );

        return sortedDogs;
    }

    const Dog = (dog) => {
        const path = "../doginfo/" + dog.chipNumber;
        let present = '';
        if (dog.present) {
            present = 'Present';
        } else {
            present = 'Absent';
        }
        return (
            <Link to={path} className="dog" key={dog.chipNumber} >
                <img className="dog_image"
                    src={dog.img}
                    onError={(e) => (e.currentTarget.src = fallback)} />
                <div className='dog_text_block'>
                    <div>
                        <h2 className="dog_text">{dog.name}</h2>
                        <h4 className="dog_text">{present}</h4>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <div id="dogGrid">
            {dogComponents}
        </div>
    )
}








export default DogList;