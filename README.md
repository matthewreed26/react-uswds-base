# React + Vite Shell

This is a high-performance React codebase scaffolded with Vite, featuring a tiered linting and formatting strategy to ensure code quality without sacrificing developer velocity.

## 🛠 Tech Stack & Tools

- **Node.js**: v18+ (Optimized for modern ESM and Flat Configs)
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: [ESLint](https://eslint.org/) (Flat Config)
- **Formatting**: [Prettier](https://prettier.io/) + [EditorConfig](https://editorconfig.org/)
- **Git Hooks**: [Husky v9](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)

## 🚀 Getting Started

```bash
cd frontend

# Install dependencies
# Note: This command triggers the `prepare` script, which automatically configures your local Git hooks via Husky.
npm install

# Run dev server
npm run dev

# Run ESLint across the whole project
npm run lint

# Force Prettier to format all supported files
npm run format

# Run the TypeScript compiler and Vite production build
npm run build
```

## 🛡 Quality Control (The Tiered Strategy)

To keep development fast while ensuring a stable production branch, this project uses a two-tiered automated check system:

### Tier 1: Pre-Commit (Fast)

**Trigger**: `git commit`
**Action**: Runs `lint-staged`.
**What it does**:

- Only checks files you have modified.
- Automatically fixes linting errors and formatting issues.
- Prevents the commit if a "breaking" lint error (like a hook violation) is found.

### Tier 2: Pre-Push (Thorough)

**Trigger**: `git push`
**Action**: Runs `npm run build`.
**What it does**:

- Validates the entire project using `tsc` (TypeScript compiler).
- Ensures the production build completes without errors.
- Prevents broken code from ever reaching the remote repository.

---

## ⚙️ Configuration Files

- `.editorconfig`: Level 0 editor behavior (Indentation, Newlines).
- `eslint.config.js`: Modern Flat Config for code quality and React best practices.
- `.prettierrc`: Rules for code aesthetics (Quotes, Semicolons, etc.).
- `.husky/`: Contains the Git hook scripts.

---

## 💡 Pro-Tip: VS Code Integration

For the best experience, ensure you have these extensions installed:

- **ESLint** (Official)
- **Prettier - Code formatter**
- **EditorConfig for VS Code**

Enable **"Format on Save"** in your VS Code settings to let Prettier handle the heavy lifting while you type!
