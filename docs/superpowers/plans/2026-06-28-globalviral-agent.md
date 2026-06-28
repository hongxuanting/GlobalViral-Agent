# GlobalViral Agent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished React + Vite + TypeScript + Tailwind CSS front-end demo for GlobalViral Agent.

**Architecture:** A single-page cockpit app owns product input, loading, and generated report state in `App.tsx`. Presentational modules live under `src/components`, and mock report data lives in `src/data/mockReport.ts`. Vitest and React Testing Library verify the core generation flow and module rendering.

**Tech Stack:** React, Vite, TypeScript, Tailwind CSS, Vitest, React Testing Library, lucide-react.

---

## File Structure

- `package.json`: scripts and dependencies.
- `index.html`: Vite entry HTML.
- `vite.config.ts`: Vite and Vitest config.
- `tsconfig.json`, `tsconfig.node.json`: TypeScript config.
- `tailwind.config.js`, `postcss.config.js`: Tailwind setup.
- `src/main.tsx`: React entry.
- `src/App.tsx`: app state and layout.
- `src/App.test.tsx`: core behavior tests.
- `src/test/setup.ts`: jest-dom setup.
- `src/index.css`: Tailwind layers and global visual styles.
- `src/types.ts`: shared TypeScript types.
- `src/data/mockReport.ts`: mock product and report data.
- `src/components/*.tsx`: requested UI components.

## Task 1: Project Skeleton and Failing Test

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`

- [ ] **Step 1: Add project configuration and the first behavior test**

Create the configs and a test that expects the app to render the title, run the mocked loading state, and reveal the score.

```tsx
test('generates the mocked global growth report after loading', async () => {
  render(<App />);
  expect(screen.getByText('GlobalViral Agent')).toBeInTheDocument();
  await userEvent.click(screen.getByRole('button', { name: /生成全球增长方案/ }));
  expect(screen.getByText(/AI 正在分析商品卖点/)).toBeInTheDocument();
  await waitFor(
    () => expect(screen.getByText('86 / 100')).toBeInTheDocument(),
    { timeout: 2200 }
  );
  expect(screen.getByText('TikTok Shop')).toBeInTheDocument();
  expect(screen.getByText('A/B Test 实验建议')).toBeInTheDocument();
});
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 3: Run test to verify RED**

Run: `npm test -- --run`

Expected: FAIL because `src/App.tsx` does not exist yet.

## Task 2: Data, Types, and Core App Implementation

**Files:**
- Create: `src/types.ts`
- Create: `src/data/mockReport.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

- [ ] **Step 1: Implement shared types and mock data**

Define product form fields, score dimensions, platform fit entries, strategy groups, launch phases, and A/B tests using TypeScript types. Encode the requested score values and strategy content exactly enough for the UI to render.

- [ ] **Step 2: Implement app state and layout**

`App.tsx` should initialize the default product, simulate 1.5 seconds of loading on generate, and render the result modules once `generated` is true.

- [ ] **Step 3: Run test to verify GREEN for app behavior**

Run: `npm test -- --run`

Expected: PASS for `generates the mocked global growth report after loading`.

## Task 3: Requested Components and Visual System

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/ProductInput.tsx`
- Create: `src/components/GlobalScore.tsx`
- Create: `src/components/PlatformMatrix.tsx`
- Create: `src/components/PlatformStrategy.tsx`
- Create: `src/components/LaunchPath.tsx`
- Create: `src/components/ABTestPanel.tsx`
- Create: `src/components/CopyButton.tsx`
- Modify: `src/App.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Implement reusable CopyButton**

Use `navigator.clipboard.writeText` with a local copied state fallback label.

- [ ] **Step 2: Implement all requested visual components**

Render the hero, controlled product input, score card, platform matrix, strategy details, launch path, and A/B test panel. Use progress bars, a circular score, recommended platform highlights, glass cards, and responsive Tailwind layouts.

- [ ] **Step 3: Run test suite**

Run: `npm test -- --run`

Expected: PASS.

## Task 4: Build and Local Demo

**Files:**
- Modify only if verification exposes issues.

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: TypeScript and Vite build pass.

- [ ] **Step 2: Start dev server**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite serves the app on a local URL.

## Self-Review

- Spec coverage: all requested sections map to components and mock data.
- Placeholder scan: no open `TBD` or `TODO` items.
- Type consistency: component props should consume the shared `types.ts` interfaces.
