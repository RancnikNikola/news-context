
import MainPage from './pages/MainPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import SingleItemEverything from './pages/single-item.page';
import Calendar from './pages/calendar.pages';
import AboutPage from './pages/about.pages';
import HeaderItem from './components/header-item/header-item.component';
import SingleItemTop from './pages/single-item-top.pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<MainPage />}/>
        <Route path='calendar' element={<Calendar />}/>
        <Route path='o-nama' element={<AboutPage />}/>
        <Route path='article/:articleId' element={<SingleItemTop />}/>
        <Route path='calendar/article/:articleId' element={<SingleItemEverything />}/>
      </Route>
    </Routes>
  );
}

export default App;
