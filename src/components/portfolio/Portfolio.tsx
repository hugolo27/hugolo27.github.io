import React from 'react';

const Portfolio = ({content}: {content: any}) => {
  return (
    <div className={'section__ section__portfolio'}>
      <div className={'row container'} id={'portfolio'}>
        <div className={'col-lg-12 portf-con'}>
          <span className={'portf-title'}>{content.title}</span>
        </div>
        <div className={'col-lg-2 d-none d-lg-block'} />
        <div className={'col-lg-8'}>
          <div className={'portf-row'}>
            <a className={'portf-item'} rel={'noreferrer'} href={'https://play.google.com/store/apps/details?id=hlopez.policalc&hl=en'}>
              <img alt={'PoliCalc'} src={'./static/img/po.webp'}/>
              <span>{'PoliCalc'}</span>
              <span>{'React Native'}</span>
            </a>
            <a className={'portf-item'} rel={'noreferrer'} href={'https://play.google.com/store/apps/details?id=hlopez.smartpoms&hl=en'}>
              <img alt={'SmartPOMS'} src={'./static/img/sm.webp'}/>
              <span>{'Smart POMS'}</span>
              <span>{'Android SDK'}</span>
            </a >
            <a className={'portf-item'} rel={'noreferrer'} href={'https://play.google.com/store/apps/details?id=com.hlopez.mistraleros&hl=en'}>
              <img alt={'Mistraleros'} src={'./static/img/mi.webp'}/>
              <span>{'Mistraleros'}</span>
              <span>{'Django & React Native & TypeScript'}</span>
            </a>
          </div>
          <div className={'portf-row'}>
            <a className={'portf-item'} rel={'noreferrer'} href={'https://becorpy.herokuapp.com/'}>
              <img alt={'Becor'} src={'./static/img/be.webp'}/>
              <span>{'Becor'}</span>
              <span>{'Django & ReactJS & TypeScript'}</span>
            </a>
            <a className={'portf-item'} rel={'noreferrer'} href={'https://mapakids.org/'}>
              <img alt={'Mapa'} src={'./static/img/ma.webp'}/>
              <span>{'MAPA Kids'}</span>
              <span>{'ReactJS & TypeScript'}</span>
            </a>
          </div>
        </div>
        <div className={'col-lg-2 d-none d-lg-block'} />
      </div>
    </div>
  );
};

export default Portfolio;
