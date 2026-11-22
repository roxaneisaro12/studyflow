
# StudyFlow

StudyFlow is a responsive study planner built with React. It helps students organise assignments, track progress and manage focused study sessions in one place.

## Live Demo

[View StudyFlow Live](ADD_YOUR_DEPLOYED_WEBSITE_URL)

## GitHub Repository

https://github.com/roxaneisaro12/studyflow

## Features

- Dashboard with task statistics and completion progress.
- Create, edit, complete and delete study tasks.
- Search tasks by title.
- Filter tasks by status and category.
- Sort tasks alphabetically or by due date.
- Validate task forms.
- Focus timer with study and break sessions.
- Personal settings for display name and study duration.
- Encouragement message preference.
- Persistent tasks and settings using localStorage.
- Responsive navigation for desktop and mobile.
- Custom 404 page for unknown routes.

## Technologies Used

- React 19
- Vite
- React Router DOM
- JavaScript
- CSS
- Browser localStorage

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── FocusTimer.jsx
│   ├── SectionCard.jsx
│   ├── TaskCard.jsx
│   └── TaskForm.jsx
├── data/
│   └── initialTasks.js
├── hooks/
│   ├── useDebounce.js
│   ├── useDocumentTitle.js
│   ├── useLocalStorage.js
│   └── useToggle.js
├── layouts/
│   └── SiteLayout.jsx
├── pages/
│   ├── App.jsx
│   ├── DashboardPage.jsx
│   ├── FocusPage.jsx
│   ├── NotFoundPage.jsx
│   ├── SettingsPage.jsx
│   └── TasksPage.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Custom Hooks

| Hook | Purpose |
|---|---|
| `useLocalStorage` | Saves and retrieves tasks and settings from browser storage. |
| `useToggle` | Manages boolean state for showing and hiding the task form. |
| `useDocumentTitle` | Updates the browser tab title when navigating between pages. |
| `useDebounce` | Delays task search updates to avoid filtering on every keystroke. |

## Component Design

StudyFlow uses reusable components to keep the application organised.

- `Button` provides consistent button styling and behaviour.
- `SectionCard` groups related page content.
- `TaskCard` displays individual tasks and their actions.
- `TaskForm` handles task creation, editing and validation.
- `FocusTimer` manages the focus countdown independently.
- `SiteLayout` provides shared navigation and page structure.

## State Management

React state is used to manage tasks, settings, form inputs, filters and timer controls.

Tasks and settings are persisted using the browser's localStorage API. Task updates use immutable state changes.

The FocusTimer component uses `useEffect` to manage its interval and clean it up when the component unmounts or the timer stops.

## Routing

React Router DOM provides the following routes:

| Route | Page |
|---|---|
| `/` | Dashboard |
| `/tasks` | Tasks |
| `/focus` | Focus |
| `/settings` | Settings |
| `*` | Not Found |

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/roxaneisaro12/studyflow.git
```

Navigate into the project:

```bash
cd studyflow
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Lessons Learned

Through this project, I practised building reusable React components, passing data through props, managing shared and local state, and handling forms.

I also learned how to use React Router for navigation, custom hooks for reusable logic, useEffect for side effects and cleanup, useRef for focusing inputs and managing timer intervals, and localStorage for persistent browser data.

The project helped me understand how component state, rendering and lifecycle behaviour work together in a React application.

## Walkthrough Video

[Watch the StudyFlow Project Walkthrough] : https://drive.google.com/file/d/1CfFeTcYyo4av6Semc4AB22b3isadzYlD/view?usp=sharing

---

**Project:** StudyFlow  
**Developer:** Roxane Isaro
