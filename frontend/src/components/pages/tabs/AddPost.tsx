import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { storage } from "@/configs/firebase.config";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import toast from "react-hot-toast";
import Post from "./Post";
import { Heart, MessageCircle } from "lucide-react";

const AddPost = () => {
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");

  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [previewImg, setPreviewImg] = useState("");
  const [caption, setCaption] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const imageUrl = URL.createObjectURL(file);
    setPreviewImg(imageUrl);
  };

  const handleSubmit = async () => {
    if (!selectedFile || !username) {
      toast.error("No file selected or username missing");
      return;
    }

    const storageRef = ref(storage, `posts/${username}/${selectedFile.name}`);

    try {
      const uploadTaskSnapshot = await uploadBytesResumable(
        storageRef,
        selectedFile
      );

      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
      console.log("File available at", downloadURL);

      const data = {
        caption: caption,
        img_url: downloadURL, // Directly using the download URL here
      };

      const newPost = await axios.post(
        `http://localhost:8080/${userId}/posts/p/create`,
        data
      );

      if (newPost.status !== 201) {
        toast.error("Failed to create post");
        return console.log("Post not created");
      }

      toast.success("Post created");
    } catch (error) {
      console.log(error);
      toast.error("Post not created");
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-2  px-16 py-12">
      <div>
        <h4 className="text-2xl font-semibold">Add Post, {username}</h4>
        <p className="text-sm text-neutral-400">
          To add post in your account, please fill this form bellow
        </p>
        <div className="mt-8">
          <Card className="w-[600px]">
            <CardHeader>
              <CardTitle>Add post</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="post">Photo*</Label>
                  <Input
                    id="post"
                    type="file"
                    className="w-full"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Caption *</Label>
                  <Textarea
                    id="description"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                    className="min-h-32"
                    onChange={(e) => {
                      setCaption(e.target.value);
                      console.log(e.target.value);
                    }}
                    value={caption}
                    placeholder="add caption ..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Create Post
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div>
        <h6 className="font-semibold text-lg mb-8">Post preview</h6>

        <div>
          {selectedFile ? (
            <img
              className="h-[580px] w-[440px] object-cover"
              src={URL.createObjectURL(selectedFile)}
              alt="post image"
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYS7KEXYFAwqdRCW81e4DSR_nSLYSFStx1Q&s"
              alt="default image"
              className="h-[580px] w-[440px] object-cover"
            />
          )}
          <div className="flex gap-2 mt-4">
            <Heart />
            <p>0 Like</p>
            <MessageCircle className="ml-4" />
            <p>0 Comment</p>
          </div>
          <p className="mt-4 text-neutral-600">
            {caption !== "" ? `${caption}` : "Add caption"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
