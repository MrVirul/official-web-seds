# Project Best Practices

Welcome to the **SEDS SLIIT** project! This guide outlines the standard practices for folder structure, branching, and committing code to ensure a clean, maintainable, and scalable codebase.

---

## 📂 1. Folder Structure

We organize our React/Vite application primarily by technical concern and then by feature where appropriate. All source code lives inside the `src/` directory.

### Directory Breakdown

- **`src/assets/`**: Static assets like images, icons, and global fonts.
  - _Example: `astronomy.png`, `logo.svg`_
- **`src/components/`**: Reusable UI components.
  - Keep components modular and single-responsibility.
  - _Example: `Navbar.tsx`, `HeroSection.tsx`_
  - **`src/components/ui/`**: Specialized folder for base, generic design system components (like Buttons, Inputs, Cards).
- **`src/pages/`**: Higher-level views that represent a full route or screen. Pages should generally compose multiple components together.
  - _Example: `Index.tsx`, `NotFound.tsx`_
- **`src/lib/`** or **`src/utils/`**: Helper functions, constants, and utilities that don't belong in a specific component.
- **`src/hooks/`**: Custom React hooks.
- **`src/` (root)**: Configuration files (`App.tsx`, `main.tsx`, `index.css`).

### Component Best Practices

- **PascalCase** for component files (`Navbar.tsx`, not `navbar.tsx`).
- **camelCase** for utility files and hooks (`useWindowSize.ts`, `formatDate.ts`).
- Keep files concise. If a component grows over 150-200 lines, consider breaking it down into smaller sub-components.

---

## 🌿 2. Branching Strategy

We follow a structured branching strategy to maintain stability on the main branch while allowing concurrent feature development.

### Main Branches

- **`main`**: The source of truth. This branch contains production-ready code. Direct commits to `main` should be avoided.

### Supporting Branches

- **`feature/<feature-name>`**: For developing new features.
  - _Example: `feature/navbar-responsive`_
- **`bugfix/<bug-name>`**: For fixing bugs found in development or production.
  - _Example: `bugfix/hero-image-overlap`_
- **`chore/<task-name>`**: For routine tasks like updating dependencies or configuration changes.
  - _Example: `chore/update-readme`_

### Workflow

1. Sync your local `main` branch: `git pull origin main`
2. Create your new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them.
4. Push to origin: `git push origin feature/your-feature-name`
5. Open a **Pull Request (PR)** against the `main` branch.

---

## 💬 3. Committing

We use conventional commits to make our Git history readable, searchable, and easy to parse for automated changelogs.

### Commit Message Format

`<type>(<optional scope>): <description>`

### Types

- **`feat`**: A new feature (`feat(navbar): add mobile hamburger menu`)
- **`fix`**: A bug fix (`fix(hero): resolve image overlap on tablet view`)
- **`style`**: Formatting, missing semi-colons, etc; no code change (`style(css): format tailwind classes`)
- **`refactor`**: Refactoring production code without adding features or fixing bugs (`refactor(api): restructure api calls`)
- **`docs`**: Changes to documentation (`docs: update best practices guide`)
- **`chore`**: Updating grunt tasks, dependencies etc; no production code change (`chore(deps): bump react version`)

### Guidelines

- Start the description with a lowercase letter.
- Use the imperative mood in the description ("add feature" not "added feature" or "adds feature").
- Keep the first line under 72 characters.
- If more context is needed, add an empty line after the description followed by the commit body.

Example of a good commit:

```
feat(ui): implement responsive navbar

- Added a hamburger menu icon for small screens.
- Included a full-screen backdrop overlay for mobile navigation.
```

---

By adhering to these practices, we keep our project clean, minimize merge conflicts, and make it easier for new contributors to jump in!
