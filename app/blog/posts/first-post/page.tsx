// app/posts/[id]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next';
import { Post } from '@/types/types';

type PostProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPost(params.id);
  return { title: post.title };
}

export async function generateStaticParams() {
  const files = fs.readdirSync('posts');
  return files.map(file => ({
    params: { id: file.replace(/\.md$/, '') },
  }));
}

async function getPost(id: string): Promise<Post> {
  const filePath = path.join('posts', `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };
}

const PostPage = async ({ params }: PostProps) => {
  const postData = await getPost(params.id);

  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
    </article>
  );
};

export default PostPage;