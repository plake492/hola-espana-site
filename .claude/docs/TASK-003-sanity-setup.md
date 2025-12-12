# TASK-003: Sanity CMS Setup

**Objective:** Initialize Sanity CMS and configure basic connection between Next.js and Sanity.

**Prerequisites:** TASK-002 completed and verified

**Estimated Time:** 25-30 minutes

---

## Background: Why Sanity CMS?

Sanity is a headless CMS that allows non-technical users to:
- Create and edit blog posts
- Manage services and packages
- Update team member information
- All through an easy-to-use interface (Sanity Studio)

We're using it because the client is non-technical and wants easy content management.

---

## Steps

### 1. Initialize Sanity

Run Sanity initialization **from your project root**:

```bash
npm create sanity@latest -- --template clean --create-project "Hola España" --dataset production --output-path ./sanity
```

**Prompts to answer:**
- Create new project: Yes
- Project name: "Hola España"
- Dataset: production
- Would you like to add configuration files: Yes
- Select TypeScript: Yes
- Package manager: npm
- Install dependencies: Yes

This creates a `/sanity` directory in your project.

### 2. Get Sanity Project Credentials

After initialization completes, note the output:

```
✔ Success! Your Sanity project is ready.
Project ID: abc123xyz
Dataset: production
```

### 3. Update .env.local

Add your Sanity credentials to `.env.local`:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="abc123xyz"  # Replace with your actual project ID
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
SANITY_API_TOKEN=""  # Will add later when needed

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Create Sanity Client for Next.js

Create `src/lib/sanity/client.ts`:

```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})
```

### 5. Create Sanity Config File

Create `src/lib/sanity/config.ts`:

```typescript
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
}
```

### 6. Test Sanity Studio

Start Sanity Studio:

```bash
cd sanity
npm run dev
```

This should open Sanity Studio at `http://localhost:3333`

---

## Verification Checklist

- [ ] Sanity directory exists in project root
- [ ] Sanity Studio runs at localhost:3333
- [ ] Can log into Sanity Studio (uses Google/GitHub auth)
- [ ] Project ID is in `.env.local`
- [ ] Client file compiles without TypeScript errors
- [ ] No errors in terminal when importing client

## Review Points

### 1. Project Structure Check
```
hola-espana/
├── sanity/
│   ├── schema.ts
│   ├── schemas/
│   ├── sanity.config.ts
│   ├── package.json
│   └── ...
├── src/
│   ├── lib/
│   │   └── sanity/
│   │       ├── client.ts
│   │       └── config.ts
│   └── ...
└── .env.local
```

### 2. Environment Variables
- Open `.env.local`
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` matches your Sanity project
- Verify `NEXT_PUBLIC_SANITY_DATASET` is "production"
- Note: These are PUBLIC variables (prefixed with NEXT_PUBLIC_)

### 3. Sanity Studio Access
- Navigate to localhost:3333
- Should see Sanity Studio login screen
- Login with Google or GitHub
- Should see empty studio (no content types yet - that's TASK-004)

### 4. Client Connection Test

Create a test file `src/lib/sanity/test.ts`:

```typescript
import { client } from './client'

export async function testConnection() {
  try {
    const result = await client.fetch('*[_type == "test"][0]')
    console.log('Sanity connection successful:', result)
    return true
  } catch (error) {
    console.error('Sanity connection failed:', error)
    return false
  }
}
```

You can test this in your app, but it won't return data until we create schemas in TASK-004.

---

## Understanding Sanity Setup

### What We Created

1. **Sanity Studio** (`/sanity` directory)
   - Admin interface for content management
   - Runs separately from Next.js app
   - Accessed at localhost:3333

2. **Sanity Client** (`src/lib/sanity/client.ts`)
   - Connects Next.js to Sanity API
   - Used to fetch data in components
   - Configured with project ID and dataset

3. **Environment Variables**
   - Store Sanity credentials
   - `NEXT_PUBLIC_*` makes them available client-side
   - Required for API connection

### Two Servers Running

During development, you'll run TWO servers:

```bash
# Terminal 1: Next.js app
npm run dev  # localhost:3000

# Terminal 2: Sanity Studio
cd sanity && npm run dev  # localhost:3333
```

---

## Common Issues & Solutions

**Issue:** "Failed to fetch project"  
**Solution:** Check internet connection, Sanity may be down

**Issue:** Can't log into Sanity Studio  
**Solution:** Clear browser cookies or try different browser

**Issue:** "Project ID not found"  
**Solution:** Double-check project ID in `.env.local` matches Sanity dashboard

**Issue:** TypeScript error on `client.ts`  
**Solution:** Ensure `@sanity/client` and `next-sanity` are installed

**Issue:** Sanity Studio shows white screen  
**Solution:** Check browser console for errors, may need to clear cache

---

## Getting an API Token (For Later)

You don't need this now, but when you need write access from Next.js:

1. Go to https://sanity.io/manage
2. Select your project
3. Go to API settings
4. Add new token with "Editor" permissions
5. Add to `.env.local` as `SANITY_API_TOKEN=`

**Note:** This is optional for now. We only need read access initially.

---

## Sanity Project Dashboard

You can manage your project at: https://sanity.io/manage

Features available:
- View API usage
- Manage team members
- Configure CORS (if needed later)
- Generate API tokens
- View datasets

---

## Next Steps

After verification passes, proceed to:
- **TASK-004:** Create Sanity Schema - Blog Post

---

## Notes for AI Agents

- Keep both servers running during development
- Sanity Studio is separate from Next.js app
- We'll create content schemas in TASK-004
- Don't proceed until you can access Sanity Studio
- Document any connection issues in Context7
