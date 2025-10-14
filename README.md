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

A modern, secure portfolio website built with React 19, showcasing my skills and projects with interactive particle animations and responsive design.

**Key Features:** Security-first approach • WCAG 2.1 accessible • Performance optimized • SEO ready

---

## ✨ Features

- 🎨 Interactive particle background with glassmorphism UI
- 📱 Fully responsive design (mobile-first approach)
- 🔒 Secure contact form (XSS protection, rate limiting, honeypot)
- ♿ WCAG 2.1 accessible (keyboard navigation, screen readers)
- ⚡ Performance optimized (lazy loading, code splitting)
- 🔍 SEO ready (sitemap, meta tags, Open Graph)

---

## 🛠️ Tech Stack

**Frontend:** React 19.2.0 • React Router 7.9.3 • Tailwind CSS 3.4.15 • Vite 7.1.9  
**Deployment:** Netlify (CI/CD, Forms API, Security Headers)  
**Tools:** ESLint, PostCSS, Lucide Icons

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

### Build & Preview

```bash
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── logo2.png          # Favicon
│   ├── profile.png        # Profile image
│   ├── Slidebar2.png      # Sidebar avatar
│   ├── Aditya_resume.pdf  # Resume file
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Search engine instructions
│   └── _redirects         # Netlify redirects
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
├── index.html           # HTML template with meta tags
├── netlify.toml         # Netlify config + security headers
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind custom theme
├── vite.config.js       # Vite build configuration
├── README.md           # This file
├── CODE_REVIEW_REPORT.md        # Comprehensive code audit
├── SECURITY_REVIEW_REPORT.md    # Security assessment
├── LIVE_TESTING_REPORT.md       # Live site test results
└── GOOGLE_SEARCH_CONSOLE_GUIDE.md  # SEO setup guide
```

---

## 🔒 Security & Performance

**Security:** XSS protection via input sanitization • Rate limiting (3 submissions/session) • CSP headers • Honeypot spam filter  
**Performance:** Code splitting • Lazy loading • Optimized images • 60fps animations • <3s load time  
**Accessibility:** ARIA labels • Keyboard navigation • Screen reader support • Reduced motion support

---



---

## 📊 Metrics

**Lighthouse Scores:** Performance 88/100 • Accessibility 98/100 • SEO 100/100  
**Security Grade:** A+ (10/10)  
**Load Time:** <3s on 3G  
**Bundle Size:** ~180KB gzipped

---

## 🚀 Deployment

**Netlify Setup:**
1. Connect GitHub repo → Auto-detect Vite config
2. Build: `npm run build` → Publish: `dist`
3. Push to `main` branch for auto-deploy
4. Add custom domain + HTTPS (automatic)

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

## 📧 Contact & Support

### Get In Touch

**Aditya Raj** - Full Stack Developer

- 🌐 **Website:** [adityaraj81.netlify.app](https://adityaraj81.netlify.app/)
- 📧 **Email:** [Connect2RajAditya@gmail.com](mailto:Connect2RajAditya@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/adityaraj81](https://linkedin.com/in/adityaraj81)
- 🐙 **GitHub:** [github.com/AdityaRaj81](https://github.com/AdityaRaj81)
- 📱 **WhatsApp:** [+91 86510 65233](https://wa.me/918651065233)
- 💬 **Telegram:** [@Unknown0User0](https://t.me/Unknown0User0)
- 📍 **Location:** Patna, Bihar, India

### Coding Profiles

- 💻 **LeetCode:** [@AdityaRaj81](https://leetcode.com/u/AdityaRaj81/) - 500+ problems solved
- ⭐ **HackerRank:** [@AdityaRaj81](https://www.hackerrank.com/profile/AdityaRaj81) - 5 Star Problem Solver
- 🍳 **CodeChef:** [@adityaraj81](https://www.codechef.com/users/adityaraj81) - 4 Star Coder

**Open to:** Full-time opportunities • Freelance projects • Open-source collaboration

---

## 🙏 Acknowledgments

Built with [React](https://react.dev/) • [Vite](https://vitejs.dev/) • [Tailwind CSS](https://tailwindcss.com/)  
Hosted on [Netlify](https://netlify.com/) • Images from [Unsplash](https://unsplash.com/)

---



---

## 🗺️ Roadmap

- [ ] Dark/light theme toggle
- [ ] Blog section with MDX
- [ ] TypeScript migration
- [ ] Unit tests (Vitest, 80% coverage)
- [ ] PWA implementation

---

## 💡 Using This Template

**Customization:**
1. Update personal info in `src/pages/` files
2. Replace images in `public/` folder
3. Modify colors in `tailwind.config.js`
4. Update meta tags in `index.html` and `sitemap.xml`
5. Deploy on Netlify

---



---



---



---



---



---



---

## 📚 Documentation

- [CODE_REVIEW_REPORT.md](CODE_REVIEW_REPORT.md) - Security audit results
- [SECURITY_REVIEW_REPORT.md](SECURITY_REVIEW_REPORT.md) - Vulnerability assessment
- [LIVE_TESTING_REPORT.md](LIVE_TESTING_REPORT.md) - Test results
- [GOOGLE_SEARCH_CONSOLE_GUIDE.md](GOOGLE_SEARCH_CONSOLE_GUIDE.md) - SEO setup

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

[![GitHub stars](https://img.shields.io/github/stars/AdityaRaj81/Portfolio?style=social)](https://github.com/AdityaRaj81/Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AdityaRaj81/Portfolio?style=social)](https://github.com/AdityaRaj81/Portfolio/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/AdityaRaj81/Portfolio?style=social)](https://github.com/AdityaRaj81/Portfolio/watchers)

**Made with ❤️ and ☕ by [Aditya Raj](https://github.com/AdityaRaj81)**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=AdityaRaj81.Portfolio)

---

### Connect With Me

[![Website](https://img.shields.io/badge/Website-adityaraj81.netlify.app-blue?style=for-the-badge&logo=netlify)](https://adityaraj81.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/adityaraj81)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/AdityaRaj81)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:Connect2RajAditya@gmail.com)

</div>

---

## 📜 Changelog

### Version 1.0.0 (October 2025)
- ✨ Initial release with modern React 19
- 🎨 Interactive particle background animation
- 🔒 Enterprise-grade security implementation
- ♿ WCAG 2.1 accessibility compliance
- 📱 Fully responsive mobile-first design
- 🚀 Deployed on Netlify with auto-deploy
- 🔍 SEO optimized with sitemap and meta tags
- ⚡ Performance optimized with lazy loading

---

**Last Updated:** October 14, 2025  
**Status:** 🟢 Production Ready

