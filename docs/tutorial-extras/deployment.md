---
sidebar_position: 1
---

# Deployment

This section explains how to deploy the Physical AI & Humanoid Robotics textbook website.

## GitHub Pages Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup Process

1. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "Deploy from a branch"
   - Choose the `gh-pages` branch and `/root` folder

2. The workflow will automatically build and deploy your site when you push changes to the `main` branch.

### Manual Deployment

If you need to deploy manually, you can run:

```bash
npm run build
```

This creates a `build/` directory with the static files that can be served by any static hosting service.

### Environment Configuration

For GitHub Pages deployment, make sure your `docusaurus.config.ts` has the correct settings:

```js
{
  url: 'https://your-username.github.io',
  baseUrl: '/your-repo-name/',
  projectName: 'your-repo-name', // Usually your repo name
  organizationName: 'your-username', // Usually your GitHub username
}
```

### Build Optimization

The deployment process includes optimizations for faster page loads:

- Asset minification
- Code splitting
- Image optimization
- Static site generation