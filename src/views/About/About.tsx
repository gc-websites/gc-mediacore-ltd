import './About.scss';

import Container from '../../components/Container/Container';

import marketing1 from '../../assets/img/marketing1.jpg';
import marketing2 from '../../assets/img/marketing2.jpg';

const About = () => {
  return (
    <div className="about sections__padding" id="about">
      <Container>
        <h2 className="about__title">
          <span className="about__title--span">Who</span> We Are
        </h2>
        <div className="about__wrapper">
          <div className="about__card">
            <p className="about__subtitle">
              At GC Mediacore, we understand that every business is unique.
              That’s why we take a customized approach to digital marketing. Our
              team combines cutting-edge tools, data-driven strategies, and
              industry expertise to help you achieve measurable success.
            </p>
            <img src={marketing1} alt="marketing" className="about__img" />
          </div>
          <div className="about__card--second">
            <p className="about__subtitle--second">
              We are a passionate team of digital marketers dedicated to
              delivering personalized strategies that align with your business
              goals.
            </p>
            <img src={marketing2} alt="marketing" className="about__img" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
