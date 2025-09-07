import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Settings, BookOpen, Calendar, FileText, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const portals = [
    {
      title: "Student Portal",
      description: "Access your courses, grades, assignments, and hostel services",
      icon: GraduationCap,
      route: "/student",
      features: ["Course Registration", "View Grades", "Submit Assignments", "Track Attendance", "Hostel Services"],
      color: "bg-gradient-primary"
    },
    {
      title: "Faculty Portal", 
      description: "Manage courses, grades, attendance, and student interactions",
      icon: Users,
      route: "/faculty",
      features: ["Course Management", "Grade Submissions", "Attendance Tracking", "Assignment Reviews", "Student Communication"],
      color: "bg-gradient-secondary"
    },
    {
      title: "Admin Portal",
      description: "Comprehensive system administration and management",
      icon: Settings,
      route: "/admin",
      features: ["User Management", "Document Processing", "System Analytics", "Complaint Management", "ERP Integration"],
      color: "bg-gradient-hero"
    }
  ];

  const features = [
    { icon: BookOpen, title: "Course Management", description: "Complete course lifecycle management" },
    { icon: FileText, title: "Document Automation", description: "Automated transcript and certificate generation" },
    { icon: Calendar, title: "Attendance Tracking", description: "Real-time attendance monitoring and reporting" },
    { icon: MapPin, title: "Hostel Services", description: "Digital hostel management and services" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background shadow-soft border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">UniConnect</h1>
                <p className="text-sm text-muted-foreground">Academic Management System</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              <Clock className="w-3 h-3 mr-1" />
              Online
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Modern Academic 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Management</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Streamline your university's academic processes with our comprehensive automation platform. 
            From course management to hostel services, everything in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-background rounded-lg px-4 py-2 shadow-soft">
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Selection */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Choose Your Portal
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portals.map((portal, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 shadow-medium">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 ${portal.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <portal.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{portal.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {portal.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {portal.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => navigate(portal.route)}
                    className="w-full"
                    variant="default"
                  >
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Comprehensive Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-subtle shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold">UniConnect</span>
          </div>
          <p className="text-primary-foreground/80">
            © 2024 UniConnect Academic Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;