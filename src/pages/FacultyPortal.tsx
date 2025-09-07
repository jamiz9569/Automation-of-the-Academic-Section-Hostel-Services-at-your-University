import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  GraduationCap, 
  PlusCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyPortal = () => {
  const navigate = useNavigate();

  const quickStats = [
    { label: "Active Courses", value: "4", icon: BookOpen, color: "text-primary" },
    { label: "Total Students", value: "156", icon: Users, color: "text-secondary" },
    { label: "Pending Grades", value: "12", icon: AlertCircle, color: "text-warning" },
    { label: "This Week Classes", value: "18", icon: Calendar, color: "text-primary" },
  ];

  const courses = [
    { 
      name: "Database Systems", 
      code: "CS301", 
      students: 45, 
      completed: 75, 
      pendingGrades: 5,
      nextClass: "Today 10:00 AM"
    },
    { 
      name: "Software Engineering", 
      code: "CS302", 
      students: 38, 
      completed: 85, 
      pendingGrades: 2,
      nextClass: "Tomorrow 2:00 PM"
    },
    { 
      name: "Computer Networks", 
      code: "CS303", 
      students: 42, 
      completed: 65, 
      pendingGrades: 5,
      nextClass: "Friday 11:00 AM"
    },
  ];

  const recentActivities = [
    { action: "Grade submitted", details: "CS301 - Assignment 3", time: "2 hours ago", type: "grade" },
    { action: "Attendance recorded", details: "CS302 - Lecture 15", time: "5 hours ago", type: "attendance" },
    { action: "Assignment uploaded", details: "CS303 - Project Guidelines", time: "1 day ago", type: "assignment" },
    { action: "Student message", details: "John Doe - Project Query", time: "2 days ago", type: "message" },
  ];

  const pendingTasks = [
    { task: "Grade Assignment 3", course: "CS301", deadline: "Today", priority: "high" },
    { task: "Upload Lecture Notes", course: "CS302", deadline: "Tomorrow", priority: "medium" },
    { task: "Review Project Proposals", course: "CS303", deadline: "Friday", priority: "low" },
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
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Faculty Portal</h1>
                  <p className="text-sm text-muted-foreground">Welcome, Dr. Sarah Johnson</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary">Faculty ID: FAC001</Badge>
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
            {/* Course Management */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Course Management</span>
                </CardTitle>
                <CardDescription>Manage your courses, students, and curriculum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="p-4 bg-accent rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{course.name}</h4>
                          <p className="text-sm text-muted-foreground">{course.code} • {course.students} students</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">Next Class</p>
                          <p className="text-xs text-muted-foreground">{course.nextClass}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Course Progress</span>
                            <span>{course.completed}%</span>
                          </div>
                          <Progress value={course.completed} className="h-2" />
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-muted-foreground">
                            {course.pendingGrades} pending grades
                          </p>
                          <div className="space-x-2">
                            <Button size="sm" variant="outline">Manage</Button>
                            <Button size="sm" variant="secondary">Grade</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'grade' ? 'bg-success/20' :
                        activity.type === 'attendance' ? 'bg-primary/20' :
                        activity.type === 'assignment' ? 'bg-warning/20' : 'bg-secondary/20'
                      }`}>
                        {activity.type === 'grade' && <CheckCircle className="h-4 w-4 text-success" />}
                        {activity.type === 'attendance' && <Calendar className="h-4 w-4 text-primary" />}
                        {activity.type === 'assignment' && <FileText className="h-4 w-4 text-warning" />}
                        {activity.type === 'message' && <MessageSquare className="h-4 w-4 text-secondary" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.details}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
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
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Assignment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Record Attendance
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Submit Grades
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Materials
                </Button>
              </CardContent>
            </Card>

            {/* Pending Tasks */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <span>Pending Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingTasks.map((item, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium text-foreground">{item.task}</p>
                      <Badge variant={
                        item.priority === 'high' ? 'destructive' : 
                        item.priority === 'medium' ? 'warning' : 'outline'
                      }>
                        {item.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.course}</p>
                    <p className="text-xs text-muted-foreground mt-1">Due: {item.deadline}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Class Schedule */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent rounded-lg">
                    <p className="font-medium text-foreground">Database Systems</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 11:30 AM</p>
                    <p className="text-xs text-muted-foreground">Room: CS101</p>
                  </div>
                  <div className="p-3 bg-accent rounded-lg">
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</p>
                    <p className="text-xs text-muted-foreground">Room: Faculty 205</p>
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

export default FacultyPortal;