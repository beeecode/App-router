import Image from 'next/image';
import { Post } from '@/app/data/posts';

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="post-card">
            <div className="post-card-image-wrapper">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="post-card-image"
                    priority={post.id === 1}
                />
                <div className="post-card-category">{post.category}</div>
            </div>

            <div className="post-card-content">
                <h2 className="post-card-title">{post.title}</h2>
                <p className="post-card-description">{post.description}</p>

                <div className="post-card-meta">
                    <span className="post-card-date">{post.date}</span>
                    <span className="post-card-divider">•</span>
                    <span className="post-card-readtime">{post.readTime}</span>
                </div>

                <button className="post-card-button">
                    Read Article
                    <svg className="post-card-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </article>
    );
}
