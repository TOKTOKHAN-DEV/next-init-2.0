import ThemeViewerPage from '@components/ThemeViewerPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function ThemeViewer() {
  return <HomeLayout content={<ThemeViewerPage />} />;
}

export default ThemeViewer;
