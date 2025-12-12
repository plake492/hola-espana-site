# Quick Setup Guide

This guide helps you get started with the Hola España documentation and Claude Code configuration.

---

## 📦 What's Included

```
hola-espana/
├── CLAUDE.md                    # Auto-read by Claude Code (project context)
├── .claude/
│   ├── settings.json           # Team config (commit to git)
│   ├── VERSION-CONTROL.md      # Git guide for .claude folder
│   └── docs/                   # Task documentation (commit to git)
│       ├── README.md           # Documentation index
│       ├── PROJECT-OVERVIEW.md # Business context
│       ├── tasks.md            # Task tracker with checkboxes
│       ├── TASK-001 to 008     # Sequential tasks
│       ├── CONTEXT7-SETUP.md   # Optional Context7 guide
│       ├── SANITY-SCHEMAS-REMAINING.md
│       └── NEXT-STEPS.md       # Weeks 2-7 roadmap
└── .gitignore                  # Includes .claude/settings.local.json
```

---

## 🚀 Getting Started (5 minutes)

### Step 1: Copy Files to Your Project

Copy these files/folders to your `hola-espana` project root:

```bash
# Copy to project root
cp CLAUDE.md /path/to/hola-espana/
cp .gitignore /path/to/hola-espana/
cp -r .claude /path/to/hola-espana/

# Verify structure
cd /path/to/hola-espana
ls -la .claude/
```

You should see:

- `.claude/settings.json` ✅
- `.claude/VERSION-CONTROL.md` ✅
- `.claude/docs/` (folder with 14+ files) ✅

### Step 2: Commit to Git

```bash
cd /path/to/hola-espana

# Add Claude Code config and docs
git add CLAUDE.md
git add .claude/settings.json
git add .claude/docs/
git add .claude/VERSION-CONTROL.md
git add .gitignore

# Commit
git commit -m "Add Claude Code configuration and task documentation"
```

**Note:** `.claude/settings.local.json` is automatically ignored by git (for personal settings).

### Step 3: Read the Documentation

**For humans:**

1. Open `.claude/docs/README.md` - Documentation index
2. Read `.claude/docs/PROJECT-OVERVIEW.md` - Full context
3. Check `.claude/docs/tasks.md` - Current status

**For Claude Code:**

- CLAUDE.md is automatically loaded
- References `.claude/docs/` for detailed tasks

---

## 🎯 Workflow

### Starting a Task

1. **Check status:**

   ```bash
   # Open tasks.md to see what's next
   cat .claude/docs/tasks.md | grep -A 2 "- \[ \]" | head -10
   ```

2. **Read task file:**

   ```bash
   # Example: Starting Task 001
   cat .claude/docs/TASK-001-project-initialization.md
   ```

3. **Execute task** following instructions

4. **Verify completion** using checklist in task file

5. **Update checkbox** in `tasks.md`:

   ```markdown
   - [x] **TASK-001:** Project initialization
   ```

6. **Commit progress:**
   ```bash
   git add .
   git commit -m "Complete TASK-001: Project initialization"
   ```

---

## 🤖 Using with Claude Code

### If Claude Code is Installed

```bash
cd /path/to/hola-espana
claude
```

Claude will automatically:

1. Load `CLAUDE.md` for context
2. Have access to all `.claude/docs/` files
3. Use permissions from `.claude/settings.json`

### Common Commands

```bash
# Check configuration
/config

# View current task status
# (Claude will read .claude/docs/tasks.md)
/file .claude/docs/tasks.md

# Start next task
# "Read the next unchecked task in tasks.md and execute it"

# Check project context
/file CLAUDE.md
```

---

## 📋 Task Tracking

### Updating Checkboxes

**In `.claude/docs/tasks.md`:**

Before:

```markdown
- [ ] **TASK-001:** Project initialization
```

After completion:

```markdown
- [x] **TASK-001:** Project initialization
```

### Task Order

Execute sequentially:

1. TASK-001: Project initialization (15-20 min)
2. TASK-002: Tailwind CSS v4 setup (20-25 min)
3. TASK-003: Sanity CMS integration (25-30 min)
4. TASK-004: Blog schema (30-35 min)
5. TASK-005: UI components (35-40 min)
6. TASK-006: Playground setup (20-25 min)
7. TASK-007: FadeIn animation (30-35 min)
8. TASK-008: Vercel Analytics (15-20 min)

**Total:** ~3-4 hours for all 8 tasks

---

## ⚙️ Configuration Files

### `.claude/settings.json` (Team Config)

**Purpose:** Shared permissions for all developers  
**Commit to Git:** YES  
**Edit when:** Adjusting team-wide tool permissions

**Key sections:**

- `permissions.allow` - Auto-approved operations
- `permissions.ask` - Requires confirmation
- `permissions.deny` - Blocked operations
- `hooks` - Auto-run commands (e.g., Prettier)

### `.claude/settings.local.json` (Personal Config)

**Purpose:** Your personal overrides  
**Commit to Git:** NO (auto-ignored)  
**Create when:** You want different local behavior

**Example:**

```json
{
  "model": "claude-opus-4",
  "permissions": {
    "defaultMode": "acceptEdits"
  }
}
```

---

## 🔧 Optional: Context7 Setup

If you want to use Context7 MCP (more structured documentation):

1. Read `.claude/docs/CONTEXT7-SETUP.md`
2. Create `/docs/context7/` folder
3. Generate `architecture.md`, `conventions.md`, `tasks.md`
4. Configure Context7 MCP in Claude Code

**Note:** Context7 is optional. CLAUDE.md works great on its own!

---

## ❓ Troubleshooting

### "Claude Code doesn't see my docs"

- Ensure `CLAUDE.md` is at project root
- Check `.claude/docs/` folder exists
- Restart Claude Code session

### "Permission denied errors"

- Check `.claude/settings.json` permissions
- Update `allow` array for needed operations
- Restart Claude Code

### "Can't update checkboxes"

- Edit `.claude/docs/tasks.md` directly
- Change `- [ ]` to `- [x]`
- Save file

### "Git wants to commit settings.local.json"

- Check `.gitignore` includes `.claude/settings.local.json`
- Run `git rm --cached .claude/settings.local.json`

---

## 📚 Key Documentation Files

| File                               | Purpose                       |
| ---------------------------------- | ----------------------------- |
| `CLAUDE.md`                        | Project context (auto-loaded) |
| `.claude/docs/README.md`           | Documentation index           |
| `.claude/docs/PROJECT-OVERVIEW.md` | Business context              |
| `.claude/docs/tasks.md`            | Task tracker                  |
| `.claude/docs/TASK-XXX.md`         | Task instructions             |
| `.claude/VERSION-CONTROL.md`       | Git guide                     |

---

## 🎉 Next Steps

1. ✅ Copy files to project
2. ✅ Commit to git
3. ✅ Read PROJECT-OVERVIEW.md
4. ✅ Start TASK-001

**You're ready to build!** 🚀

---

**Questions?** Refer to:

- `.claude/docs/README.md` - Full documentation guide
- `.claude/VERSION-CONTROL.md` - Git best practices
- `CLAUDE.md` - Project technical overview
