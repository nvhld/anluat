# An Luật Website

Public production website for `anluat.com`, with a separate locked review area for internal AI/intake/dashboard previews.

## Launch scope

- Static company and service information
- Verified phone contact links
- About, editorial-status, privacy, robots and sitemap pages
- No public intake form, AI endpoint, admin dashboard or browser-side PII storage
- Internal preview routes for founder/team review:
  - `/noi-bo`
  - `/thuky`
  - `/thu-nghiem/intake`
  - `/thu-nghiem/ai`

## Local verification

Use Node.js 22:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

To test internal preview routes locally, set `INTERNAL_REVIEW_CODE` in a local `.env.local`.

## Vercel deployment

1. Import this directory as a Vercel project.
2. Keep the detected framework as Next.js.
3. Add `INTERNAL_REVIEW_CODE` to the `Production` environment before deploying internal preview routes.
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
- Unauthenticated access to `/thuky` and `/thu-nghiem/*` redirects to `/noi-bo`
- Internal review code grants access to `/thuky`, `/thu-nghiem/intake`, `/thu-nghiem/ai`
- No `/api/gemini/analyze` or production intake/admin workflow is publicly available

Current production alias: `https://anluatcom.vercel.app`
