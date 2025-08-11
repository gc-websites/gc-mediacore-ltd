import './Hero.scss';

import Container from '../../components/Container/Container';

import column1 from '../../assets/svg/column1.svg';
import column2 from '../../assets/svg/column2.svg';
import column3 from '../../assets/svg/column3.svg';
import column4 from '../../assets/svg/column4.svg';
import column5 from '../../assets/svg/column5.svg';
import column6 from '../../assets/svg/column6.svg';
import column7 from '../../assets/svg/column7.svg';
import stonks from '../../assets/svg/stonks.svg';
import avatar1 from '../../assets/img/avatar1.jpg';
import avatar2 from '../../assets/img/avatar2.jpg';
import avatar3 from '../../assets/img/avatar3.jpg';
import avatar4 from '../../assets/img/avatar4.jpg';

const Hero = () => {
  return (
    <div className="hero sections__padding">
      <Container>
        <div className="hero__text-wrapper">
          <h1 className="hero__title">
            Grow Your Brand with Digital Marketing
          </h1>
          <p className="hero__subtitle">
            Transform your online presence with data-driven strategies designed
            to increase visibility, drive traffic, and deliver measurable
            results that fuel your business growth
          </p>
        </div>
        <div className="hero__stats">
          <div className="stats__container">
            <h3 className="stats__title">All email campaign sent</h3>
            <p className="stats__number">+17.534</p>
            <div className="stats__columns">
              <img src={column1} alt="column" />
              <img src={column2} alt="column" />
              <img src={column3} alt="column" />
              <img src={column4} alt="column" />
              <img src={column5} alt="column" />
              <img src={column6} alt="column" />
              <img src={column7} alt="column" />
            </div>
          </div>
          <div className="hero__clients">
            <div className="clients__photos">
              <img src={avatar1} alt="avatar" className="clients__avatar" />
              <img src={avatar2} alt="avatar" className="clients__avatar" />
              <img src={avatar3} alt="avatar" className="clients__avatar" />
              <img src={avatar4} alt="avatar" className="clients__avatar" />
            </div>
            <p className="clients__subtitle">
              Explore our 430+ success project that help our clients business
              growth every year
            </p>
          </div>
          <div className="stats__container">
            <h3 className="stats__title--revenue">
              Total revenue
              <span className="stats__title--span">
                <img src={stonks} alt="stonks" />
                +36%
              </span>
            </h3>
            <p className="stats__number--revenue">$735.374</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
