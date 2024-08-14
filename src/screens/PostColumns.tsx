import HFlex from "@/components/layout/HFlex";
import VFlex from "@/components/layout/VFlex";
import { PostModel } from "@/model/PostModel";
import Post from "./Post";

function estimateLength(s: string, base64_image: string) {
  // Estimates the number of lines a string will take up
  const chars_per_line = 40;
  const num_newlines = s.split("\n").length - 1;

  let image_height_estimate = 0;

  if (base64_image) {
    image_height_estimate = 100/30;
  }
  console.log(image_height_estimate * 30)
  return s.length / chars_per_line + num_newlines + image_height_estimate;
}

function splitIntoColumns(postsList: PostModel[]) {
  let col1: any = [];
  let col2: any = [];
  let col3: any = [];

  let col1_height = 0;
  let col2_height = 0;
  let col3_height = 0;

  postsList.map((post: PostModel) => {
    // Estimate the height of the component using by combining the length of the message with the number of newlines
    const postHeight = estimateLength(post.body, post.base64_image);
    console.log(postHeight);
    const minHeight = Math.min(col1_height, col2_height, col3_height);

    // const postComponent = <Post message={post.body} date={post.date} author={post.author} />;
    if (col1_height == minHeight) {
      col1.push(post);
      col1_height += postHeight;
    } else if (col2_height == minHeight) {
      col2.push(post);
      col2_height += postHeight;
    } else {
      col3.push(post);
      col3_height += postHeight;
    }
  });

  return { col1, col2, col3 };
}

export default function PostColumns({ postsList }: { postsList: PostModel[] }) {
  const { col1, col2, col3 } = splitIntoColumns(postsList);

  return (
    <HFlex className="w-full h-full gap-4">
      <VFlex className="flex-1 gap-4">
        {col1.map((post: PostModel, ind: number) => (
          <Post
            key={ind}
            body={post.body}
            date={post.date}
            author={post.author}
            base64_image={post.base64_image}
          />
        ))}
      </VFlex>
      <VFlex className="flex-1 gap-4">
        {col2.map((post: PostModel, ind: number) => (
          <Post
            key={ind}
            body={post.body}
            date={post.date}
            author={post.author}
            base64_image={post.base64_image}
          />
        ))}
      </VFlex>
      <VFlex className="flex-1 gap-4">
        {col3.map((post: PostModel, ind: number) => (
          <Post
            key={ind}
            body={post.body}
            date={post.date}
            author={post.author}
            base64_image={post.base64_image}
          />
        ))}
      </VFlex>
    </HFlex>
  );
}
