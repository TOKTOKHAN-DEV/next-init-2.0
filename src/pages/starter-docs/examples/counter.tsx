import CounterPage from '@components/CounterPage';
import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

function Counter() {
  return <HomeLayout content={<CounterPage />} />;
}

export default Counter;
