"use client";

import { BlogPost, BlogPostData } from "@/lib/types";
import { motion } from "framer-motion";
import InsightsCard from "./Motion/InsightsCard";

interface InsightsGridProps {
  blogPostData: BlogPostData;
}

const InsightsGrid = ({ blogPostData }: InsightsGridProps) => {
  // Handle empty or error states
  if (!blogPostData?.data || blogPostData.data.length === 0) {
    return (
      <div className="container my-10 md:my-20">
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            No Blog Posts Available
          </h2>
          <p className="text-gray-600">
            {blogPostData?.message || "Check back later for new content."}
          </p>
        </div>
      </div>
    );
  }

  const publishedPosts = blogPostData.data.filter(
    (post: BlogPost) => post.published === true
  );

  if (publishedPosts.length === 0) {
    return (
      <div className="container my-10 md:my-20">
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            No Published Posts
          </h2>
          <p className="text-gray-600">
            There are no published blog posts at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-10 md:my-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {publishedPosts.map((insight: BlogPost, index: number) => (
          <InsightsCard key={insight.id} insight={insight} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default InsightsGrid;
