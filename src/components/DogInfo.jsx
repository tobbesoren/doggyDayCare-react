import fallback from "./doggydog.png";
const DogInfo = (props) => {
    return (
        <div>
            <h2>
                {props.currentDog.name}
            </h2>
            <h3>
                {props.currentDog.sex}
            </h3>
            <h3>
                {props.currentDog.breed}
            </h3>
            <h3>
                {props.currentDog.present}
            </h3>
            <h3>
                {props.currentDog.age}
            </h3>
            <h3>
                {props.currentDog.chipNumber}
            </h3>
            <h3>
                {props.currentDog.owner.name} {props.currentDog.owner.lastName}
            </h3>
            <h3>
                {props.currentDog.owner.phoneNumber}
            </h3>
            <img className="dog_image"
                    src={props.currentDog.img}
                    onError={(e) => (e.currentTarget.src = fallback)} />
           
        </div>
    )
}
export default DogInfo;