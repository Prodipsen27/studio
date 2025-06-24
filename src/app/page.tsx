import Link from "next/link";

const categories = [
  {
    name: "Musicians",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary-foreground"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    description: "Find the perfect sound for any occasion.",
  },
  {
    name: "Painters",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary-foreground"
      >
        <path d="M12.5 13.5L3 22" />
        <path d="M14 4L20 10" />
        <path d="M20 4L14 10" />
        <path d="M3 22l-1.5-1.5c-1-1-1-2.5 0-3.5l7-7c1-1 2.5-1 3.5 0l1.5 1.5" />
      </svg>
    ),
    description: "Commission stunning visual artwork.",
  },
  {
    name: "Photographers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary-foreground"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    description: "Capture moments that last a lifetime.",
  },
  {
    name: "Dancers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary-foreground"
      >
        <path d="M5 9l-3 3 3 3" />
        <path d="M9 5l3-3 3 3" />
        <path d="M15 19l3 3 3-3" />
        <path d="M19 9l3 3-3 3" />
        <path d="M2 12h20" />
        <path d="M12 2v20" />
      </svg>
    ),
    description: "Bring energy and life to your events.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Where Creativity Finds its Stage
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Artistly is the premier platform for discovering and collaborating with a diverse community of talented artists.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/artists" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
            Find an Artist
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/join" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8">
            Join as an Artist
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-headline text-4xl text-center mb-10">Explore Our Talent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-primary text-primary-foreground text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-lg border">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mx-auto bg-primary-foreground/20 rounded-full p-4 w-fit">
                    {category.icon}
                </div>
              </div>
              <div className="p-6 pt-0">
                <h3 className="text-2xl font-bold font-headline">{category.name}</h3>
                <p className="text-primary-foreground/80 mt-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card rounded-xl">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-headline text-4xl mb-10">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
                    <h3 className="font-headline text-2xl mb-2">Discover</h3>
                    <p className="text-muted-foreground">Browse our curated list of artists. Filter by category, location, and price to find the perfect match for your needs.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
                    <h3 className="font-headline text-2xl mb-2">Connect</h3>
                    <p className="text-muted-foreground">Review artist portfolios and connect with them directly through our secure platform to discuss your project.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
                    <h3 className="font-headline text-2xl mb-2">Create</h3>
                    <p className="text-muted-foreground">Collaborate with your chosen artist to bring your vision to life. Experience a seamless and creative process from start to finish.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
