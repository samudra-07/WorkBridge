
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">How WorkBridge Works</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform connects clients with skilled workers through a simple, transparent bidding process
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* For Clients */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">For Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-workbridge-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-workbridge-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Post a Task</h3>
                <p className="text-gray-600">
                  Describe what you need done, when you need it, and your budget. Add photos or details to help workers understand.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-workbridge-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-workbridge-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Review Bids</h3>
                <p className="text-gray-600">
                  Receive multiple bids from qualified workers. Compare prices, profiles, ratings, and reviews to find the right person.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-workbridge-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-workbridge-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Get It Done</h3>
                <p className="text-gray-600">
                  Choose a worker, communicate via our in-app chat, and get your task completed. Then leave a review of your experience.
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link to="/post-task">Post a Task Now</Link>
              </Button>
            </div>
          </div>
          
          {/* For Workers */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">For Workers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-workbridge-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-workbridge-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">
                  Sign up and create a detailed profile showcasing your skills, experience, and the services you offer.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-workbridge-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-workbridge-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Browse & Bid</h3>
                <p className="text-gray-600">
                  Find tasks that match your skills in your area. Set your own price by placing a competitive bid.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-workbridge-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-workbridge-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Tasks</h3>
                <p className="text-gray-600">
                  Once hired, communicate with the client, deliver quality work, and build your reputation through great reviews.
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link to="/tasks">Find Work Now</Link>
              </Button>
            </div>
          </div>
          
          {/* Why Choose WorkBridge */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose WorkBridge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-workbridge-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg mb-2">Name Your Price</h3>
                      <p className="text-gray-600">
                        Our flexible bidding system lets workers set their own rates and clients choose based on value, not just price.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-workbridge-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg mb-2">Transparent Ratings</h3>
                      <p className="text-gray-600">
                        Our review system ensures accountability and helps you make informed decisions based on past performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-workbridge-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg mb-2">Secure Messaging</h3>
                      <p className="text-gray-600">
                        Our in-app chat keeps all communications in one place, making coordination and clarification simple.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-workbridge-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg mb-2">Local Focus</h3>
                      <p className="text-gray-600">
                        Find workers or tasks near you, supporting your local community and economy while getting things done.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 relative">
                  <div className="absolute -top-4 -left-2 text-5xl text-workbridge-200">"</div>
                  <div className="pt-6">
                    <p className="text-gray-600 mb-6 italic">
                      I needed my apartment painted quickly before moving in. Within a day, I had 5 bids from qualified painters. I chose someone with great reviews who completed the job professionally and on time.
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww" 
                          alt="Client" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Rohit Sharma</p>
                        <p className="text-gray-500 text-sm">Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 relative">
                  <div className="absolute -top-4 -left-2 text-5xl text-workbridge-200">"</div>
                  <div className="pt-6">
                    <p className="text-gray-600 mb-6 italic">
                      As a plumber, I was looking for more flexible work opportunities. WorkBridge has been perfect - I set my own hours and rates, and have built a loyal customer base through positive reviews.
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" 
                          alt="Worker" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Amit Patel</p>
                        <p className="text-gray-500 text-sm">Noida, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-2">How do I post a task?</h3>
                <p className="text-gray-600 mb-6">
                  Simply sign up, click "Post a Task," and fill in the required details about your task, including description, location, and budget. Add photos if helpful.
                </p>
                
                <h3 className="font-bold text-lg mb-2">How does the bidding work?</h3>
                <p className="text-gray-600 mb-6">
                  Workers will place bids on your task, specifying their price and any relevant details. You can review each worker's profile and ratings before accepting a bid.
                </p>
                
                <h3 className="font-bold text-lg mb-2">Is there a fee to use WorkBridge?</h3>
                <p className="text-gray-600 mb-6">
                  Posting tasks is free. WorkBridge charges a small service fee only when a task is successfully completed.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">How do I get paid as a worker?</h3>
                <p className="text-gray-600 mb-6">
                  When you complete a task, payment is processed through our secure system. Funds are transferred to your account after the client confirms task completion.
                </p>
                
                <h3 className="font-bold text-lg mb-2">How are workers verified?</h3>
                <p className="text-gray-600 mb-6">
                  Workers can become verified by submitting identity documents and professional certifications, which are reviewed by our team. Verified workers display a badge on their profile.
                </p>
                
                <h3 className="font-bold text-lg mb-2">What if there's a dispute?</h3>
                <p className="text-gray-600 mb-6">
                  Our support team is available to help resolve any issues between clients and workers. We have a fair dispute resolution process to ensure both parties are treated equitably.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join WorkBridge today and experience a better way to get tasks done or find work opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/post-task">Post a Task</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/tasks">Find Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
