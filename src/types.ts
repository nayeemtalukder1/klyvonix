/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'marketing' | 'design' | 'development' | 'strategy';
}

export interface Project {
  id: string;
  title: string;
  category: 'Social Media' | 'Brand Identity' | 'Web Development' | 'Video Ads' | 'Marketing Content';
  description: string;
  metrics: string;
  accentColor: string;
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty: string;
  skills: { name: string; percentage: number }[];
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  text: string;
  date: string;
}
