import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const FirebaseSetup = () => {
  return (
    <div className="min-h-screen bg-muted">
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

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Firebase Setup Guide</h1>
          <p className="text-lg text-muted-foreground">
            Follow these steps to enable Firebase Authentication for your project
          </p>
        </div>

        <Alert className="mb-6">
          <AlertTitle>Important Setup Required</AlertTitle>
          <AlertDescription>
            You need to enable Email/Password authentication in your Firebase Console before users can register and login.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </span>
                Open Firebase Console
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Go to your Firebase Console and select your project
              </p>
              <Button asChild>
                <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer">
                  Open Firebase Console →
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </span>
                Enable Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Navigate to Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Click on "Authentication" in the left sidebar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Click "Get Started"</p>
                    <p className="text-sm text-muted-foreground">
                      If this is your first time, click the "Get Started" button
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Go to Sign-in method</p>
                    <p className="text-sm text-muted-foreground">
                      Click on the "Sign-in method" tab at the top
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </span>
                Enable Email/Password Provider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Find Email/Password</p>
                    <p className="text-sm text-muted-foreground">
                      Look for "Email/Password" in the list of providers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Enable the provider</p>
                    <p className="text-sm text-muted-foreground">
                      Click on it and toggle "Enable" switch
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Save your changes</p>
                    <p className="text-sm text-muted-foreground">
                      Click "Save" to apply the changes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </span>
                Enable Firestore Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Navigate to Firestore Database</p>
                    <p className="text-sm text-muted-foreground">
                      Click on "Firestore Database" in the left sidebar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Create database</p>
                    <p className="text-sm text-muted-foreground">
                      Click "Create database" and select "Start in test mode" for development
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Choose location</p>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred region and click "Enable"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  5
                </span>
                Update Firestore Security Rules (Important!)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Go to Rules tab</p>
                    <p className="text-sm text-muted-foreground">
                      In Firestore Database, click on the "Rules" tab
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Copy and paste these rules</p>
                    <p className="text-sm text-muted-foreground">
                      Replace the existing rules with the ones below
                    </p>
                  </div>
                </div>
              </div>
              <Alert>
                <AlertDescription>
                  <pre className="text-xs overflow-x-auto bg-muted p-3 rounded">
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Students collection
    match /students/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Coordinators collection
    match /coordinators/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Internships - anyone can read, only coordinators can write their own
    match /internships/{internshipId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        resource.data.coordinatorId == request.auth.uid;
    }
    
    // Applications - students can create/read their own, coordinators can read all
    match /applications/{applicationId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null;
      allow update: if request.auth != null;
    }
  }
}`}
                  </pre>
                </AlertDescription>
              </Alert>
              <p className="text-sm text-muted-foreground mt-3">
                Click "Publish" to save the rules
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle>All Set!</CardTitle>
              <CardDescription className="text-secondary-foreground/80">
                Once you've completed these steps, your app is ready to use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <Link to="/student/register">Register as Student</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/coordinator/register">Register as Coordinator</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FirebaseSetup;
