import React from 'react';

const About = ({content}: {content: any}) => {
  return (
    <div className={'section__ section__about'}>
      <div className={'row container'} id={'about'}>
        <div className={'col-lg-8 about-con no-padding'}>
          <span className={'about-title'}>{content.title}</span>
          <p className={'about-cont'}>
            {content.con1}
          </p>
          <p className={'about-cont'}>
            {content.con2}
          </p>
          <p className={'about-cont'}>
            {content.con3}
          </p>
        </div>
        <div className={'col-lg-4 cv-con no-padding'}>
          <span className={'cv-text'}>
            {content.cv1}</span>
          <span className={'cv-text'}>
            {content.cv2}</span>
          <a className={'nav__section__link nav__section__button'}
            href={'/static/pdf/CV.pdf'} target={'_blank'}
            rel={'noreferrer'}>
            {content.cv}</a>
        </div>
      </div>
    </div>
  );
};

export default About;
