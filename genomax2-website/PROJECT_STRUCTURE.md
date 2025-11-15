# 📁 GenoMAX² Project Structure

## Complete File Organization

```
genomax2-website/
│
├── 📄 START_HERE.md                 ⭐ Read this first!
├── 📄 README.md                     Complete technical documentation
├── 📄 LOVABLE_DEPLOYMENT.md         Step-by-step deployment guide
├── 📄 QUICK_START.md                Launch checklist
│
├── 📦 Configuration Files
│   ├── package.json                 Dependencies & scripts
│   ├── tsconfig.json                TypeScript configuration
│   ├── tailwind.config.js           Brand colors & design system
│   ├── next.config.js               Next.js settings
│   ├── postcss.config.js            CSS processing
│   ├── .gitignore                   Git ignore rules
│   └── .env.example                 Environment variables template
│
├── 📱 app/                          Application pages (Next.js App Router)
│   ├── page.tsx                     🏠 Homepage (gender selection)
│   ├── layout.tsx                   Root layout (navigation, fonts, SEO)
│   ├── globals.css                  Global styles & brand classes
│   │
│   ├── maxima/                      👩 Women's section
│   │   └── page.tsx                 MAXima² complete landing page
│   │
│   ├── maximo/                      👨 Men's section
│   │   └── page.tsx                 MAXimo² complete landing page
│   │
│   └── api/                         API routes (to be built)
│       └── (empty - ready for your endpoints)
│
└── 🗄️ prisma/                       Database schema
    └── schema.prisma                Complete database models (7 tables)
```

---

## 📱 App Directory Explained (Next.js 14 App Router)

### How Next.js App Router Works
- Each `page.tsx` file becomes a route
- `layout.tsx` wraps all pages
- Folders create URL paths

### Current Routes
```
/                    → app/page.tsx           (Homepage)
/maxima              → app/maxima/page.tsx    (Women's page)
/maximo              → app/maximo/page.tsx    (Men's page)
```

### Routes to Build
```
/assessment          → Create: app/assessment/page.tsx
/dashboard           → Create: app/dashboard/page.tsx
/login               → Create: app/login/page.tsx
/signup              → Create: app/signup/page.tsx
```

---

## 🎨 Styling System

### Global Styles (`app/globals.css`)
Contains:
- Tailwind directives
- Custom component classes
- Brand utilities

### Custom Classes Available
```css
.btn-primary              # MAXima² button (pink/purple)
.btn-primary-maximo       # MAXimo² button (navy blue)
.btn-secondary            # Secondary button (outline)
.section-container        # Page container with max-width
.gradient-text-maxima     # Gradient text for women
.gradient-text-maximo     # Gradient text for men
```

### Using Colors in Code
```tsx
// Tailwind classes
className="bg-maxima-600"          // Women's primary color
className="bg-maximo-600"          // Men's primary color
className="text-brand-gray-600"   // Neutral gray

// Gradients
className="bg-gradient-maxima"     // Women's gradient
className="bg-gradient-maximo"     // Men's gradient
```

---

## 🗄️ Database Schema Overview

### Models (7 Total)

1. **User**
   - Basic user information
   - Gender, email, name
   - Links to all other models

2. **Assessment**
   - AI health assessment responses
   - Demographics, goals, lifestyle
   - Symptoms, medical history
   - Gender-specific questions

3. **BloodTest**
   - Blood biomarker results
   - 28 key markers tracked
   - Tier system (Essential/Complete/Premium)

4. **Protocol**
   - Personalized supplement recommendations
   - Dosages and timing
   - Reasoning for recommendations

5. **Subscription**
   - Billing information
   - Plan details
   - Stripe integration ready

6. **ChatMessage**
   - AI Advisor chat history
   - User and assistant messages

7. **BetaSignup**
   - Early interest capture
   - Pre-user signups

---

## 📦 Dependencies

### Core Framework
```json
"next": "14.2.0"              // Latest Next.js
"react": "^18.3.0"            // Latest React
"typescript": "^5.3.0"        // TypeScript
```

### Styling
```json
"tailwindcss": "^3.4.0"       // Utility-first CSS
"autoprefixer": "^10.4.0"     // CSS vendor prefixes
"postcss": "^8.4.0"           // CSS processing
```

### Database
```json
"@prisma/client": "^5.10.0"   // Database client
"prisma": "^5.10.0"           // Schema management
```

### Authentication (Ready to Use)
```json
"next-auth": "^4.24.0"        // Authentication
```

### AI & APIs (Ready to Use)
```json
"openai": "^4.28.0"           // AI Advisor
"stripe": "^14.17.0"          // Payments
```

### Forms (Ready to Use)
```json
"react-hook-form": "^7.50.0"  // Form management
"zod": "^3.22.0"              // Validation
```

