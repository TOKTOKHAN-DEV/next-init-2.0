import ExamplesPage from '@components/ExamplesPage';
import ExampleLayout from '@components/common/@Layout/ExampleLayout';

function Examples() {
  return (
    <ExampleLayout title="참고할 예시 페이지" content={<ExamplesPage />} />
  );
}

export default Examples;
