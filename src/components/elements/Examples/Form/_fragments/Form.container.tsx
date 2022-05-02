import useExampleForm from '../_hooks/useFormSchema';
import FormPresenter from './Form.presenter';

const ExampleForm = () => {
  const formData = useExampleForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username, email, phone }) => {
    console.log(`submitted: ${username}, ${email}, ${phone}`);
  });
  return <FormPresenter formData={formData} onSubmit={onSubmit} />;
};

export default ExampleForm;
