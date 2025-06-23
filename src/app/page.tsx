import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Paintbrush, Camera, Move, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Musicians",
    icon: <Music className="h-12 w-12 text-primary-foreground" />,
    description: "Find the perfect sound for any occasion.",
  },
  {
    name: "Painters",
    icon: <Paintbrush className="h-12 w-12 text-primary-foreground" />,
    description: "Commission stunning visual artwork.",
  },
  {
    name: "Photographers",
    icon: <Camera className="h-12 w-12 text-primary-foreground" />,
    description: "Capture moments that last a lifetime.",
  },
  {
    name: "Dancers",
    icon: <Move className="h-12 w-12 text-primary-foreground" />,
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
          <Button asChild size="lg">
            <Link href="/artists">Find an Artist <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/join">Join as an Artist</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-headline text-4xl text-center mb-10">Explore Our Talent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="bg-primary text-primary-foreground text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-primary-foreground/20 rounded-full p-4 w-fit">
                    {category.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-bold font-headline">{category.name}</h3>
                <p className="text-primary-foreground/80 mt-2">{category.description}</p>
              </CardContent>
            </Card>
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
