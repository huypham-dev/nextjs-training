import Typography from "components/common/Typography";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { Comment } from "types";
import CommentItem from "./Comment";

type Props = {
  comments: Comment[];
};

const Comments = ({ comments = [] }: Props) =>
  comments.length ? (
    <div>
      {comments.map(({ id, user, comment }) => (
        <div key={id}>
          <CommentItem user={user} comment={comment} />
        </div>
      ))}
    </div>
  ) : (
    <Typography>No comment for this article</Typography>
  );

export default memo(Comments, isEqual);
