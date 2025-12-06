# Quick Start Guide

## The Error You're Seeing

The "Network error" happens because the booking form needs an API server to send emails, but it's not running yet.

## How to Fix It

You need to run TWO servers:

### Step 1: Start the API Server (New Terminal)

Open a **new terminal window** and run:

```bash
cd /Users/ebenezerbarning/Desktop/dg-braids
npm run api
```

You should see:
```
✅ API server running on http://localhost:3001
📧 Ready to process bookings
```

### Step 2: Keep Your Frontend Running

Your current terminal with `npm run dev` should stay running.

### Step 3: Set Up Resend (Required for Emails)

1. Go to [resend.com](https://resend.com) and create a free account
2. Get your API key from the dashboard
3. Create a file called `.env.local` in your project root:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
4. Restart the API server (`npm run api`)

## Testing Without Resend (Temporary)

If you want to test the booking flow without setting up Resend yet, the form will work but emails won't be sent. You'll see the success screen, but no actual emails will go out.

## Summary

**Two terminals needed:**
- Terminal 1: `npm run dev` (frontend - already running)
- Terminal 2: `npm run api` (backend - start this now)

Once both are running, the booking form will work!
