# IzzulGod — AI Engineer Portfolio

Personal portfolio website of **Muhammad Izzul Fahmi Mustofa (IzzulGod)** — AI Engineer focused on machine learning, deep learning, NLP, and LLM fine-tuning.

## 🚀 Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui**
- **React Router**
- **Lucide Icons**

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This project is configured for **Vercel** (see `vercel.json`). Just import the GitHub repository into Vercel — framework auto-detection will handle the rest.

It can also be deployed to any static host (Netlify, Cloudflare Pages, GitHub Pages, etc.) by serving the contents of `dist/` after `npm run build`.

## 📁 Project Structure

```
src/
├── components/      # React components (Hero, About, Projects, ...)
│   └── ui/          # shadcn/ui primitives
├── hooks/           # Custom hooks
├── lib/             # Utilities
├── pages/           # Route pages (Index, NotFound)
├── App.tsx
├── main.tsx
└── index.css        # Tailwind + design tokens
```

## 📝 License

© Muhammad Izzul Fahmi Mustofa — All rights reserved.
