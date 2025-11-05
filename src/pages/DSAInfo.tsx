import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DSAInfo = () => {
  const dsaConcepts = [
    {
      name: "Hashing",
      color: "bg-blue-500",
      usage: [
        {
          feature: "Authentication",
          description: "Password storage and verification using hash functions for security",
          location: "Login/Register pages",
        },
        {
          feature: "Quick Lookups",
          description: "O(1) time complexity for finding students, internships, and applications by ID",
          location: "Student & Coordinator Dashboards",
        },
        {
          feature: "Session Management",
          description: "Hash-based session tokens for maintaining user authentication state",
          location: "Throughout the application",
        },
      ],
    },
    {
      name: "Stack (LIFO)",
      color: "bg-purple-500",
      usage: [
        {
          feature: "Application History",
          description: "Student applications stored in stack - latest applications shown first",
          location: "Student Dashboard - My Applications",
        },
        {
          feature: "Navigation History",
          description: "Browser navigation using stack for back/forward functionality",
          location: "Application routing",
        },
        {
          feature: "Undo Operations",
          description: "Stack-based undo system for application actions",
          location: "Application forms",
        },
      ],
    },
    {
      name: "Queue (FIFO)",
      color: "bg-green-500",
      usage: [
        {
          feature: "Application Processing",
          description: "Applications processed in First In First Out order for fairness",
          location: "Coordinator Dashboard - Pending Applications",
        },
        {
          feature: "Notification System",
          description: "Notifications delivered in the order they were generated",
          location: "Notification center",
        },
        {
          feature: "Email Queue",
          description: "Email notifications queued and sent in order",
          location: "Background services",
        },
      ],
    },
    {
      name: "Graph",
      color: "bg-orange-500",
      usage: [
        {
          feature: "Student-Internship Mapping",
          description: "Directed graph connecting students to applied internships",
          location: "Application system",
        },
        {
          feature: "Recommendation Engine",
          description: "Graph traversal to find similar internships and recommend to students",
          location: "Internship browsing",
        },
        {
          feature: "Network Analysis",
          description: "Analyze popular internships and application patterns",
          location: "Analytics dashboard",
        },
      ],
    },
    {
      name: "Tree",
      color: "bg-red-500",
      usage: [
        {
          feature: "Department Hierarchy",
          description: "Tree structure organizing departments and sub-departments",
          location: "Department selection",
        },
        {
          feature: "Category Organization",
          description: "Hierarchical categorization of internship types",
          location: "Internship filtering",
        },
        {
          feature: "Permission System",
          description: "Tree-based role and permission management",
          location: "User access control",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">InternConnect</span>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">DSA Implementation Guide</h1>
          <p className="text-lg text-muted-foreground">
            Data Structures and Algorithms used throughout the Internship Portal
          </p>
        </div>

        <div className="space-y-6">
          {dsaConcepts.map((concept) => (
            <Card key={concept.name}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${concept.color}`} />
                  <CardTitle className="text-2xl">{concept.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {concept.usage.map((item, idx) => (
                    <div key={idx} className="rounded-lg border bg-card p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <h3 className="font-semibold text-card-foreground">{item.feature}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {concept.name}
                        </Badge>
                      </div>
                      <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Location:</strong> {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <Card className="mt-8 bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Implementation Summary</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              How DSA concepts power the Internship Portal
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2">
              <li>
                <strong>Hashing:</strong> Ensures O(1) lookups and secure password storage
              </li>
              <li>
                <strong>Stack:</strong> Manages application history with LIFO order
              </li>
              <li>
                <strong>Queue:</strong> Fair FIFO processing of applications
              </li>
              <li>
                <strong>Graph:</strong> Maps relationships and powers recommendations
              </li>
              <li>
                <strong>Tree:</strong> Organizes hierarchical data like departments
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DSAInfo;
