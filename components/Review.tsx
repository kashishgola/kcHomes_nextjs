import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/website/5.jpg",
  },
  {
    id: 2,
    image: "/website/2.jpg",
  },
  {
    id: 3,
    image: "/website/3.jpg",
  },
  {
    id: 4,
    image: "/website/7.jpg",
  },
  {
    id: 5,
    image: "/website/1.jpg",
  },
  {
    id: 6,
    image: "/website/6.jpg",
  },
  {
    id: 7,
    image: "/website/4.jpg",
  },
  {
    id: 8,
    image: "/website/8.jpg",
  },
];

export default function Review() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 pb-16 sm:px-6 md:px-12 lg:px-20 ">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-2xl text-black">
            Working with the right real estate agent can make a huge difference.
            If you (or someone you know) is looking to buy or sell, we'd welcome
            the opportunity to explain the advantages we offer.
          </p>
        </div>

        {/* GRID */}
        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt="review img"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover 
                           transition duration-500 
                           hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
