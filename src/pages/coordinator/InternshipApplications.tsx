import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, X, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import mitAdtLogo from "@/assets/mit-adt-logo.png";

const InternshipApplications = () => {
  const navigate = useNavigate();
  const { internshipId } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const [internship, setInternship] = useState<any>(null);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/coordinator/login");
      return;
    }
    loadData();
  }, [user, navigate, internshipId]);

  const loadData = async () => {
    try {
      // Load internship details
      const storedInternships = JSON.parse(localStorage.getItem('internships') || '[]');
      const foundInternship = storedInternships.find((i: any) => i.id === internshipId);
      
      if (!foundInternship || foundInternship.coordinatorId !== user?.uid) {
        navigate("/coordinator/dashboard");
        return;
      }
      
      setInternship(foundInternship);

      // Load applications for this internship
      const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
      const internshipApplications = storedApplications.filter(
        (app: any) => app.internshipId === internshipId
      );
      setApplications(internshipApplications);
    } catch (error) {
      console.error("Error loading data:", error);
      toast({
        title: "Error",
        description: "Failed to load applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (applicationId: string, newStatus: "approved" | "rejected") => {
    try {
      const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
      const updatedApplications = storedApplications.map((app: any) =>
        app.id === applicationId ? { ...app, status: newStatus } : app
      );
      localStorage.setItem('applications', JSON.stringify(updatedApplications));
      
      setApplications(applications.map(app =>
        app.id === applicationId ? { ...app, status: newStatus } : app
      ));

      toast({
        title: "Status Updated",
        description: `Application ${newStatus === "approved" ? "approved" : "rejected"} successfully`,
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update application status",
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
            <img src={mitAdtLogo} alt="MIT ADT University" className="h-12" />
            <span className="text-xl font-bold text-foreground">MIT ADT Internship Portal</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/coordinator/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {internship && (
          <div className="mb-6">
            <h1 className="mb-2 text-3xl font-bold text-foreground">{internship.title}</h1>
            <p className="text-muted-foreground">{internship.company}</p>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Applications ({applications.length})</CardTitle>
            <CardDescription>Review and manage student applications</CardDescription>
          </CardHeader>
          <CardContent>
            {applications.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No applications yet</p>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <h3 className="font-semibold text-card-foreground">{app.studentId}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Applied: {new Date(app.appliedOn).toLocaleDateString()}
                      </p>
                      <Badge className="mt-2" variant={
                        app.status === "approved" ? "default" : 
                        app.status === "rejected" ? "destructive" : "secondary"
                      }>
                        {(app.status || "pending").toUpperCase()}
                      </Badge>
                    </div>
                    {app.status === "pending" && (
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="default"
                          onClick={() => handleUpdateStatus(app.id, "approved")}
                        >
                          <Check className="mr-1 h-4 w-4" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleUpdateStatus(app.id, "rejected")}
                        >
                          <X className="mr-1 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    )}
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

export default InternshipApplications;
