# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Haute People Magazine is a static website showcasing exclusive magazine editions. The site features digital flipbook integration via Heyzine and print ordering through Stripe.

## Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **External Services**: 
  - Heyzine (digital flipbook hosting)
  - Stripe (payment processing)
  - Google Fonts (Dancing Script)
- **No Build Process**: Direct file serving, no compilation needed

## Architecture & Key Components

### Data Attributes System
Each magazine issue card uses three key data attributes:
- `data-flipbook`: URL to Heyzine flipbook viewer
- `data-order-url`: Stripe checkout URL for print orders
- `data-cover`: Path to magazine cover image

### File Structure
```
/
├── index.html           # Single page application
├── css/
│   ├── reset.css       # CSS reset
│   ├── styles.css      # Main styles
│   └── responsive.css  # Mobile/tablet styles
├── js/
│   └── script.js       # Interaction handlers
└── assets/
    └── covers/         # Magazine cover images (edition-X-name.jpg)
```

### JavaScript Functionality
- **Smooth Scrolling**: Anchor links navigate to sections
- **Parallax Hero**: Hero background moves on scroll
- **Issue Cards**: 
  - Click card → Opens flipbook
  - Hover → Shows Read/Order buttons
  - Cover images applied dynamically via data-cover attribute

## Development Commands

```bash
# Open in browser (no server needed for basic viewing)
open index.html

# For proper testing with CORS/local file restrictions
python3 -m http.server 8000
# or
npx serve .
```

## Key URLs & External Resources

### Magazine Integration Pattern
When adding new issues:
1. Upload cover image to `assets/covers/edition-[NUMBER]-[name].jpg`
2. Add issue card with required data attributes
3. Flipbook URL format: `https://heyzine.com/flip-book/[ID].html`
4. Stripe URL format: `https://buy.stripe.com/[checkout-session-id]`

### Current Issue Mappings
- Edition 12 (Current): Dalina Gilcali & Zhakiina Rira
- Editions 2-11: Archive section with individual flipbook/order links

## Important Considerations

- Magazine covers are JPEG images, typically ~100-200KB
- All external links open in new tabs (`target="_blank"`)
- Mobile responsive breakpoints in `responsive.css`
- No JavaScript framework dependencies - pure DOM manipulation