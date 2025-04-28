
import { User, Task, Category, Bid } from '../types';

// Mock Categories
export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Home Services',
    icon: 'home',
    subcategories: ['Cleaning', 'Plumbing', 'Electrical', 'Painting', 'Carpentry', 'Furniture Assembly']
  },
  {
    id: 'cat-2',
    name: 'Professional',
    icon: 'briefcase',
    subcategories: ['Web Development', 'Design', 'Content Writing', 'Translation', 'Accounting', 'Legal']
  },
  {
    id: 'cat-3',
    name: 'Personal',
    icon: 'user',
    subcategories: ['Tutoring', 'Fitness Training', 'Cooking', 'Pet Care', 'Personal Shopping']
  },
  {
    id: 'cat-4',
    name: 'Errands',
    icon: 'clock',
    subcategories: ['Delivery', 'Shopping', 'Waiting in Line', 'Package Pickup']
  },
  {
    id: 'cat-5',
    name: 'Events',
    icon: 'camera',
    subcategories: ['Photography', 'Videography', 'DJ Services', 'Catering', 'Event Planning']
  }
];

// Mock Users
export const USERS: User[] = [
  {
    id: 'user-1',
    name: 'Rohit Sharma',
    email: 'rohit@example.com',
    phone: '+91 9876543210',
    role: 'client',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww',
    rating: 4.8,
    totalReviews: 15,
    createdAt: '2023-09-15T10:30:00.000Z',
    bio: 'Business owner looking for reliable services',
    verified: true,
    location: {
      lat: 28.6139,
      lng: 77.2090,
      address: 'Delhi, India'
    }
  },
  {
    id: 'user-2',
    name: 'Priya Singh',
    email: 'priya@example.com',
    phone: '+91 9876543211',
    role: 'worker',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww',
    rating: 4.9,
    totalReviews: 27,
    createdAt: '2023-08-20T15:45:00.000Z',
    bio: 'Professional interior painter with 5 years of experience',
    skills: ['Painting', 'Wall Repair', 'Furniture Assembly'],
    verified: true,
    location: {
      lat: 28.6129,
      lng: 77.2295,
      address: 'East Delhi, India'
    }
  },
  {
    id: 'user-3',
    name: 'Amit Patel',
    email: 'amit@example.com',
    phone: '+91 9876543212',
    role: 'worker',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    totalReviews: 32,
    createdAt: '2023-07-10T09:20:00.000Z',
    bio: 'Certified plumber specializing in residential work',
    skills: ['Plumbing', 'Installation', 'Maintenance'],
    verified: true,
    location: {
      lat: 28.5355,
      lng: 77.3910,
      address: 'Noida, UP, India'
    }
  },
  {
    id: 'user-4',
    name: 'Neha Gupta',
    email: 'neha@example.com',
    phone: '+91 9876543213',
    role: 'client',
    avatar: 'https://images.unsplash.com/photo-1664575599736-c5197c684153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww',
    rating: 4.6,
    totalReviews: 8,
    createdAt: '2023-10-05T14:15:00.000Z',
    bio: 'Homemaker looking for household services',
    verified: true,
    location: {
      lat: 28.4595,
      lng: 77.0266,
      address: 'Gurugram, HR, India'
    }
  },
  {
    id: 'user-5',
    name: 'Raj Kumar',
    email: 'raj@example.com',
    phone: '+91 9876543214',
    role: 'worker',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    totalReviews: 41,
    createdAt: '2023-06-12T11:50:00.000Z',
    bio: 'Full stack web developer with expertise in React and Node.js',
    skills: ['Web Development', 'UI/UX Design', 'Mobile App Development'],
    verified: true,
    location: {
      lat: 12.9716,
      lng: 77.5946,
      address: 'Bangalore, India'
    }
  },
  {
    id: 'user-6',
    name: 'Admin User',
    email: 'admin@workbridge.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 5.0,
    totalReviews: 0,
    createdAt: '2023-01-01T00:00:00.000Z',
    verified: true
  }
];

