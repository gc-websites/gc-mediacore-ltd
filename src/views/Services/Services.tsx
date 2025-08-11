import './Services.scss';

import Container from '../../components/Container/Container';

import search from '../../assets/svg/search.svg';
import bigSearch from '../../assets/svg/search-big.svg';
import media from '../../assets/svg/media.svg';
import bigMedia from '../../assets/svg/media-big.svg';
import note from '../../assets/svg/note.svg';
import bigNote from '../../assets/svg/note-big.svg';
import mail from '../../assets/svg/mail-card.svg';
import bigMail from '../../assets/svg/mail-card-big.svg';

const Services = () => {
  return (
    <div className="services sections__padding" id="services">
      <Container>
        <h2 className="services__title">
          <span className="services__title--span">Our</span> Services
        </h2>
        <p className="services__subtitle">
          Tailored solutions for digital success
        </p>
        <div className="services__cards">
          <div className="service">
            <div className="service__mark">
              <img src={search} alt="search" />
            </div>
            <img src={bigSearch} alt="search" className="service__img" />
            <div className="service__text">
              <h3 className="service__title">SEO Optimization</h3>
              <p className="service__subtitle">
                Increase your website&apos;s visibility with our advanced SEO
                techniques that drive organic traffic and improve your rankings.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service__mark">
              <img src={media} alt="media" />
            </div>
            <img src={bigMedia} alt="search" className="service__img--media" />
            <div className="service__text">
              <h3 className="service__title">Social Media Marketing</h3>
              <p className="service__subtitle">
                Boost engagement and build a loyal following on social media
                platforms. We create content that resonates.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service__mark">
              <img src={search} alt="search" />
            </div>
            <img src={bigSearch} alt="search" className="service__img" />
            <div className="service__text">
              <h3 className="service__title">
                Pay-Per-Click (PPC) Advertising
              </h3>
              <p className="service__subtitle">
                Get immediate results with targeted ads that place your brand in
                front of the right customers, optimizing for conversions.
              </p>
            </div>
          </div>
        </div>
        <div className="services__cards--second">
          <div className="service--second">
            <div className="service__wrapper">
              <div className="service__mark">
                <img src={note} alt="note" />
              </div>
              <div className="service__text">
                <h3 className="service__title">Content Marketing</h3>
                <p className="service__subtitle--second">
                  Create compelling content that educates, informs, and converts
                  visitors into customers with our expert copywriting services.
                </p>
              </div>
            </div>
            <img src={bigNote} alt="note" className="service__img--note" />
          </div>
          <div className="service--second">
            <div className="service__wrapper">
              <div className="service__mark">
                <img src={mail} alt="mail" />
              </div>
              <div className="service__text">
                <h3 className="service__title">Email Marketing Campaigns</h3>
                <p className="service__subtitle--second">
                  Engage your customers directly with personalized, well-crafted
                  email campaigns that drive action and increase retention.
                </p>
              </div>
            </div>
            <img src={bigMail} alt="mail" className="service__img--note" />
          </div>
        </div>
        <div className="services__cards--mobile">
          <div className="service">
            <div className="service__mark">
              <img src={note} alt="note" />
            </div>
            <img src={bigNote} alt="note" className="service__img--note" />
            <div className="service__text">
              <h3 className="service__title">Content Marketing</h3>
              <p className="service__subtitle">
                Create compelling content that educates, informs, and converts
                visitors into customers with our expert copywriting services.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service__mark">
              <img src={mail} alt="mail" />
            </div>
            <img src={bigMail} alt="mail" className="service__img--mail" />
            <div className="service__text">
              <h3 className="service__title">Email Marketing Campaigns</h3>
              <p className="service__subtitle">
                Engage your customers directly with personalized, well-crafted
                email campaigns that drive action and increase retention.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
