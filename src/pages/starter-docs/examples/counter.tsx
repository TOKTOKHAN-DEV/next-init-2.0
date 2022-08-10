import CounterPage from '@components/CounterPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Counter() {
  return <HomeLayout content={<CounterPage />} />;
}

export default Counter;
