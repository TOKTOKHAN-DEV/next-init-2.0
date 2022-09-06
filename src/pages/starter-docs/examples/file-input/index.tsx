import StarterDocsExamplesFileInputPage from '@components/StarterDocsExamplesFileInputPage';
import ExampleLayout from '@components/common/@Layout/ExampleLayout';

function Form() {
  return (
    <ExampleLayout
      title="S3 파일 업로드 예시"
      content={<StarterDocsExamplesFileInputPage />}
    />
  );
}

export default Form;
