import './Contacts.scss';

import mail from '../../assets/svg/mail.svg';
import location from '../../assets/svg/location.svg';

const Contacts = () => {
  return (
    <div className="contacts" id="contact">
      <a href="mailto:info@gcmediacoreltd.com" className="contacts__link">
        <span>
          <img src={mail} alt="mail" className="contacts__mail" />
        </span>
        info@gcmediacoreltd.com
      </a>
      <a
        href="https://maps.app.goo.gl/obwvQBp2hZsCi7eb6"
        className="contacts__link"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <img src={location} alt="location" className="contacts__location" />
        </span>
        61 Bridge Street, Kington, United Kingdom, HR5 3DJ
      </a>
    </div>
  );
};

export default Contacts;
