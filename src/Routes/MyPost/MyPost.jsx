import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const MyPost = () => {

    const [myPost, setMyPost] = useState([])

    const {user} = useContext(AuthContext)
    

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SITE}/myPost/${user.email}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setMyPost(data);
          });
      }, []);

    return (
        <div>

            manage my post{myPost.length}
            update: hocce
            
        </div>
    );
};

export default MyPost;