import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";


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
            <Helmet><title>Manage My Post</title></Helmet>

            manage my post{myPost.length}
            update: hocce
            
        </div>
    );
};

export default MyPost;