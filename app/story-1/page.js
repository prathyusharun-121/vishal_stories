'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const textPdf = '/stories/left-behind-you-and-me.pdf';
const handwrittenPdf = '/stories/left-behind-original-notebook.pdf';

export default function StoryOne() {
  const [dark, setDark] = useState(false);
  const [mode, setMode] = useState('text');

  useEffect(() => {
    const saved = localStorage.getItem('vishal-theme');
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('vishal-theme', next ? 'dark' : 'light');
  }

  return (
    <main>
      <section className="storyHero">
        <div className="sun"></div>
        <div className="stars"></div>
        <nav className="nav">
          <Link className="brand" href="/">Vishal's <span>Stories</span></Link>
          <div className="navRight">
            <Link href="/">Dashboard</Link>
            <button className="themeToggle" onClick={toggleTheme}>
              {dark ? '☀ Day' : '☾ Night'}
            </button>
          </div>
        </nav>

        <div className="storyHeroContent">
          <div className="eyebrow">STORY 01</div>
          <h1>LEFT<br/><em>BEHIND</em></h1>
          <div className="chapter">POST-APOCALYPTIC · SAHARA · 2173</div>
          <p className="intro">
            A story of survivors, danger and an unexpected journey through the
            dry lands after the Z-Virus outbreak.
          </p>
        </div>
        <div className="dunes heroDunes"></div>
      </section>

      <section className="chapters">
        <div className="sectionHead">
          <div>
            <div className="eyebrow dark">STORY 01 · CHAPTERS</div>
            <h2>Choose a chapter</h2>
            <p>View or download the chapters published for <strong>Left Behind</strong>.</p>
          </div>
        </div>

        <div className="chapterList">
          <article className="chapterCard published">
            <div className="chapterNumber">01</div>
            <div className="chapterDetails">
              <span className="pill">PUBLISHED</span>
              <h3>You and Me</h3>
              <p>
                The first chapter of <i>Left Behind</i>, following Mike and
                John across the Sahara in 2173.
              </p>
              <div className="actions">
                <a className="primary" href={textPdf} target="_blank">View Text PDF</a>
                <a className="secondary" href={textPdf} download>Download Text</a>
                <a className="secondary" href={handwrittenPdf} target="_blank">Original Notebook</a>
              </div>
            </div>
          </article>

          <article className="chapterCard upcoming">
            <div className="chapterNumber">02</div>
            <div className="chapterDetails">
              <span className="pill">NOT PUBLISHED YET</span>
              <h3>Chapter 2</h3>
              <p>
                Looks like this chapter has not been published yet....
                Check the channel <strong>PRATHYUSH UNSEEN</strong> or
                <strong> @vishalonbeat</strong> for future updates and
                <strong> STAY TUNED!!!!</strong>
              </p>
              <div className="stayTuned">STAY TUNED!!!!</div>
            </div>
          </article>
        </div>

        <div className="readerSection">
          <div className="readerHeading">
            <div>
              <div className="eyebrow dark">CHAPTER 1 · YOU AND ME</div>
              <h2>Read online</h2>
              <p>Switch between the formatted text and the original handwritten notebook.</p>
            </div>
            <div className="switcher">
              <button className={mode === 'text' ? 'selected' : ''} onClick={() => setMode('text')}>Text edition</button>
              <button className={mode === 'original' ? 'selected' : ''} onClick={() => setMode('original')}>Notebook</button>
            </div>
          </div>
          <div className="reader">
            <iframe title="Chapter 1 PDF" src={mode === 'text' ? textPdf : handwrittenPdf}></iframe>
          </div>
        </div>
      </section>

      <footer>
        <Link className="brand" href="/">Vishal's <span>Stories</span></Link>
        <div><Link href="/">← Back to Dashboard</Link></div>
      </footer>
    </main>
  );
}
