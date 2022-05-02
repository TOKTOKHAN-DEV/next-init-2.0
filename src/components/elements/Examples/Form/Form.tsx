import HomeLayout from '@components/common/@Layout/layouts/HomeLayout/HomeLayout';

import ExampleForm from './_fragments/Form.container';

function FormContainer() {
  return <HomeLayout content={<ExampleForm />} />;
}

export default FormContainer;
