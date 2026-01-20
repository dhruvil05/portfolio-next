"use server";

import { Resend } from 'resend';

interface EmailData {
    name: string;
    email: string;
    company: string;
    industry: string;
    projectScale: string;
    message: string;
}

export async function sendInquiryEmail(data: EmailData) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("Missing RESEND_API_KEY");
        return { success: false, error: "Email configuration missing" };
    }

    const resend = new Resend(apiKey);

    try {
        const response = await resend.emails.send({
            from: 'Nova Agency <onboarding@resend.dev>',
            to: ['dhruvil.patel23117@gmail.com'],
            subject: `New Technical Inquiry: ${data.name} - ${data.company}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 12px; padding: 32px; color: #09090b;">
                    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 24px; border-bottom: 1px solid #e4e4e7; padding-bottom: 16px;">New Inquiry Received</h2>
                    
                    <div style="margin-bottom: 24px;">
                        <p style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #71717a; margin-bottom: 4px;">Contact Details</p>
                        <p style="font-size: 16px; margin: 0;"><strong>Name:</strong> ${data.name}</p>
                        <p style="font-size: 16px; margin: 0;"><strong>Email:</strong> ${data.email}</p>
                        <p style="font-size: 16px; margin: 0;"><strong>Company:</strong> ${data.company || 'Not specified'}</p>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <div>
                            <p style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #71717a; margin-bottom: 4px;">Industry</p>
                            <p style="font-size: 16px; margin: 0;">${data.industry}</p>
                        </div>
                        <div style="margin-top: 12px;">
                            <p style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #71717a; margin-bottom: 4px;">Project Scale</p>
                            <p style="font-size: 16px; margin: 0;">${data.projectScale}</p>
                        </div>
                    </div>

                    <div style="margin-bottom: 32px;">
                        <p style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #71717a; margin-bottom: 4px;">Technical Requirements</p>
                        <div style="background-color: #f4f4f5; padding: 16px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
                    </div>

                    <p style="font-size: 12px; color: #71717a; text-align: center; margin-top: 40px; border-top: 1px solid #e4e4e7; padding-top: 16px;">
                        This inquiry was sent from the Nova Agency Contact Form.
                    </p>
                </div>
            `,
        });

        if (response.error) {
            console.error("Resend API returned an error:", response.error);
            return { success: false, error: response.error.message };
        }

        console.log("Resend API success:", response.data);
        return { success: true, data: response.data };
    } catch (err: any) {
        console.error("CRITICAL: Server Action Exception:", err.message);
        return { success: false, error: "Internal server error" };
    }
}
