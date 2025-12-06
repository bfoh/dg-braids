export interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  category: 'adult' | 'kids' | 'extension';
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
}

export interface BookingState {
  step: number;
  service: string;
  stylist: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}
