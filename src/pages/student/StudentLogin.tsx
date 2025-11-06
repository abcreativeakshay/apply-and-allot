import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import mitLogo from "@/assets/mit-university-logo.png";

const StudentLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signIn(email, password, "student");
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      navigate("/student/dashboard");
    } catch (error: any) {
      let errorMessage = "Invalid email or password";
      
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Invalid email or password. Please check your credentials or register first.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid credentials. Please check your email and password or register first.";
      } else if (error.message.includes("No student account")) {
        errorMessage = "No student account found. Please register as a student first.";
      }
      
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <Card className="w-full max-w-md shadow-large animate-scale-in border-2">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <img src={mitLogo} alt="MIT University" className="h-20 mx-auto" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Student Login</CardTitle>
            <CardDescription className="text-base mt-2">Enter your credentials to access your account</CardDescription>
          </div>
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 text-sm">
            <p className="font-semibold text-foreground flex items-center gap-2">
              <span className="text-lg">🔐</span> DSA: Hashing
            </p>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Passwords are secured using <strong>hash functions</strong> for safe storage and authentication
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="student@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="mt-4 rounded-md bg-muted p-3 text-center text-sm">
            <p className="font-semibold text-foreground">Don't have an account?</p>
            <Link to="/student/register" className="text-primary hover:underline">
              Register as a Student →
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:underline">
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentLogin;
