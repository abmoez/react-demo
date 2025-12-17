// ============================================
// API Service Layer
// Best Practice: Centralize all API calls
// ============================================

import type { ApiResponse, User, ContactFormData } from '../types';
import { sleep } from '../utils/helpers';

// Base API URL - in real app, use environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Generic fetch wrapper with error handling
 */
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    return {
      data: null as T,
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}

// ============================================
// Auth API (Simulated for demo)
// ============================================

export const authApi = {
  /**
   * Login user - simulated for demo
   */
  login: async (email: string, _password: string): Promise<ApiResponse<User>> => {
    // Simulate API call delay
    await sleep(1000);

    // Demo: Accept any email/password
    const user: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      role: 'user',
    };

    // Store in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'demo-token-12345');

    return { data: user, success: true, message: 'Login successful!' };
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  /**
   * Get current user from storage
   */
  getCurrentUser: (): User | null => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  },
};

// ============================================
// Contact API (Simulated for demo)
// ============================================

export const contactApi = {
  /**
   * Submit contact form
   */
  submit: async (data: ContactFormData): Promise<ApiResponse<{ id: string }>> => {
    await sleep(1500);

    // Simulate successful submission
    console.log('Contact form submitted:', data);

    return {
      data: { id: 'contact-' + Date.now() },
      success: true,
      message: 'Thank you! We will get back to you soon.',
    };
  },
};

// ============================================
// Generic Data API
// ============================================

export const dataApi = {
  get: <T>(endpoint: string) => fetchApi<T>(endpoint),
  post: <T>(endpoint: string, body: unknown) =>
    fetchApi<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  put: <T>(endpoint: string, body: unknown) =>
    fetchApi<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    }),
  delete: <T>(endpoint: string) =>
    fetchApi<T>(endpoint, { method: 'DELETE' }),
};

