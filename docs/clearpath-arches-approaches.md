# ClearPath Arches — Text Inside Arches Approaches

## The Problem

The arches image is a single PNG with 7 overlapping arches sharing columns. Text (Roman numeral + step title) needs to appear "inside" each arch. The arches can't easily be split into individual SVGs because columns are shared between adjacent arches.

**Constraints:**
- Text must appear visually inside each arch opening
- Minimum readable font size: ~15px (below this, switch to a non-arches layout)
- Responsive down to ~1024px with arches; different layout below that
- 7 steps: I–VII with titles like "Initial Consultation", "Personalized Relocation Plan", etc.

---

## Approach A: Background Image + Absolute-Positioned Text Grid

Use the arches PNG as a `background-image` on a container, then overlay a 7-column CSS grid of absolutely positioned text cells.

**How it works:**
1. Container has `position: relative` and `background-image: url(/images/arches.png)` with `background-size: 100% auto`
2. Container's aspect ratio is locked to match the image (e.g. `aspect-ratio: 1570/400` — measure from the actual PNG)
3. A 7-column grid sits inside, each cell centered horizontally within its arch
4. Text is vertically positioned in the lower half of each arch (where the opening is tallest and widest)
5. `padding-inline` on each cell prevents text from overlapping the columns

**Responsive behavior:**
- Text uses a clamp-based font size that scales with container width
- At ~1024px breakpoint, hide the arches entirely and show a simpler list/card layout

**Pros:**
- Simple to implement — just CSS grid + positioning
- Text is real HTML, fully accessible and selectable
- Easy to adjust text positions per-cell if needed

**Cons:**
- Relies on the image's aspect ratio staying fixed — if the image changes, positions break
- Percentage-based positioning can drift slightly at edge viewport sizes
- Need to carefully tune horizontal padding per cell to avoid column overlap

---

## Approach B: Single SVG with `<foreignObject>` Text Regions

Convert the arches PNG to an SVG (or embed the PNG inside an `<svg>` via `<image>`), then use `<foreignObject>` elements to place HTML text inside each arch.

**How it works:**
1. Create an SVG wrapper at the arches' native aspect ratio
2. Embed the arches PNG as `<image href="/images/arches.png" width="100%" height="100%" />`
3. Add 7 `<foreignObject>` elements, each positioned and sized to fit within one arch opening
4. Inside each `<foreignObject>`, render a `<div>` with the Roman numeral and step title
5. Text sizing can use `em` units relative to the SVG's font-size, or viewport units

**Responsive behavior:**
- SVG scales naturally with `width: 100%` and `viewBox`
- Text inside `<foreignObject>` scales proportionally with the SVG
- At the breakpoint where text hits ~15px, swap to alternate layout

**Pros:**
- Text scales perfectly with the image since they share the same coordinate space
- No percentage drift — positions are defined in SVG units relative to the arches
- `<foreignObject>` allows full HTML/CSS styling (line breaks, font-family, etc.)

**Cons:**
- `<foreignObject>` has some browser quirks (though modern browser support is solid)
- Slightly more complex markup
- Need to measure arch positions in SVG coordinates to place each `<foreignObject>`

---

## Approach C: CSS Grid Overlay with Column Guides from the Image

Use the arches as a decorative layer (`<Image>`) with a CSS grid overlay that mirrors the arch positions using calculated column widths.

**How it works:**
1. Outer container is `position: relative` with the arches `<Image>` set to `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain`
2. A 7-column grid sits on top with `position: relative; z-index: 1`
3. Grid column widths are defined to match the arch spacing in the image. The arches aren't perfectly equal — the outer arches are slightly wider. Use `grid-template-columns` with custom fractional values (e.g. `1.1fr 1fr 1fr 1fr 1fr 1fr 1.1fr`) tuned to the image
4. Each grid cell has `text-align: center`, vertical padding to push text into the lower half
5. Horizontal padding on each cell keeps text clear of the column artwork

**Responsive behavior:**
- The image and grid scale together since both are 100% width of the container
- Font size uses `clamp()` tied to container or viewport width
- Below breakpoint, replace with a different layout

**Pros:**
- Clean separation: image is purely decorative, text is in the normal flow
- Easy to adjust column proportions if the image changes
- Grid is inherently responsive

**Cons:**
- Requires careful measurement of the arch proportions to set column widths
- If the image aspect ratio doesn't match the grid height, text may appear above/below the arch openings
- Locking aspect ratio on the container is still needed

---

## Approach D: Pure CSS/SVG Arches (No Image)

Recreate the arches entirely in CSS or inline SVG, making each arch a separate visual element with text naturally inside it.

**How it works:**
1. 7-column grid where each cell draws its own arch shape using CSS (`border-radius` for the arch top, borders for columns) or an inline SVG `<path>`
2. Shared columns are handled by negative margins or overlapping borders — left column's right border overlaps with right column's left border
3. Text sits inside each cell as normal flow content
4. The bottom horizontal bar is a simple `border-bottom` on the grid container

**Responsive behavior:**
- Everything is DOM-based so it scales naturally
- Column overlap can be managed with margin or grid gap adjustments
- Text is just text — standard responsive sizing

**Pros:**
- No image dependency at all — fully resolution-independent
- Text is naturally "inside" each arch since the arch is built around it
- Easiest to make responsive since there's no image to keep in sync
- Columns sharing is achievable with overlapping grid cells or negative margins

**Cons:**
- Hardest to implement — recreating the exact arch aesthetic (double-line arches, column capitals, base moldings) is complex
- The current arches have decorative details (column capitals, base details) that are hard to replicate in CSS alone
- May not match the design fidelity of the existing image
- Would need SVG paths for the detailed column/capital shapes

---

## Recommendation

**Approach A (Background Image + Grid)** is the fastest to implement and easiest to maintain. It handles the overlapping-column problem by not trying to separate them — the image stays as-is, text floats on top.

**Approach B (SVG + foreignObject)** is the most robust for scaling — text and image share the same coordinate system, so nothing drifts. Worth considering if Approach A has alignment issues at certain viewport sizes.

Both A and B need a breakpoint swap (around 1024px or wherever text hits ~15px) to a simpler layout — likely a numbered list, horizontal scroll of cards, or a vertical stepper.

---

## Alternate Layout Below Breakpoint

For mobile/smaller screens (below the arches breakpoint), options include:
- **Vertical stepper**: Numbered steps in a vertical list with a connecting line
- **Horizontal scroll cards**: Swipeable cards with step number + title
- **Simple numbered grid**: 2-column grid of step cards without arch decoration
