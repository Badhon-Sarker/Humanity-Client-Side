import { useParams } from "react-router-dom";


const BeVolunteer = () => {

    const {id} = useParams()
    return (
        <div>
            be volunters of {id}
            
        </div>
    );
};

export default BeVolunteer;