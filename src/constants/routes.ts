export const ROUTES = {
  HOME: '/',
  //@delete:line
  STARTER_DOCS: {
    //@delete:line
    MAIN: '/starter-docs',
    //@delete:line
    THEME_VIEWER: '/starter-docs/theme-viewer',
    //@delete:line
    EXAMPLES: {
      //@delete:line
      MAIN: '/starter-docs/examples',
      //@delete:line
      COUNTER: '/starter-docs/examples/counter',
      //@delete:line
      FORM: '/starter-docs/examples/form',
      //@delete:line
      MODALS: '/starter-docs/examples/modals',
      //@delete:line
      SOCIAL: '/starter-docs/examples/social',
      //@delete:line
      LODASH: '/starter-docs/examples/lodash',
      //@delete:line
      S3_FILE_INPUT: '/starter-docs/examples/file-input',
    },
  },
} as const;
