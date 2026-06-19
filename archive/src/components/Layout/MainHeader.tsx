import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand-mark" aria-label="ByteCommander home">
          <span className="brand-symbol">B</span>
          <span>
            <strong>ByteCommander</strong>
            <small>Adonis Lee Villamor</small>
          </span>
        </Link>
        <nav className="header-nav" aria-label="Primary navigation">
          <Link href="/#profile">Profile</Link>
          <Link href="/#ai-lab">AI Lab</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
