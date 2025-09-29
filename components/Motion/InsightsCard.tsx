"use client";

import { BlogPost } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

interface InsightsCardProps {
  insight: BlogPost;
  index: number;
}

const InsightsCard = ({ insight, index }: InsightsCardProps) => {
  const postDate = (date: string): string => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // Function to strip HTML tags and convert to plain text
  const stripHtml = (html: string): string => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").trim();
  };

  const hasValidImage = insight?.featuredImage?.image?.url;

  return (
    <Link href={`/insights/${insight.slug}`} className="block h-full">
      <motion.div
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        {/* Image (responsive height) */}
        <motion.div
          className="relative h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {hasValidImage ? (
            <Image
              src={insight.featuredImage.image.url}
              alt={insight.featuredImage.altText || insight.title}
              fill
              className="object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 grid place-items-center">
              <div className="text-gray-400 text-center">
                <div className="text-4xl mb-2">📄</div>
                <div className="text-sm">No Image</div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          className="p-6 flex flex-col flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-[24px] font-bold text-gray-800 mb-3 leading-tight line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {insight.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 leading-relaxed mb-4 line-clamp-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {stripHtml(insight.description) ||
              stripHtml(insight.body)?.substring(0, 150) + "..." ||
              "No description available"}
          </motion.p>

          <div className="mt-auto">
            <motion.div
              className="flex items-center space-x-1 text-primary cursor-pointer group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <h3 className="text-primary font-semibold group-hover:text-primary/80 transition-colors duration-300 font-lumios">
                Read More
              </h3>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <HiArrowNarrowRight className="text-2xl text-primary group-hover:text-primary/80" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default InsightsCard;
