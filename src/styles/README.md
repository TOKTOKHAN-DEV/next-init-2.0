# Folder Structure

    .
    ├── ...
    ├── styles
    │   ├── theme
    │   │   ├── index.ts                   # my main theme entrypoint
    │   │   ├── styles.ts                  # all my global style overrides
    │   │   ├── compoents
    │   │   │   ├── index.ts
    │   │   │   └── link.ts
    │   │   └── foundations
    │   │       ├── index.ts
    │   │       ├── breakpoints.ts
    │   │       ├── colors.ts
    │   │       ├── sizes.ts
    │   │       └── typography.ts
    │   │
    │   └── fonts.tsx
    └── ...

# Theming

### Customize Theme

아래 레퍼런스 참고 부탁드립니다.

### Theme Typings

When adding new components, component variations, sizes, colors and other theme foundations, you can extend the internal theme typings to provide autocomplete for your application theme.

Install

```
yarn add --dev @chakra-ui/cli
```

Usage

```
"scripts": {
  "gen:theme-typings": "chakra-cli tokens styles/theme",
  "postinstall": "yarn run gen:theme-typings"
}
```

postinstall script를 이용하여 package 설치 이후에 자동으로 theme types 파일을 생성하도록 만들었습니다.

Visual Studio Code에서만 사용 가능하며, types 파일 생성 이후에 vs code를 재실행해야 합니다.

# Using Fonts

아래 레퍼런스 참고 부탁드립니다.

# Reference

- [Customize Theme](https://chakra-ui.com/docs/theming/customize-theme)
- [Theme Typings](https://chakra-ui.com/docs/theming/advanced#theme-typings)
- [Using Fonts](https://chakra-ui.com/guides/using-fonts#option-2-using-font-face)
