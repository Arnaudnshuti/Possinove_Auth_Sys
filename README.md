# User Authentication System

A complete full-stack user authentication system built with Spring Boot (backend), PostgreSQL (database), and React.js (frontend) with modern UI components.

## 🚀 Features

### Backend (Spring Boot + PostgreSQL + JWT + BCrypt)
- ✅ Spring Boot REST API with PostgreSQL integration
- ✅ User entity with JPA/Hibernate ORM
- ✅ JWT-based authentication with secure token generation
- ✅ BCrypt password hashing for security
- ✅ Spring Security configuration with JWT filters
- ✅ Registration API with email uniqueness validation
- ✅ Login API with authentication
- ✅ Protected dashboard endpoint
- ✅ CORS configuration for frontend integration

### Frontend (React.js + Tailwind CSS + shadcn/ui + Framer Motion)
- ✅ Modern React.js application with TypeScript
- ✅ Beautiful UI with Tailwind CSS and shadcn/ui components
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design for desktop and mobile
- ✅ Dark mode support
- ✅ Protected routes with authentication
- ✅ Login and Registration pages with validation
- ✅ Dashboard with user information display
- ✅ JWT token management with localStorage
- ✅ Error handling and user feedback

## 🛠️ Tech Stack

### Backend
- **Spring Boot 3.5.5** - Java framework
- **PostgreSQL** - Database
- **Spring Security** - Authentication and authorization
- **JWT (jjwt)** - Token-based authentication
- **BCrypt** - Password hashing
- **JPA/Hibernate** - ORM
- **Maven** - Dependency management

### Frontend
- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icons

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Java 21** or higher
- **Maven 3.6+**
- **PostgreSQL 12+**
- **Node.js 16+**
- **npm** or **yarn**

## 🚀 Quick Start

### 1. Database Setup

1. Install PostgreSQL and create a database:
```sql
CREATE DATABASE user_auth_db;
```

2. Update the database credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/user_auth_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 2. Backend Setup

1. Navigate to the project root directory:
```bash
cd UserAunthentication
```

2. Install dependencies and run the Spring Boot application:
```bash
mvn clean install
mvn spring-boot:run
```

The backend will be available at `http://localhost:8080`

### 3. Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
# Create .env.local file
echo "REACT_APP_API_URL=http://localhost:8080" > .env.local
```

4. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
UserAunthentication/
├── src/
│   └── main/
│       ├── java/
│       │   └── UserAuthenticationSystem/
│       │       └── UserAunthentication/
│       │           ├── config/          # Security configuration
│       │           ├── controller/      # REST controllers
│       │           ├── dto/            # Data Transfer Objects
│       │           ├── entity/         # JPA entities
│       │           ├── repository/     # Data repositories
│       │           ├── security/       # JWT filters
│       │           └── service/        # Business logic
│       └── resources/
│           └── application.properties  # Configuration
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   └── types/         # TypeScript types
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🔧 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/dashboard` | Get dashboard data | Yes |

### Request/Response Examples

#### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Dashboard (Protected)
```bash
GET /api/auth/dashboard
Authorization: Bearer <jwt_token>
```

## 🎨 UI Features

- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Dark Mode**: Automatic dark mode support
- **Smooth Animations**: Framer Motion powered transitions
- **Form Validation**: Client-side validation with error messages
- **Loading States**: Beautiful loading indicators
- **Error Handling**: User-friendly error messages

## 🔒 Security Features

- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: BCrypt encryption for passwords
- **CORS Protection**: Configured for secure cross-origin requests
- **Input Validation**: Server-side validation for all inputs
- **Protected Routes**: Frontend route protection
- **Token Expiration**: Automatic token expiration handling

## 🚀 Deployment

### Backend Deployment (Render/Railway)

1. Push your code to GitHub
2. Connect your repository to Render or Railway
3. Set environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `JWT_SECRET`: Your JWT secret key
4. Deploy!

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables:
   - `REACT_APP_API_URL`: Your backend API URL
4. Deploy!

## 🧪 Testing

### Backend Testing
```bash
mvn test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 📝 Environment Variables

### Backend (.env)
```properties
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/user_auth_db
spring.datasource.username=postgres
spring.datasource.password=password

# JWT
jwt.secret=your-secret-key-here
jwt.expiration=86400000

# CORS
cors.allowed-origins=http://localhost:3000
```

### Frontend (.env.local)
```env
REACT_APP_API_URL=http://localhost:8080
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check database credentials in application.properties

2. **CORS Error**
   - Verify CORS configuration in SecurityConfig
   - Check frontend API URL

3. **JWT Token Error**
   - Ensure JWT secret is set
   - Check token expiration time

4. **Frontend Build Error**
   - Run `npm install` to install dependencies
   - Check Node.js version compatibility

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Coding! 🎉**

