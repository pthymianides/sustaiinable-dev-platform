export interface UserRole {
  id: string;
  name: 'admin' | 'editor' | 'viewer';
}

export interface User {
  id: string;
  email: string;
  roles: UserRole[];
}