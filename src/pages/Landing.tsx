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
            
            {/* Action Buttons & Social */}
            <div className="flex items-center gap-3 animate-fade-in">
              {/* Top Navigation */}
              <nav className="hidden lg:flex items-center gap-4 text-sm mr-6">
                <Link to="/dsa-info" className="hover:opacity-80 transition-opacity">
                  <BookOpen className="inline h-4 w-4 mr-1" />
                  DSA Guide
                </Link>
              </nav>
              
              <Button size="sm" variant="destructive" asChild className="hidden md:flex">
                <Link to="/student/login">Student Login</Link>
              </Button>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 hidden md:flex" asChild>
                <Link to="/coordinator/login">Coordinator Login</Link>
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
          <nav className="flex items-center justify-start py-3 text-sm font-medium">
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-wide font-bold">DSA END SEM JURY BY GROUP 3</span>
              <span className="text-white/40">|</span>
              <span className="font-normal opacity-90">Internship Management Portal</span>
              <span className="text-white/40">|</span>
              <span className="font-normal opacity-90">Academic Year 2024-25</span>
            </div>
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
            <p className="text-white/90 text-4xl mb-4 font-light">The pursuit of</p>
            <h1 className="mb-8 text-8xl font-bold text-white leading-tight drop-shadow-lg">
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

      {/* Statistics Section */}
      <section className="gradient-header text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg opacity-90">Making a difference in student careers</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center animate-fade-in">
              <div className="text-6xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Active Students</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-6xl font-bold mb-2">200+</div>
              <div className="text-xl opacity-90">Internship Opportunities</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-6xl font-bold mb-2">95%</div>
              <div className="text-xl opacity-90">Placement Success</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-6xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to kickstart your internship journey
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center animate-scale-in">
            <div className="w-20 h-20 rounded-full gradient-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Register & Create Profile</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sign up and build your comprehensive profile with academic details, skills, and preferences
            </p>
          </div>
          <div className="text-center animate-scale-in">
            <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Browse & Apply</h3>
            <p className="text-muted-foreground leading-relaxed">
              Explore available internships and submit applications with a single click
            </p>
          </div>
          <div className="text-center animate-scale-in">
            <div className="w-20 h-20 rounded-full gradient-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Get Selected & Start</h3>
            <p className="text-muted-foreground leading-relaxed">
              Receive allotment confirmation and begin your professional journey
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students who found their dream internships
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ananya Sharma</h4>
                  <p className="text-sm text-muted-foreground">Computer Science</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "The portal made finding and applying for internships so easy. I secured my dream internship at a top tech company within weeks!"
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white text-2xl font-bold">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-lg">Rohan Patil</h4>
                  <p className="text-sm text-muted-foreground">Mechanical Engineering</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "Excellent platform with diverse opportunities. The smart allotment system ensured I got matched with the perfect internship role."
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-lg">Priya Deshmukh</h4>
                  <p className="text-sm text-muted-foreground">Electronics</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "The real-time tracking and transparent process gave me confidence throughout my application journey. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">Our Partner Companies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading organizations trust us for their internship programs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="group bg-card rounded-2xl p-8 text-center hover-lift shadow-medium border-2 border-transparent hover:border-primary transition-all">
            <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              TCS
            </div>
            <h3 className="text-lg font-bold text-foreground">Tata Consultancy Services</h3>
          </div>
          <div className="group bg-card rounded-2xl p-8 text-center hover-lift shadow-medium border-2 border-transparent hover:border-secondary transition-all">
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              INF
            </div>
            <h3 className="text-lg font-bold text-foreground">Infosys Technologies</h3>
          </div>
          <div className="group bg-card rounded-2xl p-8 text-center hover-lift shadow-medium border-2 border-transparent hover:border-primary transition-all">
            <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              WIP
            </div>
            <h3 className="text-lg font-bold text-foreground">Wipro Limited</h3>
          </div>
          <div className="group bg-card rounded-2xl p-8 text-center hover-lift shadow-medium border-2 border-transparent hover:border-secondary transition-all">
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              ACC
            </div>
            <h3 className="text-lg font-bold text-foreground">Accenture</h3>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about the internship portal
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-lg font-bold text-foreground mb-3">How do I register on the portal?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Click on the Register as Student button, fill in your academic details, upload required documents, and submit. You will receive a confirmation email once your registration is approved.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-lg font-bold text-foreground mb-3">Can I apply for multiple internships?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, you can apply for multiple internships. However, once you are allotted an internship and accept it, your other applications will be automatically withdrawn.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-lg font-bold text-foreground mb-3">How does the allotment process work?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our smart algorithm considers your academic performance, skills, preferences, and company requirements to ensure fair and optimal matching between students and internship opportunities.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-lg font-bold text-foreground mb-3">What documents do I need for registration?</h3>
              <p className="text-muted-foreground leading-relaxed">
                You will need your latest academic transcripts, resume, a valid ID proof, and any relevant certificates or achievements that showcase your skills and qualifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-header text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Join hundreds of students who have already found their dream internships through our platform
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 shadow-large" asChild>
              <Link to="/student/register">
                <GraduationCap className="mr-2 h-5 w-5" />
                Get Started Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8" asChild>
              <Link to="/dsa-info">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
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
