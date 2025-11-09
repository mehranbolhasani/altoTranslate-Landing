# altoTranslate Landing Page

A modern, beautiful landing page for the altoTranslate Chrome extension, built with Next.js, TypeScript, TailwindCSS, and shadcn/ui.

## Features

- 🚀 Built with Next.js 15.5 (App Router)
- 🎨 Modern UI with TailwindCSS and shadcn/ui components
- 📱 Fully responsive design
- ⚡ Optimized for Vercel deployment
- ♿ Accessible and keyboard-friendly
- 🌐 SEO optimized with proper metadata
- 🎯 Full shadcn/ui CLI support

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mehranbolhasani/altoTranslate-Landing.git
cd altoTranslate-Landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── hero.tsx        # Hero section
│   ├── features.tsx    # Features section
│   └── footer.tsx      # Footer component
├── lib/
│   └── utils.ts        # Utility functions
└── public/             # Static assets
```

## Tech Stack

- **Next.js 15.5** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components (with CLI support)
- **Lucide React** - Beautiful icon library

## Adding shadcn/ui Components

This project is configured with shadcn/ui CLI. To add new components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add input
```

The components will be automatically added to `components/ui/` with proper TypeScript types and styling.

## VS Code Setup

The project includes VS Code settings (`.vscode/settings.json`) that:
- Suppress CSS warnings for Tailwind directives
- Enable Tailwind IntelliSense
- Configure proper file associations

Make sure you have the [Tailwind CSS IntelliSense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) installed for the best experience.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Links

- [altoTranslate Extension Repository](https://github.com/mehranbolhasani/altoTranslate)
