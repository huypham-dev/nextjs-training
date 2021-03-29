import { memo } from "react";
import Typography from "components/common/Typography";

type Props = {
  user: string;
  comment: string;
};

const Comment = ({ user, comment }: Props) => (
  <div className="flex items-center pt-4">
    <div className="w-10 h-10 mb-4 mr-2">
      <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
        <img
          src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
          alt="avatar"
          className="object-cover object-center w-full h-full visible group-hover:hidden"
        />
      </div>
    </div>
    <div>
      <Typography className="font-bold italic">{user}</Typography>
      <Typography className="leading-loose text-gray-dark">
        {comment}
      </Typography>
    </div>
  </div>
);

export default memo(Comment);
