# StrokeAI - AI-Powered Stroke Risk Prediction Platform

## Overview

StrokeAI is a modern full-stack web application that provides AI-powered stroke risk prediction and analysis. The application combines a React frontend with an Express.js backend to deliver real-time health assessments, comprehensive analytics, and medical-grade insights for stroke prevention.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom medical theme and glassmorphism effects
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Management**: React Hook Form with Zod validation
- **Theme System**: Next-themes for dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling middleware

### Development Environment
- **Build Tool**: Vite for fast development and optimized builds
- **Development Server**: Custom Vite integration with Express
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Module System**: ES modules throughout the stack

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: PostgreSQL schema with proper migrations support
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Models**: Users and stroke predictions with comprehensive health data fields

### AI Prediction Engine
- **Algorithm**: Custom stroke risk calculation based on medical research
- **Input Validation**: Comprehensive health parameter validation using Zod schemas
- **Risk Assessment**: Multi-factor analysis including age, lifestyle, and medical history
- **Confidence Scoring**: Statistical confidence calculation for predictions

### Analytics System
- **Real-time Metrics**: Live dashboard with prediction statistics
- **Risk Distribution**: Population-level risk analysis and visualization
- **Factor Impact Analysis**: Identification of primary risk factors
- **Historical Trends**: Time-series analysis of prediction patterns

### UI/UX Design
- **Medical Theme**: Professional healthcare-focused color scheme
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: WCAG-compliant components with proper ARIA labels
- **Animations**: Smooth transitions and loading states for enhanced UX
- **Component Library**: Comprehensive reusable component system

## Data Flow

1. **User Input**: Health parameters collected through validated forms
2. **Data Validation**: Client-side and server-side validation using Zod schemas
3. **Risk Calculation**: AI algorithm processes health data to generate risk scores
4. **Result Generation**: Comprehensive analysis with recommendations and insights
5. **Data Storage**: Predictions stored for analytics and historical analysis
6. **Real-time Updates**: Dashboard updates automatically with new predictions

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **drizzle-orm**: Type-safe database operations
- **drizzle-zod**: Schema validation integration

### UI Component Libraries
- **@radix-ui/***: Accessible UI primitives for all interactive components
- **class-variance-authority**: Type-safe component variant system
- **clsx & tailwind-merge**: Utility for conditional CSS classes
- **lucide-react**: Consistent icon library
- **embla-carousel-react**: Touch-friendly carousel components

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production builds

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations for schema management
- **Environment**: Production/development environment handling

### Deployment Configuration
- **Static Assets**: Frontend served from `/dist/public`
- **API Routes**: Backend serves `/api/*` endpoints
- **Environment Variables**: Database URL and other secrets via environment
- **Process Management**: Single Node.js process serving both frontend and API

### Production Considerations
- **Database Connection**: Serverless-optimized PostgreSQL connections
- **Error Handling**: Comprehensive error boundaries and logging
- **Performance**: Optimized bundle sizes and lazy loading
- **Security**: Input validation and sanitization at all levels

## Changelog
```
Changelog:
- June 30, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```