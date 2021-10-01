# 📁 Folder Structure

    .
    ├── ...
    ├── components
    │   ├── common
    │   │   ├── molecules
    │   │   │   ├── Example
    │   │   │   │   ├── index.tsx                   # Export component
    │   │   │   │   ├── Example.tsx                 # Presentational component is concerned with how things look.
    │   │   │   │   ├── Example.test.tsx            # Test code
    │   │   │   │   ├── ExampleContainer.tsx        # Container component is concerned with side effects(I/O, network, etc.).
    │   │   │   │   ├── ExampleContainer.test.tsx   # Test code
    │   │   │   │   ├── exampleReducer.ts           # Reducer is concerned with logic/business rules.
    │   │   │   │   └── exampleReducer.test.ts      # Test code
    │   │   │   └── ...
    │   │   └── ...
    │   └── ...
    └── ...

Reducer 대신 Custom Hook으로 대체해도 무방합니다.

> **Q. 왜 저렁게 나누어 놓았습니까?**  
> A. 테스트 가능한 코드를 작성하기 위해서는 관심사를 분리해야 합니다. 다음과 같이 세가지 항목으로 구분하였습니다.
>
> - Display/UI Components
> - Program logic/business rules — the stuff that deals with the problem you’re solving for the user.
> - Side effects (I/O, network, disk, etc.)

# Atomic Design

![atomic design](https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png)

### Atoms

Atom은 가장 작은 컴포넌트 단위입니다. 예를 들어 buttons, titles, input, fonts 등이 해당합니다. Atom은 어떠한 곳에도 사용될 수 있습니다. 또한 여러가지 ui-state를 갖을 수 있습니다. 예를 들어 버튼은 disabled, hover, different sizes 등의 상태가 존재합니다.

### Molecules

Molecule은 하나 이상의 Atom과 조합하여 만들어집니다. 복잡한 구성 요소를 구성하기 시작합니다. Atom을 이용하여 어떠한 기능이나 동작을 수행할 수 있습니다.

### Organisms

Organism은 Atom, Molecule과 조합하여 만들어집니다. 화면의 개별 부분을 구성합니다.

### Templates

Template은 레이아웃, 와이어 프레임입니다. 구성 요소간의 위치, 배치를 정하게됩니다.

### Pages

구성 요소들을 조합하여 하나의 템플릿에 적용한 결과물로 사용자가 궁극적으로 보게될 내용입니다.

### Rules

- atoms, molecules, organisms 각각은 자신의 margin과 position을 설정하지 않는다.
- 상위 단계에서 하위 단계의 margin과 position을 설정할 수 있다.
- emplates have only one function: to set the grid of pages but never positions of specific components;
- Pages render the components with a template defined and it’s here that the Atomic Design will be connected to the rest of the application;

# 🤔 Don't use React.FC

React.FC를 사용하는 것은 지양합니다. 다음과 같은 이유가 있습니다.

1. 사용하지 않는 편이 더 간단하고 익숙합니다.
2. children prop이 옵셔널로 포함되어 props 타입이 명확하지 못합니다.
3. defaultProps가 정상적으로 동작하지 않습니다. defaultProps 사용하여 props의 초기 값을 설정하여도 값을 인식하지 못합니다.

다음과 같이 함수형 컴포넌트를 작성할 수 있습니다.

```tsx
import React from 'react';

type Image = {
  src: string;
  alt: string;
};

export interface CardProps {
  image?: Image;
  title: string;
  content: string;
}

export const Card = ({ image, title, content }: CardProps) => {
  return (
    <div>
      {image && <img src={image.src} alt={image.alt} />}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
```

# Reference

- [Unit Testing React Components](https://medium.com/javascript-scene/unit-testing-react-components-aeda9a44aae2)
- [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [react-atomic-design](https://github.com/danilowoz/react-atomic-design)
- [Atomic Design and ReactJS](https://danilowoz.com/blog/atomic-design-with-react)
- [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
