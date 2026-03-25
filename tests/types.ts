// types.ts

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
};

export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

export type PaginationParams = {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
};

export type AppTheme = 'light' | 'dark' | 'system';

export type AppConfig = {
  theme: AppTheme;
  locale: string;
  notificationsEnabled: boolean;
};

export type NavigationRoute = {
  name: string;
  params?: Record<string, unknown>;
};

export type ErrorResponse = {
  message: string;
  code: string;
  statusCode: number;
  details?: Record<string, unknown>;
};

export type NetworkStatus = 'idle' | 'loading' | 'success' | 'error';