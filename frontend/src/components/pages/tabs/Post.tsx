import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import axios from "axios";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

const Post = ({
  _id,
  caption,
  img_url,
  likes,
  comments,
  createdAt,
  userID,
}: {
  _id: string;
  caption: string;
  img_url: string;
  likes: Array<string>;
  createdAt: Date;
  userID: {
    profilePicture: string;
    username: string;
  };
  comments: Array<object>;
}) => {

  const getTimeAgo = (time: Date) => {
    const now = new Date();
    const createdTime = new Date(time);
    const diffInMilliseconds = now.getTime() - createdTime.getTime();

    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInSeconds < 60) {
      return `${diffInSeconds}s`; // Returns time in seconds
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m`; // Returns time in minutes
    } else if (diffInHours < 24) {
      return `${diffInHours}h`; // Returns time in hours
    } else {
      return `${diffInDays}d`; // Returns time in days
    }
  };

  const loggedUser = localStorage.getItem("userId");



  const handleLike = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/${loggedUser}/posts/p/${_id}/l`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-b">
      <Card className="w-full md:w-[460px]  border-none shadow-none">
        <CardHeader className="px-1 flex items-center ml-4 gap-4 flex-row">
          <img
            className="w-12 h-12 object-cover border rounded-full overflow-hidden"
            src={userID.profilePicture}
            alt="profile-image"
            loading="lazy"
          />
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-sm">{userID.username}</h2>

            <p className="text-xs text-neutral-400">
              . {getTimeAgo(createdAt)}
            </p>
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <img
            className="w-[100%] md:w-[430px] object-cover h-[580px]"
            src={img_url}
            alt="post-img"
          />
        </CardContent>
        <CardFooter className="px-0 flex-col ml-4 items-start gap-4">
          <div className="flex gap-4">
            <button className="text-sm text-neutral-700 flex gap-1 items-center">
              {likes.includes(loggedUser) ? (
                <button onClick={handleLike}>
                  <Heart fill="#ef4444" className="text-red-500" />
                </button>
              ) : (
                <button onClick={handleLike}>
                  <Heart />
                </button>
              )}
              <span className="ml-1">{likes.length} Like</span>
            </button>
            <button className="text-sm text-gray-600 flex gap-1 items-center">
              <MessageCircle />
              <span className="ml-1">{comments.length} Commets</span>
            </button>
          </div>
          <CardDescription>{caption}</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Post;
