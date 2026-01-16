# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, contemporary UI with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Next.js App Router for optimal loading speeds
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first styling with custom design system

## Pages

- **Home**: Hero section, services overview, industries, featured case studies, and CTA
- **Services**: Detailed breakdown of all services offered
- **Industries**: SaaS and Healthcare specializations with challenges and solutions
- **Case Studies**: Real project examples with problems, solutions, and outcomes
- **About**: Professional background, approach, and technical skills
- **Contact**: Contact form with direct email and LinkedIn links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Update configuration
   - Edit `lib/site.ts` with your personal information
   - Update contact information and social links

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Site Information

Update `lib/site.ts` with your details:
```typescript
export const siteConfig = {
  name: "Your Name",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  // ... other settings
};
```

### Adding Images

Place your images in the `public/images/` directory and reference them in your components.

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Use Next.js plugin
- **AWS/Azure/GCP**: Deploy as a containerized application

## Customization

### Colors

Modify the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content

- Services: `app/services/page.tsx`
- Industries: `app/industries/page.tsx`
- Case Studies: `app/case-studies/page.tsx`
- About: `app/about/page.tsx`

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## License

This project is open source and available under the MIT License.