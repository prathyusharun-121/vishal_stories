'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('dashboard-theme');
    const isDark = saved !== 'light';
    setDark(isDark);
    document.documentElement.dataset.dashboard = isDark ? 'dark' : 'light';
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.dashboard = next ? 'dark' : 'light';
    localStorage.setItem('dashboard-theme', next ? 'dark' : 'light');
  }

  return (
    <main className="dashboardPage">
      <nav className="dashboardNav">
        <div className="dashLogo">VISHAL'S <span>STORIES</span></div>
        <div className="dashNavRight">
          <span className="dashLabel">PERSONAL COLLECTION</span>
          <button className="dashTheme" onClick={toggleTheme}>
            {dark ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
      </nav>

      <section className="dashboardHeroNew">
        <div className="dashboardIntro">
          <div className="dashEyebrow">WELCOME</div>
          <h1>My World.<br/><span>My Stories.</span></h1>
          <p>
            A personal space for the things I enjoy, the stories I create,
            and the worlds I want to share.
          </p>
        </div>

        <div className="visualGrid">
          <div className="visualCard mjCard">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Michael_Jackson_1983_(HQ).jpg"
              alt="Michael Jackson"
            />
            <div className="visualOverlay">
              <small>MUSIC · ICON</small>
              <strong>MICHAEL<br/>JACKSON</strong>
            </div>
          </div>

          <div className="visualCard psCard">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Sony-PlayStation-4-wController.jpg"
              alt="PlayStation 4"
            />
            <div className="visualOverlay">
              <small>GAMING</small>
              <strong>PLAYSTATION<br/>4</strong>
            </div>
          </div>

          <div className="visualCard danceCard">
            <img
              src="https://images.unsplash.com/photo-1530234332485-f2c7355bd1ef?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=1400"
              alt="Shadow dancer silhouette"
            />
            <div className="visualOverlay">
              <small>DANCE · SHADOW</small>
              <strong>MOVEMENT<br/>&amp; RHYTHM</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="storyLaunch">
        <div className="storyLaunchText">
          <div className="dashEyebrow">STORIES</div>
          <h2>Enter the world<br/><span>of Vishal's Stories.</span></h2>
          <p>
            Choose a story to explore its published chapters, read PDFs online,
            download them, and see the original handwritten pages.
          </p>
        </div>

        <Link href="/story-1" className="storyLaunchButton">
          <span className="launchNumber">01</span>
          <span>
            <small>STORY 1</small>
            <strong>LEFT BEHIND</strong>
            <em>Enter Story →</em>
          </span>
        </Link>
      </section>

      <footer className="dashboardFooter">
        <div>VISHAL'S STORIES</div>
        <div>Stories · Ideas · Imagination</div>
      </footer>
    </main>
  );
}
