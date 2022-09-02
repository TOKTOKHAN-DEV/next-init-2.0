# Next.js starter2

똑똑한개발자에서 진행하는 프로젝트의 스타터 프로젝트 next-init 2.0입니다.

# 🚀 Quick Start

Use this template 버튼을 활용해서 프로젝트의 repository를 생성해주세요.

# 📁 Folder Structure

A quick look at the directories you'll see in this project.

### Root directory layout

    ├── public                  #
    ├── src                     #
        ├── apis                #
        ├── components          #
            ├── common          #
            ├── HomePage        #
            ├── ExamplePage     #
        ├── constants           #
        ├── features            #
        ├── generated           #
        ├── pages               #
        ├── scripts             #
        ├── styles              #
        ├── utils               #
    ├── README.md               #
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

### styles

Css, Chakra-ui theme configuration files are placed into this folder.

    .
    ├── ...
    ├── styles           
    │   ├── theme        
    │       └── index.ts
    │       └── styles.ts
    │       └── textStyles.ts
    └── ...

### apis

Api call related functions.

    .
    ├── apis              
    │   ├── _axios        
    │       └── instance.ts
    │       └── useCustomInstance.ts
    │   ├── auth          
    │   ├── example       
    │   ├── theme         
    └── ...

### Components

Components are independent and reusable bits of code.

    .
    ├── ...
    ├── components   
    │ ├── common     
    │   ├── @Icons   
    │   ├── @Layout  
    │   ├── Select   
    │   ├── Calendar 
    │   └── ...      
    │ ├── elements   
    │ ├── hooks       
    └── ...

### Hooks

Custom hook allows you to extract some components logic into a reusable function that starts with use and that call can other hooks.

      .
    ├── ...
    ├── components   
    │ ├── common     
    │ ├── elements   
    │ ├── hooks      
    │   ├── useSize.ts       
    └── ...
### Utils

Small snippets you can use throughout the application. Short and specific functions and constants used throughout application.

### Generated

Generated files such as apis, components, ...

    .
    ├── ...
    ├── generated         # If you run generate-script, it will be created
    │ ├── apis            # by swagger-typescript-api
    │ ├── mock            # by orval
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
 
  // good
  import ReservationCard from './ReservationCard';
  
  
  // bad
  const ReservationItem = <ReservationCard />;
  
  
  // good
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
  ```# ⭐️ Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **State Management:** [React Query](https://react-query.tanstack.com/), [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Chakra-ui](https://chakra-ui.com/), [Emotion](https://emotion.sh/docs/introduction)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
# Reference

- [Airbnb React/JSX Style Guide - Naming](https://github.com/airbnb/javascript/tree/master/react#naming)
- [JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions)
- [리액트 어플리케이션의 상태 관리하기](https://www.kenrhee.com/blog/react-application-state-management)
