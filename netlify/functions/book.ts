import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { sendBookingEmails } from '../../api/send-booking-email.js';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: 'Method not allowed',
      }),
    };
  }

  try {
    console.log('Received booking request:', event.body);

    const bookingData = JSON.parse(event.body || '{}');
    const { service, date, time, name, email, phone, stylist } = bookingData;

    // Validate required fields
    if (!service || !date || !time || !name || !email || !phone) {
      console.error('Missing required fields');
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields',
        }),
      };
    }

    // Send emails
    console.log('Sending emails...');
    const result = await sendBookingEmails({
      service,
      date,
      time,
      name,
      email,
      phone,
      stylist,
    });

    if (result.success) {
      console.log('Emails sent successfully');
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: true,
          message: 'Booking confirmed! Check your email for details.',
        }),
      };
    } else {
      console.error('Failed to send emails:', result.error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Failed to send confirmation emails',
        }),
      };
    }
  } catch (error) {
    console.error('Booking error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: 'An error occurred while processing your booking',
      }),
    };
  }
};

