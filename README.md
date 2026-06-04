# An Luật Public Site

Emergency public website for `anluat.com`.

## Launch scope

- Static company and service information
- Verified phone contact links
- About, editorial-status, privacy, robots and sitemap pages
- No intake form, AI endpoint, admin dashboard or browser-side PII storage

## Local verification

Use Node.js 22:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

## Vercel deployment

1. Import this directory as a Vercel project.
2. Keep the detected framework as Next.js.
3. Deploy without runtime environment variables.
4. `anluat.com` and `www.anluat.com` are already attached to the Vercel project.
5. At the third-party DNS provider, add:

   ```text
   A  @    76.76.21.21
   A  www  76.76.21.21
   ```

6. Remove conflicting `A`, `AAAA` or `CNAME` records for these hosts.
7. Re-run the launch smoke checks after Vercel reports both domains as valid and TLS is active.

## Launch smoke checks

- `/`, `/ve-an-luat`, `/chuyen-nghe`, `/quyen-rieng-tu`
- `/robots.txt` and `/sitemap.xml`
- Both telephone links on desktop and mobile
- Canonical URLs use `https://anluat.com`
- Security headers are present
- No `/api/gemini/analyze`, intake or admin route is publicly available

Current production alias: `https://anluatcom.vercel.app`
