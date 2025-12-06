import express from 'express';
import { sendBookingEmails } from './send-booking-email.js';

const app = express();

// Enable CORS for frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

app.post('/api/book', async (req, res) => {
    try {
        console.log('Received booking request:', req.body);

        const { service, date, time, name, email, phone, stylist } = req.body;

        // Validate required fields
        if (!service || !date || !time || !name || !email || !phone) {
            console.error('Missing required fields');
            return res.status(400).json({
                success: false,
                error: 'Missing required fields',
            });
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
            return res.status(200).json({
                success: true,
                message: 'Booking confirmed! Check your email for details.',
            });
        } else {
            console.error('Failed to send emails:', result.error);
            return res.status(500).json({
                success: false,
                error: 'Failed to send confirmation emails',
            });
        }
    } catch (error) {
        console.error('Booking error:', error);
        return res.status(500).json({
            success: false,
            error: 'An error occurred while processing your booking',
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API server is running' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ API server running on http://localhost:${PORT}`);
    console.log(`📧 Ready to process bookings`);
});
