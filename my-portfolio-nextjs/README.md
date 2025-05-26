# My Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features dark/light mode theming and a clean, professional design.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Dark/Light Mode** with next-themes
- **Responsive Design** for all devices
- **Modern UI Components** with smooth animations
- **SEO Optimized** with proper meta tags
- **Fast Performance** with Next.js optimizations

## 📁 Project Structure

```
my-portfolio-nextjs/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── footer.tsx
│   │   │   ├── main-layout.tsx
│   │   │   └── navbar.tsx
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable UI components
│   │       └── theme-toggle.tsx
│   ├── constants/              # App constants
│   │   └── navigation.ts
│   ├── context/                # React contexts
│   │   ├── portfolio-context.tsx
│   │   └── theme-context.tsx
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript types
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme Management**: next-themes
- **Icons**: React Icons
- **Animations**: CSS Transitions
- **State Management**: React Context

## 🎨 Design System

### Colors
- **Primary**: Blue color palette (50-900)
- **Secondary**: Slate color palette (50-900)
- **Background**: CSS variables for theme switching
- **Text**: Responsive colors for light/dark modes

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive**: Mobile-first approach
- **Hierarchy**: Clear heading and text sizes

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Migration from Gatsby

This project is a migration from a Gatsby portfolio to Next.js. Key improvements:

- **Better Performance**: Next.js App Router with streaming
- **Improved DX**: Better TypeScript support and tooling
- **Modern Styling**: Tailwind CSS instead of styled-components
- **Simplified State**: React Context for sidebar and theme management
- **Enhanced SEO**: Built-in Next.js SEO optimizations

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/constants/navigation.ts`

### Modifying Theme
1. Update colors in `tailwind.config.ts`
2. Modify CSS variables in `src/app/globals.css`
3. Adjust theme toggle in `src/components/ui/theme-toggle.tsx`

### Adding Components
1. Create components in appropriate directories
2. Follow the existing TypeScript patterns
3. Use Tailwind CSS for styling

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using:
- `next-themes` for theme management
- CSS variables for color switching
- Tailwind's `dark:` prefix for dark mode styles
- System preference detection

## 🚀 Deployment

The project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and Tailwind CSS
