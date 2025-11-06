import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Users, TrendingUp, BookOpen, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import mitLogo from "@/assets/mit-university-logo.png";
import heroBuilding from "@/assets/mit-campus.png";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 gradient-header text-white shadow-large">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4 border-b border-white/20">
            <div className="flex items-center gap-4 animate-fade-in">
              <img src={mitLogo} alt="MIT-ADT University" className="h-20" />
              <div>
                <h1 className="text-2xl font-bold leading-tight">MIT-ADT</h1>
                <h2 className="text-xl font-semibold leading-tight">UNIVERSITY</h2>
                <p className="text-xs opacity-90">PUNE, INDIA</p>
                <p className="text-[10px] opacity-75">A Leap Towards World Class Education</p>
              </div>
            </div>
            
            {/* Top Navigation */}
            <nav className="hidden lg:flex items-center gap-4 text-sm animate-fade-in">
              <Link to="/dsa-info" className="hover:opacity-80 transition-opacity">
                <BookOpen className="inline h-4 w-4 mr-1" />
                DSA Guide
              </Link>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">Careers</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">Alumni</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">Events</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">NAAC</a>
            </nav>

            {/* Action Buttons & Social */}
            <div className="flex items-center gap-3 animate-fade-in">
              <Button size="sm" variant="destructive" asChild className="hidden md:flex">
                <Link to="/student/login">Login</Link>
              </Button>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 hidden md:flex" asChild>
                <Link to="/coordinator/login">Contact Us</Link>
              </Button>
              
              {/* Social Icons */}
              <div className="hidden xl:flex items-center gap-2 ml-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Navigation */}
          <nav className="flex items-center justify-center py-3 text-sm font-medium">
            <span className="uppercase tracking-wide text-lg font-bold">DSA End Sem Jury by Group 3</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBuilding} alt="MIT-ADT University" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 gradient-hero opacity-70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <p className="text-white/90 text-2xl mb-4 font-light">The pursuit of</p>
            <h1 className="mb-8 text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Excellence Begins here...
            </h1>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base px-8 rounded-full shadow-large" asChild>
              <Link to="#features">VIEW MORE</Link>
            </Button>
          </div>
        </div>
        
        {/* Fixed Bottom Buttons */}
        <div className="absolute bottom-8 right-8 flex gap-3 z-20 animate-fade-in">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-large flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Enquire Now
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-large flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Apply Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-4">Internship Portal Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage internships efficiently and effectively
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border-2 bg-card p-8 text-center hover-lift shadow-medium hover:border-primary transition-all duration-300">
            <div className="mx-auto mb-6 h-20 w-20 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Browse Internships</h3>
            <p className="text-muted-foreground leading-relaxed">
              Explore diverse opportunities across multiple departments and specializations
            </p>
          </div>
          <div className="group rounded-2xl border-2 bg-card p-8 text-center hover-lift shadow-medium hover:border-secondary transition-all duration-300">
            <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Easy Applications</h3>
            <p className="text-muted-foreground leading-relaxed">
              Apply instantly with one click and monitor your application status in real-time
            </p>
          </div>
          <div className="group rounded-2xl border-2 bg-card p-8 text-center hover-lift shadow-medium hover:border-primary transition-all duration-300">
            <div className="mx-auto mb-6 h-20 w-20 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Smart Allotment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fair and transparent assignment process powered by intelligent algorithms
            </p>
          </div>
          <div className="group rounded-2xl border-2 bg-card p-8 text-center hover-lift shadow-medium hover:border-secondary transition-all duration-300">
            <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Track Progress</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stay updated with comprehensive dashboards and instant notifications
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex gap-4">
            <Button size="lg" className="text-base gradient-primary shadow-large" asChild>
              <Link to="/student/register">
                <GraduationCap className="mr-2 h-5 w-5" />
                Register as Student
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base border-2 border-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/coordinator/register">
                <Briefcase className="mr-2 h-5 w-5" />
                Register as Coordinator
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-header text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={mitLogo} alt="MIT-ADT University" className="h-16" />
              <div>
                <p className="font-bold text-lg">MIT-ADT UNIVERSITY</p>
                <p className="text-sm opacity-90">PUNE, INDIA</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm opacity-90">
            <p>&copy; 2024 MIT ADT University Internship Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
