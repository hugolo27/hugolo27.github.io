const CONTENT = {
  en: {
    header: {
      follow: 'Follow Me:',
      about: 'About Me',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact Me',
    },
    cover: {
      salute: 'Hello!',
      name: `I'm Hugo López`,
      role: 'Full Stack Developer',
      desc: 'Welcome to my site, here you will find my personal ' +
          'info, portfolio and more',
      contact: 'Contact Me',
      switcher: 'Cambiar a español',
    },
    about: {
      title: 'About Me',
      con1: 'With 5+ years of experience in web development, I seek to ' +
          'broaden my horizon and constantly innovate while creating' +
          ' software solutions.',
      con2: 'I focus on the legibility, simplicity, efficiency and ' +
          'elegance of code in order to inspire my collaborators ' +
          'to follow patterns that allow creating optimal projects.',
      con3: 'I cordially invite you to know my profile and my work, thank' +
          ' you for visiting!',
      cv1: 'Bachelor in Computing Science,  with formation in Javascript ' +
          'and React, and several courses in other web-related technologies.',
      cv2: 'Team player, innovative, problem solver, future-minded. I bring ' +
          'my experience to develop useful and efficient solutions. I’m also ' +
          'quite fun!',
      cv: 'Read my CV',
    },
    services: {
      serv1t: 'Back End Development',
      serv1d: 'Django, SQL, third party services' +
          ' (mail, notifications, and more)',
      serv2t: 'Front End Development',
      serv2d: 'ReactJS, TypeScript, JavaScript, ' +
          'JQuery, HTML, CSS',
      serv3t: 'Mobile Development',
      serv3d: 'React Native, TypeScript, ' +
          'JavaScript, PWA, Android SDK',
      serv4t: 'Consulting & Technical Service',
      serv4d: 'General software solutions ' +
          'for individuals and businesses',
    },
    portfolio: {
      title: 'Portfolio',
    },
    contact: {
      title: 'Contact Me',
      con1t: 'By Email',
      con1d: 'Click to compose',
      con2t: 'By WhatsApp',
      con2d: 'Click to chat',
    },
  },
  es: {
    header: {
      follow: 'Seguime:',
      about: 'Sobre Mi',
      services: 'Servicios',
      portfolio: 'Portafolios',
      contact: 'Contáctame',
    },
    cover: {
      salute: 'Hola!',
      name: `Soy Hugo López`,
      role: 'Desarrollador Full Stack',
      desc: 'Te doy la bienvenida a mi sitio, en donde encontrarás mi ' +
          'información personal, portafolio de proyectos y más',
      contact: 'Contáctame',
      switcher: 'Switch to english',
    },
    about: {
      title: 'Sobre Mi',
      con1: 'Con más de 5 años de experiencia en desarrollo web, busco ' +
          'ampliar mi horizonte e innovar constantemente mientras ' +
          'creo soluciones de software',
      con2: 'Me concentro en la legibilidad, simplicidad, eficiencia y ' +
          'elegancia del código para inspirar a mis colaboradores a' +
          ' seguir patrones que permitan crear proyectos óptimos.',
      con3: 'Te invito cordialmente a conocer mi perfil y mi trabajo, ' +
          '¡Gracias por tu visita!',
      cv1: 'Licenciado en Ciencias de Informáticas, con formación en ' +
          'Javascript y React, y varios cursos en otras tecnologías ' +
          'relacionadas con la web.',
      cv2: 'Jugador de equipo, innovador, solucionador de problemas, con ' +
          'visión de futuro. Aporto mi experiencia para ' +
          'desarrollar soluciones ' +
          'útiles y eficientes. ¡También soy bastante divertido!',
      cv: 'Leer mi CV',
    },
    services: {
      serv1t: 'Desarrollo Back End',
      serv1d: 'Django, SQL, servicios de terceros' +
          ' (correo, notificaciones y más)',
      serv2t: 'Desarrollo Front End',
      serv2d: 'ReactJS, TypeScript, JavaScript, ' +
          'JQuery, HTML, CSS',
      serv3t: 'Desarrollo móvil',
      serv3d: 'React Native, TypeScript, ' +
          'JavaScript, PWA, Android SDK',
      serv4t: 'Consultoría y Servicio Técnico',
      serv4d: 'Soluciones de software en general ' +
          'para particulares y empresas',
    },
    portfolio: {
      title: 'Portafolios',
    },
    contact: {
      title: 'Contáctame',
      con1t: 'Por Email',
      con1d: 'Click para redactar',
      con2t: 'Por WhatsApp',
      con2d: 'Click para hablar',
    },
  },
};

// @ts-ignore
const getContent = (lang: string, section: string) => CONTENT[lang][section];

export default getContent;
