# Netlify Deployment Checklist

## ✅ Pre-Deployment Setup Complete

The following has been configured for Netlify deployment:

### Files Created/Modified:

1. **`netlify.toml`** - Netlify configuration file
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
   - Function bundler: esbuild

2. **`netlify/functions/book.ts`** - Netlify serverless function
   - Handles booking API requests
   - Includes CORS support
   - Uses the same email sending logic as the Express server

3. **`pages/Booking.tsx`** - Updated to use Netlify function in production
   - Automatically detects environment
   - Uses `/.netlify/functions/book` in production
   - Falls back to `localhost:3001` in development

4. **`package.json`** - Added `@netlify/functions` dependency

5. **`.gitignore`** - Added `.env` files to ignore list

6. **`.nvmrc`** - Specifies Node 18 for consistency

### Documentation:

- **`NETLIFY_DEPLOYMENT.md`** - Complete deployment guide

## 🚀 Next Steps for Deployment:

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables in Netlify
- Go to Netlify Dashboard → Site Settings → Environment Variables
- Add: `RESEND_API_KEY` (your Resend API key)

### 3. Deploy to Netlify

**Option A: Via Netlify UI**
1. Push code to Git repository
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Build settings are auto-detected from `netlify.toml`
6. Click "Deploy site"

**Option B: Via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### 4. Test After Deployment
- Visit your Netlify site URL
- Test the booking form at `/booking`
- Verify emails are being sent

## 📝 Important Notes:

- **Environment Variables**: Must be set in Netlify dashboard (not in `.env` files)
- **Email Configuration**: Update the "from" email in `api/send-booking-email.ts` to use your verified domain
- **Local Development**: The Express server (`npm run api`) still works for local development
- **Production**: The app automatically uses Netlify Functions when deployed

## 🔍 Testing Locally with Netlify Functions:

```bash
npm install -g netlify-cli
netlify dev
```

This runs both the Vite dev server and Netlify Functions locally.

## ⚠️ Before Going Live:

1. Update email "from" address in `api/send-booking-email.ts` (currently uses `onboarding@resend.dev`)
2. Update owner notification email (currently sends to customer email for testing)
3. Verify your Resend domain is configured
4. Test the booking flow end-to-end

## 🐛 Troubleshooting:

- **Function not found**: Check that `netlify/functions/book.ts` exists
- **Emails not sending**: Verify `RESEND_API_KEY` is set in Netlify
- **Build fails**: Check Node version (should be 18)
- **CORS errors**: Already handled in the function code

