# Booking System Setup Guide

## Overview

The booking system has been revamped to provide a simple, functional workflow:
1. Users select a service
2. Choose an available date and time
3. Enter their contact information
4. Receive email confirmation
5. Salon owner receives booking notification

## Setting Up Resend Email Service

### Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Go to "API Keys" section
3. Click "Create API Key"
4. Copy the API key (starts with `re_`)

### Step 3: Add Your Domain (Optional but Recommended)

For production use:
1. Go to "Domains" in Resend dashboard
2. Add your domain (e.g., `dgbraids.com`)
3. Add the DNS records they provide to your domain registrar
4. Wait for verification (usually a few minutes)

For testing, you can use the default Resend domain.

### Step 4: Configure Environment Variables

Create a `.env.local` file in the project root with:

```
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit this file to Git. It's already in `.gitignore`.

### Step 5: Update Email Addresses

In `api/send-booking-email.ts`, update the email addresses:

1. **Line 17**: Change `from` address to your verified domain email:
   ```typescript
   from: 'DG Braids <bookings@yourdomain.com>',
   ```

2. **Line 95**: Change owner notification email to the actual salon owner email:
   ```typescript
   to: ['owner@yourdomain.com'],
   ```

## Running the Application

### Development Mode

The booking system requires both the frontend and a simple API server.

#### Option 1: Using a Simple Backend (Recommended)

1. Install Express:
   ```bash
   npm install express @types/express tsx
   ```

2. Run the API server:
   ```bash
   npx tsx api/server.ts
   ```

3. In a separate terminal, run the Vite dev server:
   ```bash
   npm run dev
   ```

#### Option 2: Using Serverless Functions (Vercel/Netlify)

If deploying to Vercel or Netlify, they support serverless functions out of the box.

For Vercel:
- The `api/` folder will automatically become serverless functions
- No additional configuration needed

For Netlify:
- Move `api/` contents to `netlify/functions/`
- Update the fetch URL in `Booking.tsx` to `/.netlify/functions/book`

## Testing the Booking System

1. Navigate to `/booking` in your browser
2. Select a service (prices updated: Adult £40, Kids £30, Extensions £50)
3. Choose a date (Sundays are excluded)
4. Select a time slot (9 AM - 6 PM)
5. Fill in contact details
6. Click "Confirm Booking"
7. Check both emails:
   - Customer should receive confirmation at their email
   - Owner should receive notification at configured email

## Troubleshooting

### Emails Not Sending

1. **Check API Key**: Ensure `RESEND_API_KEY` is set correctly in `.env.local`
2. **Check Console**: Look for error messages in the browser console and terminal
3. **Verify Domain**: If using custom domain, ensure DNS records are verified
4. **Check Limits**: Free tier has 100 emails/day limit

### API Endpoint Not Found

1. **Check Server**: Ensure the API server is running on port 3001
2. **Check URL**: Verify the fetch URL in `Booking.tsx` matches your setup
3. **CORS Issues**: If running on different ports, you may need to configure CORS

### Form Not Submitting

1. **Check Required Fields**: All fields must be filled
2. **Check Network Tab**: Look for failed requests in browser DevTools
3. **Check Validation**: Ensure email format is valid

## Email Templates

The system sends two types of emails:

### Customer Confirmation Email
- Professional HTML template
- Includes all booking details
- Salon location and contact information
- Preparation instructions

### Owner Notification Email
- Summary of new booking
- Customer contact details
- Booking date and time
- Service requested

Both templates can be customized in `api/send-booking-email.ts`.

## Next Steps

### Recommended Enhancements

1. **Database Integration**: Store bookings in a database (Supabase, Firebase)
2. **Calendar Integration**: Sync with Google Calendar
3. **SMS Notifications**: Add Twilio for SMS confirmations
4. **Payment Integration**: Add Stripe for deposits
5. **Admin Dashboard**: Create a dashboard to manage bookings
6. **Availability Management**: Let owner block out unavailable times

### Production Deployment

1. **Environment Variables**: Set `RESEND_API_KEY` in your hosting platform
2. **Domain Setup**: Configure custom domain in Resend
3. **Email Addresses**: Update all email addresses to production values
4. **Testing**: Thoroughly test the booking flow
5. **Monitoring**: Set up error tracking (Sentry, LogRocket)

## Support

For issues with:
- **Resend**: Check [Resend Documentation](https://resend.com/docs)
- **Booking System**: Review the code comments in `Booking.tsx` and `send-booking-email.ts`
