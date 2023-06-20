import Link from 'next/link';

const Post = () => {
  return (
    <div>
      <h1>글 목록</h1>
      <ul>
        <li>
          <Link href='/post/1'>
            포스트 1
          </Link>
        </li>
        <li>
          <Link href='/post/2'>
            포스트 2
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Post;
