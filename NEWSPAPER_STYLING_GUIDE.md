# Newspaper Styling Configuration Guide

## Color Palette

Your project now uses a vintage newspaper color scheme:

- **Paper (Background)**: `#FFF9EC` - Warm off-white background
- **Ink (Text)**: `#1C1509` - Deep brown-black for primary text
- **Grullo (Accent)**: `#9B9B85` - Muted olive-gray for borders and accents
- **Dark Lava (Secondary)**: `#4D4332` - Dark brown for buttons and timeline elements

## Typography

### Fonts
- **Playfair Display**: Used for all headings (h1-h5) - Elegant serif font
- **Roboto Slab**: Used for body text - Readable serif font

Both fonts are loaded via Google Fonts in `globals.css`.

### Usage
```jsx
// For headings, use the class
<h1 className="font-playfair">Your Heading</h1>

// For heading shadow effect
<h2 className="font-playfair heading-shadow">Shadowed Heading</h2>
```

## Key CSS Classes

### Layout Classes
- `.container` - Max-width container (1200px) with auto margins
- `.section` - Section with vertical padding (4rem)
- `.grid` - CSS Grid display
- `.grid-2` - 2-column responsive grid

### Newspaper-Specific Classes
- `.newspaper-divider` - Decorative horizontal line (2px, grullo color)
- `.heading-shadow` - Subtle text shadow for headings
- `.article-columns` - Two-column text layout (like newspaper articles)
- `.timeline-item` - Timeline entry with decorative border and circle

### Utility Classes
- `.text-center`, `.text-right`, `.text-left` - Text alignment
- `.mb-1` to `.mb-4` - Margin bottom (0.5rem to 2rem)
- `.mt-1` to `.mt-4` - Margin top (0.5rem to 2rem)
- `.py-1` to `.py-4` - Vertical padding (0.5rem to 2rem)
- `.flex`, `.flex-col` - Flexbox utilities
- `.items-center`, `.justify-center`, `.justify-between` - Flex alignment
- `.gap-1` to `.gap-4` - Gap spacing (0.5rem to 2rem)

### Component Classes
- `.card` - White card with border and shadow
- `.btn` - Button styling with newspaper colors

## Example Usage

### Timeline Item
```jsx
<div className="timeline-item">
    <h3 className="font-playfair">Event Title</h3>
    <p>Event description...</p>
</div>
```

### Article with Columns
```jsx
<div className="article-columns">
    <p>Your long article text that will automatically split into two columns...</p>
</div>
```

### Section with Divider
```jsx
<section className="section">
    <div className="container">
        <h2 className="font-playfair heading-shadow">Section Title</h2>
        <div className="newspaper-divider"></div>
        <p>Section content...</p>
    </div>
</section>
```

### Card Layout
```jsx
<div className="grid grid-2 gap-4">
    <div className="card">
        <h3>Card Title</h3>
        <p>Card content...</p>
    </div>
    <div className="card">
        <h3>Card Title</h3>
        <p>Card content...</p>
    </div>
</div>
```

## Responsive Design

The styling is mobile-responsive:
- Headings scale down on mobile devices
- `.article-columns` becomes single column on mobile
- `.grid-2` automatically adjusts to single column on small screens
- Container padding reduces on mobile

## Migration Notes

All Tailwind CSS classes have been removed and replaced with:
1. Custom CSS classes (defined in `globals.css`)
2. Inline styles where needed for specific components
3. CSS-in-JS for dynamic styling in React components

## Files Updated

- `app/globals.css` - Complete rewrite with newspaper styling
- `app/layout.tsx` - Removed Tailwind font imports
- `app/components/AboutSnapshot.jsx` - Converted to newspaper styling
- `app/components/hero.jsx` - Converted to newspaper styling
- `app/components/StatsBar.jsx` - Converted to newspaper styling
- `app/components/Navbar.jsx` - Converted to newspaper styling
- `app/components/Footer.jsx` - Converted to newspaper styling
- `app/about/page.tsx` - Converted to newspaper styling
- `app/gallery/page.tsx` - Converted to newspaper styling
- `app/impact/page.tsx` - Converted to newspaper styling
- `app/story/page.tsx` - Converted to newspaper styling
- `app/testimonies/page.tsx` - Converted to newspaper styling
- `app/timeline/page.jsx` - Complete rewrite with timeline styling

## Best Practices

1. **Use semantic HTML** - The styling works best with proper HTML5 elements
2. **Combine classes** - Use multiple classes together: `className="font-playfair heading-shadow text-center"`
3. **Maintain consistency** - Stick to the newspaper color palette throughout
4. **Responsive first** - Test on mobile devices as the design adapts automatically
5. **Typography hierarchy** - Use h1-h5 appropriately for proper visual hierarchy
