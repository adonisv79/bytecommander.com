import Link from "next/link";

export default function MainFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p className="eyebrow">ByteCommander</p>
          <h2>Build practical systems. Lead calm teams. Keep learning.</h2>
          <p>
            Personal profile and portfolio of Adonis Lee Villamor, a
            Philippines-based software engineering leader with hands-on delivery
            roots.
          </p>
        </div>
        <div>
          <h3>Connect</h3>
          <ul className="footer-links">
            <li>
              <Link href="mailto:adonisv79@gmail.com">adonisv79@gmail.com</Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/adonisv79/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/adonisv79"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://bocarena.com" target="_blank" rel="noreferrer">
                BocArena
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Selected Work</h3>
          <ul className="footer-links">
            <li>
              <Link href="/games/reversi">Reversi</Link>
            </li>
            <li>
              <Link href="/games/flappy">Flappy Bee</Link>
            </li>
            <li>
              <Link href="/search">Video Search</Link>
            </li>
            <li>
              <Link href="/pos">POS UI Sample</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-note">
        ByteCommander, established 2011. Built for static export and Cloudflare
        Pages.
      </p>
    </footer>
  );
}
