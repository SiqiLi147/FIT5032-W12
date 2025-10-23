# Authentication System Documentation

## Overview
This Vue.js application implements a complete authentication system with protected routes, login/logout functionality, and conditional content rendering based on user authentication status.

## Features Implemented

### 1. Login System
- **Login Page**: `src/views/LoginView.vue`
- **Credentials**: 
  - Username: `admin`
  - Password: `password123`
- **Features**:
  - Form validation
  - Error handling
  - Loading states
  - Redirect to intended page after login

### 2. Authentication State Management
- **File**: `src/isLoggedIn.js`
- **Features**:
  - Persistent authentication state using localStorage
  - Login/logout functions
  - Automatic state restoration on page refresh

### 3. Protected Routes
- **About Page**: Requires authentication
- **Navigation Guards**: Automatically redirect unauthenticated users to login
- **Redirect Handling**: Returns users to intended page after successful login

### 4. Conditional Navigation
- **Header Component**: `src/components/BHeader.vue`
- **Features**:
  - Shows "About" link only for authenticated users
  - Shows "Login" link for unauthenticated users
  - Shows "Logout" button for authenticated users

### 5. Conditional Content Rendering
- **Home Page**: Shows different content based on authentication status
- **About Page**: Only accessible to authenticated users
- **Forms and Data**: Registration form and data tables only visible to authenticated users

## How to Use

### For Users
1. **Accessing Protected Pages**: 
   - Navigate to `/about` without logging in
   - You'll be automatically redirected to `/login`
   - After successful login, you'll be redirected back to `/about`

2. **Login Process**:
   - Use username: `admin` and password: `password123`
   - Click "Login" button
   - You'll be redirected to the page you were trying to access

3. **Logout**:
   - Click the "Logout" button in the header
   - You'll be redirected to the login page

### For Developers
1. **Adding New Protected Routes**:
   ```javascript
   {
     path: '/new-route',
     name: 'NewRoute',
     component: NewRouteView,
     meta: { requiresAuth: true }
   }
   ```

2. **Checking Authentication Status**:
   ```javascript
   import { isLoggedIn } from '../isLoggedIn.js'
   
   // In template
   <div v-if="isLoggedIn">Protected content</div>
   ```

3. **Programmatic Login/Logout**:
   ```javascript
   import { login, logout } from '../isLoggedIn.js'
   
   // Login
   login()
   
   // Logout
   logout()
   ```

## Technical Implementation

### Navigation Guards
- **Location**: `src/router/index.js`
- **Function**: `router.beforeEach()`
- **Purpose**: Protects routes with `meta: { requiresAuth: true }`

### State Persistence
- **Storage**: localStorage
- **Key**: `isLoggedIn`
- **Value**: `'true'` or `'false'`

### Component Architecture
- **Reactive State**: Uses Vue 3 Composition API with `ref()`
- **Conditional Rendering**: `v-if`, `v-else` directives
- **Event Handling**: Form submission, button clicks

## Security Notes
- **Current Implementation**: Uses hardcoded credentials for demonstration
- **Production Use**: Should implement proper backend authentication
- **Password Storage**: Never store passwords in localStorage in production
- **Session Management**: Consider implementing JWT tokens for production

## Testing the System
1. Start the development server: `npm run dev`
2. Try accessing `/about` without logging in
3. Login with the provided credentials
4. Verify you can access protected content
5. Test logout functionality
6. Verify authentication state persists across page refreshes