// Mock Tasks
export const TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Bathroom Plumbing Repair',
    description: 'Need to fix a leaking sink and replace the shower head in my bathroom. The sink has been leaking for about a week and water pressure in the shower is very low.',
    category: 'Home Services',
    subcategory: 'Plumbing',
    clientId: 'user-1',
    status: 'open',
    budget: {
      min: 2000,
      max: 3500
    },
    location: {
      lat: 28.6139,
      lng: 77.2090,
      address: 'Connaught Place, Delhi, India'
    },
    images: [
      'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1534137667199-675a39f476d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D'
    ],
    createdAt: '2023-11-10T09:30:00.000Z',
    deadline: '2023-11-15T18:00:00.000Z',
    bids: [
      {
        id: 'bid-1',
        taskId: 'task-1',
        workerId: 'user-3',
        amount: 2800,
        message: 'I can fix this in 2 hours. Have all necessary tools and replacement parts.',
        status: 'pending',
        createdAt: '2023-11-11T10:15:00.000Z'
      }
    ]
  },
  {
    id: 'task-2',
    title: 'Website Development for Small Business',
    description: 'Looking for a web developer to create a responsive website for my small retail business. Need product catalog, contact form, and about page. Design should be modern and mobile-friendly.',
    category: 'Professional',
    subcategory: 'Web Development',
    clientId: 'user-4',
    status: 'open',
    budget: {
      min: 15000,
      max: 30000
    },
    location: {
      lat: 28.4595,
      lng: 77.0266,
      address: 'Sector 29, Gurugram, Haryana, India'
    },
    images: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D'
    ],
    createdAt: '2023-11-08T14:45:00.000Z',
    deadline: '2023-12-10T23:59:00.000Z',
    bids: [
      {
        id: 'bid-2',
        taskId: 'task-2',
        workerId: 'user-5',
        amount: 25000,
        message: 'I specialize in creating modern, responsive websites for small businesses. Can deliver in 3 weeks with all requested features.',
        status: 'pending',
        createdAt: '2023-11-09T16:20:00.000Z'
      }
    ]
  },
  {
    id: 'task-3',
    title: 'Living Room Painting',
    description: 'Need to paint my living room (approximately 20x15 feet) with premium quality paint. The walls need minor repairs before painting. I have already purchased the paint (light beige color).',
    category: 'Home Services',
    subcategory: 'Painting',
    clientId: 'user-4',
    status: 'open',
    budget: {
      min: 5000,
      max: 8000
    },
    location: {
      lat: 28.4595,
      lng: 77.0266,
      address: 'DLF Phase 4, Gurugram, Haryana, India'
    },
    images: [
      'https://images.unsplash.com/photo-1562663464-36b9b99558c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmclMjB3YWxsc3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhaW50aW5nJTIwd2FsbHN8ZW58MHx8MHx8fDA%3D'
    ],
    createdAt: '2023-11-09T11:20:00.000Z',
    deadline: '2023-11-20T18:00:00.000Z',
    bids: [
      {
        id: 'bid-3',
        taskId: 'task-3',
        workerId: 'user-2',
        amount: 6500,
        message: 'I can complete this job in 2 days with wall repairs and proper finishing. Have 5 years of experience in interior painting.',
        status: 'pending',
        createdAt: '2023-11-10T09:45:00.000Z'
      }
    ]
  },
  {
    id: 'task-4',
    title: 'Furniture Delivery and Assembly',
    description: 'Need someone to pick up a desk from the furniture store and assemble it at my home. The store is about 10 km from my location. The desk is boxed and weighs approximately 30 kg.',
    category: 'Home Services',
    subcategory: 'Furniture Assembly',
    clientId: 'user-1',
    status: 'open',
    budget: {
      min: 1500,
      max: 2500
    },
    location: {
      lat: 28.6129,
      lng: 77.2295,
      address: 'Laxmi Nagar, Delhi, India'
    },
    images: [
      'https://images.unsplash.com/photo-1595515106969-3bca31fea6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwYXNzZW1ibHl8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww'
    ],
    createdAt: '2023-11-11T13:10:00.000Z',
    deadline: '2023-11-14T20:00:00.000Z',
    bids: []
  },
  {
    id: 'task-5',
    title: 'Digital Marketing Strategy',
    description: 'Looking for a digital marketing expert to create a 3-month strategy for my online business. Need help with social media, content marketing, and SEO optimization. Budget is negotiable for the right candidate.',
    category: 'Professional',
    subcategory: 'Marketing',
    clientId: 'user-1',
    status: 'open',
    budget: {
      min: 20000,
      max: 35000
    },
    location: {
      lat: 28.6139,
      lng: 77.2090,
      address: 'Rajouri Garden, Delhi, India'
    },
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D'
    ],
    createdAt: '2023-11-07T16:35:00.000Z',
    deadline: '2023-11-21T23:59:00.000Z',
    bids: []
  }
];

// Get a task with its client populated
export const getTaskWithClient = (taskId: string) => {
  const task = TASKS.find(t => t.id === taskId);
  if (!task) return null;
  
  const client = USERS.find(u => u.id === task.clientId);
  return {
    ...task,
    client
  };
};

// Get a task with its bids and workers populated
export const getTaskWithBids = (taskId: string) => {
  const task = TASKS.find(t => t.id === taskId);
  if (!task) return null;
  
  const bidsWithWorkers = task.bids.map(bid => {
    const worker = USERS.find(u => u.id === bid.workerId);
    return {
      ...bid,
      worker
    };
  });
  
  return {
    ...task,
    bids: bidsWithWorkers
  };
};

// Get filtered tasks
export const getFilteredTasks = (filters: {
  category?: string;
  search?: string;
  status?: string;
}) => {
  return TASKS.filter(task => {
    // Filter by category
    if (filters.category && task.category !== filters.category) {
      return false;
    }
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const matchesTitle = task.title.toLowerCase().includes(searchTerm);
      const matchesDescription = task.description.toLowerCase().includes(searchTerm);
      if (!matchesTitle && !matchesDescription) {
        return false;
      }
    }
    
    // Filter by status
    if (filters.status && task.status !== filters.status) {
      return false;
    }
    
    return true;
  });
};

// Generate a new bid for a task
export const createBid = (taskId: string, workerId: string, amount: number, message?: string): Bid => {
  return {
    id: `bid-${Date.now()}`,
    taskId,
    workerId,
    amount,
    message,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
};
