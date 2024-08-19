import axios from "axios";
import { useState } from "react";

const Profile = () => {
  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState({});

  const getUser = async () => {
    await axios
      .get(`http://localhost:8080/users/u/${userId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div>Profile</div>;
};

export default Profile;
