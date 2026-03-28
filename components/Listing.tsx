import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Villa With Panoramic View",
    price: "$5,500,000",
    beds: 5,
    baths: 3,
    size: "250 ft²",
    image: "/listing/1.webp",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Townhouse For Sale",
    price: "$210,000",
    beds: 3,
    baths: 2,
    size: "150 ft²",
    image: "/listing/2.webp",
    status: "New Listing",
  },
  {
    id: 3,
    title: "Family House For Sale",
    price: "$100,000",
    beds: 2,
    baths: 5,
    size: "29000 ft²",
    image: "/listing/3.webp",
    status: "Under Contract",
  },
  {
    id: 4,
    title: "Gorgeous Studio For Rent",
    price: "$770,000",
    beds: 5,
    baths: 6,
    size: "190 ft²",
    image: "/listing/4.jpeg",
    status: "Coming Soon",
  },
];

export default function Listing() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20 bg-gray-50">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm tracking-widest text-orange-500 uppercase">
            Exclusive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Listings</h2>
        </div>

        {/* GRID */}
        <div
          className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4"
        >
          {properties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[220px] object-cover"
                />

                {/* BADGES */}
                <div className="absolute top-3 left-3 flex gap-2 text-xs">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded">
                    {item.status}
                  </span>
                  {/* <span className="bg-black/70 text-white px-2 py-1 rounded">
                  
                </span> */}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.beds} Beds • {item.baths} Baths • Size {item.size}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
