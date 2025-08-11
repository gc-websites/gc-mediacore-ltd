import './Feedback.scss';

import Container from '../../components/Container/Container';

import avatar5 from '../../assets/img/avatar5.jpg';
import avatar6 from '../../assets/img/avatar6.jpg';
import avatar7 from '../../assets/img/avatar7.jpg';
import star from '../../assets/svg/star.svg';

const Feedback = () => {
  return (
    <div className="feedback sections__padding">
      <Container>
        <h2 className="feedback__title">
          <span className="feedback__title--span">Client</span> Feedback
        </h2>
        <p className="feedback__subtitle">
          Tailored solutions for digital success
        </p>
        <div className="feedback__cards">
          <div className="card">
            <div className="card__header">
              <img src={avatar5} alt="avatar" className="card__avatar" />
              <div className="card__author">
                <h3 className="card__title">John Doe</h3>
                <p className="card__subtitle">CEO of XYZ Corp</p>
              </div>
            </div>
            <p className="card__description">
              &quot;Partnering with Digital Spark has been a game-changer for
              our business. Their tailored approach to SEO and PPC advertising
              has increased our website traffic and lead generation by over 300%
              in just six months. Their team’s insights and dedication make them
              invaluable partners in our growth journey.&quot;
            </p>
            <div className="feedback__rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
          <div className="card--main">
            <div className="card__header">
              <img src={avatar6} alt="avatar" className="card__avatar" />
              <div className="card__author">
                <h3 className="card__title--main">Jane Smith</h3>
                <p className="card__subtitle--main">
                  Marketing Director at ABC Ltd
                </p>
              </div>
            </div>
            <p className="card__description--main">
              &quot;Digital Spark understands our brand and goals like no other.
              Their social media and content marketing strategies have not only
              expanded our online presence but also fostered stronger engagement
              with our audience. Thanks to their expertise, we’re seeing
              consistent, measurable growth month after month.&quot;
            </p>
            <div className="feedback__rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={avatar7} alt="avatar" className="card__avatar" />
              <div className="card__author">
                <h3 className="card__title">Michael Chen</h3>
                <p className="card__subtitle">Founder of Start-Up Solutions</p>
              </div>
            </div>
            <p className="card__description">
              &quot;I couldn’t be happier with the results we’ve achieved with
              Digital Spark. Their data-driven approach to email marketing and
              targeted ads has significantly boosted our conversion rates. Our
              audience engagement has improved, and the ROI speaks for itself. I
              highly recommend them to any business looking to grow
              online!&quot;
            </p>
            <div className="feedback__rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
