# Interactive Multi-Page Portfolio

This project is a beginner-friendly React portfolio website adapted from the static HTML and CSS version of the assignment. It uses the same personal content and responsive styling, but now the site works as a multi-page React single-page application with route-based views.

## Setup and Run

1. Install dependencies: npm install

2. Run the development server: npm run dev

3. Create a production build: npm run build

4. Preview the production build locally: npm run preview

## Component Tree

The app currently uses a simple component tree:

- App component lifts the theme preference and defines the routes.
- Navbar provides navigation links and the theme toggle.
- HomePage renders the landing page with a one-second loading effect.
- AboutPage renders the bio information and the Skills component.
- ProjectsPage receives the project data and maps it to ProjectCard components.
- ProjectCard accepts project information through props and passes a smaller piece of content to ProjectSummary.
- ContactPage renders the contact details and ContactForm.
- ContactForm manages the controlled contact form with validation.
- Footer renders the page footer.

## State Lifting

The top-level App component manages the theme preference with React state. The selected value is stored in localStorage and passed down to the Navbar so the dark/light toggle can be shared across the whole app.

## useEffect Hooks

The project implements these effect hooks:

- HomePage loading delay: a timeout is used inside useEffect with an empty dependency array to show a brief loading state before the content appears.
- Theme persistence: App has a useEffect that runs whenever the theme changes and writes the user preference to localStorage.
- Rehydration: App initializes theme from localStorage on the first render so the theme survives page reloads.

## Project Data

The project list is stored under src/data/projects.js and is mapped inside ProjectsPage.
