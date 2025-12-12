# Task Workflow & Completion Standards

## Standard Task Workflow

### 1. Review Task Documentation

- Read the task file (e.g., `TASK-00X-*.md`)
- Understand objectives and requirements
- Note any prerequisites

### 2. Implementation

- Write code following conventions in `CLAUDE.md`
- Use TypeScript strict mode
- Follow component patterns
- Implement required features

### 3. Verification (REQUIRED)

Run all checks before marking task complete:

```bash
# 1. Lint - Check code quality
npm run lint

# 2. Format - Ensure consistent style
npm run format

# 3. Build - Verify production build
npm run build
```

**ALL THREE MUST PASS** before proceeding.

### 4. Manual Testing

- Test in browser (localhost:3000)
- Check all features work as expected
- Test responsive design (mobile/tablet/desktop)
- Verify no console errors

### 5. Documentation

- Update `tasks.md` with completion status
- Note any deviations from spec
- Document any additional changes

## Quality Standards

### Code Quality

- ✅ No TypeScript errors
- ✅ No ESLint warnings/errors
- ✅ Properly formatted (Prettier)
- ✅ Follows naming conventions
- ✅ Proper imports order

### Functionality

- ✅ All features work as specified
- ✅ No runtime errors
- ✅ Responsive on all screen sizes
- ✅ Accessibility considerations met

### Build

- ✅ Production build succeeds
- ✅ No build warnings (besides known jsdom warning)
- ✅ All routes render correctly
- ✅ Static generation works

## Common Issues

### ESLint Errors

```bash
npm run lint -- --fix  # Auto-fix where possible
```

### Format Issues

```bash
npm run format  # Auto-format all files
```

### Build Failures

- Check TypeScript errors first
- Verify imports are correct
- Ensure all dependencies installed
- Check for syntax errors

## Shortcuts

```bash
# Run all checks in sequence
npm run lint && npm run format && npm run build

# Check format without writing
npm run format:check
```

## Notes

- Never skip the verification step
- Format runs automatically but lint may need manual fixes
- Build errors usually indicate TypeScript issues
- Always test in browser, not just via build
