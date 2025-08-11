import './Logo.scss';

type LogoProps = {
  className?: string;
};

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <a href="/" className={`logo__link ${className}`}>
      <h2 className="logo__title">
        GC <span className="logo__span">MEDIACORE</span> LTD
      </h2>
    </a>
  );
};

export default Logo;
