### SVG 파일 기반 Chakra Icon 생성 스크립트

```bash
// 기본적으로 public/icons/svg 폴더를 조회하고,
// generated/icons/MyIcons.tsx 에 경로에 생성됩니다.

npm run gen:icon

// svg 파일경로와 생성되는 위치는 argument를 넘겨주어 변경할 수 있습니다.

ex)
npm run gen:icon -- -o compoenets/icons/Target.tsx
npm run gen:icon -- -i svgs/happy.svg
```

### options

- -i, -input : svg 파일, svg 목록이 포함 된 폴더
- -o, -output : 생성 경로 위치
