import React from 'react';
import Header from './components/header/Header';
import './App.scss';
import Cover from './components/cover/Cover';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import getContent from './content';


const App = () => {
  const [language, setLanguage] = React.useState('en');
  const switchLanguage = () =>
    setLanguage(language === 'en' ? 'es' : 'en');
  return (
    <div className={'main'}>
      <Header content={getContent(language, 'header')} />
      <Cover setLang={switchLanguage}
        content={getContent(language, 'cover')} />
      <About content={getContent(language, 'about')} />
      <Services content={getContent(language, 'services')} />
      <Portfolio content={getContent(language, 'portfolio')} />
      <Contact content={getContent(language, 'contact')} />
      <Footer />
    </div>
  );
};

export default App;
