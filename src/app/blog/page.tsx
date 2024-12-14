import { BlogList } from "@/components/components_blog-list";

const samplePosts = [
  {
    id: "1",
    title: "Getting Started with shadcn/ui",
    excerpt:
      "Learn how to quickly set up and use shadcn/ui components in your Next.js project.",
    author: {
      name: "John Doe",
      avatar:
        "https://file.raovatlamdong.vn/images/unnamed.png?height=40&width=40",
    },
    date: new Date("2023-06-01"),
    imageUrl:
      "https://file.raovatlamdong.vn/images/unnamed.png?height=300&width=400",
    slug: "getting-started-with-shadcn-ui",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    excerpt:
      "Explore advanced React patterns to write more efficient and maintainable code.",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: new Date("2023-06-15"),
    imageUrl:
      "https://file.raovatlamdong.vn/images/unnamed.png?height=300&width=400",
    slug: "advanced-react-patterns",
  },
  {
    id: "3",
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn best practices for creating web applications that are accessible to all users.",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: new Date("2023-07-01"),
    imageUrl: "/placeholder.svg?height=300&width=400",
    slug: "building-accessible-web-applications",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <BlogList posts={samplePosts} />
    </div>
  );
}
