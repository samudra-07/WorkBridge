import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TASKS } from '../data/mockData';
import { Badge } from '@/components/ui/badge';
import { TaskList } from '../components/task/TaskList';
import { MapPin, Clock, PlusCircle, User, Star, FileText, Bell, Settings } from 'lucide-react';
import { Task } from '@/types';
import { formatDistanceToNow } from 'date-fns';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null; // Redirect handled above
  }

  // Filter tasks based on user role
  let myTasks: Task[] = [];
  if (user?.role === 'client') {
    myTasks = TASKS.filter(task => task.clientId === user.id);
  } else {
    // For workers, show tasks they've bid on
    myTasks = TASKS.filter(task => task.bids.some(bid => bid.workerId === user.id));
  }

  const getInitials = (name: string) => {
    return name.split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Layout>
      <div className="py-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Dashboard</h1>
            <p className="mt-1 text-gray-500">
              Welcome back, {user.name}
            </p>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tasks">
                {user.role === 'client' ? 'My Tasks' : 'My Bids'}
              </TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          {user.role === 'client' ? 'Active Tasks' : 'Active Bids'}
                        </p>
                        <p className="text-3xl font-bold mt-1">
                          {user.role === 'client' ? myTasks.filter(t => t.status === 'open').length : '3'}
                        </p>
                      </div>
                      <div className="p-2 bg-blue-100 rounded-md">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          {user.role === 'client' ? 'Total Bids' : 'Completed Tasks'}
                        </p>
                        <p className="text-3xl font-bold mt-1">
                          {user.role === 'client' 
                            ? myTasks.reduce((acc, task) => acc + task.bids.length, 0) 
                            : '12'}
                        </p>
                      </div>
                      <div className="p-2 bg-green-100 rounded-md">
                        <User className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Rating</p>
                        <div className="flex items-center mt-1">
                          <p className="text-3xl font-bold mr-1">{user.rating.toFixed(1)}</p>
                          <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                        </div>
                      </div>
                      <div className="p-2 bg-yellow-100 rounded-md">
                        <Star className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Notifications</p>
                        <p className="text-3xl font-bold mt-1">5</p>
                      </div>
                      <div className="p-2 bg-red-100 rounded-md">
                        <Bell className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest task updates and notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <div className="p-2 bg-blue-100 rounded-full mr-4">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">New bid on your task</p>
                      <p className="text-sm text-gray-500">
                        {user.role === 'client' ? 'Priya Singh placed a bid of ₹2,800 on "Bathroom Plumbing Repair"' : 'Your bid of ₹6,500 was received on "Living Room Painting"'}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <div className="p-2 bg-green-100 rounded-full mr-4">
                      <FileText className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Task status update</p>
                      <p className="text-sm text-gray-500">
                        {user.role === 'client' 
                          ? 'Your task "Website Development for Small Business" has 1 new bid' 
                          : 'A task you might be interested in was posted: "Furniture Delivery and Assembly"'
                        }
                      </p>
                      <p className="text-xs text-gray-400 mt-1">6 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <div className="p-2 bg-purple-100 rounded-full mr-4">
                      <Star className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">New review received</p>
                      <p className="text-sm text-gray-500">
                        {user.role === 'client' 
                          ? 'Amit Patel left you a 5-star review' 
                          : 'Rohit Sharma left you a 5-star review'
                        }
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover:border-workbridge-200 transition-colors cursor-pointer">
                  <Link to={user.role === 'client' ? '/post-task' : '/tasks'}>
                    <CardContent className="p-6 flex items-center">
                      <div className="p-3 bg-workbridge-100 rounded-full">
                        <PlusCircle className="h-6 w-6 text-workbridge-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">
                          {user.role === 'client' ? 'Post a New Task' : 'Find Work'}
                        </p>
                        <p className="text-sm text-gray-500">
                          {user.role === 'client' ? 'Create a new task for workers to bid on' : 'Browse available tasks near you'}
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
                
                <Card className="hover:border-workbridge-200 transition-colors cursor-pointer">
                  <Link to="/profile">
                    <CardContent className="p-6 flex items-center">
                      <div className="p-3 bg-workbridge-100 rounded-full">
                        <User className="h-6 w-6 text-workbridge-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">Update Profile</p>
                        <p className="text-sm text-gray-500">
                          Complete or update your profile details
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
                
                <Card className="hover:border-workbridge-200 transition-colors cursor-pointer">
                  <Link to="/settings">
                    <CardContent className="p-6 flex items-center">
                      <div className="p-3 bg-workbridge-100 rounded-full">
                        <Settings className="h-6 w-6 text-workbridge-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">Settings</p>
                        <p className="text-sm text-gray-500">
                          Manage your account settings
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </TabsContent>
            
            {/* Tasks/Bids Tab */}
            <TabsContent value="tasks">
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{user?.role === 'client' ? 'My Tasks' : 'My Bids'}</CardTitle>
                    {user?.role === 'client' && (
                      <Button asChild>
                        <Link to="/post-task" className="flex items-center">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Post a New Task
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {myTasks.length > 0 ? (
                    <div className="space-y-4">
                      {myTasks.map((task) => {
                        const userBid = user?.role === 'worker' 
                          ? task.bids.find(bid => bid.workerId === user.id)
                          : null;

                        return (
                          <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:border-workbridge-200 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <Link to={`/tasks/${task.id}`} className="hover:text-workbridge-600 transition-colors">
                                <h3 className="font-medium text-lg">{task.title}</h3>
                              </Link>
                              <div className="flex items-center gap-2">
                                {userBid && (
                                  <Badge 
                                    variant={
                                      userBid.status === 'accepted' ? 'success' :
                                      userBid.status === 'rejected' ? 'destructive' :
                                      'default'
                                    }
                                  >
                                    {userBid.status === 'accepted' ? 'Won' :
                                     userBid.status === 'rejected' ? 'Not Selected' :
                                     'Pending'}
                                  </Badge>
                                )}
                                <Badge variant={task.status === 'open' ? 'default' : 'secondary'} className="capitalize">
                                  {task.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {task.location.address}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                Posted {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <div>
                                <p className="text-sm text-gray-500">Budget:</p>
                                <p className="font-semibold">
                                  ₹{task.budget?.min} - ₹{task.budget?.max}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Bids:</p>
                                <p className="font-semibold">{task.bids.length}</p>
                              </div>
                              <Button asChild variant="outline" size="sm">
                                <Link to={`/tasks/${task.id}`}>
                                  {user.role === 'client' ? 'View Bids' : 'View Details'}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">
                        {user.role === 'client' 
                          ? "You haven't posted any tasks yet" 
                          : "You haven't placed any bids yet"
                        }
                      </p>
                      <Button asChild className="mt-4">
                        <Link to={user.role === 'client' ? '/post-task' : '/tasks'}>
                          {user.role === 'client' ? 'Post Your First Task' : 'Browse Available Tasks'}
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-bold text-xl">{user.name}</h3>
                      <Badge className="mt-2 capitalize">{user.role}</Badge>
                      
                      <div className="flex items-center mt-2">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < user.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium">
                          {user.rating} ({user.totalReviews} reviews)
                        </span>
                      </div>
                      
                      <div className="w-full mt-6 space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Email:</span>
                          <span className="font-medium">{user.email}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Phone:</span>
                          <span className="font-medium">{user.phone || 'Not provided'}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Member since:</span>
                          <span className="font-medium">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Verification:</span>
                          <span className={`font-medium ${user.verified ? 'text-green-600' : 'text-orange-600'}`}>
                            {user.verified ? 'Verified ✓' : 'Pending'}
                          </span>
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" className="mt-6">
                        <Link to="/profile/edit">Edit Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>
                      {user.role === 'client' ? 'About Me' : 'Skills & Experience'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Bio</h4>
                      <p className="text-gray-600">
                        {user.bio || 'No bio provided yet.'}
                      </p>
                    </div>
                    
                    {user.role === 'worker' && user.skills && (
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {user.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-medium mb-2">Location</h4>
                      <p className="text-gray-600">
                        {user.location?.address || 'No location provided yet.'}
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-200 mt-6 pt-6">
                      <h4 className="font-medium mb-4">Recent Reviews</h4>
                      {user.totalReviews > 0 ? (
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="flex">
                                {Array(5).fill(0).map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm font-medium">
                                1 week ago
                              </span>
                            </div>
                            <p className="text-gray-600">
                              "{user.role === 'client' 
                                ? 'Great client to work with! Clear instructions and prompt payment.'
                                : 'Excellent work! Very professional and completed the task perfectly.'
                              }"
                            </p>
                            <p className="text-sm font-medium mt-2">
                              - {user.role === 'client' ? 'Amit Patel' : 'Rohit Sharma'}
                            </p>
                          </div>
                          
                          <div className="text-center">
                            <Button variant="link" className="text-sm">
                              View all reviews
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500">
                          No reviews yet. Complete tasks to receive reviews!
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>
                    Your conversations with clients and workers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-workbridge-200 cursor-pointer transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.role === 'client' ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"} />
                            <AvatarFallback>{user.role === 'client' ? 'PS' : 'RS'}</AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <p className="font-medium">{user.role === 'client' ? 'Priya Singh' : 'Rohit Sharma'}</p>
                            <p className="text-sm text-gray-500">Bathroom Plumbing Repair</p>
                          </div>
                        </div>
                        <Badge>2 new</Badge>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {user.role === 'client' 
                          ? 'I can come tomorrow at 10 AM if that works for you.'
                          : 'That works for me. Do you have all the parts needed?'
                        }
                      </p>
                      <p className="text-xs text-gray-400 mt-1">20 minutes ago</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-workbridge-200 cursor-pointer transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.role === 'client' ? "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" : "https://images.unsplash.com/photo-1664575599736-c5197c684153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww"} />
                            <AvatarFallback>{user.role === 'client' ? 'AP' : 'NG'}</AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <p className="font-medium">{user.role === 'client' ? 'Amit Patel' : 'Neha Gupta'}</p>
                            <p className="text-sm text-gray-500">
                              {user.role === 'client' ? 'Bathroom Plumbing Repair' : 'Living Room Painting'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {user.role === 'client' 
                          ? 'Thank you for the quick service. The sink works great now!'
                          : 'The walls look beautiful! Exactly what I wanted.'
                        }
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
