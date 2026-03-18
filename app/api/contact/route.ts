import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, area, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#F6F7F9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F6F7F9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #E2E8F0;">

          <!-- Header -->
          <tr>
            <td style="background:#1E3A5F;padding:28px 36px;">
              <p style="margin:0;font-size:20px;font-weight:700;letter-spacing:2px;color:#ffffff;">
                LOY<span style="color:#6A9CC8;">LEGAL</span><sup style="font-size:10px;color:#7A96A8;font-weight:600;"> PH</sup>
              </p>
              <p style="margin:6px 0 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.55);">
                New Consultation Inquiry
              </p>
            </td>
          </tr>

          <!-- Gold rule -->
          <tr><td style="height:3px;background:#C9A84C;"></td></tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 36px 24px;">
              <p style="margin:0 0 20px;font-size:15px;color:#253545;line-height:1.6;">
                A new consultation inquiry has been submitted via the LoyLegal PH website.
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;">
                <tr style="background:#F6F7F9;">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4A6070;width:38%;border-bottom:1px solid #E2E8F0;">
                    Full Name
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#0A1520;border-bottom:1px solid #E2E8F0;">
                    ${firstName} ${lastName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4A6070;border-bottom:1px solid #E2E8F0;">
                    Email
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1E3A5F;border-bottom:1px solid #E2E8F0;">
                    <a href="mailto:${email}" style="color:#1E3A5F;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr style="background:#F6F7F9;">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4A6070;">
                    Practice Area
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#0A1520;">
                    ${area}
                  </td>
                </tr>
              </table>

              <!-- Description -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                <tr>
                  <td style="padding:16px;background:#F6F7F9;border-left:3px solid #1E3A5F;">
                    <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4A6070;">
                      Description of Matter
                    </p>
                    <p style="margin:0;font-size:14px;color:#253545;line-height:1.75;white-space:pre-wrap;">${description}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${email}"
                      style="display:inline-block;padding:12px 28px;background:#1E3A5F;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;">
                      Reply to ${firstName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px;border-top:1px solid #E2E8F0;background:#F6F7F9;">
              <p style="margin:0;font-size:11px;color:#7A96A8;line-height:1.6;">
                This inquiry was submitted through the LoyLegal PH website contact form.
                Reply directly to this email to respond to the client.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: `"LoyLegal PH Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[LoyLegal PH] New Inquiry — ${area} — ${firstName} ${lastName}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
