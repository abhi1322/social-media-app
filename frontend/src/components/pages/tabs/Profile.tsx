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
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    username,
    followers,
    following,
    firstname,
    lastname,
    posts,
    profilePicture,
  } = user;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="-z-10 absolute top-0 right-0 w-screen bg-blue-500 h-40"></div>
      <div className="mt-20 flex items-center flex-col">
        <img
          src={profilePicture}
          className="rounded-full border-4"
          alt="profile img"
        />
        <h4 className="text-2xl font-semibold">@{username}</h4>
        <p className="text-sm text-neutral-500/80">
          {firstname} {lastname}
        </p>
        {/* <div className="w-screen justify-center pb-8 items-center border-b flex gap-16 mt-8">
          <div className="text-sm text-neutral-500 flex flex-col font-semibold items-center">
            <h6>Followers</h6>
            <p className="text-neutral-400/80">{followers.length}</p>
          </div>
          <div className="text-sm text-neutral-500 flex flex-col font-semibold items-center">
            <h6>Following</h6>
            <p className="text-neutral-400/80">{following.length}</p>
          </div>
        </div> */}
      </div>
      <div className="w-screen md:w-[480px] mb-16">
        <div className="mt-12">
          <h2 className="w-full text-center mb-2 text-xl font-semibold">
            Posts
          </h2>
          <div className="grid grid-cols-3 p-2 border-t">
            {posts.map((post) => (
              <a key={post._id}>
                <img
                  src={post.img_url}
                  className="h-[200px] w-full object-cover"
                  alt="post"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
