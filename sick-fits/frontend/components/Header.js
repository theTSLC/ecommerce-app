import Link from 'next/link';
import Nav from './Nav';
import HeaderStyles from './styles/HeaderStyles';
import LogoStyles from './styles/LogoStyles';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Sick Fits</Link>
        </LogoStyles>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search </p>
      </div>
    </HeaderStyles>
  );
}
