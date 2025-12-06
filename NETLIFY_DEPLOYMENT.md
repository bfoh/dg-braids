# Netlify Deployment Guide

This guide will help you deploy the DG Braids website to Netlify.

## Prerequisites

1. A Netlify account (sign up at [netlify.com](https://netlify.com))
2. A Resend account with an API key (for email functionality)
3. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Install Dependencies

First, install the Netlify Functions dependency:

```bash
npm install
```

## Step 2: Configure Environment Variables

Before deploying, you need to set up environment variables in Netlify:

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following environment variable:
   - `RESEND_API_KEY` - Your Resend API key for sending booking confirmation emails

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the key and add it to Netlify environment variables

## Step 3: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended for first deployment)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**

### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Step 4: Verify Deployment

After deployment:

1. Visit your Netlify site URL
2. Test the booking form at `/booking`
3. Check that emails are being sent correctly

## Project Structure

```
dg-braids/
├── netlify.toml          # Netlify configuration
├── netlify/
│   └── functions/
│       └── book.ts       # Netlify function for booking API
├── api/
│   ├── server.ts         # Express server (for local development)
│   └── send-booking-email.ts  # Email sending logic
└── pages/
    └── Booking.tsx       # Booking form (uses Netlify function in production)
```

## How It Works

- **Development**: The app uses the Express server running on `localhost:3001` for API calls
- **Production**: The app automatically uses Netlify Functions at `/.netlify/functions/book`

The `Booking.tsx` component automatically detects the environment and uses the appropriate endpoint.

## Local Development with Netlify Functions

To test Netlify Functions locally:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Run the dev server with Netlify Functions:
   ```bash
   netlify dev
   ```

This will:
- Start the Vite dev server
- Run Netlify Functions locally
- Simulate the production environment

## Troubleshooting

### Emails Not Sending

1. **Check Environment Variables**: Ensure `RESEND_API_KEY` is set in Netlify
2. **Check Function Logs**: Go to Netlify dashboard → Functions → View logs
3. **Verify Resend API Key**: Make sure your Resend API key is valid and active

### Function Not Found (404)

1. **Check Function Name**: Ensure the function file is named `book.ts` in `netlify/functions/`
2. **Check Build Logs**: Look for errors during the build process
3. **Verify netlify.toml**: Ensure the configuration file is correct

### Build Failures

1. **Check Node Version**: Netlify uses Node 18 by default (configured in `netlify.toml`)
2. **Check Dependencies**: Ensure all dependencies are listed in `package.json`
3. **Check Build Logs**: Review the build output in Netlify dashboard

## Custom Domain

To add a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions
4. Update your Resend email settings to use your custom domain (for production emails)

## Continuous Deployment

Once connected to Git, Netlify will automatically:
- Deploy when you push to the main branch
- Create preview deployments for pull requests
- Run builds automatically

## Support

For issues or questions:
- Check Netlify documentation: [docs.netlify.com](https://docs.netlify.com)
- Check function logs in Netlify dashboard
- Review build logs for errors

