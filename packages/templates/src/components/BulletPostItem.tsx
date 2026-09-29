import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";
import { PostsCashType } from "../types";
import { postLinkGenerator } from "../utils";

const BulletPost = ({ post }: { post: PostsCashType }) => {
  const postLink = postLinkGenerator(post._id, post.title);
  return (
    <li className="group flex cursor-pointer items-start gap-2 rounded-xl border-2 border-dotted border-gray-400 p-2 hover:border-solid hover:border-gray-900">
      <div className="h-7 w-7 shrink-0">
        <FaCircleDot
          className="h-full w-full text-indigo-700"
          size={28}
          data-testid="link-icon"
          color="#4338CA"
          aria-label="Bullet icon"
        />
      </div>
      <Link
        className="line-clamp-2 font-semibold group-hover:text-indigo-600"
        href={postLink}
        title={post.title}
        data-testid="link"
      >
        {post.title}
      </Link>
    </li>
  );
};

export default BulletPost;
