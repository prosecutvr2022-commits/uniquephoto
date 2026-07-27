export type ServiceCategory = 
  | 'All' 
  | 'Wedding' 
  | 'Portrait & Baby' 
  | 'Corporate & Events' 
  | 'Drone & Live' 
  | 'Event Management';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  iconName: string;
  popular?: boolean;
  image: string;
}

export type GalleryCategory = 
  | 'All'
  | 'Weddings'
  | 'Engagement'
  | 'Reception'
  | 'Baby Shoot'
  | 'Maternity'
  | 'Fashion'
  | 'Corporate'
  | 'Events'
  | 'Drone Photography'
  | 'Cinematic Films';

export interface PortfolioItem {
  id: string;
  title: string;
  category: GalleryCategory;
  location: string;
  image: string;
  videoUrl?: string;
  type: 'image' | 'video';
  description: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  priceEstimate: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  includes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  event: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking' | 'Services' | 'Delivery' | 'Event Management' | 'Travel';
}

export interface JotformLead {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  services: string[];
  budget: string;
  preferredContactTime: string;
  additionalRequirements: string;
}

export interface SubmissionRecord extends JotformLead {
  id: string;
  createdAt: string;
  status: string;
}
