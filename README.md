<div align="center">

# Law Analyse

UI-прототип для анализа нормативных документов с фокусом на удобную навигацию по статье, подсветку конфликтов и AI-assisted обзор.

![React](https://img.shields.io/badge/React-19-0b1020?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-0b1020?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-0b1020?style=for-the-badge&logo=vite)
![Vitest](https://img.shields.io/badge/Vitest-Tested-0b1020?style=for-the-badge&logo=vitest)

</div>

## About

`Law Analyse` started as a single-file React prototype and was rebuilt into a structured `Vite + React + TypeScript` application.

The app demonstrates a legal document reading experience with:

- document structure navigation by sections and articles;
- article-level conflict highlighting;
- simulated AI chat assistant with quick prompts;
- desktop, tablet, and mobile preview modes;
- modular architecture with reusable hooks, components, and styles.

## Stack

- `React 19`
- `TypeScript`
- `Vite`
- `Vitest`
- `Testing Library`

## Project Structure

```text
src/
  features/law-analyse/
    components/   # UI blocks
    data/         # demo law content and chat replies
    hooks/        # page state and chat state
    utils/        # pure helper logic
  shared/
    components/   # reusable UI primitives
    constants/    # shared config
    styles/       # split CSS layers
  test/           # test setup
```

## Highlights

- The feature is split into small, focused files for easier maintenance.
- State logic is isolated in custom hooks instead of being mixed into JSX.
- Visual styles are extracted from components into separate CSS modules by concern.
- The original single-file prototype has been fully replaced by the modular TypeScript implementation.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start local development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

## Available Scripts

```bash
npm run dev        # start Vite dev server
npm run build      # type-check and production build
npm run preview    # preview built app
npm run test       # run tests in watch mode
npm run test:run   # run tests once
npm run coverage   # generate coverage report
```

## Testing

The project includes automated tests for the most important layers:

- reply resolution logic;
- reusable hooks;
- page rendering and navigation behavior;
- AI interaction flow;
- responsive preview switching.

Current suite status: `13/13 tests passing`.

## Why This Project

This repository is a good starting point for:

- legal-tech UI prototypes;
- document intelligence dashboards;
- AI assistant interfaces for structured content;
- migration from a monolithic React file to a scalable frontend architecture.

## Status

This is a frontend prototype with mocked legal data and simulated AI responses.  
It is ready for further expansion with a real backend, search, authentication, or LLM integration.
