# 🚀 Aditya Raj - Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge&logo=netlify)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.9-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.15-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**A modern, responsive, and secure portfolio website showcasing my journey as a Full Stack Developer**

[🌐 Live Demo](https://adityaraj81.netlify.app/) • [📧 Contact Me](mailto:Connect2RajAditya@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/adityaraj81)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Highlights](#-key-highlights)
- [Security Features](#-security-features)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

This is my personal portfolio website built with modern web technologies, showcasing my skills, projects, and professional journey. The site features a beautiful particle animation background, smooth transitions, and a fully responsive design that works seamlessly across all devices.

### 🌟 What Makes This Portfolio Special?

- **Security-First Approach**: Comprehensive input sanitization, rate limiting, and security headers
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Performance**: Optimized with lazy loading, code splitting, and efficient animations
- **Modern Design**: Glassmorphism effects, gradient animations, and interactive elements
- **SEO Optimized**: Complete meta tags, Open Graph support, and semantic HTML

---

## ✨ Features

### 🎨 Design & UX
- ✅ **Particle Animation Background** - Interactive canvas-based particle system
- ✅ **Glassmorphism UI** - Modern frosted glass effects
- ✅ **Smooth Animations** - Framer Motion-inspired transitions
- ✅ **Dark Theme** - Eye-friendly color scheme
- ✅ **Responsive Design** - Mobile-first approach, works on all screen sizes
- ✅ **Terminal-Style Elements** - Developer-themed UI components

### 📱 Pages
- **Home** - Terminal-style introduction with animated typing effect
- **About** - Skills showcase, coding profiles, and professional summary
- **Projects** - Portfolio of live projects with detailed descriptions
- **Journey** - Interactive timeline of education and work experience
- **Contact** - Secure contact form with validation and spam protection
- **404 Page** - Custom error page with navigation options

### 🔒 Security Features
- ✅ Input sanitization (XSS protection)
- ✅ Rate limiting on form submissions
- ✅ Honeypot spam protection
- ✅ CSP headers via Netlify
- ✅ HTTPS enforcement
- ✅ No sensitive data exposure

### ♿ Accessibility
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation support
- ✅ Skip to content link
- ✅ Reduced motion support
- ✅ Semantic HTML structure
- ✅ Screen reader friendly

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Latest React with modern hooks
- **React Router DOM 7.9.3** - Client-side routing
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite 7.1.9** - Next-generation frontend tooling

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment & Hosting
- **Netlify** - Continuous deployment and hosting
- **Netlify Forms** - Form handling without backend
- **Custom Domain** - Professional domain setup

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AdityaRaj81/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```env
VITE_SITE_URL=http://localhost:5173
VITE_CONTACT_EMAIL=your-email@example.com
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── logo2.png          # Favicon
│   ├── profile.png        # Profile image
│   ├── Slidebar2.png      # Sidebar avatar
│   └── Aditya_resume.pdf  # Resume file
├── src/
│   ├── components/        # Reusable components
│   │   ├── ErrorBoundary.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── Sidebar.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Journey.jsx
│   │   ├── Contact.jsx
│   │   ├── ThankYou.jsx
│   │   └── NotFound.jsx
│   ├── utils/            # Utility functions
│   │   └── sanitize.js   # Input sanitization
│   ├── App.jsx           # Main app component
│   ├── App.css           # App-specific styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

---

## 🎯 Key Highlights

### 1. Interactive Particle Background
```javascript
// Respects user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
  return; // Skip animations
}
```

### 2. Secure Contact Form
```javascript
// Input sanitization
const sanitizedValue = sanitizeInput(value);

// Rate limiting
if (submissionCount >= 3) {
  // Block excessive submissions
}

// Honeypot protection
<input name="bot-field" style={{ display: 'none' }} />
```

### 3. Error Boundary
```javascript
// Graceful error handling
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### 4. Responsive Navigation
- Desktop: Fixed sidebar with smooth transitions
- Mobile: Bottom navigation bar with touch-friendly targets

---

## 🔒 Security Features

### Input Sanitization
All user inputs are sanitized to prevent XSS attacks:
- HTML tag removal
- JavaScript protocol blocking
- Event handler stripping
- Encoded character filtering

### Rate Limiting
Contact form submissions are limited to:
- 3 submissions per session
- 5-second cooldown between submissions

### Security Headers (via Netlify)
```toml
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: [Comprehensive CSP]
```

### Form Protection
- Honeypot field for bot detection
- Client-side validation
- Netlify Forms spam filtering

---

## ⚡ Performance

### Optimization Techniques
- **Lazy Loading**: Images load on demand
- **Code Splitting**: Route-based code splitting with React Router
- **Efficient Animations**: RequestAnimationFrame for smooth 60fps
- **Visibility API**: Pause animations when tab is hidden
- **Optimized Images**: Unsplash CDN with compression

### Lighthouse Scores (Estimated)
- 🟢 Performance: 85-90
- 🟢 Accessibility: 95-98
- 🟢 Best Practices: 90-95
- 🟢 SEO: 95-100

---

## 🌐 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Netlify will auto-detect Vite configuration

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   - Add your environment variables in Netlify dashboard
   - Settings → Environment Variables

4. **Deploy**
   - Push to main branch for automatic deployment
   - Or use Netlify CLI: `netlify deploy --prod`

### Custom Domain Setup
1. Add custom domain in Netlify dashboard
2. Update DNS records with your domain provider
3. Enable HTTPS (automatic with Netlify)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ⚠️ Liability and warranty limitations

---

## 📧 Contact

**Aditya Raj**

- 🌐 Website: [adityaraj81.netlify.app](https://adityaraj81.netlify.app/)
- 📧 Email: [Connect2RajAditya@gmail.com](mailto:Connect2RajAditya@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/adityaraj81](https://linkedin.com/in/adityaraj81)
- 🐙 GitHub: [github.com/AdityaRaj81](https://github.com/AdityaRaj81)
- 📱 WhatsApp: [+91 86510 65233](https://wa.me/918651065233)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **Netlify** - For seamless deployment and hosting
- **Lucide** - For beautiful icons
- **Unsplash** - For high-quality images
- **Google Fonts** - For Poppins and Fira Code fonts

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/AdityaRaj81/portfolio?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/AdityaRaj81/portfolio?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/AdityaRaj81/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/AdityaRaj81/portfolio?style=social)

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] Blog section with MDX support
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (i18n)
- [ ] Project filtering and search
- [ ] Testimonials section
- [ ] Analytics dashboard
- [ ] Newsletter subscription
- [ ] RSS feed

### Technical Improvements
- [ ] Migrate to TypeScript
- [ ] Add unit tests (Vitest)
- [ ] Add E2E tests (Playwright)
- [ ] Implement service worker (PWA)
- [ ] Add error tracking (Sentry)
- [ ] Optimize bundle size
- [ ] Add CI/CD pipeline
- [ ] Implement CMS (Sanity/Contentful)

---

## 💡 Tips for Using This Template

1. **Customize Content**: Update all personal information in page components
2. **Replace Images**: Add your own profile pictures and project screenshots
3. **Update Resume**: Replace `Aditya_resume.pdf` with your resume
4. **Modify Colors**: Edit `tailwind.config.js` for your brand colors
5. **Add Projects**: Update project data in `Projects.jsx`
6. **Configure SEO**: Update meta tags in `index.html`
7. **Set Up Analytics**: Add Google Analytics or similar
8. **Test Thoroughly**: Check all forms and links before deployment

---

## 🐛 Known Issues

- Particle animation may impact performance on low-end devices
- Form submission requires JavaScript enabled
- Some animations may not work on older browsers

See [CODE_REVIEW_REPORT.md](CODE_REVIEW_REPORT.md) for detailed analysis.

---

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Netlify Documentation](https://docs.netlify.com/)

### Tutorials Used
- React Router v7 Migration Guide
- Tailwind CSS Best Practices
- Web Accessibility Guidelines (WCAG 2.1)
- Performance Optimization Techniques

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ by [Aditya Raj](https://github.com/AdityaRaj81)**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=AdityaRaj81.portfolio)

</div>

---

## 📜 Changelog

### Version 1.0.0 (January 2025)
- ✨ Initial release
- 🎨 Modern UI with particle background
- 🔒 Security features implemented
- ♿ Accessibility compliance
- 📱 Fully responsive design
- 🚀 Deployed on Netlify

---

**Last Updated:** January 2025  
**Status:** 🟢 Active Development

