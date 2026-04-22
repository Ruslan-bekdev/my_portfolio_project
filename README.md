# Portfolio Website

My personal portfolio hub designed to showcase my projects, skills, and technical journey as a Web Developer.

## [Live Demo](https://ruslan-bekdev.github.io/my_portfolio_project/)

## Key Features
* **Custom Project Engine:** Built a modular system to display project details, tech stacks, and logic-to-markup ratios using a centralized configuration.
* **Interactive UI:** Smooth transitions and optimized navigation using React components.
* **Responsive Design:** Fully adapted for mobile, tablet, and desktop views with a focus on UX (including custom scroll indicators and touch-friendly controls).
* **Localization Ready:** Implemented a custom localization logic to handle content in multiple languages.

## Tech Stack
* **Core:** React 18, Vite
* **Styling:** SASS (Sass Modules), Material UI (MUI) for complex components.
* **Data Visualization:** Custom charts to demonstrate project complexity (logic vs markup).
* **Icons & Branding:** Skill Icons and custom SVG integration.

## Technical Highlights
* **Persistent Multi-Language System:** Implemented a robust localization engine supporting English, Russian, and Korean. Used `localStorage` to sync and persist user language preferences across sessions, ensuring a seamless UX.
* **Data-Driven Architecture:** The entire "Projects" section is powered by a centralized configuration layer. This decoupling of data from the UI allows for managing complex project metadata (tech stacks, logic-to-markup ratios, and external links) in one place.
* **Component-Based Logic:** Leveraged React's modularity to create reusable UI elements like `ScrollableImage`, `TooltipedImage`, and custom action buttons, maintaining a clean and maintainable codebase.
* **Advanced UI Polishing:** Integrated Material UI with custom SASS overrides to create a unique dark-themed aesthetic with intuitive navigation controls, including forced scroll indicators for mobile users.

## How to run locally
1. `git clone https://github.com/Ruslan-bekdev/my_portfolio_project.git`
2. `npm install`
3. `npm run dev`