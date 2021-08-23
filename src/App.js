import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Header />
    <Footer />
    <CatEdit />
    <Home />
    <NotFound />
    <CatIndex />
    </>
  );
}

export default App;
