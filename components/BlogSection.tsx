import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Best Family Friendly Areas",
    date: "March 4, 2026",
    image: "/listing/1.webp",
  },
  {
    id: 2,
    title: "The Top Neighborhoods",
    date: "Feb 28, 2026",
    image: "/listing/2.webp",
  },
  {
    id: 3,
    title: "Buyer’s Guide",
    date: "Jan 27, 2026",
    image: "/listing/3.webp",
  },
  {
    id: 4,
    title: "Seller’s Guide",
    date: "Mar 01, 2026",
    image: "/listing/4.jpeg",
  },
];

export default function BlogSection() {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20 ">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-orange-500">
            News
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Our Blog
          </h2>
        </div>

        {/* GRID */}
        <div
          className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3"
        >
          {blogs.slice(0,3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover 
                           transition duration-500 
                           hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{blog.title}</h3>

                <p className="text-sm text-gray-500 mt-1">{blog.date}</p>

                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  New York County as a whole covers a total area of 33.77 square
                  miles (87.5 km2), of which 22.96 square miles (59.5 km2)...
                </p>

                <Link
                  href="#"
                  className="mt-4 cursor-pointer text-sm font-medium text-black hover:text-orange-500 flex items-center gap-1"
                >
                  Continue reading...
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
