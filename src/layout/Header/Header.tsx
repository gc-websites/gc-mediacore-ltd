import './Header.scss';

import { useState } from 'react';

import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import burger from '../../assets/svg/burger-menu.svg';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Logo />
          <NavBar className="header__navbar" />
          <div className="header__burger">
            <img
              src={burger}
              alt="menu"
              className="header__burger-icon"
              onClick={() => setIsBurgerOpen(true)}
            />
            <BurgerMenu
              isBurgerOpen={isBurgerOpen}
              setIsBurgerOpen={setIsBurgerOpen}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
