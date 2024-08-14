import VFlex from "@/components/layout/VFlex";
import { PostModel } from "@/model/PostModel";

export default function Post({ body, date, author, base64_image }: PostModel) {
  return (
    <VFlex className="w-full bg-[#cdb4db] rounded-md justify-between p-4">
      <div className="text-left">
        <p className="text-xl font-bold">{body}</p>
      </div>
      {base64_image && (
        <div className="text-center my-4">
          <img src={base64_image} alt="Post Image" className="max-w-full h-[400px]" />
        </div>
      )}
      <div className="text-sm text-right text-gray-600">
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </VFlex>
  );
}
