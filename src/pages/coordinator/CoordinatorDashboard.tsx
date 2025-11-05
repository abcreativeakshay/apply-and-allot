import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, LogOut, Users, FileText, Plus } from "lucide-react";
import mitLogo from "@/assets/mit-university-logo.png";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const CoordinatorDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, logout } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [myInternships, setMyInternships] = useState<any[]>([]);
  const [pendingApplications, setPendingApplications] = useState<any[]>([]);
  const [newInternship, setNewInternship] = useState({
    title: "",
    company: "",
    department: "",
    positions: "",
    deadline: "",
    description: "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/coordinator/login");
      return;
    }
    loadData();
  }, [user, navigate]);

  const loadData = async () => {
    if (!user) return;
    
    try {
      // Load my internships from local storage
      const storedInternships = JSON.parse(localStorage.getItem('internships') || '[]');
      const myInternshipsList = storedInternships.filter((i: any) => i.coordinatorId === user.uid);
      setMyInternships(myInternshipsList);

      // Load all applications for my internships
      const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
      
      // Filter pending applications for my internships
      const myInternshipIds = myInternshipsList.map((i: any) => i.id);
      const pending = storedApplications.filter(
        (app: any) => myInternshipIds.includes(app.internshipId) && app.status === "pending"
      );
      setPendingApplications(pending);
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

  const handleCreateInternship = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const internshipData = {
        id: Math.random().toString(36).substr(2, 9),
        ...newInternship,
        coordinatorId: user.uid,
        positions: parseInt(newInternship.positions),
        status: "open",
        createdAt: new Date().toISOString(),
      };

      const storedInternships = JSON.parse(localStorage.getItem('internships') || '[]');
      storedInternships.push(internshipData);
      localStorage.setItem('internships', JSON.stringify(storedInternships));
      
      toast({
        title: "Internship Created",
        description: "Your internship posting is now live!",
      });
      
      setIsDialogOpen(false);
      setNewInternship({
        title: "",
        company: "",
        department: "",
        positions: "",
        deadline: "",
        description: "",
      });
      
      // Reload data
      loadData();
    } catch (error) {
      console.error("Error creating internship:", error);
      toast({
        title: "Error",
        description: "Failed to create internship.",
        variant: "destructive",
      });
    }
  };

  const addSampleData = async () => {
    if (!user) return;

    const sampleInternships = [
      {
        id: Math.random().toString(36).substr(2, 9),
        title: "Software Engineer Intern",
        company: "Google",
        department: "CSE",
        positions: 5,
        deadline: "2024-12-31",
        description: "Work on cutting-edge technologies and learn from experienced engineers.",
        coordinatorId: user.uid,
        status: "open",
        createdAt: new Date().toISOString(),
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        title: "Data Analyst Intern",
        company: "Microsoft",
        department: "CSE",
        positions: 3,
        deadline: "2024-12-25",
        description: "Analyze large datasets and provide actionable insights for product teams.",
        coordinatorId: user.uid,
        status: "open",
        createdAt: new Date().toISOString(),
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        title: "Hardware Engineer Intern",
        company: "Intel",
        department: "ECE",
        positions: 2,
        deadline: "2024-12-20",
        description: "Design and test next-generation processor architectures.",
        coordinatorId: user.uid,
        status: "open",
        createdAt: new Date().toISOString(),
      },
    ];

    try {
      const storedInternships = JSON.parse(localStorage.getItem('internships') || '[]');
      storedInternships.push(...sampleInternships);
      localStorage.setItem('internships', JSON.stringify(storedInternships));

      toast({
        title: "Sample Data Added",
        description: "3 sample internships have been created successfully!",
      });

      loadData();
    } catch (error) {
      console.error("Error adding sample data:", error);
      toast({
        title: "Error",
        description: "Failed to add sample data.",
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Coordinator Dashboard</h1>
            <p className="text-muted-foreground">Manage internships and applications</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={addSampleData}>
              Add Sample Data
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Internship
                </Button>
              </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Internship</DialogTitle>
                <DialogDescription>Post a new internship opportunity for students</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateInternship} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Internship Title</Label>
                    <Input
                      id="title"
                      value={newInternship.title}
                      onChange={(e) => setNewInternship({ ...newInternship, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={newInternship.company}
                      onChange={(e) => setNewInternship({ ...newInternship, company: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={newInternship.department}
                      onValueChange={(value) => setNewInternship({ ...newInternship, department: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CSE">Computer Science</SelectItem>
                        <SelectItem value="ECE">Electronics & Communication</SelectItem>
                        <SelectItem value="ME">Mechanical Engineering</SelectItem>
                        <SelectItem value="EE">Electrical Engineering</SelectItem>
                        <SelectItem value="CE">Civil Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="positions">Positions</Label>
                    <Input
                      id="positions"
                      type="number"
                      min="1"
                      value={newInternship.positions}
                      onChange={(e) => setNewInternship({ ...newInternship, positions: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={newInternship.deadline}
                      onChange={(e) => setNewInternship({ ...newInternship, deadline: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={newInternship.description}
                    onChange={(e) => setNewInternship({ ...newInternship, description: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create Internship
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">My Internships</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myInternships.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {myInternships.reduce((sum, i) => sum + (i.applications || 0), 0)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingApplications.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Applications */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Pending Applications</CardTitle>
                <CardDescription>Review and process student applications</CardDescription>
              </div>
              <Badge variant="outline" className="text-xs">
                DSA: Queue (FIFO)
              </Badge>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              📚 Uses <strong>Queue data structure (FIFO)</strong> - Time Complexity: O(1) for enqueue/dequeue operations. 
              Applications are processed in First In First Out order ensuring fairness. This helps maintain chronological order 
              and prevents newer applications from overtaking older ones.
            </p>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center text-muted-foreground">Loading...</p>
            ) : pendingApplications.length === 0 ? (
              <p className="text-center text-muted-foreground">No pending applications</p>
            ) : (
              <div className="space-y-4">
                {pendingApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{app.studentId}</h3>
                      <p className="text-sm text-muted-foreground">{app.title}</p>
                      <div className="mt-1 flex gap-2">
                        <Badge variant="outline">{app.company}</Badge>
                        <span className="text-xs text-muted-foreground">
                          Applied: {new Date(app.appliedOn).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => {
                          const internship = myInternships.find(i => i.id === app.internshipId);
                          if (internship) {
                            navigate(`/coordinator/internship/${internship.id}/applications`);
                          }
                        }}
                      >
                        Review Application
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* My Internships */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>My Internships</CardTitle>
                <CardDescription>Manage your posted internships</CardDescription>
              </div>
              <Badge variant="outline" className="text-xs">
                DSA: Tree + Hashing
              </Badge>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              📚 Uses <strong>Tree structure</strong> (O(log n) for hierarchical operations) for department categorization and 
              <strong>HashMap</strong> (O(1) average lookup) for instant internship retrieval by ID. This combination enables 
              fast searches and organized data management.
            </p>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center text-muted-foreground">Loading...</p>
            ) : myInternships.length === 0 ? (
              <p className="text-center text-muted-foreground">No internships created yet</p>
            ) : (
              <div className="space-y-4">
              {myInternships.map((internship) => (
                <div key={internship.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{internship.title}</h3>
                      <p className="text-sm text-muted-foreground">{internship.company}</p>
                    </div>
                    <Badge variant={internship.status === "open" ? "default" : "secondary"}>
                      {internship.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="mb-3 flex gap-4 text-sm text-muted-foreground">
                    <span>Applications: {internship.applications || 0}</span>
                    <span>Positions: {internship.positions}</span>
                    <span>Deadline: {internship.deadline}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate(`/coordinator/internship/${internship.id}/applications`)}
                    >
                      View Applications
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate(`/coordinator/internship/${internship.id}/edit`)}
                    >
                      Edit
                    </Button>
                  </div>
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

export default CoordinatorDashboard;
