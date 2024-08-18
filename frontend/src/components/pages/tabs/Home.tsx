import axios from "axios";
import Post from "./Post";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

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
    <ScrollArea className="w-[530px] max-h-svh  justify-center flex  ">
      {posts.map((post, i) => (
        <Post {...post} key={i} />
      ))}
    </ScrollArea>
  );
};

export default Home;
