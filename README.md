# StudyFlow

A responsive React study planner for managing coursework, tracking completion and focusing in timed sessions. Built with React 19, Vite, Tailwind CSS and React Router DOM. All data is local to the browser; no API or backend.


## Features
- Dashboard summary and upcoming task preview
- Task CRUD: add, edit, delete and complete tasks
- Search, category/status filtering and due-date or alphabetical sorting
- Study / short-break timer with interval cleanup
- Personal display name, session length and encouragement preference
- Browser persistence via `localStorage`
- Responsive sidebar and mobile navigation


## Component ownership
`App.jsx` owns the shared tasks array and settings because both Dashboard and Tasks pages use that data. State is passed down as props and updates are sent upward through callbacks. `FocusPage` owns its timer state so timer ticks do not re-render the entire app.


## Custom hooks
- `useLocalStorage`: restore and persist task/preferences state
- `useToggle`: show/hide the task form
- `useDocumentTitle`: set page title through an Effect
- `useDebounce`: delay search updates and clean up pending timeout


## Render behavior
React re-renders components when their state or props change. A render does not necessarily mean the browser DOM changes; React compares the result and commits only needed updates. The timer state is kept inside FocusPage to limit unrelated renders. Task filtering/counts are derived from the source array rather than duplicated in state. The React Compiler can automate some memoization; this small project does not need manual memoization for these simple lists.


## Run locally
```bash
npm install
npm run dev
```

Build check:
```bash
npm run build
```

## Walkthrough video
Add your 3–5 minute walkthrough URL here after recording.

## Submission links
- GitHub: add repository URL after pushing
- Live website: add deployment URL after deploying
- Walkthrough video: add recording URL
