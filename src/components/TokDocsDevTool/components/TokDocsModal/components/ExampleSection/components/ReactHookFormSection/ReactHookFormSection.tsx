import ReactHookFormSectionView from './ReactHookFormSection.view';
import useExampleForm from './hooks/useExampleForm';

const ReactHookFormSection = () => {
  const formData = useExampleForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username, email, phone, gender, fruit }) => {
    console.log(
      `submitted: ${username}, ${email}, ${phone}, ${gender.value}, ${fruit}`,
    );
  });
  return <ReactHookFormSectionView formData={formData} onSubmit={onSubmit} />;
};

export default ReactHookFormSection;
