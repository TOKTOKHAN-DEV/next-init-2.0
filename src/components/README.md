# 📁 Folder Structure

    .
    ├── ...
    ├── components
    │   ├── @Icons
    │   ├── @Layout
    │   ├── Select
    │   │   ├── index.tsx                   # Export component
    │   │   ├── Select.tsx                  # Presentational component is concerned with how things look.
    │   │   ├── Select.stories.ts           # StoryBook
    │   │   ├── Select.test.tsx             # Test code
    │   │   ├── SelectContainer.tsx         # Container component is concerned with side effects(I/O, network, etc.).
    │   │   └── SelectContainer.test.tsx    # Test code
    │   ├── SocialButton
    │   └── ...
    └── ...

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
