export type UserRole = 'free' | 'basic' | 'pro' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  stripeCustomerId?: string;
  subscriptionId?: string;
  subscriptionStatus?: 'active' | 'canceled' | 'past_due';
}

export interface Calculation {
  id: string;
  userId: string;
  type: 'ohm' | 'queda';
  inputs: Record<string, number | string>;
  results: Record<string, number | string>;
  timestamp: Date;
  notes?: string;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'basic' | 'pro';
  status: 'active' | 'canceled' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  stripeSubscriptionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OhmCalculation {
  voltage?: number;
  current?: number;
  resistance?: number;
  power?: number;
  powerFactor?: number;
}

export interface QuedaCalculation {
  voltage: number;
  current: number;
  length: number;
  conductorType: 'copper' | 'aluminum';
  conductorSize: number;
  temperatureFactor?: number;
  agrupationFactor?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
