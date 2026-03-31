import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] flex items-center bg-background py-14 sm:py-16">
      {/* Creative background with shapes and grids */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        
        {/* Large gradient circles */}
        <div className="absolute -top-40 -left-40 hidden sm:block w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 -right-40 hidden sm:block w-[700px] h-[700px] bg-gradient-to-tl from-secondary/20 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 hidden lg:block w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl" />
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-[15%] hidden md:block w-64 h-64 border border-primary/10 rounded-full" />
        <div className="absolute top-32 right-[18%] hidden md:block w-48 h-48 border border-primary/20 rounded-full" />
        <div className="absolute top-44 right-[21%] hidden md:block w-32 h-32 border border-primary/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />

        <div className="absolute bottom-20 left-[10%] hidden md:block w-72 h-72 border border-secondary/10 rounded-full" />
        <div className="absolute bottom-28 left-[12%] hidden md:block w-56 h-56 border border-secondary/15 rounded-full" />
        <div className="absolute bottom-36 left-[14%] hidden md:block w-40 h-40 border border-secondary/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        
        {/* Floating dots */}
        <div className="absolute top-[15%] left-[20%] hidden sm:block w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '2s' }} />
        <div className="absolute top-[25%] right-[30%] hidden sm:block w-2 h-2 bg-secondary/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-[30%] left-[35%] hidden sm:block w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[8%] hidden sm:block w-2 h-2 bg-amber-500/40 rounded-full animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }} />
        <div className="absolute bottom-[20%] right-[25%] hidden sm:block w-3 h-3 bg-blue-500/40 rounded-full animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.7s' }} />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 right-0 hidden lg:block w-[500px] h-[500px] opacity-5">
          <div className="absolute top-20 -right-10 w-[600px] h-px bg-gradient-to-l from-transparent via-primary to-transparent rotate-45 origin-right" />
          <div className="absolute top-40 -right-10 w-[600px] h-px bg-gradient-to-l from-transparent via-primary to-transparent rotate-45 origin-right" />
          <div className="absolute top-60 -right-10 w-[600px] h-px bg-gradient-to-l from-transparent via-primary to-transparent rotate-45 origin-right" />
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-[10%] left-[5%] hidden sm:block w-20 h-20 border-2 border-primary/10 rotate-45" />
        <div className="absolute bottom-[15%] right-[8%] hidden sm:block w-16 h-16 border-2 border-secondary/10 rotate-12" />
        <div className="absolute top-[60%] right-[5%] hidden sm:block w-12 h-12 bg-primary/5 rotate-45" />
        
        {/* Concentric rings animation */}
        <div className="absolute top-1/2 left-1/2 hidden lg:block -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="absolute w-[200px] h-[200px] border border-primary/20 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute w-[300px] h-[300px] border border-primary/15 rounded-full -translate-x-[50px] -translate-y-[50px] animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute w-[400px] h-[400px] border border-primary/10 rounded-full -translate-x-[100px] -translate-y-[100px] animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-5 sm:mb-6"
            data-testid="text-hero-title"
          >
            Stash Leading
            <span className="text-primary"> Services</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
            data-testid="text-hero-description"
          >
            Your comprehensive business solutions partner. Professional services
            you can trust across Immigration, Laundry, Media, and Loans.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full gap-2 sm:w-auto" data-testid="button-hero-services">
                View Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-hero-contact">
                Contact Us
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span
                className="text-sm text-muted-foreground"
                data-testid="text-rating"
              >
                <span className="font-semibold text-foreground">4.9/5</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">300+</span> Clients
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">2+</span> Years
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
