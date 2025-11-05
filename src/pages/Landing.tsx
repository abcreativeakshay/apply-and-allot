import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Users, TrendingUp } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">InternConnect</span>
          </div>
          <nav className="flex gap-4">
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
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold text-foreground">
          Streamline Your Internship Journey
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A comprehensive platform connecting students with internship opportunities
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/student/register">Register as Student</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/coordinator/register">Register as Coordinator</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-6 text-center">
            <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">Browse Internships</h3>
            <p className="text-muted-foreground">
              Explore opportunities across various departments
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <Users className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">Easy Applications</h3>
            <p className="text-muted-foreground">
              Apply with one click and track your progress
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <TrendingUp className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">Smart Allotment</h3>
            <p className="text-muted-foreground">
              Fair and transparent assignment process
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <GraduationCap className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">Track Progress</h3>
            <p className="text-muted-foreground">
              Monitor applications in real-time
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 InternConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
