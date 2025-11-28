# 🗞️ Newspaper Styling - Quick Reference

## 🎨 Color Variables
```css
Background:  #FFF9EC  (paper)
Text:        #1C1509  (ink)
Accent:      #9B9B85  (grullo)
Secondary:   #4D4332  (dark-lava)
```

## 📝 Typography Classes
```jsx
<h1 className="font-playfair">Heading</h1>
<h2 className="font-playfair heading-shadow">Shadowed Heading</h2>
```

## 🎯 Most Used Classes

### Layout
```jsx
<section className="section">              {/* Padded section */}
<div className="container">                {/* Max-width container */}
<div className="grid grid-2 gap-4">        {/* 2-column grid */}
```

### Newspaper Elements
```jsx
<div className="newspaper-divider"></div>  {/* Decorative line */}
<div className="article-columns">          {/* 2-column text */}
<div className="timeline-item">            {/* Timeline entry */}
<div className="card">                     {/* Card component */}
```

### Spacing
```jsx
className="mb-2"    {/* margin-bottom: 1rem */}
className="mt-3"    {/* margin-top: 1.5rem */}
className="py-4"    {/* padding-y: 2rem */}
```

### Flex
```jsx
className="flex flex-col items-center justify-center gap-2"
```

### Text Alignment
```jsx
className="text-center"
className="text-right"
className="text-left"
```

## 🔧 Common Patterns

### Page Header
```jsx
<div className="section" style={{ paddingTop: '6rem' }}>
    <div className="container">
        <h1 className="font-playfair heading-shadow text-center">
            Page Title
        </h1>
        <div className="newspaper-divider" style={{ width: '200px', margin: '2rem auto' }}></div>
    </div>
</div>
```

### Content Section
```jsx
<section className="section">
    <div className="container">
        <h2 className="font-playfair heading-shadow text-right">
            Section Title
        </h2>
        <div className="newspaper-divider"></div>
        <p className="text-right">Content...</p>
    </div>
</section>
```

### Image Grid
```jsx
<div className="grid grid-2 gap-4">
    <div className="card">
        <img src="..." alt="..." style={{ width: '100%' }} />
    </div>
    <div className="card">
        <img src="..." alt="..." style={{ width: '100%' }} />
    </div>
</div>
```

### Timeline
```jsx
<div className="timeline-item">
    <h3 className="font-playfair">Event Title</h3>
    <p style={{ fontSize: '0.875rem', color: '#4D4332' }}>
        Date
    </p>
    <p>Description...</p>
</div>
```

## 💡 Pro Tips

1. **Always use `font-playfair` for headings** - It's the newspaper style!
2. **Add `heading-shadow` for emphasis** - Subtle but effective
3. **Use `newspaper-divider` between sections** - Creates visual separation
4. **Combine classes** - `className="font-playfair heading-shadow text-center mb-4"`
5. **Keep text right-aligned** - Matches Arabic RTL direction

## 🚫 Don't Use
- ❌ Tailwind classes (bg-*, text-*, etc.)
- ❌ Random colors outside the palette
- ❌ Sans-serif fonts for headings

## ✅ Do Use
- ✅ Newspaper color palette
- ✅ Playfair Display for headings
- ✅ Roboto Slab for body (automatic)
- ✅ Semantic HTML elements
