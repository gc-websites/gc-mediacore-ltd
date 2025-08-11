import './NavBar.scss';

type NavBarProps = {
  className?: string;
  linkClassName?: string;
  listClassName?: string;
  setIsBurgerOpen?: (isOpen: boolean) => void;
};

const navBarData = {
  items: ['Services', 'About', 'Contact'],
  links: ['#services', '#about', '#contact'],
};

const NavBar = ({
  className = '',
  linkClassName = '',
  listClassName = '',
  setIsBurgerOpen,
}: NavBarProps) => {
  return (
    <nav className={className}>
      <ul className={`nav__list ${listClassName}`}>
        {navBarData.items.map((item, idx) => {
          const link = navBarData.links[idx];
          return (
            <li key={idx} className="nav__item">
              <a
                href={link}
                className={`nav__link ${linkClassName}`}
                onClick={() =>
                  setIsBurgerOpen ? setIsBurgerOpen(false) : null
                }
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
