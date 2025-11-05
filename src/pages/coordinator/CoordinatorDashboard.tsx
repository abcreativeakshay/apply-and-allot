import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, LogOut, Users, FileText, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CoordinatorDashboard = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newInternship, setNewInternship] = useState({
    title: "",
    company: "",
    department: "",
    positions: "",
    deadline: "",
    description: "",
  });

  const myInternships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Corp",
      applications: 12,
      positions: 5,
      deadline: "2024-12-31",
      status: "open",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "AI Solutions",
      applications: 8,
      positions: 3,
      deadline: "2024-12-25",
      status: "open",
    },
  ];

  const pendingApplications = [
    {
      id: 1,
      studentName: "Alice Johnson",
      internshipTitle: "Software Development Intern",
      appliedOn: "2024-11-01",
      department: "CSE",
    },
    {
      id: 2,
      studentName: "Bob Smith",
      internshipTitle: "Data Science Intern",
      appliedOn: "2024-11-02",
      department: "CSE",
    },
  ];

  const handleCreateInternship = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-secondary" />
            <span className="text-xl font-bold text-foreground">Coordinator Portal</span>
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Coordinator Dashboard</h1>
            <p className="text-muted-foreground">Manage internships and applications</p>
          </div>
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
                {myInternships.reduce((sum, i) => sum + i.applications, 0)}
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
            <CardTitle>Pending Applications</CardTitle>
            <CardDescription>Review and process student applications</CardDescription>
          </CardHeader>
          <CardContent>
            {pendingApplications.length === 0 ? (
              <p className="text-center text-muted-foreground">No pending applications</p>
            ) : (
              <div className="space-y-4">
                {pendingApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{app.studentName}</h3>
                      <p className="text-sm text-muted-foreground">{app.internshipTitle}</p>
                      <div className="mt-1 flex gap-2">
                        <Badge variant="outline">{app.department}</Badge>
                        <span className="text-xs text-muted-foreground">Applied: {app.appliedOn}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                      <Button size="sm">Review</Button>
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
            <CardTitle>My Internships</CardTitle>
            <CardDescription>Manage your posted internships</CardDescription>
          </CardHeader>
          <CardContent>
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
                    <span>Applications: {internship.applications}</span>
                    <span>Positions: {internship.positions}</span>
                    <span>Deadline: {internship.deadline}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Applications
                    </Button>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoordinatorDashboard;
