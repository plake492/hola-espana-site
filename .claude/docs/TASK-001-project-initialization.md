# TASK-001: Project Initialization

**Objective:** Set up the basic Next.js project structure with TypeScript and Tailwind CSS v4.

**Prerequisites:** Node.js 18+ installed

**Estimated Time:** 15-20 minutes

---

## Steps

### 1. Create Next.js project

```bash
npx create-next-app@latest hola-espana --typescript --tailwind --app --src-dir
cd hola-espana
```

**Prompts to select:**
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Import alias: Yes (default @/*)

### 2. Install core dependencies

```bash
npm install @sanity/client @sanity/image-url next-sanity
npm install @portabletext/react
npm install lucide-react
npm install @react-spring/web
npm install date-fns
npm install clsx tailwind-merge
npm install react-intersection-observer
```

### 3. Install dev dependencies

```bash
npm install -D @types/node
```

### 4. Create environment variables file

Create `.env.local` in project root:

```bash
# Sanity CMS (will populate in TASK-003)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_API_TOKEN=

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Vercel Analytics (will populate in TASK-008)
# No env var needed - uses automatic detection
```

### 5. Verify .gitignore includes environment files

Ensure `.gitignore` contains:
```
# local env files
.env*.local
.env

# vercel
.vercel
```

---

## Verification Checklist

- [ ] Project runs with `npm run dev`
- [ ] Can access localhost:3000
- [ ] No TypeScript errors in terminal
- [ ] `.env.local` exists and is not tracked by git
- [ ] All dependencies installed successfully (check package.json)

## Review Points

### 1. Package.json Check
- Verify all dependencies are present
- Check that versions are compatible
- Ensure scripts are correct (dev, build, start)

### 2. Folder Structure
```
hola-espana/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── ...
├── public/
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

### 3. TypeScript Configuration
- Open `tsconfig.json` and verify paths are configured
- Check that `@/*` alias points to `./src/*`

### 4. Security Check
- Confirm `.env.local` is in `.gitignore`
- Verify no sensitive data in git history

---

## Common Issues & Solutions

**Issue:** `npm run dev` fails with module not found  
**Solution:** Delete `node_modules` and `package-lock.json`, run `npm install` again

**Issue:** Port 3000 already in use  
**Solution:** Kill the process or use different port: `npm run dev -- -p 3001`

**Issue:** TypeScript errors about missing types  
**Solution:** Run `npm install -D @types/react @types/node`

---

## Next Steps

After verification passes, proceed to:
- **TASK-002:** Tailwind CSS v4 Theme Setup

---

## Notes for AI Agents

- Do not proceed to TASK-002 until all verification steps pass
- If any verification fails, address the issue before continuing
- Document any deviations or issues in Context7 `.context7/tasks.md`
- This is a clean slate - no previous code should exist
