import axios from "axios";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    getUser();

    console.log("User", user);
    // eslint-disable-next-line
  }, []);

  return <div>Profile</div>;
};

export default Profile;
