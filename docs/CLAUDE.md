# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the FStech website, a modern and minimalist design inspired by Apple's website aesthetic. The site showcases FStech's technology consulting services, with a focus on AI implementation and automation solutions for businesses.

## Code Architecture

### Static Website Structure

This is a static HTML website with the following structure:

- HTML files for each page (`index.html`, `servicos.html`, `clientes.html`, `sobre.html`, `contato.html`, etc.)
- CSS files for styling:
  - `styles.css` - Main stylesheet following the FStech UI Design System
  - `carousel.css` - Specific styles for the client logo carousel
- JavaScript:
  - `main.js` - Handles interactive elements like mobile menu, contact form, carousel, animations

### Design System

The website follows a comprehensive UI Design System (documented in `ui-design-system.md`) with consistent:

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
2. Include the common header and footer
3. Link the page in the navigation menu in all HTML files

### Modifying the Design

1. Reference `ui-design-system.md` for guidance on colors, typography, and components
2. Make changes to `styles.css` following the established patterns
3. For component-specific styles, add them in the appropriate section of the CSS

### Adding Features

1. For new interactive elements, add JavaScript in `main.js`
2. Follow the established pattern of using `document.addEventListener('DOMContentLoaded', function() {...})`
3. Organize code by feature/component

## File Structure Notes

- Images are organized by section in the `/images` directory
- HTML pages use consistent head and body structure
- JavaScript functions are organized by feature
- CSS follows a component-based organization

This static website employs modern CSS features like flexbox, grid, and animations, while maintaining compatibility with most browsers.