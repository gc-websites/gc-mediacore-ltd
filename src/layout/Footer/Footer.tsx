import './Footer.scss';

import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import Contacts from '../../components/Contacts/Contacts';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Logo />
        <div className="footer__wrapper">
          <div className="footer__column">
            <h2 className="footer__column--title">Quick Link</h2>
            <NavBar
              linkClassName="footer__navbar--link"
              listClassName="footer__navbar"
            />
          </div>
          <div className="footer__column">
            <h2 className="footer__column--title">Contact Details</h2>
            <Contacts />
          </div>
        </div>
        <p className="footer__copyright">
          © 2025 GC MEDIACORE LTD. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
