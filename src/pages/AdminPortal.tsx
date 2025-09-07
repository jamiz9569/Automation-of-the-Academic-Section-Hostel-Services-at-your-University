import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  AlertCircle, 
  CheckCircle,
  Clock,
  Database,
  Shield,
  ArrowLeft,
  TrendingUp,
  UserPlus,
  Activity
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  const navigate = useNavigate();

  const systemStats = [
    { label: "Total Users", value: "2,847", icon: Users, color: "text-primary", change: "+12%" },
    { label: "Active Sessions", value: "342", icon: Activity, color: "text-success", change: "+5%" },
    { label: "System Uptime", value: "99.9%", icon: CheckCircle, color: "text-success", change: "stable" },
    { label: "Pending Requests", value: "23", icon: AlertCircle, color: "text-warning", change: "-8%" },
  ];

  const recentActivities = [
    { action: "New student registration", details: "John Smith (ID: 2024CS001)", time: "5 min ago", type: "user" },
    { action: "Transcript request approved", details: "Sarah Johnson - B.Tech CS", time: "15 min ago", type: "document" },
    { action: "System backup completed", details: "Daily backup - 2.3GB", time: "1 hour ago", type: "system" },
    { action: "Hostel complaint resolved", details: "Room 204 - Internet issue", time: "2 hours ago", type: "complaint" },
    { action: "Grade submission deadline", details: "CS301 - Final grades due", time: "4 hours ago", type: "academic" },
  ];

  const pendingRequests = [
    { type: "Transcript", student: "Alice Brown", submitted: "2 days ago", priority: "high" },
    { type: "Certificate", student: "Mike Wilson", submitted: "1 day ago", priority: "medium" },
    { type: "Hostel Transfer", student: "Emma Davis", submitted: "3 hours ago", priority: "low" },
    { type: "Leave Application", student: "James Miller", submitted: "1 hour ago", priority: "medium" },
  ];

  const systemHealth = [
    { component: "Database", status: "healthy", uptime: 99.9, load: 45 },
    { component: "Web Server", status: "healthy", uptime: 99.8, load: 32 },
    { component: "Authentication", status: "healthy", uptime: 100, load: 28 },
    { component: "File Storage", status: "warning", uptime: 98.5, load: 78 },
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
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Admin Portal</h1>
                  <p className="text-sm text-muted-foreground">System Administration Dashboard</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="success">
                <CheckCircle className="w-3 h-3 mr-1" />
                All Systems Operational
              </Badge>
              <Badge variant="secondary">Admin</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="shadow-soft border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className={`text-xs ${stat.change.startsWith('+') ? 'text-success' : stat.change.startsWith('-') ? 'text-warning' : 'text-muted-foreground'}`}>
                      {stat.change}
                    </p>
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
            {/* System Health */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>System Health Monitor</span>
                </CardTitle>
                <CardDescription>Real-time system performance and health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.map((system, index) => (
                    <div key={index} className="p-4 bg-accent rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            system.status === 'healthy' ? 'bg-success' : 
                            system.status === 'warning' ? 'bg-warning' : 'bg-destructive'
                          }`} />
                          <h4 className="font-semibold text-foreground">{system.component}</h4>
                        </div>
                        <Badge variant={system.status === 'healthy' ? 'success' : 'warning'}>
                          {system.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Uptime</span>
                            <span>{system.uptime}%</span>
                          </div>
                          <Progress value={system.uptime} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Load</span>
                            <span>{system.load}%</span>
                          </div>
                          <Progress 
                            value={system.load} 
                            className={`h-2 ${system.load > 70 ? '[&>div]:bg-warning' : '[&>div]:bg-success'}`} 
                          />
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
                  <span>Recent System Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'user' ? 'bg-primary/20' :
                        activity.type === 'document' ? 'bg-success/20' :
                        activity.type === 'system' ? 'bg-warning/20' :
                        activity.type === 'complaint' ? 'bg-destructive/20' : 'bg-secondary/20'
                      }`}>
                        {activity.type === 'user' && <UserPlus className="h-4 w-4 text-primary" />}
                        {activity.type === 'document' && <FileText className="h-4 w-4 text-success" />}
                        {activity.type === 'system' && <Database className="h-4 w-4 text-warning" />}
                        {activity.type === 'complaint' && <AlertCircle className="h-4 w-4 text-destructive" />}
                        {activity.type === 'academic' && <TrendingUp className="h-4 w-4 text-secondary" />}
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
                <CardTitle>System Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="default" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Process Documents
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Settings
                </Button>
              </CardContent>
            </Card>

            {/* Pending Requests */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <span>Pending Requests</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingRequests.map((request, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium text-foreground">{request.type}</p>
                      <Badge variant={
                        request.priority === 'high' ? 'destructive' : 
                        request.priority === 'medium' ? 'warning' : 'outline'
                      }>
                        {request.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{request.student}</p>
                    <p className="text-xs text-muted-foreground mt-1">Submitted: {request.submitted}</p>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" variant="secondary" className="flex-1">Approve</Button>
                      <Button size="sm" variant="outline" className="flex-1">Review</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <AlertCircle className="h-4 w-4 text-warning" />
                      <p className="text-sm font-medium text-foreground">High Storage Usage</p>
                    </div>
                    <p className="text-xs text-muted-foreground">File storage at 78% capacity</p>
                  </div>
                  <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <p className="text-sm font-medium text-foreground">Backup Completed</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Daily backup finished successfully</p>
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

export default AdminPortal;