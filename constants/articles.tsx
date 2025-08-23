import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import articleImg1 from "root/public/article-1.jpg";
import articleImg2 from "root/public/article-2.jpg";
import articleImg3 from "root/public/article-3.jpg";

export type ArticleT = {
  id: number;
  createdAt: Date;
  title: string;
  thumbnail: StaticImageData;
  body: ReactNode;
  description: string;
};

export const ARTICLES: ArticleT[] = [
  {
    id: 1,
    createdAt: new Date("2025-02-07"),
    title: "Why React.js and Next.js are the best choice for your business?",
    thumbnail: articleImg1,
    description:
      "React.js and Next.js stand out as powerful tools for building modern web applications, offering scalability, performance, and developer efficiency that can drive business growth",
    body: (
      <main className="article">
        <h3>Key Benefits of React.js</h3>
        <ul>
          <li>
            <b>Component-Based Architecture:</b> React allows developers to build reusable UI
            components, speeding up development and ensuring consistency across your application.
          </li>

          <li>
            <b>Virtual DOM:</b> This optimizes rendering by updating only changed parts of the UI,
            leading to faster load times and better user experience. Vast Ecosystem: With libraries
            like Redux for state management and a huge community, React supports rapid innovation
            and easy integration with other tools.
          </li>

          <li>
            <b>Cross-Platform Compatibility:</b> Build web, mobile (via React Native), and desktop
            apps from a single codebase, reducing costs for businesses expanding to multiple
            platforms.
          </li>
        </ul>
        <h3>Why Next.js Enhances React for Business</h3>
        <ul>
          <li>
            <b>Server-Side Rendering (SSR):</b> Improves SEO and initial load times, crucial for
            e-commerce or content-driven sites to rank higher on search engines.
          </li>

          <li>
            <b>Static Site Generation (SSG):</b> Pre-renders pages at build time for lightning-fast
            performance and lower hosting costs.
          </li>

          <li>
            <b>API Routes:</b> Built-in backend functionality allows you to handle server logic
            without a separate server, simplifying deployment.
          </li>

          <li>
            <b>Automatic Code Splitting:</b> Reduces bundle sizes, ensuring quick page loads even
            for large apps, which boosts user retention and conversions.
          </li>
        </ul>

        <p>
          For businesses, React and Next.js mean faster time-to-market, lower maintenance costs, and
          scalable apps that handle growth seamlessly. Whether you{"'"}re a startup or enterprise,
          this stack future-proofs your digital presence.
        </p>
      </main>
    ),
  },
  {
    id: 2,
    createdAt: new Date("2025-02-07"),
    title: "Next.js rendering architecture",
    thumbnail: articleImg2,
    description:
      "Next.js provides a flexible rendering architecture that combines client-side and server-side techniques for optimal performance, SEO, and user experience",
    body: (
      <main className="article">
        <h3>Core Rendering Modes</h3>
        <ul>
          <li>
            <b>Client-Side Rendering (CSR):</b> The browser downloads JavaScript and renders the
            page dynamically. Ideal for interactive apps like dashboards, but can hurt initial load
            and SEO.
          </li>
          <b>Server-Side Rendering (SSR):</b> Pages are rendered on the server for each request.
          Great for dynamic content (e.g., user-specific data) and SEO, as search engines receive
          fully rendered HTML.
          <li>
            <b>Static Site Generation (SSG):</b> Pages are pre-rendered at build time and served as
            static files. Perfect for blogs or marketing sites—fast, secure, and cost-effective with
            CDNs.
          </li>
          <li>
            <b>Incremental Static Regeneration (ISR):</b> A hybrid of SSG; pages are statically
            generated but can be regenerated in the background after a revalidation period,
            balancing static speed with fresh data.
          </li>
        </ul>
        <h3>How It Works in Next.js</h3>
        <ul>
          <li>
            Use <code>getStaticProps</code> for SSG: Fetches data at build time.
          </li>
          <li>
            Use <code>getServerSideProps</code> for SSR: Runs on every request.
          </li>
          <li>
            Use <code>getStaticPaths</code> for dynamic routes in SSG.
          </li>
          <li>
            <b>Client-side hydration:</b> Next.js automatically hydrates static/SSR pages with React
            on the client for interactivity.
          </li>
        </ul>
        <p>
          This architecture allows developers to choose the best method per page, making Next.js
          versatile for everything from static sites to full-stack apps.
        </p>
      </main>
    ),
  },
  {
    id: 3,
    createdAt: new Date("2025-02-07"),
    title: "Redux vs Zustand (Why Zustand is better than Redux?)",
    thumbnail: articleImg3,
    description:
      "State management is crucial in React apps. Redux and Zustand are popular libraries, but they differ in complexity and use cases",
    body: (
      <main className="article">
        <h3>Overview of Redux</h3>
        <ul>
          <li>
            <b>Centralized Store:</b> A single global store holds all app state.
          </li>
          <li>
            <b>Actions and Reducers:</b> State changes via dispatched actions processed by pure
            reducer functions.
          </li>
          <li>
            <b>Middleware:</b> Supports async operations (e.g., via Redux Thunk or Saga).
          </li>
          <li>
            <b>Pros:</b> Predictable, great for large-scale apps with complex state logic.
          </li>
          <li>
            <b>Cons:</b> Boilerplate-heavy (actions, reducers, constants), steep learning curve, and
            requires additional libs for async.
          </li>
        </ul>
        <h1>Overview of Zustand</h1>
        <ul>
          <li>
            <b>Minimalist Store:</b> Creates a simple store with hooks, no need for providers in
            most cases.
          </li>
          <li>
            <b>Hook-Based API:</b> Use create to define a store with state and actions in one place.
          </li>
          <li>
            <b>Async Support Built-In:</b> Handles promises natively without extra middleware.
          </li>
          <li>
            <b>Pros:</b> Lightweight (under 1KB gzipped), no boilerplate, easy to integrate with
            React hooks.
          </li>
        </ul>
        <h3>Why Zustand is Better than Redux?</h3>
        <ul>
          <li>
            <b>Simplicity:</b> Zustand reduces code verbosity—define state and mutations in a single
            function vs. Redux{"'"}s multiple files.
          </li>
          <li>
            <b>Performance:</b> Smaller bundle size and no unnecessary re-renders; subscribes only
            to used state slices.
          </li>
          <li>
            <b>Ease of Use:</b> No context providers needed for small apps; scales well without
            complexity.
          </li>
          <li>
            <b>Modern React Alignment:</b> Leverages hooks fully, feeling more native than Redux
            {"'"}s older paradigm.
          </li>
          <li>
            <b>When to Choose:</b> For most medium-sized apps, Zustand offers Redux{"'"}s power
            without the overhead. Redux shines in massive, team-based projects needing strict
            structure.
          </li>
        </ul>
        <p>
          Zustand streamlines development, making it a superior choice for faster iteration and
          cleaner code in many scenarios.
        </p>
      </main>
    ),
  },
];
