import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageCircle } from "lucide-react";

const Post = ({ caption, img_url, likes, comments, createdAt }) => {
  
  return (
    <div className="border-b">
      <Card className="w-[530px] border-none shadow-none">
        <CardHeader className="flex items-center gap-4 flex-row">
          <img
            className="w-12 h-12 rounded-full"
            src="https://randomuser.me/api/portraits/men/42.jpg"
            alt="profile-image"
          />
          <div>
            <h2 className="font-semibold text-sm">abhishek</h2>
            <p className="text-xs text-neutral-500">Posted on 2022-12-12</p>
          </div>
        </CardHeader>
        <CardContent>
          <img
            className="w-full object-cover h-[580px]"
            src={img_url}
            alt="post-img"
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <div className="flex gap-4">
            <button className="text-sm text-neutral-700 flex gap-1 items-center">
              <Heart />
              <span className="ml-1">{likes} Like</span>
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
