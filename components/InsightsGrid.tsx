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
      <div className="mb-4  xl:mb-14 ">
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learn How Real Transformation Happens
        </motion.h2>

        {/* Full-width introductory paragraph */}
        <motion.p
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Sabbir Nasir has a lifetime of experience to share. Read these
          articles to gain a deeper understanding of Sabbir’s approach and the
          keys to sustainable transformation. Please complete the form to have
          unique insights, observations, commentary, and real-world success
          stories delivered to your inbox.
        </motion.p>
      </div>
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
