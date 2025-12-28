# XSNAP Fantasy Cricket

A free-to-play fantasy cricket platform built for educational and entertainment purposes. Users can build dream teams, compete on leaderboards, and learn cricket strategy without any financial risk.

## 🎯 About

**Company:** XSNAP IMAGING PRIVATE LIMITED  
**CIN:** U31909MH2019PTC325365  
**PAN:** AAACX2946B

XSNAP Fantasy Cricket is India's premier free-to-play fantasy cricket platform, backed by investors who believe in fantasy education. Our mission is to help users learn and enjoy fantasy cricket without financial pressure.

## ✨ Key Features

### 🆓 100% Free-to-Play
- No real money deposits or withdrawals
- No monetary prizes or rewards
- Recognition on leaderboards only
- Pure entertainment and education

### 🔐 Custom Authentication
- Email/password registration and login
- JWT-based session management
- Secure password hashing with bcrypt
- Password reset functionality

### ⚖️ Compliance & Safety
- **Age Restriction:** 18+ only
- **State Restrictions:** Not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim
- Age verification during registration
- State-based access control

### 🏏 Fantasy Cricket Features
- Match selection (T20, ODI, Test formats)
- Team builder with budget constraints (100 credits)
- Player selection with role-based filtering
- Leaderboard rankings
- User dashboard with statistics
- Profile management

### 📱 Multi-Page Application
- Homepage with hero section
- About Us, How To Play, FAQ
- Terms & Conditions, Privacy Policy
- Fair Play Policy, Responsible Gaming
- Blog with cricket tips and strategies
- Contact page with company information

### 🎨 Modern Design
- XSNAP brand colors (Blue #0066CC, Gold #FFB81C)
- Glossy effects and smooth animations
- Responsive design for all devices
- Custom fonts (Poppins for headings, Inter for body)

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Wouter** - Routing
- **Shadcn/UI** - Component library
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### Backend
- **Node.js** - Runtime
- **Express** - Web server
- **tRPC 11** - Type-safe API
- **Drizzle ORM** - Database ORM
- **MySQL** - Database
- **bcrypt** - Password hashing
- **jose** - JWT tokens

## 📦 Installation

### Prerequisites
- Node.js 22.x or higher
- pnpm package manager
- MySQL database

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd xsnap-fantasy-cricket
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-change-this

# Server Configuration
NODE_ENV=development
PORT=3000
```

4. **Setup database**
```bash
pnpm db:push
```

5. **Start development server**
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🚀 Deployment to Railway

### Step 1: Prepare MySQL Database

1. Create a MySQL database on Railway or any MySQL provider
2. Note down the connection string

### Step 2: Configure Environment Variables

In Railway, add these environment variables:

```
DATABASE_URL=mysql://user:password@host:port/database
JWT_SECRET=your-production-jwt-secret
NODE_ENV=production
```

### Step 3: Deploy

1. Push your code to GitHub
2. Connect Railway to your GitHub repository
3. Railway will automatically detect the Node.js app
4. The build and start commands are already configured in `package.json`:
   - Build: `vite build && esbuild server/_core/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`
   - Start: `NODE_ENV=production node dist/index.js`

### Step 4: Run Database Migrations

After deployment, run:
```bash
pnpm db:push
```

## 📁 Project Structure

```
xsnap-fantasy-cricket/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (logos, images)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and tRPC client
│   │   ├── App.tsx        # Routes and layout
│   │   └── index.css      # Global styles and theme
├── server/                # Backend Express + tRPC
│   ├── _core/             # Core framework code
│   ├── auth.ts            # Authentication utilities
│   ├── authRouters.ts     # Auth tRPC routers
│   ├── db.ts              # Database queries
│   └── routers.ts         # Main tRPC router
├── drizzle/               # Database schema and migrations
│   └── schema.ts          # Database tables definition
├── shared/                # Shared types and constants
└── package.json           # Dependencies and scripts
```

## 🔑 Key Files

### Database Schema (`drizzle/schema.ts`)
Defines all database tables:
- `users` - User accounts with authentication
- `matches` - Cricket matches
- `players` - Cricket players with stats
- `teams` - User-created fantasy teams
- `team_players` - Junction table for team-player relationships
- `leaderboards` - Rankings and scores
- `blog_posts` - Blog content
- `contact_submissions` - Contact form submissions

### Authentication (`server/auth.ts`)
- Password hashing and verification
- JWT token generation and verification
- Age and state validation
- Restricted states list

### API Routes (`server/authRouters.ts`)
- `register` - User registration with validation
- `login` - User authentication
- `logout` - Session termination
- `me` - Get current user
- `requestPasswordReset` - Password reset request
- `resetPassword` - Password reset with token

## 🎮 Usage

### For Users

1. **Register**
   - Visit the homepage and click "Get Started"
   - Provide email, password, name, age, and state
   - Accept terms and conditions
   - Must be 18+ and from allowed states

2. **Build Teams**
   - Browse upcoming matches
   - Select a match to create a team
   - Choose 11 players within 100 credit budget
   - Select captain and vice-captain

3. **Compete**
   - View your teams on the dashboard
   - Track points and rankings
   - Climb the leaderboard

### For Developers

#### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/components/Header.tsx`

#### Adding API Endpoints
1. Define procedure in `server/routers.ts` or create new router
2. Use `publicProcedure` for public endpoints
3. Use `protectedProcedure` for authenticated endpoints
4. Frontend automatically gets type-safe access via tRPC

#### Database Changes
1. Update schema in `drizzle/schema.ts`
2. Run `pnpm db:push` to apply changes
3. Add query helpers in `server/db.ts`

## 🔒 Security Features

- Password hashing with bcrypt (10 rounds)
- JWT tokens with 7-day expiry
- HTTP-only cookies for token storage
- CSRF protection with SameSite cookies
- Age verification (18+)
- State-based access control
- Input validation with Zod schemas

## 📝 Legal Compliance

### Restricted States
The platform is NOT available in:
- Andhra Pradesh
- Assam
- Nagaland
- Odisha
- Sikkim
- Telangana

### Age Restriction
Only users 18 years and older are permitted to use this platform.

### Disclaimer
This is a skill-based, free-to-play platform with no real money involved. It is designed for entertainment and educational purposes only.

## 🤝 Contributing

This is a private project for XSNAP IMAGING PRIVATE LIMITED. For inquiries, contact support@xsnap.in

## 📧 Contact

**Head Office:**  
HOUSE NO.260, NEAR SAI PAPERS, JAMBHALL, BADALPUR  
Thane, Maharashtra, India, 421503

**Regional Office:**  
53/35, Ramjas Rd, Block 53, Karol Bagh  
New Delhi, Delhi 110005, India

**Email:** support@xsnap.in

## 📄 License

Copyright © 2025 XSNAP IMAGING PRIVATE LIMITED. All rights reserved.

## 🚧 Roadmap

### Completed ✅
- Custom authentication system
- All informational and legal pages
- Team builder interface
- Leaderboard system
- User dashboard
- Responsive design

### Pending 🔄
- Multi-language support (Hindi, Tamil, Telugu, Marathi)
- Cricket API integration for live match data
- Real-time score updates
- Captain/vice-captain selection
- Team editing functionality
- Email verification system
- Advanced player statistics
- Push notifications

## 🐛 Known Issues

- TypeScript errors in `server/_core/sdk.ts` related to unused Manus OAuth code (doesn't affect functionality)
- Multi-language support not yet implemented
- Cricket match data is currently placeholder (requires API integration)

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Railway Deployment](https://railway.app/)

---

**Built with ❤️ for cricket fans across India**
