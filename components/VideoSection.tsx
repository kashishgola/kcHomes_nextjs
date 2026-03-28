"use client";

export default function VideoSection() {
  const youtubeUrl = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 pb-16 pt-8 sm:px-6 md:px-12 lg:px-20">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Discover KC with Rebecca on American Dream TV
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Explore the beauty of Kansas City and discover amazing real estate
              opportunities through this featured episode.
            </p>

            {/* BUTTON */}
            <div className="mt-6">
              <a
                href="https://www.youtube.com/@YourFavorite816Realtor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 
                         text-white px-6 py-3 rounded-full 
                         text-sm sm:text-base transition"
              >
                Watch More
              </a>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/iQaT9HAE9FM"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
