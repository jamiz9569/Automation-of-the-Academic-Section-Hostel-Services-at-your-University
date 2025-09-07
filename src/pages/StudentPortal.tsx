import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  GraduationCap, 
  Home, 
  PlusCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentPortal = () => {
  const navigate = useNavigate();

  const quickStats = [
    { label: "Enrolled Courses", value: "6", icon: BookOpen, color: "text-primary" },
    { label: "Attendance Rate", value: "92%", icon: CheckCircle, color: "text-success" },
    { label: "Pending Assignments", value: "3", icon: AlertCircle, color: "text-warning" },
    { label: "CGPA", value: "8.7", icon: GraduationCap, color: "text-primary" },
  ];

  const courses = [
    { name: "Database Systems", code: "CS301", attendance: 88, grade: "A-", assignments: 2 },
    { name: "Software Engineering", code: "CS302", attendance: 95, grade: "A", assignments: 1 },
    { name: "Computer Networks", code: "CS303", attendance: 90, grade: "B+", assignments: 0 },
  ];

  const recentAssignments = [
    { title: "Database Design Project", subject: "CS301", dueDate: "Dec 15", status: "pending" },
    { title: "Network Protocol Analysis", subject: "CS303", dueDate: "Dec 18", status: "submitted" },
    { title: "Software Testing Report", subject: "CS302", dueDate: "Dec 20", status: "pending" },
  ];

  const hostelServices = [
    { title: "Leave Application", description: "Apply for hostel leave", icon: Calendar },
    { title: "Mess Subscription", description: "Update monthly mess plan", icon: Home },
    { title: "Room Transfer", description: "Request room change", icon: PlusCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background shadow-soft border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Student Portal</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, John Doe</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary">Student ID: 2021CS101</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="shadow-soft border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enrolled Courses */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Enrolled Courses</span>
                </CardTitle>
                <CardDescription>Manage your course registrations and view progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="p-4 bg-accent rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{course.name}</h4>
                          <p className="text-sm text-muted-foreground">{course.code}</p>
                        </div>
                        <Badge variant={course.grade.startsWith('A') ? 'secondary' : 'outline'}>
                          Grade: {course.grade}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Attendance</span>
                            <span>{course.attendance}%</span>
                          </div>
                          <Progress value={course.attendance} className="h-2" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {course.assignments} pending assignments
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add/Drop Courses
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Assignments */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Recent Assignments</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAssignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          assignment.status === 'submitted' ? 'bg-success' : 'bg-warning'
                        }`} />
                        <div>
                          <p className="font-medium text-foreground">{assignment.title}</p>
                          <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{assignment.dueDate}</p>
                        <Badge variant={assignment.status === 'submitted' ? 'success' : 'warning'}>
                          {assignment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="default" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Request Transcript
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Timetable
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Check Attendance
                </Button>
              </CardContent>
            </Card>

            {/* Hostel Services */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span>Hostel Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hostelServices.map((service, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3">
                    <service.icon className="h-4 w-4 mr-3" />
                    <div className="text-left">
                      <p className="font-medium">{service.title}</p>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent rounded-lg">
                    <p className="text-sm font-medium text-foreground">Assignment Due Soon</p>
                    <p className="text-xs text-muted-foreground">Database Design Project due in 2 days</p>
                  </div>
                  <div className="p-3 bg-accent rounded-lg">
                    <p className="text-sm font-medium text-foreground">Grade Updated</p>
                    <p className="text-xs text-muted-foreground">Software Engineering midterm results available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;