"use client";

import { BlogPost, BlogPostData } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface BlogSelectorProps {
  blogPostData: BlogPostData;
  currentSlug?: string;
}

const BlogSelector = ({ blogPostData, currentSlug }: BlogSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const publishedPosts =
    blogPostData?.data?.filter((post: BlogPost) => post.published === true) ||
    [];

  const currentBlog = publishedPosts.find((post) => post.slug === currentSlug);

  const postDate = (date: string): string => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="relative">
      {/* Blog Selector Dropdown */}
      <motion.div
        className="bg-white border border-gray-200 rounded-lg p-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#1F1F1F]">
            Select Blog Post
          </h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="text-sm">
              {isOpen ? "Hide" : "Show"} All Posts
            </span>
            {isOpen ? (
              <HiChevronUp className="w-4 h-4" />
            ) : (
              <HiChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Current Blog Preview */}
        {currentBlog && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {currentBlog.featuredImage?.image?.url && (
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={currentBlog.featuredImage.image.url}
                    alt={currentBlog.featuredImage.altText || currentBlog.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-[#1F1F1F] line-clamp-1">
                  {currentBlog.title}
                </h4>
                <time className="text-xs text-gray-500">
                  {postDate(currentBlog.createdAt)}
                </time>
              </div>
            </div>
          </div>
        )}

        {/* Blog List Dropdown */}
        {isOpen && (
          <motion.div
            className="mt-4 space-y-2 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {publishedPosts.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className={`block p-3 rounded-lg transition-colors ${
                    blog.slug === currentSlug
                      ? "bg-primary text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {blog.featuredImage?.image?.url && (
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src={blog.featuredImage.image.url}
                          alt={blog.featuredImage.altText || blog.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`text-sm font-semibold line-clamp-2 ${
                          blog.slug === currentSlug
                            ? "text-white"
                            : "text-[#1F1F1F]"
                        }`}
                      >
                        {blog.title}
                      </h4>
                      <time
                        className={`text-xs ${
                          blog.slug === currentSlug
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {postDate(blog.createdAt)}
                      </time>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Quick Navigation */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <span>{publishedPosts.length} Published Posts</span>
        <span>
          {publishedPosts.findIndex((post) => post.slug === currentSlug) + 1} of{" "}
          {publishedPosts.length}
        </span>
      </div>
    </div>
  );
};

export default BlogSelector;
