# Spark Landing Page

A modern, responsive landing page built with Next.js, featuring a beautiful hero section, feature cards, and a clean design. This project showcases a professional website layout perfect for businesses or products.

## 🚀 How to View the Landing Page

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd spark-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the landing page.

### Production Build

To create a production build:

```bash
npm run build
npm start
```

## 🛠️ Libraries and Frameworks Used

### Core Framework
- **[Next.js 15.4.2](https://nextjs.org/)** - React framework with server-side rendering and app router
- **[React 19.1.0](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript development

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **Custom CSS** - Additional styling for gradients, shadows, and animations

### Icons
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Popular icon library with Font Awesome icons

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization

## 🎨 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Hero Section** - Eye-catching hero area with background image and gradient overlay
- **Feature Cards** - Interactive cards showcasing key features with icons
- **Modern UI** - Clean, professional design with smooth animations
- **TypeScript** - Type-safe development experience
- **Optimized Performance** - Built with Next.js for optimal loading speeds

## 📁 Project Structure

```
spark-fe/
├── app/
│   ├── components/
│   │   ├── Card.tsx          # Reusable card component
│   │   ├── FeatureSection.tsx # Features display section
│   │   ├── Footer.tsx         # Site footer
│   │   └── Header.tsx         # Site header
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main landing page
├── public/
│   ├── hero-bg.jpg          # Hero section background image
│   └── logo.png             # Site logo
└── [config files]          # Next.js, TypeScript, and Tailwind config
```

## 🚀 Deployment on Vercel

This project is optimized for deployment on Vercel:

1. **Connect your repository** to [Vercel](https://vercel.com)
2. **Configure project settings** (Vercel will auto-detect Next.js)
3. **Deploy** - Vercel will automatically build and deploy your site
4. **Custom domain** (optional) - Add your custom domain in Vercel dashboard

### Vercel Deployment Benefits
- Automatic deployments on git push
- Global CDN for fast loading worldwide
- Serverless functions support
- Built-in analytics and performance monitoring
- Zero-configuration setup for Next.js projects

## 🔧 Development

- Edit the main page in `app/page.tsx`
- Modify components in `app/components/`
- Update styles in `app/globals.css`
- The page auto-updates as you edit files during development

## 📝 License

This project is created for demonstration purposes.
