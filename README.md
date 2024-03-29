# My Mind Blowing Prototype ![Prerequisite](https://img.shields.io/badge/node-10.13.0-blue.svg) ![Prerequisite](https://img.shields.io/badge/npm-6.4.1-blue.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/1853c133-6744-457e-ace2-251d8f57e57b/deploy-status)](https://app.netlify.com/sites/my-mind-blowing-prototype/deploys)

> 🤯

## ✨ Install

```sh
# Install Node & NPM with [NVM](https://github.com/nvm-sh/nvm)
nvm install

# Install project dependencies
npm install
```

## 👩‍💻 Usage

### Development

```sh
# Start a local dev server
npm start

# Check for JS/SCSS style violations prior to commit
npm run lint

# Fix the fixable linter violations
npm run lint:fix

# Format code with Prettier
npm run format
```

### Production

```sh
# Build for production
npm run build

# Serve locally using `serve`
npx serve dist
```

### Deployment

The output of `npm run build` is a static site. You can drop the resulting `dist` directory on any web server.

An excellent choice is [Netlify](https://www.netlify.com/).

You can deploy your work to Netlify with their [CLI tool](https://github.com/netlify/cli).

```
npm install netlify-cli -g
netlify init
netlify deploy
```

## 📝 License

Copyright &copy; 2020 Upstatement, LLC

---

A [Puppy](https://github.com/Upstatement/puppy-starter/wiki) 🐶 powered project
