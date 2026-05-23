# Enable booking emails (5 minutes)

The form posts to `/api/book`, which sends email via [Resend](https://resend.com).

## 1. Create a Resend account

1. Go to https://resend.com and sign up (free tier is fine).
2. Open **API Keys** → **Create API Key**.
3. Copy the key (starts with `re_`).

## 2. Local development

In the project folder (`ac-lawcare`), create `.env.local`:

```
RESEND_API_KEY=re_your_actual_key_here
RESEND_FROM_EMAIL=W Land Management <onboarding@resend.dev>
```

**Restart the dev server** after saving:

```bash
npm run dev
```

## 3. Resend free tier note

On the free plan you can send **from** `onboarding@resend.dev`. Emails can go to **sujalshah77715@gmail.com** once your Resend account uses that email, or after you verify a domain.

If send fails with a domain error, verify your domain in Resend or use the email on your Resend account as the test recipient first.

## 4. Production (Vercel / Netlify / etc.)

Add the same variables in your host’s **Environment Variables**:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (optional)

Redeploy after saving.

## 5. Test

Submit the form on `/book`. You should see “Request received” and get an email at **sujalshah77715@gmail.com**.
