# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the FStech website, a modern and minimalist design inspired by Apple's website aesthetic. The site showcases FStech's technology consulting services, with a focus on AI implementation and automation solutions for businesses.

## Code Architecture

### Static Website Structure

This is a static HTML website with the following structure:

- HTML files for each page (`index.html`, `servicos.html`, `clientes.html`, `sobre.html`, `contato.html`, `blog.html`, etc.)
- CSS files for styling:
  - `styles.css` - Main stylesheet that imports tech-styles.css
  - `tech-styles.css` - Contains the FStech UI Design System implementation
  - `carousel.css` - Specific styles for the client logo carousel
- JavaScript:
  - `main.js` - Handles interactive elements like mobile menu, contact form, carousel, animations
- Reference documents:
  - `blog_example.md` - Template and guidelines for updating the blog

### Design System

The website follows a comprehensive UI Design System (documented in `docs/ui-design-system.md`) with consistent:

- Dark theme color palette with blue accents
- Typography hierarchy
- Component styles (cards, buttons, navigation elements)
- Animation effects
- Responsive design patterns

## Development Workflow

### Local Development

To view the website locally:

```bash
# If you have Python installed
python -m http.server

# If you have Node.js installed
npx serve

# Alternatively, you can simply open any HTML file in a browser
```

### Testing

For testing website functionality:

1. Check responsive design using browser dev tools (mobile, tablet, desktop views)
2. Verify all links work correctly between pages
3. Test all interactive elements (forms, carousels, mobile menu)
4. Ensure proper rendering across different browsers

### Deployment

The website is deployed using standard static website hosting. No build process is required as this is vanilla HTML/CSS/JS.

## Common Tasks

### Adding a New Page

1. Create a new HTML file based on the existing page structure
2. Include the common header and footer sections from existing pages
3. Link the page in the navigation menu in all HTML files
4. Follow the design patterns established in other pages

### Modifying the Design

1. Reference `docs/ui-design-system.md` for guidance on colors, typography, and components
2. Make changes to `css/tech-styles.css` following the established patterns
3. For component-specific styles, add them in the appropriate section of the CSS

### Adding Features

1. For new interactive elements, add JavaScript in `js/main.js`
2. Follow the established pattern of using `document.addEventListener('DOMContentLoaded', function() {...})`
3. Organize code by feature/component

### Updating Images

1. Place new images in the appropriate subfolder in `/images`
2. Use the proper naming convention (lowercase, hyphen-separated)
3. Optimize images for web before adding them

### Updating the Blog

1. The blog page (`blog.html`) should be updated regularly with news about AI
2. Follow the template in `blog_example.md` for adding new news items
3. Always update the "last updated" date at the bottom of the blog page
4. Keep only the 6 most recent news items, removing older ones

## File Structure Notes

- Images are organized by section in the `/images` directory (services, clients, about, etc.)
- HTML pages use consistent head and body structure
- JavaScript functions are organized by feature
- CSS follows a component-based organization with variables for theming

## Known Issues

- Path inconsistency in some CSS/JS references
- Some placeholder content needs replacement
- Missing comments in JavaScript files