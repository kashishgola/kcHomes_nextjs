"use client";

import { blogPosts } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";

export default function HomeBlogSection() {
  // 👉 Get latest 3 posts (you can sort if needed)
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-500">
              News
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Latest Blogs
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-black hover:text-orange-500 transition"
          >
            View All →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
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

                <h3 className="font-semibold text-lg mt-2 line-clamp-2">
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
      </div>
    </section>
  );
}