import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import mitLogo from "@/assets/mit-university-logo.png";

const EditInternship = () => {
  const navigate = useNavigate();
  const { internshipId } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [internship, setInternship] = useState({
    title: "",
    company: "",
    department: "",
    positions: "",
    deadline: "",
    description: "",
    status: "open",
  });

  useEffect(() => {
    if (!user) {
      navigate("/coordinator/login");
      return;
    }
    loadInternship();
  }, [user, navigate, internshipId]);

  const loadInternship = async () => {
    try {
      const storedInternships = JSON.parse(localStorage.getItem('internships') || '[]');
      const foundInternship = storedInternships.find((i: any) => i.id === internshipId);
      
      if (!foundInternship || foundInternship.coordinatorId !== user?.uid) {
        navigate("/coordinator/dashboard");
        return;
      }
      
      setInternship({
        title: foundInternship.title,
        company: foundInternship.company,
        department: foundInternship.department,
        positions: foundInternship.positions.toString(),
        deadline: foundInternship.deadline,
        description: foundInternship.description,
        status: foundInternship.status,
      });
    } catch (error) {
      console.error("Error loading internship:", error);
      toast({
        title: "Error",
        description: "Failed to load internship",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const storedInternships = JSON.parse(localStorage.getItem('internships') || '[]');
      const updatedInternships = storedInternships.map((i: any) =>
        i.id === internshipId
          ? {
              ...i,
              title: internship.title,
              company: internship.company,
              department: internship.department,
              positions: parseInt(internship.positions),
              deadline: internship.deadline,
              description: internship.description,
              status: internship.status,
            }
          : i
      );
      
      localStorage.setItem('internships', JSON.stringify(updatedInternships));
      
      toast({
        title: "Internship Updated",
        description: "Internship details have been updated successfully",
      });
      
      navigate("/coordinator/dashboard");
    } catch (error) {
      console.error("Error updating internship:", error);
      toast({
        title: "Error",
        description: "Failed to update internship",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-muted flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src={mitLogo} alt="MIT University" className="h-16" />
            <span className="text-xl font-bold text-foreground">MIT ADT Internship Portal</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/coordinator/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Edit Internship</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Internship Title</Label>
                  <Input
                    id="title"
                    value={internship.title}
                    onChange={(e) => setInternship({ ...internship, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={internship.company}
                    onChange={(e) => setInternship({ ...internship, company: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select
                    value={internship.department}
                    onValueChange={(value) => setInternship({ ...internship, department: value })}
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
                    value={internship.positions}
                    onChange={(e) => setInternship({ ...internship, positions: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={internship.deadline}
                    onChange={(e) => setInternship({ ...internship, deadline: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={internship.status}
                  onValueChange={(value) => setInternship({ ...internship, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={4}
                  value={internship.description}
                  onChange={(e) => setInternship({ ...internship, description: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Save Changes
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate("/coordinator/dashboard")}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditInternship;
