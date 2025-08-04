import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog data (in a real app, this would come from a database or CMS)
const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn about the latest features and improvements in Next.js 15, including the new App Router and Server Components.",
    content: `
      <h2>Introduction to Next.js 15</h2>
      <p>Next.js 15 brings exciting new features that revolutionize how we build React applications. In this comprehensive guide, we'll explore the key improvements and how they can enhance your development workflow.</p>
      
      <h3>Key Features</h3>
      <p>The App Router introduces a new paradigm for routing in Next.js applications. It provides better performance, improved developer experience, and more intuitive file-based routing.</p>
      
      <h3>Server Components</h3>
      <p>Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving performance. This is particularly beneficial for data-heavy applications.</p>
      
      <h3>Improved Performance</h3>
      <p>Next.js 15 includes various performance optimizations, including better tree shaking, improved bundling, and enhanced caching mechanisms.</p>
      
      <h3>Migration Guide</h3>
      <p>If you're upgrading from an older version, the migration process is straightforward. Most existing applications can be upgraded with minimal changes.</p>
      
      <h3>Conclusion</h3>
      <p>Next.js 15 represents a significant step forward in React development. The new features and improvements make it easier than ever to build fast, scalable applications.</p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 2,
    title: "Mastering React Server Components",
    excerpt:
      "Deep dive into React Server Components and how they're changing the way we think about React applications.",
    content: `
      <h2>Understanding React Server Components</h2>
      <p>React Server Components represent a paradigm shift in how we build React applications. They allow us to render components on the server, providing better performance and user experience.</p>
      
      <h3>Benefits of Server Components</h3>
      <p>Server Components offer several advantages including reduced bundle size, better SEO, and improved initial page load times.</p>
      
      <h3>Implementation Patterns</h3>
      <p>Learn the best practices for implementing Server Components in your applications, including data fetching patterns and component composition.</p>
      
      <h3>Common Pitfalls</h3>
      <p>Avoid common mistakes when working with Server Components, such as trying to use client-side APIs or state management.</p>
      
      <h3>Future of React</h3>
      <p>Server Components are just the beginning. React continues to evolve with new features that make development more efficient and applications more performant.</p>
    `,
    author: "Jane Smith",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "React",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.</p>
      
      <h3>Responsive Design Principles</h3>
      <p>Creating responsive designs with Tailwind is intuitive and powerful. The framework provides responsive variants for every utility class.</p>
      
      <h3>Component Patterns</h3>
      <p>Learn how to create reusable component patterns while maintaining the flexibility that Tailwind provides.</p>
      
      <h3>Performance Optimization</h3>
      <p>Tailwind's purge feature ensures that only the CSS you use makes it to production, keeping your bundle size minimal.</p>
      
      <h3>Advanced Techniques</h3>
      <p>Explore advanced Tailwind techniques including custom utilities, component extraction, and theme customization.</p>
    `,
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "CSS",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 4,
    title: "TypeScript Best Practices for 2024",
    excerpt:
      "Discover the latest TypeScript best practices and patterns that will make your code more maintainable.",
    content: `
      <h2>TypeScript in 2024</h2>
      <p>TypeScript continues to evolve with new features and improvements. This guide covers the best practices for writing maintainable TypeScript code.</p>
      
      <h3>Type Safety</h3>
      <p>Learn how to leverage TypeScript's type system to catch errors at compile time and improve code reliability.</p>
      
      <h3>Advanced Types</h3>
      <p>Explore advanced TypeScript features like conditional types, mapped types, and template literal types.</p>
      
      <h3>Project Configuration</h3>
      <p>Set up your TypeScript projects for success with proper configuration and tooling.</p>
      
      <h3>Integration with React</h3>
      <p>Best practices for using TypeScript with React, including component typing and prop validation.</p>
          <h2>TypeScript in 2024</h2>
      <p>TypeScript continues to evolve with new features and improvements. This guide covers the best practices for writing maintainable TypeScript code.</p>
      
      <h3>Type Safety</h3>
      <p>Learn how to leverage TypeScript's type system to catch errors at compile time and improve code reliability.</p>
      
      <h3>Advanced Types</h3>
      <p>Explore advanced TypeScript features like conditional types, mapped types, and template literal types.</p>
      
      <h3>Project Configuration</h3>
      <p>Set up your TypeScript projects for success with proper configuration and tooling.</p>
      
      <h3>Integration with React</h3>
      <p>Best practices for using TypeScript with React, including component typing and prop validation.</p>
       <h2>TypeScript in 2024</h2>
      <p>TypeScript continues to evolve with new features and improvements. This guide covers the best practices for writing maintainable TypeScript code.</p>
      
      <h3>Type Safety</h3>
      <p>Learn how to leverage TypeScript's type system to catch errors at compile time and improve code reliability.</p>
      
      <h3>Advanced Types</h3>
      <p>Explore advanced TypeScript features like conditional types, mapped types, and template literal types.</p>
      
      <h3>Project Configuration</h3>
      <p>Set up your TypeScript projects for success with proper configuration and tooling.</p>
      
      <h3>Integration with React</h3>
      <p>Best practices for using TypeScript with React, including component typing and prop validation.</p>
          <h2>TypeScript in 2024</h2>
      <p>TypeScript continues to evolve with new features and improvements. This guide covers the best practices for writing maintainable TypeScript code.</p>
      
      <h3>Type Safety</h3>
      <p>Learn how to leverage TypeScript's type system to catch errors at compile time and improve code reliability.</p>
      
      <h3>Advanced Types</h3>
      <p>Explore advanced TypeScript features like conditional types, mapped types, and template literal types.</p>
      
      <h3>Project Configuration</h3>
      <p>Set up your TypeScript projects for success with proper configuration and tooling.</p>
      
      <h3>Integration with React</h3>
      <p>Best practices for using TypeScript with React, including component typing and prop validation.</p>
       <h2>TypeScript in 2024</h2>
      <p>TypeScript continues to evolve with new features and improvements. This guide covers the best practices for writing maintainable TypeScript code.</p>
      
      <h3>Type Safety</h3>
      <p>Learn how to leverage TypeScript's type system to catch errors at compile time and improve code reliability.</p>
      
      <h3>Advanced Types</h3>
      <p>Explore advanced TypeScript features like conditional types, mapped types, and template literal types.</p>
      
      <h3>Project Configuration</h3>
      <p>Set up your TypeScript projects for success with proper configuration and tooling.</p>
      
      <h3>Integration with React</h3>
      <p>Best practices for using TypeScript with React, including component typing and prop validation.</p>
          <h2>TypeScript in 2024</h2>
      <p>TypeScript continues to evolve with new features and improvements. This guide covers the best practices for writing maintainable TypeScript code.</p>
      
      <h3>Type Safety</h3>
      <p>Learn how to leverage TypeScript's type system to catch errors at compile time and improve code reliability.</p>
      
      <h3>Advanced Types</h3>
      <p>Explore advanced TypeScript features like conditional types, mapped types, and template literal types.</p>
      
      <h3>Project Configuration</h3>
      <p>Set up your TypeScript projects for success with proper configuration and tooling.</p>
      
      <h3>Integration with React</h3>
      <p>Best practices for using TypeScript with React, including component typing and prop validation.</p>
    `,
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "TypeScript",
    image: "/placeholder.svg?height=400&width=800",
  },
];

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = blogs.find((b) => b.id === Number.parseInt(params.id));

  if (!blog) {
    notFound();
  }

  // Get recent posts (excluding current post)
  const recentPosts = blogs.filter((b) => b.id !== blog.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Link href="/">
          <button className="gap-2">Back to Blog</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main content - Left side */}
        <div className="lg:col-span-3">
          <article className="prose prose-lg max-w-none">
            {/* Hero image */}
            <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary">
                {blog.category}
              </div>
            </div>

            {/* Article header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  {/* <User className="w-4 h-4" /> */}
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <Calendar className="w-4 h-4" /> */}
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <Clock className="w-4 h-4" /> */}
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pb-6 border-b">
                <button
                  // variant="outline"
                  // size="sm"
                  className="gap-2 bg-transparent"
                >
                  {/* <Share2 className="w-4 h-4" /> */}
                  Share
                </button>
              </div>
            </header>

            {/* Article content */}
            <div
              className="prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        </div>

        {/* Sidebar - Right side */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Recent Posts */}
            <div>
              <div>
                <h3 className="text-lg font-semibold">Recent Posts</h3>
              </div>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="group cursor-pointer">
                      <div className="aspect-video relative overflow-hidden rounded-md mb-2">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <div>
                <h3 className="text-lg font-semibold">Categories</h3>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogs.map((b) => b.category))).map(
                    (category) => (
                      <div
                        key={category}
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {category}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Newsletter signup */}
            <div>
              <div>
                <h3 className="text-lg font-semibold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Get the latest posts delivered right to your inbox.
                </p>
              </div>
              <div>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button className="w-full">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
