import './Header.scss';
import React, {useState} from 'react';

const Header = ({content}: {content: any}) => {
  const [isMobVisible, setIsMobVisible] = useState(false);
  const sections = [
    'about',
    'services',
    'portfolio',
    'contact',
  ];

  return (
    <nav className={'nav__'}>
      <div className={'container d-none d-lg-flex'}>
        <div className={'nav__section__ nav__section__--left'}>
          <span className={'nav__section__text'}>{content.follow}</span>
          <a href={'https://www.linkedin.com/in/hugolo27/'} className={'nav__section__icon-link'}
            target={'_blank'} rel={'noreferrer'}>
            <i className={'fa-brands fa-linkedin'} />
          </a>
          <a href={'https://play.google.com/store/apps/developer?id=Hugo+L%C3%B3pez'} className={'nav__section__icon-link'}
            target={'_blank'} rel={'noreferrer'}>
            <i className={'fa-brands fa-google-play'} />
          </a>
          <a href={'https://github.com/hugolo27'} className={'nav__section__icon-link'}
            target={'_blank'} rel={'noreferrer'}>
            <i className={'fa-brands fa-github'} />
          </a>
          <a href={'https://www.instagram.com/hugolo27/'} className={'nav__section__icon-link'}
            target={'_blank'} rel={'noreferrer'}>
            <i className={'fa-brands fa-instagram'} />
          </a>
        </div>
        <div className={'nav__section__ nav__section__--right'}>
          {
            sections.map((section: any) =>
              <a rel={'noopener'} key={`desktop-${section}`}
                className={`nav__section__link ${section === 'contact' &&
                'nav__section__button'}`} href={`#${section.link}`}>
                {content[section]}
              </a>)
          }
        </div>
      </div>
      <div className={'d-lg-none nav__mob'}>
        <div className={'nav__mob-hamb'}>
          <i className={'fa fa-bars'} onClick={() => setIsMobVisible(true)} />
        </div>
        <div className={'nav__mob-logo'}>
          <img alt={'logo'} src={'/static/img/logo.png'} />
        </div>
      </div>
      {
        isMobVisible &&
          <div className={'mob-menu'}>
            {
              sections.map((section: any) =>
                <a rel={'noopener'} key={`mob-${section.link}`}
                  onClick={() => setIsMobVisible(false)}
                  className={`mob-menu__section__link ${section.link ===
                  '#contact' &&
                     'mob-menu__section__button'}`} href={`#${section.link}`}>
                  {content[section]}
                </a>)
            }
            <span className={'mob-menu__close'}
              onClick={() => setIsMobVisible(false)}>&times;</span>
          </div>
      }
    </nav>
  );
};

export default Header;
