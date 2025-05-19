import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <header>
          <Image src="/img/Workstation.png" alt="logo" width={45} height={45} />
          <section id="nazw"><i>CloudFix</i></section>
          <nav>
            <a href="#container">Strona główna</a>
            <a href="#about">O nas</a>
          </nav>
          <div style={{ clear: 'both' }}></div>
        </header>

        <div id="container"></div>

        <section id="title">
          BK serwis komputerów
        </section>

        <section id="services">
          <h2>Nasze usługi</h2>
          <p>Prowadzę działalność, w której składam komputery na zamówienie oraz oferuję kompleksowy serwis.</p>
          <ul>
            <li>Składanie komputerów od podstaw</li>
            <li>Diagnozowanie usterek</li>
            <li>Czyszczenie i konserwacja</li>
            <li>Wymiana podzespołów</li>
            <li>Instalacja systemów i sterowników</li>
          </ul>
        </section>

        <section id="pricing">
          <h2>Cennik</h2>
          <table>
            <thead>
              <tr>
                <th>Usługa</th>
                <th>Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Składanie komputera</td><td>od 200 zł²</td></tr>
              <tr><td>Diagnostyka sprzętu</td><td>10 zł</td></tr>
              <tr><td>Czyszczenie i konserwacja (z wymianą pasty)</td><td>120 zł</td></tr>
              <tr><td>Wymiana podzespołu</td><td>od 60 zł²</td></tr>
              <tr><td>Instalacja systemu operacyjnego</td><td>120 zł¹</td></tr>
              <tr><td>Instalacja sterowników i konfiguracja</td><td>85 zł</td></tr>
              <tr><td>Montaż chłodzenia wodnego customowego</td><td>150–250 zł²</td></tr>
              <tr><td>Aktualizacja BIOSu</td><td>50 zł</td></tr>
            </tbody>
          </table>
          <p id="legenda">
            ¹ – Cena nie obejmuje kupna licencji.<br />
            ² – Cena nie obejmuje kupna podzespołów.
          </p>
        </section>

        <section id="about">
          <br /><br />
          O nas
        </section>

        <section id="teskt">
          <p>
            BKserwis to miejsce, gdzie pasja do komputerów spotyka się z profesjonalizmem. Zajmujemy się składaniem komputerów na zamówienie oraz serwisem – od napraw po optymalizację systemu.
          </p>
          <p>
            Naszą misją jest dostarczanie sprawdzonych i uczciwych usług, które pomagają klientom cieszyć się niezawodnym sprzętem.
          </p>
          <p>
            Wyróżnia nas indywidualne podejście do klienta, terminowość oraz przejrzysty cennik.
          </p>
        </section>

        <footer>
          <p>BK PCserwis</p>
          <section>
            <h1>Kontakt:</h1>
            <a href="mailto:kontakt.bkpcserwis@gmail.com" style={{ textDecoration: 'none', color: 'white' }}>
              kontakt.bkpcserwis@gmail.com
            </a>
          </section>

          <section className="social-section">
            <h2>Social media:</h2>
            <section className="socials">
              <a href="https://www.instagram.com/bk_pcserwis/" target="_blank" rel="noopener noreferrer" className="icon instagram" title="Instagram">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://discord.gg/7yxzZ5TvbC" target="_blank" rel="noopener noreferrer" className="icon discord" title="Discord">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg" alt="Discord" />
              </a>
              <a href="https://www.facebook.com/share/16Cq5ykYhG/" target="_blank" rel="noopener noreferrer" className="icon facebook" title="Facebook">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" />
              </a>
            </section>
          </section>

          <section>
            <h1>Prywatność:</h1>
            <Link href="/privacypolicy" target="_blank" id="privacy">Polityka prywatności</Link>
          </section>

          <div style={{ clear: 'both' }}></div>
        </footer>
    </>
  );
}
