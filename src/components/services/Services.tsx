import React from 'react';

const Services = ({content}: {content: any}) => {
  return (
    <div className={'section__ section__services'}>
      <div className={'row container'} id={'services'}>
        <div className={'col-lg-12 serv-con'}>
          <span className={'serv-title'}>{'Services'}</span>
        </div>
        <div className={'col-lg-2 d-none d-lg-block'} />
        <div className={'col-lg-8'}>
          <div className={'serv-row'}>
            <div className={'serv-item'}>
              <i className={'fa fa-server'} />
              <span>{content.serv1t}</span>
              <span>{content.serv1d}</span>
            </div>
            <div className={'serv-item'}>
              <i className={'fa fa-desktop'} />
              <span>{content.serv2t}</span>
              <span>{content.serv2d}</span>
            </div>
          </div>
          <div className={'serv-row'}>
            <div className={'serv-item'}>
              <i className={'fa fa-mobile-screen'} />
              <span>{content.serv3t}</span>
              <span>{content.serv3d}</span>
            </div>
            <div className={'serv-item'}>
              <i className={'fa fa-suitcase'} />
              <span>{content.serv4t}</span>
              <span>{content.serv4d}</span>
            </div>
          </div>
        </div>
        <div className={'col-lg-2 d-none d-lg-block'} />
      </div>
    </div>
  );
};

export default Services;
