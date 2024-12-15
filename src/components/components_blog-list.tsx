import { BlogCard } from "./components_blog-card";

interface BlogPost {
  blogId: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.blogId} {...post} />
      ))}
    </div>
  );
}
