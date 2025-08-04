import Link from "next/link";

// Sample blog data
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    `,
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "TypeScript",
    image: "/placeholder.svg?height=200&width=400",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
        <p className="text-muted-foreground text-lg">
          Discover the latest insights, tutorials, and best practices in web
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-primary">
                    {blog.category}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {/* <User className="w-4 h-4" /> */}
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* <Calendar className="w-4 h-4" /> */}
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {/* <Clock className="w-4 h-4" /> */}
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
