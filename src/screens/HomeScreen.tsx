import HFlex from "@/components/layout/HFlex";
import VFlex from "@/components/layout/VFlex";
import Text from "@/components/typography/Text";

import Button from "@/components/input/Button";
import { db } from "@/lib/firebase";
import { PostModel } from "@/model/PostModel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostColumns from "./PostColumns";

/*
Get a promise of a list of posts
Wait for them to resolve
Iterate through all of them and split into three columns
Render each column
*/

export default function HomeScreen() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    db.collection("Messages")
      .get()
      .then((messages) => messages.docs.map((doc) => doc.data() as PostModel))
      .then((posts) => setPosts(posts));
  }, []); 

  const handleAddPostClick = () => {
    navigate("/submit");
  }

  return (
    <VFlex className="w-screen p-4 bg-[#bde0fe] overflow-y-auto gap-8">
      <HFlex className="relative w-full h-24 bg-[#a2d2ff] rounded-md justify-center items-center">
        <Button className="absolute -bottom-5 left-10" onClick={handleAddPostClick}>Add Post</Button>
        <Text size={"displayM"}>Happy Birthday, Cindy!</Text>
      </HFlex>
      <PostColumns postsList={posts} />
    </VFlex>
  );
}
