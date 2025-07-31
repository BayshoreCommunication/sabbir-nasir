"use client";

import { BlogPost, BlogPostData } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

interface InsightsProps {
  blogPostData: BlogPostData;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Insights({ blogPostData }: InsightsProps) {
  const postDate = (date: string): string => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // Filter published posts and limit to 3
  const publishedPosts =
    blogPostData?.data
      ?.filter((post: BlogPost) => post.published === true)
      ?.slice(0, 3) || [];

  if (publishedPosts.length === 0) {
    return (
      <section className="container my-8 md:my-20 mx-auto px-4">
        <div className="text-center mb-4 xl:mb-8">
          <h2 className="">Blogs</h2>
          <p className="mt-5 max-w-[700px] mx-auto">
            Insights You&apos;ve hit a wall. Your passion, talent, and energy
            drove your company&apos;s early success, but you&apos;re caught in
            what we call the Holy Trap
          </p>
        </div>
        <div className="text-center py-20">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            No Published Posts
          </h3>
          <p className="text-gray-600">
            There are no published blog posts at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container my-8 md:my-20 mx-auto px-4">
      <div className="text-center mb-4 xl:mb-8">
        <h2 className="">Blogs</h2>
        <p className="mt-5 max-w-[700px] mx-auto">
          Insights You&apos;ve hit a wall. Your passion, talent, and energy
          drove your company&apos;s early success, but you&apos;re caught in
          what we call the Holy Trap
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {publishedPosts.map((insight: BlogPost, i: number) => {
          const hasValidImage = insight?.featuredImage?.image?.url;

          return (
            <motion.div
              key={insight.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer rounded-lg overflow-hidden bg-white"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {hasValidImage ? (
                    <Image
                      src={insight.featuredImage.image.url}
                      alt={insight.featuredImage.altText || insight.title}
                      width={400}
                      height={192}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <div className="text-sm">No Image</div>
                      </div>
                    </div>
                  )}

                  {/* Date Overlay */}
                  <div className="absolute top-4 left-4 bg-opacity-90 rounded-md px-3 py-1 bg-white">
                    <div className="text-xs font-medium text-gray-800 leading-tight">
                      {postDate(insight?.createdAt)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 font-semibold text-gray-800">
                    {insight.title}
                  </h3>
                  <p className="line-clamp-3 text-gray-600 mb-4">
                    {insight.description}
                  </p>

                  {/* Read More Link */}
                  <Link href={`/blogs/${insight.slug}`}>
                    <motion.div
                      className="mt-auto flex items-center space-x-1 text-primary cursor-pointer group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.1 + 0.6,
                        duration: 0.4,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <h3 className="text-primary group-hover:text-primary/80 transition-colors duration-300 font-lumios">
                        Read More
                      </h3>
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <HiArrowNarrowRight className="text-2xl text-primary group-hover:text-primary/80" />
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
