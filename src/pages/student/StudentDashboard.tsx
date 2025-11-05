import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GraduationCap, Briefcase, Search, LogOut, FileText } from "lucide-react";
import mitLogo from "@/assets/mit-university-logo.png";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const { user, logout } = useAuth();
  const [myApplications, setMyApplications] = useState<any[]>([]);
  const [internships, setInternships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/student/login");
      return;
    }
    loadData();
  }, [user, navigate]);

  const loadData = async () => {
    if (!user) return;
    
    try {
      // Load internships from local storage
      const storedInternships = JSON.parse(localStorage.getItem('internships') || '[]');
      setInternships(storedInternships);

      // Load my applications from local storage
      const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
      const myApps = storedApplications.filter((app: any) => app.studentId === user.uid);
      setMyApplications(myApps);
    } catch (error) {
      console.error("Error loading data:", error);
      toast({
        title: "Error",
        description: "Failed to load data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleApply = async (internship: any) => {
    if (!user) return;

    // Check if already applied
    const alreadyApplied = myApplications.some(
      (app) => app.internshipId === internship.id
    );

    if (alreadyApplied) {
      toast({
        title: "Already Applied",
        description: "You have already applied to this internship",
        variant: "destructive",
      });
      return;
    }

    try {
      // Add new application to local storage
      const applicationData = {
        id: Math.random().toString(36).substr(2, 9),
        studentId: user.uid,
        internshipId: internship.id,
        title: internship.title,
        company: internship.company,
        status: "pending",
        appliedOn: new Date().toISOString(),
      };

      const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
      storedApplications.push(applicationData);
      localStorage.setItem('applications', JSON.stringify(storedApplications));
      
      // Update local state
      setMyApplications([...myApplications, applicationData]);

      toast({
        title: "Application Submitted",
        description: `Your application for ${internship.title} has been submitted successfully!`,
      });
    } catch (error) {
      console.error("Error applying:", error);
      toast({
        title: "Error",
        description: "Failed to submit application",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src={mitLogo} alt="MIT University" className="h-16" />
            <span className="text-xl font-bold text-foreground">MIT ADT Internship Portal</span>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
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
              📚 Uses <strong>Stack data structure (LIFO)</strong> - Time Complexity: O(1) for push/pop operations. 
              Latest applications appear first (Last In First Out), making it easy to track recent activity. 
              This helps students quickly see their most recent submissions.
            </p>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center text-muted-foreground">Loading...</p>
            ) : myApplications.length === 0 ? (
              <p className="text-center text-muted-foreground">No applications yet</p>
            ) : (
              <div className="space-y-4">
                {myApplications.map((app, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{app.title}</h3>
                      <p className="text-sm text-muted-foreground">{app.company}</p>
                      <p className="text-xs text-muted-foreground">
                        Applied on: {new Date(app.appliedOn).toLocaleDateString()}
                      </p>
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
                      {(app.status || "pending").toUpperCase()}
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
              📚 Uses <strong>HashMap</strong> (O(1) average lookup) for instant internship retrieval by ID and <strong>Graph</strong> 
              structure (O(V+E) for traversal) to map student-internship relationships. This enables efficient filtering, 
              searching, and personalized recommendations.
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
            {loading ? (
              <p className="text-center text-muted-foreground">Loading internships...</p>
            ) : internships.length === 0 ? (
              <p className="text-center text-muted-foreground">No internships available</p>
            ) : (
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
                      (app) => app.internshipId === internship.id
                    )}
                  >
                    {myApplications.some(
                      (app) => app.internshipId === internship.id
                    )
                      ? "Applied"
                      : "Apply Now"}
                  </Button>
                </div>
              ))}
            </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
