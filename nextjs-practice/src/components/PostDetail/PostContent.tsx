import { memo } from "react";

import Typography from "components/common/Typography";
import Image from "next/image";

type Props = {
  title: string;
  content: string;
  image: string;
};

const PostContent = ({ title, content, image }: Props) => (
  <div>
    <div className="bg-white-half w-full">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <Typography
          variant="h2"
          className="text-5xl font-bold font-serif text-primary tracking-wide"
        >
          {title}
        </Typography>
        <div className="w-full my-10">
          <Image src={image} alt="article image" width={700} height={400} />
        </div>
      </div>
    </div>
    <div className="max-w-3xl mx-auto text-center p-6 flex flex-col items-center">
      <div className="leading-relaxed text-xl text-left text-gray-800">
        {content}
      </div>
    </div>
  </div>
);

export default memo(PostContent);
