import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Users, TrendingUp, BookOpen } from "lucide-react";
import mitLogo from "@/assets/mit-university-logo.png";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={mitLogo} alt="MIT University" className="h-16" />
            <span className="text-2xl font-bold text-foreground">MIT ADT Internship Portal</span>
          </div>
          <nav className="flex gap-3 animate-fade-in">
            <Button variant="ghost" asChild>
              <Link to="/dsa-info">
                <BookOpen className="mr-2 h-4 w-4" />
                DSA Guide
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/student/login">Student Login</Link>
            </Button>
            <Button asChild>
              <Link to="/coordinator/login">Coordinator Login</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-24 text-center relative">
          <div className="animate-slide-up">
            <h1 className="mb-6 text-6xl font-bold text-foreground leading-tight">
              MIT ADT Internship<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Management System
              </span>
            </h1>
            <p className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly connecting MIT ADT students with exceptional internship opportunities
              through our intelligent matching platform
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link to="/student/register">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Register as Student
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/coordinator/register">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Register as Coordinator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage internships efficiently and effectively
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-xl border bg-card p-8 text-center hover-lift shadow-soft hover:border-primary/50 transition-all duration-300">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Browse Internships</h3>
            <p className="text-muted-foreground leading-relaxed">
              Explore diverse opportunities across multiple departments and specializations
            </p>
          </div>
          <div className="group rounded-xl border bg-card p-8 text-center hover-lift shadow-soft hover:border-secondary/50 transition-all duration-300">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Easy Applications</h3>
            <p className="text-muted-foreground leading-relaxed">
              Apply instantly with one click and monitor your application status in real-time
            </p>
          </div>
          <div className="group rounded-xl border bg-card p-8 text-center hover-lift shadow-soft hover:border-primary/50 transition-all duration-300">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Smart Allotment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fair and transparent assignment process powered by intelligent algorithms
            </p>
          </div>
          <div className="group rounded-xl border bg-card p-8 text-center hover-lift shadow-soft hover:border-secondary/50 transition-all duration-300">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <GraduationCap className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Track Progress</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stay updated with comprehensive dashboards and instant notifications
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 MIT ADT Internship Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
