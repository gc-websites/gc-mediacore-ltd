import './BurgerMenu.scss';

import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';

import { createPortal } from 'react-dom';

import close from '../../assets/svg/close.svg';

const BurgerMenu = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return createPortal(
    <div
      className={`burger ${isBurgerOpen ? 'open' : ''}`}
      onClick={() => (setIsBurgerOpen ? setIsBurgerOpen(false) : null)}
    >
      <div
        className={`burger__content ${isBurgerOpen ? 'open' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <img
          src={close}
          alt="close"
          className="burger__close"
          onClick={() => (setIsBurgerOpen ? setIsBurgerOpen(false) : null)}
        />
        <Logo className="burger__logo" />
        <NavBar setIsBurgerOpen={setIsBurgerOpen} />
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default BurgerMenu;
