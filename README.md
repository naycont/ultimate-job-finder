# Ultimate Job Finder

This Single Page Application (SPA) showcases the following key features and functionalities:

1. **Job Openings Table**: Displays a list of available job openings in a table format.
2. **Filtering**: Allows users to filter job listings by title and category for a more tailored browsing experience.
3. **Job detail view**: Provides a detailed view of each job opening, including relevant information such as job description, company, and location.
4. **Job Application Emulation**: Simulates a job application process, enabling users to submit their details and apply for a selected position.

## Built with

- [Vue.js v3](https://vuejs.org/guide/introduction.html)
- [Vuetify](https://vuetifyjs.com/en/getting-started/installation/)
- [Vue Router](https://router.vuejs.org/guide/)
- [Pinia](https://pinia.vuejs.org/introduction.html)
- [Google material design icons](https://fonts.google.com/icons)

## Prerequisites

- Node.js (version 22.14.X)
- npm (version 10.0.X)
- IDE

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Installation

1. Clone repository:

```sh
git clone https://github.com/naycont/ultimate-job-finder.git
```

2. Navigate to the project directory:

```sh
cd ultimate-job-finder
```

3. Install dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

5. Run the development server and open http://localhost:5173/ultimate-job-finder/ in your browser.

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Type-Check, Compile and Minify for Production

1. Use the following commands to build and deploy the project:

```sh
npm run build
```

## deployed application

https://naycont.github.io/ultimate-job-finder/

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Contact

Nayeli Contreras - naycont@gmail.com

## Roadmap

### Improvements needed

1. Implement API instead of using mockData
2. Implement pagination on jobs list
3. Implement 'empty states' to indicate that no search results were found on job list
4. Implement file uploader on job application
5. Enhance notification component, adding configuration such as icon, types (error, info)..
6. Implment mobile view for job list
