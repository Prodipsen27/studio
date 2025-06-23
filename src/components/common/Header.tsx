"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Brush } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from "@/components/common/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/join", label: "Join" },
  { href: "/manager/dashboard", label: "Dashboard" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold">
              <Brush className="h-7 w-7 text-primary" />
              <span>Artistly</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link
                  href={link.href}
                  className={cn(
                    'text-base font-medium',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
             <Button asChild>
                <Link href="/join">Get Started</Link>
              </Button>
              <ThemeToggle />
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                  <Brush className="h-7 w-7 text-primary" />
                  <span>Artistly</span>
                </Link>
                  {navLinks.map((link) => (
                    <Button key={link.href} variant="ghost" className="justify-start text-lg" asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                  <Button asChild className="mt-4">
                    <Link href="/join">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
