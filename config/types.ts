// types.ts

export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: Location;
  startTime: Date;
  endTime: Date;
  organizerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface APIResponse<T> {
  data: T | null;
  error: string | null;
  status: number; // HTTP status code
}

export interface AppContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  userLocation: Location | null;
  setUserLocation: (location: Location | null) => void;
}

export interface NavigationProps {
  navigation: any; // Replace 'any' with specific navigation type if available (e.g., StackNavigationProp, etc.)
  route: any;      // Replace 'any' with specific route type if available (e.g., RouteProp, etc.)
}