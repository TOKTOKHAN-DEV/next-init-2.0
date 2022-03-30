# Next.js starter

Kick off your project with this boilerplate.

# 🚀 Quick Start

```bash
git clone https://github.com/TokTokHan/next-init-2.0.git <Project Name>
cd <Project Name>
yarn install
yarn run dev
```

your site is now running at `http://localhost:3000`

# 📁 Folder Structure

A quick look at the directories you'll see in this project.

### Root driectory layout

    .
    ├── pages               #
    ├── public              #
    ├── styles              #
    ├── apis                #
    ├── models              #
    ├── components          #
    ├── hooks               # Custom hooks
    ├── utils               #
    ├── libs                #
    ├── cypress             # Automated tests
    ├── README.md           #
    └── ...

### Pages

Each page is associated with a route based on its file name.

    .
    ├── ...
    ├── pages               #
    │   ├── apis            # API endpoint
    │   ├── _app.tsx        # App component to initialize pages
    │   ├── _document.tsx   # Custom document to augment application's <html> and <body> tags
    │   └── ...
    └── ...

### Public

Next.js can serve static files, like images, under a folder called public in the root directory.

    .
    ├── ...
    ├── public              #
    │   ├── favicons        #
    │   └── ...
    └── ...

### Styles

Css, theme configuration files are placed into this folder.

    .
    ├── ...
    ├── styles              #
    │   ├── theme.tsx       #
    │   └── ...
    └── ...

### Api

Api call related functions.

### Components

Components are independent and reusable bits of code.

    .
    ├── ...
    ├── components          #
    │ ├── @Icons            # 아이콘~
    │ ├── @Layout           # 레이아웃~
    │ ├── Select            #
    │ ├── Calendar          #
    │ └── ...               #
    └── ...

### Container

Components are independent and reusable bits of code.

    .
    ├── ...
    ├── containers                  # containers에 하위 폴더들은 pages와 1:1 매칭
    │ ├── login                     #
    │ │  ├── _fragments             # _fragment는 Login 페이지에서만 사용되는 컴포넌트
    │ │  │  ├── LoginForm.tsx       # 중복되는 경우에는 components 폴더로 이동
    │ │  │  └── Intro.tsx           #
    │ │  ├── Login.tsx              #
    │ │  ├── LoginContainer.tsx     # LoginContainer 에서 모든 로직에 대한 부분들 작업 (state, props)
    │ │  └── index.tsx              #
    │ ├── home                      #
    │ └── ...                       #
    └── ...

### Hooks

Custom hook allows you to extract some components logic into a reusable function that starts with use and that call can other hooks.

    .
    ├── ...
    ├── hooks                #
    │   ├── useScript.tsx    #
    │   └── ...
    └── ...

### Utils

Small snippets you can use throughout the application. Short and specific functions and constants used throughout application.

### Libs

Libraries you can use throughout the application. A library is a JavaScript file that contains a bunch of functions, and those functions accomplish some specific purpose.

    .
    ├── ...
    ├── libs                  #
    │   ├── gtm.ts            #
    │   └── ...
    └── ...

### Generated

Generated files such as apis, components, ...

    .
    ├── ...
    ├── generated         If you run generate-script, it will be created
    │ ├── apis            # by swagger-typescript-api
    │ ├── mock         # by orval
    └── ...

- **generate apis**

1. set config about gen_api on your .env
2. script

   > ```
   > npm(or yarn) run gen:api
   > ```

3. usage mock data

   > ```
   > mock-data-path: /generated/mock/[filename].msw
   > mock-data: Use Function "~Mock"
   > network-mocking: Use function "~MSW" and set on "_App.ts"
   > ```

   mock-data by [orval](https://orval.dev/reference/configuration/overview), [faker](https://github.com/faker-js/faker), [msw](https://mswjs.io/docs/getting-started/mocks/rest-api)
   api-data by [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api)

### Cypress

Automated tests with cypress.

    .
    ├── ...
    ├── cypess                #
    │ ├── fixtures            # Fixed data sets
    │ ├── integration         # End-to-end, integration tests (alternatively `e2e`)
    │ ├── plugins             #
    │ ├── support             #
    └── ...

### Scripts

there is useful scripts in [package.json](package.json)

- **yarn run gen:api**
  - swagger => axios-api, react-hook, mock-data
- **yarn run gen:icon**
  - svg => chakra-icon

see more [README.md](/src/scripts/README.md)

# 📛 Naming

### 👨‍🦳 React Component

- **Extensions:** Use .tsx extension for React components.

- **Filename:** Use PascalCase for filenames. E.g., ReservationCard.tsx.

- **Reference Naming:** Use PascalCase for React components and camelCase for their instances.

  ```tsx
  // bad
  import reservationCard from './ReservationCard';

  
  
  
  /
  import ReservationCard from './ReservationCard';
  
  
  //
  const ReservationItem = <ReservationCard />;
  
  
  // g
  const reservationItem = <ReservationCard />;
  ```

- **Component Naming:** Use the filename as the component name. For example, ReservationCard.tsx should have a reference name of ReservationCard. However, for root components of a directory, use index.tsx as the filename and use the directory name as the component name:

  ```tsx
  // bad
  import Footer from './Footer/Footer';

  // bad
  import Footer from './Footer/index';

  // good
  import Footer from './Footer';
  ```

### 🐪 Others

Always use camelCase for others.

- scripts
- folders
- variables
- functions

# ⭐️ Stack

- **Framework:** Next.js
- **State Management:** React Query, Context API
- **Styling:** Chakra-ui, Emotion
- **Forms:** React Hook Form
- **Testing:** Cypress

# Reference

- [Folder-Structure-Conventions](https://github.com/kriasoft/Folder-Structure-Conventions/blob/master/README.md)
- [Airbnb React/JSX Style Guide - Naming](https://github.com/airbnb/javascript/tree/master/react#naming)
- [JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions)
- [리액트 어플리케이션의 상태 관리하기](https://www.kenrhee.com/blog/react-application-state-management)
