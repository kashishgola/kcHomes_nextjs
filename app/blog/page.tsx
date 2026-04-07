"use client";

import {blogPosts} from "@/lib/blogData"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  // ✅ GET UNIQUE CATEGORIES FROM DATA
  const categories = [
    "All Posts",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // ✅ FILTER LOGIC
  const filteredPosts =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20">
        
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-orange-500">
            News
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-black">
            Our Blogs
          </h2>
        </div>

        {/* 🔥 CATEGORY FILTER (DYNAMIC) */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition
                ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 hover:bg-orange-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="font-semibold text-lg mt-2 line-clamp-2 text-black">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-black hover:text-orange-500 transition"
                >
                  Continue reading →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No posts found in this category.
          </p>
        )}
      </div>
    </section>
  );
}