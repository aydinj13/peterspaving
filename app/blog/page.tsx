import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Post } from '@/types/types';

const getPosts = (): Post[] => {
  const files = fs.readdirSync('posts');
  return files.map(file => {
    const filePath = path.join('posts', file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: file.replace(/\.md$/, ''),
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
  });
};

const Home = () => {
  const posts = getPosts();

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;