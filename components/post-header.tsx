import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import type Author from '../interfaces/author';

type Props = {
  title: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
