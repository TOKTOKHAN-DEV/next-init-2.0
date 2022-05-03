import HomeLayout from '@components/common/@Layout/layouts/HomeLayout/HomeLayout';

import ExampleForm from './_fragments/ExampleFormContent';

function FormPage() {
  return <HomeLayout content={<ExampleForm />} />;
}

export default FormPage;
