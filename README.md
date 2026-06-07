# IlluminAI

The official website for IlluminAI.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Husky** - Git hooks for code quality
- **ESLint** - Code linting and formatting

## Project Structure

```
├── app/                   # Next.js 15 App Router
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

## Development

Before starting development through git, please create a branch using
```bash
git checkout -b YOUR_BRANCH_NAME
```
replacing "YOUR_BRANCH_NAME" with the name of your branch.

### Prerequisites
- Node.js 18+ 
- bun

### Installation
```bash
bun i
```

### Development Server
```bash
bun dev
```

### Build for Production
```bash
bun build
```

## 📄 License

© The Lumens 2025. All rights reserved
