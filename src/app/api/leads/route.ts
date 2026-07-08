import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { projectData } from "@/config/projectData";

// Initializing Resend instance securely with server-side environment variable tokens
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, mobile, email } = body;

    // Validate absolute requirement variables before dispatching pipeline payloads
    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: "Missing mandatory lead credentials." },
        { status: 400 }
      );
    }

    // High-contrast, premium dark/gold responsive email template block
    const htmlEmailTemplate = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e9e9e9; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #bca374; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #111111; font-size: 20px; font-weight: 400; margin: 0; text-transform: uppercase; tracking: 0.05em;">
            New Luxury Lead Captured
          </h2>
          <p style="color: #777777; font-size: 12px; margin: 4px 0 0 0;">Project Reference Platform: ${projectData.title}</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <tbody>
            <tr>
              <th style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555555; font-size: 13px; text-transform: uppercase; width: 30%;">Prospect Name</th>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <th style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555555; font-size: 13px; text-transform: uppercase;">Mobile Number</th>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 14px; font-weight: 500; font-family: monospace;">+91 ${mobile}</td>
            </tr>
            <tr>
              <th style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555555; font-size: 13px; text-transform: uppercase;">Email Address</th>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 14px;"><a href="mailto:${email}" style="color: #bca374; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <th style="padding: 10px 0; color: #555555; font-size: 13px; text-transform: uppercase;">Captured On</th>
              <td style="padding: 10px 0; color: #111111; font-size: 14px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
            </tr>
          </tbody>
        </table>
        
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #f0f0f0; text-align: center;">
          <p style="color: #999999; font-size: 11px; margin: 0;">Automated lead routing engine managed securely via cloud channels.</p>
        </div>
      </div>
    `;

    // Dispatching structural parameters over to Resend gateway instances
    const { data, error } = await resend.emails.send({
      from: "ACE Parkway <sales@aceparkwayexp.in>", // Updated to point directly to your verified domain identity
      to: ["realtyfmleads@gmail.com"],            // Updated to route securely straight to your lead workspace inbox
      subject: `🚨 [Lead Captured] - ${name} is interested in ${projectData.title}`,
      html: htmlEmailTemplate,
      replyTo: email, // Lets you hit reply directly to contact the prospect immediately
    });

    if (error) {
      console.error("Resend API rejected transmission:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("Critical error inside background transmission router pipeline:", err);
    return NextResponse.json(
      { error: "Internal exceptions processing client lead generation sequences." },
      { status: 500 }
    );
  }
}