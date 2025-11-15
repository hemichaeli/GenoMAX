# 🚀 GenoMAX² - Lovable Deployment Instructions

## What is Lovable?

Lovable (https://lovable.dev) is an AI-powered web development platform that can:
- Import existing code projects
- Build and deploy web applications
- Handle hosting and SSL automatically
- Provide a live production URL instantly

## Step-by-Step Deployment to Lovable

### Step 1: Prepare Your Files

You already have everything ready in the `genomax2-website` folder. This includes:
- ✅ Complete Next.js application
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ Homepage + both landing pages
- ✅ Database schema
- ✅ All dependencies defined

### Step 2: Create a ZIP Archive

Lovable accepts projects as ZIP files. Create one:

**On Mac/Linux:**
```bash
cd genomax2-website
zip -r genomax2-lovable.zip . -x "node_modules/*" -x ".next/*" -x ".git/*"
```

**On Windows:**
- Right-click the `genomax2-website` folder
- Select "Send to" → "Compressed (zipped) folder"
- Name it `genomax2-lovable.zip`

**Important:** Exclude these folders to keep the ZIP small:
- `node_modules` (will be reinstalled by Lovable)
- `.next` (build output)
- `.git` (if present)

### Step 3: Upload to Lovable

1. **Go to Lovable:**
   - Visit https://lovable.dev
   - Sign in or create an account

2. **Create New Project:**
   - Click "New Project" or "Import Project"
   - Choose "Upload ZIP" option
   - Select your `genomax2-lovable.zip` file
   - Wait for upload to complete

3. **Lovable Will Automatically:**
   - Detect it's a Next.js 14 project
   - Install all dependencies from `package.json`
   - Configure the build settings
   - Run the build process
   - Deploy to a production URL

4. **You'll Get:**
   - A live URL like: `https://genomax2-[random].lovable.app`
   - Automatic HTTPS/SSL certificate
   - Continuous deployment (future updates)

### Step 4: Configure Environment Variables

After deployment, add your environment variables in Lovable's dashboard:

**Required (Minimum):**
```
NEXTAUTH_SECRET=generate-a-random-string-here
NEXTAUTH_URL=https://your-lovable-url.lovable.app
```

**Optional (for full features):**
```
DATABASE_URL=your_postgresql_connection_string
OPENAI_API_KEY=sk-your-key-here
STRIPE_SECRET_KEY=sk_test_your-key-here
```

To generate a random secret:
```bash
openssl rand -base64 32
```

### Step 5: Access Your Live Site

Once deployed, your site will be live at the Lovable-provided URL!

**What Works:**
- ✅ Homepage with gender selection
- ✅ MAXima² landing page (women)
- ✅ MAXimo² landing page (men)
- ✅ Full responsive design
- ✅ All styling and branding

**What Needs Building:**
- AI Assessment flow
- Blood test integration
- User dashboard
- AI Advisor chat
- Calendar sync
- Payment processing

### Step 6: Custom Domain (Optional)

To use `genomax2.ai`:

1. **In Lovable Dashboard:**
   - Go to Project Settings
   - Add custom domain: `genomax2.ai`
   - Lovable will provide DNS records

2. **In Your Domain Registrar (Hostinger):**
   - Add the DNS records provided by Lovable
   - Usually an A record or CNAME
   - Wait for DNS propagation (15 minutes to 48 hours)

3. **Done!** Your site will be live at genomax2.ai

## Alternative: Deploy to Vercel Instead

If you prefer Vercel over Lovable:

### Option A: Via GitHub

1. **Push to GitHub:**
   ```bash
   cd genomax2-website
   git init
   git add .
   git commit -m "Initial GenoMAX² website"
   git branch -M main
   git remote add origin https://github.com/yourusername/genomax2.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Vercel auto-configures everything
   - Add environment variables
   - Deploy!

### Option B: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd genomax2-website
   vercel
   ```

3. **Follow Prompts:**
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

## Database Setup (When Ready)

The landing pages work without a database. When you're ready for full features:

### Supabase (Recommended)

1. **Create Project:**
   - Go to https://supabase.com
   - Create new project
   - Wait for database to provision

2. **Get Connection String:**
   - Go to Project Settings → Database
   - Copy the connection string (connection pooling)
   - Format: `postgresql://user:pass@host:5432/database`

3. **Add to Environment:**
   ```
   DATABASE_URL="your-supabase-connection-string"
   ```

4. **Push Schema:**
   ```bash
   npx prisma db push
   ```

### Vercel Postgres

1. **Create Database:**
   - In Vercel dashboard
   - Go to Storage → Create Database
   - Choose Postgres

2. **Connect:**
   - Vercel auto-adds `DATABASE_URL`
   - No manual configuration needed

3. **Push Schema:**
   ```bash
   npx prisma db push
   ```

## Troubleshooting

### Upload Fails
- **Problem:** ZIP file too large
- **Solution:** Exclude `node_modules`, `.next`, and `.git` folders

### Build Fails
- **Problem:** Missing dependencies
- **Solution:** Ensure `package.json` is included in ZIP

### Pages Don't Load
- **Problem:** Routing issues
- **Solution:** Verify all files in `app/` directory are included

### Styling Doesn't Work
- **Problem:** Tailwind not processing
- **Solution:** Check `tailwind.config.js` and `globals.css` are included

### Environment Variables Not Working
- **Problem:** Variables not set correctly
- **Solution:** Restart/redeploy after adding variables in dashboard

## Support Contacts

### Lovable Support
- Documentation: https://docs.lovable.dev
- Support: support@lovable.dev

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions

### Next.js Help
- Documentation: https://nextjs.org/docs
- Community: https://github.com/vercel/next.js/discussions

## What's Next?

Once your site is live:

1. **Test Everything:**
   - Visit all pages
   - Test on mobile devices
   - Check all links work
   - Verify images load

2. **Add Analytics:**
   - Google Analytics
   - Mixpanel
   - PostHog

3. **Start Building Features:**
   - Begin with AI Assessment
   - Add user authentication
   - Integrate blood test APIs
   - Build dashboard

4. **Launch Beta:**
   - Announce to target audience
   - Collect signups
   - Gather feedback
   - Iterate quickly

---

**You're ready to go live!** 🚀

The foundation is solid, professional, and production-ready. Deploy now and build features incrementally.
