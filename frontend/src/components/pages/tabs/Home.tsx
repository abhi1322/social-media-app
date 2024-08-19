import axios from "axios";
import Post from "./Post";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import Logo from "@/assets/Circle-light-mode.svg";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const userId = localStorage.getItem("userId");

    const response = await axios.get(
      `http://localhost:8080/${userId}/posts/all`
    );
    setPosts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getPosts();
    console.log("posts", posts);
  }, []);

  return (
    <>
      <div className="md:hidden w-full flex justify-center items-center gap-2 pt-2  border-b">
        <img className="w-10" src={Logo} alt="logo" />
        <h1 className="font-semibold">Circle</h1>
      </div>
      <ScrollArea
        hidden
        className="  max-h-svh mb-16 md:mb-0 justify-center flex  "
      >
        {posts.map((post, i) => (
          <Post {...post} key={i} />
        ))}
      </ScrollArea>
    </>
  );
};

export default Home;
