# GenoMAX² - Lovable Deployment Guide

## Quick Start for Lovable

This is a complete Next.js 14 application ready for deployment on Lovable or any modern hosting platform.

### What's Included

✅ **Working Pages:**
- Homepage with gender selection (/)
- MAXima² landing page for women (/maxima)
- MAXimo² landing page for men (/maximo)

✅ **Complete Setup:**
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS with GenoMAX² brand colors
- Prisma database schema
- All dependencies defined

✅ **Ready to Build:**
- 9-step AI assessment (specs included)
- Blood biomarker recommendations
- AI Advisor chat
- Calendar integration
- Payment processing

## Deployment Options

### Option 1: Deploy to Lovable (Recommended)

1. **Upload Project to Lovable:**
   - Go to https://lovable.dev
   - Create new project or import existing
   - Upload the entire `genomax2-website` folder
   - Lovable will automatically detect Next.js structure

2. **Lovable Will Handle:**
   - Automatic dependency installation
   - Build configuration
   - Deployment to production URL
   - SSL certificate setup

3. **Configure Environment Variables in Lovable:**
   ```
   DATABASE_URL=your_postgresql_connection_string
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=https://your-lovable-url.lovable.app
   ```

4. **Done!** Lovable deploys automatically

### Option 2: Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   cd genomax2-website
   git init
   git add .
   git commit -m "Initial GenoMAX² website"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Add environment variables
   - Deploy!

### Option 3: Deploy to Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. Add environment variables in Netlify dashboard

## Local Development

### Prerequisites
- Node.js 18+ and npm 9+
- PostgreSQL database (optional for full features)

### Setup Steps

1. **Install Dependencies:**
   ```bash
   cd genomax2-website
   npm install
   ```

2. **Set Up Environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   ```
   http://localhost:3000
   ```

## Database Setup (Optional)

The application works without a database for the landing pages. To enable full features:

### Using Vercel Postgres

1. Create Vercel Postgres database
2. Copy connection string to `DATABASE_URL`
3. Run migrations:
   ```bash
   npx prisma db push
   ```

### Using Supabase

1. Create Supabase project
2. Get PostgreSQL connection string
3. Add to `DATABASE_URL`
4. Run migrations:
   ```bash
   npx prisma db push
   ```

## Environment Variables Explained

### Required for Production
- `NEXTAUTH_SECRET`: Random string for session encryption
- `NEXTAUTH_URL`: Your production URL

### Optional (for full features)
- `DATABASE_URL`: PostgreSQL connection string
- `OPENAI_API_KEY`: For AI Advisor chat
- `STRIPE_SECRET_KEY`: For payment processing
- `GOOGLE_CLIENT_ID`: For Google OAuth login

## Project Structure

```
genomax2-website/
├── app/
│   ├── page.tsx              # Homepage (gender selection)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── maxima/
│   │   └── page.tsx          # Women's landing page
│   └── maximo/
│       └── page.tsx          # Men's landing page
├── prisma/
│   └── schema.prisma         # Database schema
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind + brand colors
├── next.config.js            # Next.js config
└── .env.example              # Environment template
```

## What's Working Now

✅ Responsive design (mobile + desktop)
✅ Gender-specific landing pages
✅ Brand colors and typography
✅ Navigation between pages
✅ Beta signup forms (frontend only)
✅ SEO optimization

## What Needs Building

The landing pages are complete. These features need development:

### Week 1-2: AI Assessment
- 9-step questionnaire flow
- Progress indicator
- Form validation
- Results page

### Week 3-4: Blood Test Integration
- Test kit ordering
- Results upload
- Biomarker visualization
- Recommendations generation

### Week 5-6: User Dashboard
- Protocol display
- Adherence tracking
- Progress metrics
- Settings

### Week 7-8: AI Advisor
- Chat interface
- OpenAI integration
- Context-aware responses
- Chat history

### Week 9-10: Calendar Integration
- Google Calendar sync
- Reminder scheduling
- Event creation

### Week 11-12: Payment System
- Stripe integration
- Subscription management
- Billing portal

## Brand Guidelines

### Colors
- **MAXima² (Women):** Purple/Pink gradient (`maxima-500` to `maxima-700`)
- **MAXimo² (Men):** Navy Blue gradient (`maximo-500` to `maximo-700`)
- **Neutrals:** Brand grays for text and backgrounds

### Typography
- **Headlines:** Space Grotesk (font-display)
- **Body:** Inter (font-sans)

### Components
- Use `btn-primary` for MAXima² CTAs
- Use `btn-primary-maximo` for MAXimo² CTAs
- Use `btn-secondary` for secondary actions
- Use `section-container` for page containers

## Testing

### Manual Testing Checklist
- [ ] Homepage loads and displays both options
- [ ] Clicking MAXima² navigates to women's page
- [ ] Clicking MAXimo² navigates to men's page
- [ ] Navigation between pages works
- [ ] Mobile responsive design works
- [ ] All images and icons display
- [ ] Forms are functional (frontend)

### Automated Testing
```bash
npm run lint  # Check for code issues
npm run build # Test production build
```

## Troubleshooting

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (need 18+)
- Clear `.next` folder and rebuild

### Styling Issues
- Verify Tailwind CSS is configured correctly
- Check `globals.css` is imported in layout
- Ensure custom colors are in `tailwind.config.js`

### Database Connection
- Verify `DATABASE_URL` is correct format
- Check database is accessible from your deployment
- Run `npx prisma db push` to sync schema

## Support

For technical questions about this codebase:
- Check the inline code comments
- Review the Prisma schema for database structure
- See Next.js 14 documentation for App Router

## Next Steps

1. **Deploy Landing Pages:** Get the site live with working gender-specific pages
2. **Set Up Analytics:** Add Google Analytics or Mixpanel
3. **Build Assessment:** Start with the 9-step AI questionnaire
4. **Add Database:** Set up PostgreSQL for user data
5. **Integrate APIs:** Connect OpenAI, Stripe, blood test services

---

**Ready to launch!** The foundation is solid and production-ready. Build features incrementally and ship fast.
