# GlobalViral Agent Design

## Goal

Build a front-end demo named **GlobalViral Agent**: an AI-style growth cockpit for cross-border e-commerce sellers. The demo accepts product information and generates mocked outputs for viral potential scoring, platform fit, platform-specific growth strategies, launch sequencing, and A/B testing ideas.

The project will use React, Vite, TypeScript, and Tailwind CSS. It will not connect to a backend, platform API, database, login, or routing system.

## Experience

The first screen should feel like a professional AI growth workstation for global commerce:

- Dark technology dashboard aesthetic.
- Deep gradient background with restrained purple, cyan, and green accents.
- Glassmorphism cards with clear information hierarchy.
- Dense but readable cockpit layout for 1440px screens.
- Responsive single-column behavior on mobile.

The hero section shows:

- `GlobalViral Agent`
- `跨境电商全平台爆款增长助手`
- `AI Growth Agent for Global E-commerce Sellers`
- Platform tags for Amazon, TikTok Shop, Shopee, Temu, Shopify, YouTube Shorts, and Instagram Reels.

## Interaction

The product form is prefilled with the portable mini blender example:

- 商品名称：便携式迷你榨汁杯
- 商品类目：厨房小家电
- 目标市场：美国 / 东南亚 / 英国
- 价格区间：$19.99 - $29.99
- 目标用户：上班族、学生、健身人群
- 商品卖点：便携、无线、易清洗、30秒榨汁
- 供应链优势：体积小、重量轻、适合跨境运输
- 广告目标：测品 + 转化

Clicking `生成全球增长方案` starts a 1.5 second loading state with:

`AI 正在分析商品卖点、平台用户行为、内容传播性与跨境转化路径...`

After loading, the app reveals the mocked report modules. Each module has a copy button that copies a text version of its content and briefly shows a copied state.

## Components

- `App.tsx`: owns form state, loading state, generated state, mock data, and page layout.
- `components/Hero.tsx`: hero title, subtitles, platform tags, and status accents.
- `components/ProductInput.tsx`: controlled product form and generate button.
- `components/GlobalScore.tsx`: total score, score dimensions, recommendation, and copy button.
- `components/PlatformMatrix.tsx`: platform cards with score, reason, risk, priority, and recommended highlighting.
- `components/PlatformStrategy.tsx`: platform-specific strategy sections for TikTok Shop, Amazon, Shopee/Lazada, Temu/AliExpress, Instagram Reels/YouTube Shorts, and Shopify.
- `components/LaunchPath.tsx`: three-stage launch roadmap and non-priority platform warning.
- `components/ABTestPanel.tsx`: A/B test recommendations.
- `components/CopyButton.tsx`: reusable clipboard button with local copied state.

## Mock Data

The app will encode the requested output values directly in TypeScript constants:

- Global score: `86 / 100`
- Dimensions: visual display 92, search demand 84, price competitiveness 78, content virality 90, logistics friendliness 82, repurchase potential 70, differentiation 76.
- Platform fit scores: TikTok Shop 92, Amazon 78, Shopee 88, Lazada 84, Temu 81, AliExpress 76, Instagram Reels 86, YouTube Shorts 85, Shopify 72.
- Platform strategies, launch path, and A/B test ideas follow the user-provided content.

## Visual Behavior

Recommended platforms are highlighted with stronger accent borders, brighter score treatment, and priority badges. Scores are shown with progress bars and a circular total-score display. Text sizes stay compact inside dashboard cards, and fixed-format controls use stable dimensions to avoid layout shift.

## Verification

Run:

- `npm install`
- `npm run build`
- `npm run dev`

The build must pass, and the dev server should open a working local demo.
