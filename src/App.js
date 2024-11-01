import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <Outlet />
      </YoutubeApiProvider>
    </>
  );
}

export default App;
