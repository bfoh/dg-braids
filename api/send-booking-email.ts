import { Resend } from 'resend';

// Make Resend optional for testing
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendBookingEmails(bookingData: {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  stylist?: string;
}) {
  try {
    // If no Resend API key, log the booking but don't send emails
    if (!resend) {
      console.log('⚠️  Resend API key not configured. Booking logged but emails not sent.');
      console.log('Booking details:', bookingData);
      console.log('To enable emails, add RESEND_API_KEY to .env.local');

      return {
        success: true,
        message: 'Booking received (emails disabled - configure Resend to enable)',
      };
    }

    console.log('📧 Sending booking emails...');
    console.log('Customer email:', bookingData.email);

    // Send confirmation to customer
    // Note: Using onboarding@resend.dev for testing. Replace with your verified domain email in production.
    const customerEmail = await resend.emails.send({
      from: 'DG Braids <onboarding@resend.dev>',
      to: [bookingData.email],
      subject: 'Booking Confirmation - DG Braids',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #5D4037; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 30px; }
              .booking-details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
              .detail-label { font-weight: bold; color: #5D4037; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
              .button { background-color: #D84315; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Booking Confirmed!</h1>
              </div>
              <div class="content">
                <p>Dear ${bookingData.name},</p>
                <p>Thank you for booking with DG Braids! We're excited to see you.</p>
                
                <div class="booking-details">
                  <h2 style="color: #5D4037; margin-top: 0;">Your Appointment Details</h2>
                  <div class="detail-row">
                    <span class="detail-label">Service:</span>
                    <span>${bookingData.service}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span>${bookingData.date}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Time:</span>
                    <span>${bookingData.time}</span>
                  </div>
                  ${bookingData.stylist ? `
                  <div class="detail-row">
                    <span class="detail-label">Stylist:</span>
                    <span>${bookingData.stylist}</span>
                  </div>
                  ` : ''}
                </div>

                <h3 style="color: #5D4037;">Important Information:</h3>
                <ul>
                  <li>Please arrive 10 minutes before your appointment</li>
                  <li>Come with clean, detangled, and blow-dried hair</li>
                  <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
                </ul>

                <p><strong>Our Location:</strong><br>
                7 Birks Street<br>
                Stoke-on-Trent, UK</p>

                <p><strong>Contact Us:</strong><br>
                Phone: +44 7386 899257<br>
                Email: info@dgbraids.com</p>

                <p>We look forward to seeing you!</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} DG Braids. All Rights Reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('✅ Customer email sent successfully');

    // Send notification to salon owner
    // For testing, sending to the same email. In production, replace with actual owner email.
    const ownerEmail = await resend.emails.send({
      from: 'DG Braids Bookings <onboarding@resend.dev>',
      to: [bookingData.email], // Using customer email for testing. Replace with owner email in production.
      subject: `New Booking: ${bookingData.service} - ${bookingData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #5D4037; color: white; padding: 20px; }
              .content { background-color: #f9f9f9; padding: 30px; }
              .booking-details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
              .detail-label { font-weight: bold; color: #5D4037; display: inline-block; width: 150px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 New Booking Received!</h1>
              </div>
              <div class="content">
                <div class="booking-details">
                  <h2 style="color: #5D4037; margin-top: 0;">Booking Details</h2>
                  <div class="detail-row">
                    <span class="detail-label">Customer Name:</span>
                    <span>${bookingData.name}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span>${bookingData.email}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span>${bookingData.phone}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Service:</span>
                    <span>${bookingData.service}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span>${bookingData.date}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Time:</span>
                    <span>${bookingData.time}</span>
                  </div>
                  ${bookingData.stylist ? `
                  <div class="detail-row">
                    <span class="detail-label">Preferred Stylist:</span>
                    <span>${bookingData.stylist}</span>
                  </div>
                  ` : ''}
                </div>
                <p style="color: #666; font-size: 14px;">
                  A confirmation email has been sent to the customer at ${bookingData.email}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('✅ Owner notification sent successfully');
    console.log('📧 All emails sent!');
    console.log('Customer email ID:', customerEmail.data?.id);
    console.log('Owner email ID:', ownerEmail.data?.id);

    return {
      success: true,
      customerEmailId: customerEmail.data?.id,
      ownerEmailId: ownerEmail.data?.id,
    };
  } catch (error) {
    console.error('❌ Error sending emails:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
