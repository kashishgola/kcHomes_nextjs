import Image from "next/image";

const agents = [
  {
    id: 1,
    name: "Rebecca Graham",
    role: "REALTOR®, Team Leader, ADTV Host",
    image: "/team/1.png",
  },
  {
    id: 2,
    name: "Kamryn Allen",
    role: "Realtor® MO/KS",
    image: "/team/2.png",
  },
  {
    id: 3,
    name: "Loura Miller",
    role: "Realtor®, MO",
    image: "/team/3.jpg",
  },
  {
    id: 4,
    name: "Erika Reza",
    role: "Team Assistant/TC",
    image: "/team/4.png",
  },
];

export default function Team() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet the Team</h2>
          <p>
            At Key Homes KC we provide our clients with a highly organized and
            personalized real estate experience. Consistent communication and
            established systems of success ensure exceptional client service.
            These commitments combined with our passion for authentic and
            thoughtful relationships creates a lifetime partnership our clients
            can rely on. Meet the Team!
          </p>
        </div>

        {/* GRID */}
        <div
          className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4"
        >
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* IMAGE */}
              <Image
                src={agent.image}
                alt={agent.name}
                width={400}
                height={500}
                className="w-full h-[350px] sm:h-[400px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">{agent.name}</h3>
                <p className="text-sm text-gray-200 capitalize">{agent.role}</p>
              </div>

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
