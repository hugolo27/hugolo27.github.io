import React from 'react';

const Contact = ({content}: {content: any}) => {
  return (
    <div className={'section__contact'}>
      <div className={'row container'} id={'contact'}>
        <div className={'col-lg-12 contact-con'}>
          <span className={'contact-title'}>{content.title}</span>
        </div>
        <div className={'col-lg-2 d-none d-lg-block'} />
        <div className={'col-lg-8'}>
          <div className={'contact-row'}>
            <a className={'contact-item'} href={'mailto:hugolo.27095@gmail.com'}
              rel={'noreferrer'} target={'_blank'}>
              <i className={'fa fa-envelope'} />
              <span>{content.con1t}</span>
              <span>{'hugolo.27095@gmail.com'}<br/>{content.con1d}</span>
            </a>
            <a className={'contact-item'} href={'https://wa.me/595981780576'}
              rel={'noreferrer'} target={'_blank'}>
              <i className={'fa-brands fa-whatsapp'} />
              <span>{content.con2t}</span>
              <span>{'+595981780576'}<br/>{content.con2d}</span>
            </a>
          </div>
        </div>
        <div className={'col-lg-2 d-none d-lg-block'} />
      </div>
    </div>
  );
};

export default Contact;
