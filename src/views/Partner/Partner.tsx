import './Partner.scss';

import Container from '../../components/Container/Container';

const Partner = () => {
  return (
    <div className="partner sections__padding">
      <Container>
        <div className="partner__wrapper">
          <h2 className="partner__title">
            <span className="partner__title--span">Take</span> the First Step
            Toward Growing Your{' '}
            <span className="partner__title--span">Brand</span> with Expert
            Digital <span className="partner__title--span">Marketing</span>
          </h2>
          <p className="partner__subtitle">
            Ready to see real results? Partner with us for tailored strategies
            that drive engagement, boost visibility, and achieve your business
            goals.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Partner;
