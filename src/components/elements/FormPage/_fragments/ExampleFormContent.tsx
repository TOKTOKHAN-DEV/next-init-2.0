import useExampleForm from '../_hooks/useExampleForm';
import ExampleFormContentView from './ExampleFormContent.view';

const ExampleFormContent = () => {
  const formData = useExampleForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username, email, phone }) => {
    console.log(`submitted: ${username}, ${email}, ${phone}`);
  });
  return <ExampleFormContentView formData={formData} onSubmit={onSubmit} />;
};

export default ExampleFormContent;