### UI Components (Ready to Use)
```json
"lucide-react": "^0.344.0"    // Icons
"recharts": "^2.12.0"         // Charts
"date-fns": "^3.3.0"          // Date handling
```

---

## 🚀 Key Scripts

### Development
```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check code for issues
```

### Database
```bash
npx prisma db push      # Push schema to database
npx prisma studio       # Open database GUI
npx prisma generate     # Generate Prisma client
```

---

## 📝 Configuration Files Explained

### `package.json`
- Lists all dependencies
- Defines scripts (dev, build, start)
- Project metadata

### `tsconfig.json`
- TypeScript compiler settings
- Path aliases (@/ points to root)
- Strict type checking enabled

### `tailwind.config.js`
- Custom brand colors (maxima, maximo)
- Font families (Inter, Space Grotesk)
- Gradient utilities
- Responsive breakpoints

### `next.config.js`
- Image optimization settings
- Server actions configuration
- Build optimization

### `.env.example`
- Template for environment variables
- Copy to `.env` and fill in values
- Never commit `.env` to git!

---

## 🎯 File Naming Conventions

### Pages
- Always `page.tsx` for routes
- Always `layout.tsx` for layouts

### Components (when you build them)
- PascalCase: `Button.tsx`, `Header.tsx`
- Folder per component if complex

### API Routes
- Lowercase: `route.ts` in `app/api/folder/`

### Utilities
- camelCase: `formatDate.ts`, `validateEmail.ts`

---

## 🔧 Environment Variables

### Required for Production
```env
NEXTAUTH_SECRET=             # Session encryption key
NEXTAUTH_URL=                # Your production URL
```

### Optional (Add When Ready)
```env
DATABASE_URL=                # PostgreSQL connection string
OPENAI_API_KEY=              # For AI features
STRIPE_SECRET_KEY=           # For payments
GOOGLE_CLIENT_ID=            # For Google login
```

---

## 📚 Documentation Files

### `START_HERE.md` (⭐ Main guide)
- Overview of everything
- Quick deployment steps
- What works vs what to build

### `README.md` (Technical docs)
- Complete architecture guide
- Setup instructions
- Feature specifications
- API documentation

### `LOVABLE_DEPLOYMENT.md` (Deployment guide)
- Platform-specific instructions
- Environment setup
- Custom domain configuration
- Troubleshooting

### `QUICK_START.md` (Checklist)
- Action items
- Timeline
- Cost estimates
- Success metrics

---

## 🎨 Brand Assets Location

### Colors
- Defined in: `tailwind.config.js`
- Used in: `app/globals.css`

### Fonts
- Loaded in: `app/layout.tsx`
- Inter (body text)
- Space Grotesk (headlines)

### Components Styles
- Defined in: `app/globals.css`
- Button styles
- Section containers
- Text utilities

---

## 🔄 Development Workflow

### Making Changes
1. Edit files in `app/` directory
2. Changes auto-reload in browser
3. Check for TypeScript errors
4. Test on mobile (cmd + shift + M in Chrome)

### Adding New Pages
1. Create folder in `app/`
2. Add `page.tsx` in that folder
3. Route is automatically created!

### Adding Components
1. Create `components/` folder
2. Add your component files
3. Import into pages

---

## 💻 IDE Recommendations

### VS Code Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prisma
- ESLint
- Prettier

### File Opening Order (First Time)
1. `START_HERE.md` - Overview
2. `app/page.tsx` - See homepage code
3. `app/maxima/page.tsx` - See landing page
4. `tailwind.config.js` - See brand colors
5. `prisma/schema.prisma` - See database design

---

## 📦 What's NOT Included (Intentionally)

These will be generated automatically:
- `node_modules/` - Dependencies (run `npm install`)
- `.next/` - Build output (run `npm run dev`)
- `.env` - Environment variables (copy from `.env.example`)

These will be created by you:
- `components/` - Reusable UI components
- `lib/` - Utility functions
- `types/` - TypeScript type definitions
- `public/` - Static assets (images, etc.)

---

## ✅ Quick Reference

### Start Development
```bash
npm install      # First time only
npm run dev      # Every time
```

### Deploy to Lovable
1. Upload `genomax2-website.zip`
2. Wait for automatic build
3. Add environment variables
4. Done!

### Deploy to Vercel
1. Push to GitHub
2. Import in Vercel
3. Auto-deploys!

---

## 🎯 What to Focus On

### ✅ Already Perfect
- Page routing
- Styling system
- Type safety
- Responsive design
- SEO setup

### 🏗️ Build Next
- AI Assessment pages
- User authentication
- Database connection
- API endpoints
- Dashboard

---

**This structure is production-ready and scalable!** 🚀

Everything is organized logically for easy development and maintenance.
