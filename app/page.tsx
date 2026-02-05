import Image from "next/image";
import PostCard from './components/PostCard';
import { posts } from './data/posts';

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="header-title">Stories Worth Reading</h1>
        <p className="header-subtitle">
          Handpicked articles on tech, design & the art of building things that matter
        </p>
      </header>

      <section className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
