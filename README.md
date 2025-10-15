# illuminaite academy

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases illuminaite academy's mission to demystify CS & AI and build interdisciplinary connections.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Husky** - Git hooks for code quality
- **ESLint** - Code linting and formatting

## 🏗️ Project Structure

```
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── events/            # Events page route
│   └── construction/      # Under construction page
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation with scroll highlighting
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About/Mission section
│   ├── Impact.tsx         # Impact statistics
│   ├── Initiatives.tsx    # Initiatives showcase
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer with social links
├── public/                # Static assets
│   └── images/            # Image assets
└── .husky/                # Git hooks configuration
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Active Section Highlighting** - Dynamic navbar highlighting based on scroll position
- **Mobile Menu** - Hamburger menu for mobile devices
- **Optimized Images** - Next.js Image component for performance
- **SEO Optimized** - Proper metadata and Open Graph tags
- **Type Safety** - Full TypeScript implementation
- **Static Export** - Configured for GitHub Pages deployment

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Export Static Site
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 📦 Deployment

This project is configured for static export and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

## 🎯 Migration Notes

This project was migrated from a static HTML/CSS/JS site to Next.js 15:

### What Was Migrated:
- ✅ All HTML content converted to React components
- ✅ CSS styles converted to Tailwind utility classes
- ✅ JavaScript functionality converted to React hooks
- ✅ Images optimized with Next.js Image component
- ✅ Routing implemented with Next.js App Router
- ✅ SEO metadata configuration
- ✅ Git hooks with Husky

### Key Improvements:
- 🚀 Better performance with Next.js optimizations
- 📱 Enhanced mobile experience
- 🛡️ Type safety with TypeScript
- 🎨 Maintainable styles with Tailwind CSS
- 🔧 Better development experience
- 📊 Improved SEO and metadata

## 📄 License

© illuminaite 2023. All rights reserved