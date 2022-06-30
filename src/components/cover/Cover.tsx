import React from 'react';

const Cover = ({setLang, content}: {setLang: () => void, content: any}) => {
  return (
    <div className={'section__ section__cover'}>
      <div className={'row container'}>
        <div className={'col-lg-6 text-con no-padding'}>
          <span className={'salute'}>{content.salute}</span>
          <span className={'name'}>{content.name}</span>
          <span className={'role'}>{content.role}</span>
          <span className={'desc'}>{content.desc}</span>
          <div className={'switch-con'}>
            <a className={'nav__section__link nav__section__button'}
              href={'#contact'}>{content.contact}</a>
            <a href={'#'} className={'switch'}
              onClick={setLang}>{content.switcher}</a>
          </div>
        </div>
        <div className={'col-lg-6 img-con no-padding'}>
          <img alt={'cover'} src={'/static/img/cover.webp'}/>
        </div>
      </div>
    </div>
  );
};

export default Cover;
