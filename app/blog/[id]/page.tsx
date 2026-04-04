

import { blogPosts } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ unwrap params
  const { id } = await params;

  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link href="/blog" className="text-orange-500 mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((post) => post.id !== blog.id)
    .slice(0, 5);

  return (
    <main>
      {/* 🔥 HERO */}
      <section className="relative h-[300px] w-full">
        <Image src={blog.img} alt={blog.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,41,62,0.6)]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <span className="bg-orange-500 px-3 py-1 text-xs rounded-full mb-3">
            {blog.category}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl">
            {blog.title}
          </h1>

          <div className="flex gap-3 mt-3 text-sm text-gray-200">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* 🔥 MAIN CONTENT */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* IMAGE */}
            <div className="mb-4 flex justify-center items-center">
              <Image src={blog.img} alt={blog.title} width={1000} height={400} className="rounded-lg" />
        </div>
            {/* INTRO */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* STATIC CONTENT */}
            <div className="mt-6 space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Kansas City continues to be one of the most attractive real
                estate markets in the United States due to affordability,
                lifestyle, and growth opportunities.
              </p>

              <p>
                Whether you are buying or selling, understanding market trends
                and working with the right professionals can make a significant
                difference in your overall experience.
              </p>

              <p>
                Sellers should focus on pricing strategy, staging, and marketing
                to maximize property value, while buyers should consider
                long-term investment potential and financing options.
              </p>

              <h3 className="text-xl font-semibold text-black mt-6">
                Key Takeaways
              </h3>

              <ul className="list-disc pl-5 space-y-2">
                <li>Understand local market trends</li>
                <li>Work with experienced real estate agents</li>
                <li>Plan finances carefully</li>
                <li>Make informed decisions</li>
              </ul>

              <p>
                With the right approach, you can make confident real estate
                decisions and achieve your goals efficiently.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* 🔥 RIGHT SIDEBAR */}
          <div className="lg:sticky lg:top-24 self-start">
            <h3 className="text-xl font-semibold mb-5">Recent Posts</h3>

            <div className="space-y-5">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="flex gap-3 group"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">{post.date}</p>

                    <h4 className="text-sm font-medium group-hover:text-orange-500 transition line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 BACK */}
      <div className="text-center pb-16">
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-orange-500"
        >
          ← Back to all blogs
        </Link>
      </div>
    </main>
  );
}
