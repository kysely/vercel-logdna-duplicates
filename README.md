## Bug replication: Duplicates in LogDNA from Vercel

This repo replicates issue with LogDNA integration on Vercel.

It has following pages:
- `/` (SSR) redirects to dashboard
- `/dashboard` (SSR) 
- `/[catchAllRoute]` (SSR) catches all other routes dynamically

Think of this routing strategy as how GitHub routes:
- their own pages via statically defined routes
- user content via dynamic routes

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the development server:

```bash
npm run dev
# or
yarn dev
```