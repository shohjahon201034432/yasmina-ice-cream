# Yasmina Ice Cream — Angular + Node.js Fullstack v2

Component-based premium website scaffold for Yasmina Ice Cream.

## Stack
- Frontend: Angular standalone components + Angular Router
- Backend: Node.js + Express + SQLite + JWT
- Features: sign in, sign up, UZ/EN/RU language switcher, light/dark theme, premium multi-page layout

## Frontend pages
- `/` Home
- `/flavors`
- `/story`
- `/contact`
- `/auth/sign-in`
- `/auth/sign-up`

## Backend endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/flavors`
- `POST /api/contact`

## Quick start
### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

Angular app expects backend at `http://localhost:3000/api`.

## Notes
- This project is prepared as a deployable scaffold with structured files.
- You should run `npm install` and test locally before production deployment.
- For production, build Angular and serve static files via Nginx/Vercel/Netlify, and deploy backend separately.
"# yasmina-ice-cream" 
