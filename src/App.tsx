import { lazy, Suspense } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <MUIThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={'Loading...'}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </SCThemeProvider>
    </MUIThemeProvider>
  );
};

export default App;
