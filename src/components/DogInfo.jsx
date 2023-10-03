import { useState, useEffect } from "react";
import fallback from "./doggydog.png";


const DogInfo = (props) => {

    const [infoComponent, setInfoComponent] = useState();
    useEffect (()=> {
        setInfoComponent(InfoComponent(props.currentDog));
      }, []);

    const InfoComponent = (dog) => {

        return (
            <div>
                <h2>
                    {dog.name}
                </h2>
                <h3>
                    {dog.sex}
                </h3>
                <h3>
                    {dog.breed}
                </h3>
                <h3>
                    {dog.present}
                </h3>
                <h3>
                    {dog.age}
                </h3>
                <h3>
                    {dog.chipNumber}
                </h3>
                <h3>
                    {dog.owner.name} {dog.owner.lastName}
                </h3>
                <h3>
                    {dog.owner.phoneNumber}
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