import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GraduationCap, Briefcase, Search, LogOut, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const [myApplications, setMyApplications] = useState([
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Corp",
      status: "pending",
      appliedOn: "2024-11-01",
    },
  ]);

  // Mock data
  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Corp",
      department: "CSE",
      deadline: "2024-12-31",
      positions: 5,
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "AI Solutions",
      department: "CSE",
      deadline: "2024-12-25",
      positions: 3,
    },
    {
      id: 3,
      title: "Hardware Design Intern",
      company: "Circuit Innovations",
      department: "ECE",
      deadline: "2024-12-28",
      positions: 4,
    },
  ];

  const handleApply = (internship: typeof internships[0]) => {
    // Check if already applied
    const alreadyApplied = myApplications.some(
      (app) => app.title === internship.title && app.company === internship.company
    );

    if (alreadyApplied) {
      toast({
        title: "Already Applied",
        description: "You have already applied to this internship",
        variant: "destructive",
      });
      return;
    }

    // Add new application
    const newApplication = {
      id: myApplications.length + 1,
      title: internship.title,
      company: internship.company,
      status: "pending",
      appliedOn: new Date().toISOString().split("T")[0],
    };

    setMyApplications([...myApplications, newApplication]);

    toast({
      title: "Application Submitted",
      description: `Your application for ${internship.title} has been submitted successfully!`,
    });
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Student Portal</span>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome Back!</h1>
          <p className="text-muted-foreground">Explore and apply to internship opportunities</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Available Internships</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{internships.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">My Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myApplications.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {myApplications.filter((app) => app.status === "pending").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Applications */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track your application status</CardDescription>
              </div>
              <Badge variant="outline" className="text-xs">
                DSA: Stack (LIFO)
              </Badge>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              📚 Uses <strong>Stack data structure</strong> - Latest applications appear first (Last In First Out). 
              Applications are stored in a stack for maintaining history.
            </p>
          </CardHeader>
          <CardContent>
            {myApplications.length === 0 ? (
              <p className="text-center text-muted-foreground">No applications yet</p>
            ) : (
              <div className="space-y-4">
                {myApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{app.title}</h3>
                      <p className="text-sm text-muted-foreground">{app.company}</p>
                      <p className="text-xs text-muted-foreground">Applied on: {app.appliedOn}</p>
                    </div>
                    <Badge
                      variant={
                        app.status === "pending"
                          ? "secondary"
                          : app.status === "approved"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {app.status.toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Browse Internships */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Browse Internships</CardTitle>
                <CardDescription>Find and apply to internship opportunities</CardDescription>
              </div>
              <Badge variant="outline" className="text-xs">
                DSA: Hashing + Graph
              </Badge>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              📚 Uses <strong>Hashing</strong> for O(1) lookup of internships by ID and <strong>Graph</strong> 
              structure to map student-internship relationships and recommendations.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by company or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {internships.map((internship) => (
                <div key={internship.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{internship.title}</h3>
                      <p className="text-sm text-muted-foreground">{internship.company}</p>
                    </div>
                    <Badge>{internship.department}</Badge>
                  </div>
                  <div className="mb-3 flex gap-4 text-sm text-muted-foreground">
                    <span>Positions: {internship.positions}</span>
                    <span>Deadline: {internship.deadline}</span>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => handleApply(internship)}
                    disabled={myApplications.some(
                      (app) => app.title === internship.title && app.company === internship.company
                    )}
                  >
                    {myApplications.some(
                      (app) => app.title === internship.title && app.company === internship.company
                    )
                      ? "Applied"
                      : "Apply Now"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
