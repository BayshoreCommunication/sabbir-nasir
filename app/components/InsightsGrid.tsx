import React from "react";
import Image from "next/image";
import { insightsData } from "../config/data";
import { ArrowButton } from "./Button";

const InsightsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {insightsData.map((insight) => (
        <div key={insight.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={insight.image}
              alt={insight.title}
              fill
              className="object-cover"
            />
            {/* Date Overlay */}
            <div className="absolute top-4 left-4 bg-gray-100 bg-opacity-90 rounded-md px-3 py-1">
              <div className="text-xs font-medium text-gray-800 leading-tight">
                {insight.date.split(' ').map((part, index) => (
                  <div key={index}>{part}</div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
              {insight.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {insight.description}
            </p>
            <ArrowButton size="sm">Read More</ArrowButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsightsGrid; 