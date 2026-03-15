(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&c(e)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const f=`<header class="topbar">
  <div class="topbar__inner">
    <a class="topbar__brand" href="#" aria-label="Home">
      <img src="/assets/logo.png" alt="Logo" />
    </a>

    <nav class="topbar__nav" aria-label="Primary">
      <a class="topbar__link" href="#product">Product</a>
      <a class="topbar__link" href="#why">Why cryptoBOT</a>
      <a class="topbar__link" href="#devs">Developers</a>
      <a class="topbar__link" href="#enterprise">Enterprise</a>
      <a class="topbar__link" href="#docs">Docs</a>
    </nav>

    <div class="topbar__actions">
      <a class="topbar__gh" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="topbar__ghIcon">
          <path fill="currentColor"
            d="M12 .6c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.78-1.34-1.78-1.1-.77.08-.76.08-.76 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.8.43-1.31.78-1.61-2.66-.31-5.46-1.34-5.46-5.97 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.24.96-.27 1.99-.4 3.02-.4 1.03 0 2.06.14 3.02.4 2.29-1.56 3.3-1.24 3.3-1.24.66 1.69.24 2.94.12 3.25.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.65-5.47 5.96.44.39.83 1.15.83 2.32v3.44c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12.6c0-6.63-5.37-12-12-12Z" />
        </svg>
        <span class="topbar__ghCount">11.9k</span>
      </a>

      <a class="topbar__link topbar__login" href="#login">Login</a>

      <a class="topbar__cta" href="#get-started">Get Started</a>
    </div>
  </div>
</header>
<section class="initialize">

  <div class="initialize-greet">
    <div class="greet-header">
      <span>Start earning money </span> <span>with CryptoBot</span>
    </div>
    <div class="greet-command">
      <div class="command-console">
        <div class="command-download-first-blok">

          <nav class="console-text">
            npv create@cryptoBot
          </nav>
          <nav class="greet-nav-icon">
            <svg class="clipboard-icon__svg" height="100%" viewBox="0 0 13 13" width="100%"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 4.5H8.5V12.5H0.5V4.5Z"></path>
              <path d="M4.5 3V0.5H12.5V8.5H10"></path>
            </svg>
          </nav>
        </div>
        <div class="command-console-last-blok">

          <nav class="console-text">
            npv create@cryptoBot
          </nav>
          <nav class="greet-nav-icon">
            <svg class="clipboard-icon__svg" height="100%" viewBox="0 0 13 13" width="100%"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 4.5H8.5V12.5H0.5V4.5Z"></path>
              <path d="M4.5 3V0.5H12.5V8.5H10"></path>
            </svg>
          </nav>
        </div>
      </div>
      <div class="command-download">
        <div class="command-download-first-blok">
          <nav class="console-text">
            Get a demo
          </nav>
          <nav class="greet-nav-icon">
            <svg class="download-icon__svg" height="100%" viewBox="0 0 13 13" width="100%"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 4.5H8.5V12.5H0.5V4.5Z"></path>
              <path d="M4.5 3V0.5H12.5V8.5H10"></path>
            </svg>
          </nav>
        </div>
        <div class="command-download-last-blok">
          <nav class="console-text">
            Get a demo
          </nav>
          <nav class="greet-nav-icon">
            <svg class="download-icon__svg" height="100%" viewBox="0 0 13 13" width="100%"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 4.5H8.5V12.5H0.5V4.5Z"></path>
              <path d="M4.5 3V0.5H12.5V8.5H10"></path>
            </svg>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="initialize-footage">
    <div class="footage-app">
      <img src="./added/app.png" alt="" class="set-anim-type1 anim">
    </div>
    <div class="footage-advantage">
      <div class="footage-pad">
        <div class="advantage-block">
          <img src="./public/assets/icons_block/money.png" alt="" loading="lazy" class="block-image">
          <p class="block-uppertext">Price</p>
          <p class="block-upperlower">Very low price with huge profit and minimal involvement</p>
        </div>
        <div class="advantage-block">
          <img src="./public/assets/icons_block/top.png" alt="" loading="lazy" class="block-image">
          <p class="block-uppertext">Payback period</p>
          <p class="block-upperlower">Tests show that for just $15, the return on investment is 1785% in 3 months
          </p>
        </div>
        <div class="advantage-block">
          <img src="./public/assets/icons_block/bolt.svg" alt="" loading="lazy" class="block-image">
          <p class="block-uppertext">Simplicity</p>
          <p class="block-upperlower">Watch your capital grow without distracting you from your main tasks</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="viewapp">
  <p class="viewapp__text">
    Now CryptoBot lets you earn money not only at your computer, but also directly from your phone
  </p>
  <div class="viewapp__canvas">
    <img src="/assets/art/ph-bl-ontw.png" alt="" loading="lazy" class="set-anim-type1 anim-two">
    <img src="/assets/art/ph-bl-twtw.png" alt="" loading="lazy" class="set-anim-type1 anim-two">
    <img src="/assets/art/ph-bl-thtw.png" alt="" loading="lazy" class="set-anim-type1 anim-two">
  </div>
  <img src="/assets/art/" alt="" loading="lazy">
</section>
<section class="case">
  <div class="case__inner">
    <div class="case-hero">
      <div class="case-hero__grid">

        <div class="case-hero__content">
          <h1 class="case-hero__title">
            How to tell the world about
            the <br> revolution of earning money based on artificial intelligence?
          </h1>

          <p class="case-hero__lead">
            You are contacting one of the innovative platforms for earning money through cryptocurrency
          </p>

          <p class="case-hero__text">
            Robots can memorize strategies faster and more efficiently
          </p>

          <p class="case-hero__text">
            With CryptoBot, users can automate crypto analysis and trading, allowing them to generate income with
            minimal effort. The platform simplifies complex market data and provides powerful tools that help users take
            advantage of opportunities in the fast-moving world of cryptocurrency
          </p>
        </div>
      </div>
    </div>

    <section class="case-challenge">
      <div class="case-challenge__grid">
        <div class="case-challenge__intro">
          <p class="case-challenge__kicker">THE OPPORTUNITY</p>
          <h2 class="case-challenge__title">A smarter way to explore crypto automation</h2>
          <p class="case-challenge__desc">
            For many users, basic crypto tools may be enough. But for those who want deeper insights and automated
            analysis, a more powerful platform is essential
          </p>
        </div>

        <div class="case-challenge__cards">
          <article class="case-card">
            <h3 class="case-card__title">Easy Start</h3>
            <p class="case-card__text">
              CryptoBot offers a simple way to explore advanced crypto tools through a <span class="nowrap">7-day</span>
              demo, allowing users to
              test the platform and understand its capabilities before committing
            </p>
          </article>

          <article class="case-card">
            <h3 class="case-card__title">Powerful Automation</h3>
            <p class="case-card__text">
              The platform analyzes market data and provides intelligent insights, helping users track trends and
              discover opportunities in the fast-moving cryptocurrency market
            </p>
          </article>

          <article class="case-card">
            <h3 class="case-card__title">Accessibility Anywhere</h3>
            <p class="case-card__text">
              CryptoBot is designed to work seamlessly across devices, allowing users to monitor markets and manage
              tools both on desktop and mobile
            </p>
          </article>

          <article class="case-card">
            <h3 class="case-card__title">The Advantage</h3>
            <p class="case-card__text">
              With CryptoBot, users gain access to powerful crypto analytics and automation tools, helping them make
              more informed decisions and stay ahead in the evolving world of digital assets
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</section>
<section class="coin-belt">
  <div class="coin-belt__text">
    <h1 class="coin-header">Open the door to 400+ assets</h1>
    <p class="coin-paragraf">Trade, stake or invest across an ever-growing number of crypto assets, stablecoins and fiat
      currencies</p>
  </div>

  <div class="coin-belt__viewport">
    <div class="coin-belt__fade coin-belt__fade--left"></div>
    <div class="coin-belt__fade coin-belt__fade--right"></div>
    <div class="coin-belt__track">

      <div class="tier" style="--tm-cv: 30s">

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="Pepe" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_matic.webp" alt="Internet Computer" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Internet Computer</span>
              <span class="coin-card__ticker">ICP</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_eth.webp" alt="Ethereum Classic" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_bch.webp" alt="bch" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">bch</span>
              <span class="coin-card__ticker">BCH</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_ada.webp" alt="ada" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_fil.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">fil USD</span>
              <span class="coin-card__ticker">FIL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.00 USD</span>
              <span class="coin-card__change coin-card__change--down">-0.02%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_algo.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">algo Token</span>
              <span class="coin-card__ticker">ALGO</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.20 USD</span>
              <span class="coin-card__change coin-card__change--up">+1.21%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_sol.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Sol</span>
              <span class="coin-card__ticker">SOL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_eth.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_ada.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_shib.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">shibo</span>
              <span class="coin-card__ticker">shib</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>
      </div>
      <div class="tier" style="--tm-cv: 26s">
        <article class="coin-card">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="Pepe" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_matic.webp" alt="Internet Computer" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Internet Computer</span>
              <span class="coin-card__ticker">ICP</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_eth.webp" alt="Ethereum Classic" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_bch.webp" alt="bch" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">bch</span>
              <span class="coin-card__ticker">BCH</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_ada.webp" alt="ada" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_fil.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">fil USD</span>
              <span class="coin-card__ticker">FIL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.00 USD</span>
              <span class="coin-card__change coin-card__change--down">-0.02%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_algo.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">algo Token</span>
              <span class="coin-card__ticker">ALGO</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.20 USD</span>
              <span class="coin-card__change coin-card__change--up">+1.21%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_sol.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Sol</span>
              <span class="coin-card__ticker">SOL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_eth.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_ada.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_shib.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">shibo</span>
              <span class="coin-card__ticker">shib</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>
      </div>
      <div class="tier" style="--tm-cv: 28s">
        <article class="coin-card">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="Pepe" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_matic.webp" alt="Internet Computer" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Internet Computer</span>
              <span class="coin-card__ticker">ICP</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_eth.webp" alt="Ethereum Classic" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_bch.webp" alt="bch" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">bch</span>
              <span class="coin-card__ticker">BCH</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_ada.webp" alt="ada" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_fil.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">fil USD</span>
              <span class="coin-card__ticker">FIL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.00 USD</span>
              <span class="coin-card__change coin-card__change--down">-0.02%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_algo.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">algo Token</span>
              <span class="coin-card__ticker">ALGO</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.20 USD</span>
              <span class="coin-card__change coin-card__change--up">+1.21%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_sol.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Sol</span>
              <span class="coin-card__ticker">SOL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_eth.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_ada.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_shib.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">shibo</span>
              <span class="coin-card__ticker">shib</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>
      </div>
      <div class="tier" style="--tm-cv: 24s">
        <article class="coin-card">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="Pepe" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_matic.webp" alt="Internet Computer" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Internet Computer</span>
              <span class="coin-card__ticker">ICP</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_eth.webp" alt="Ethereum Classic" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_bch.webp" alt="bch" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">bch</span>
              <span class="coin-card__ticker">BCH</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card">
          <img src="/assets/icons_crypto/s_ada.webp" alt="ada" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_fil.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">fil USD</span>
              <span class="coin-card__ticker">FIL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">1.00 USD</span>
              <span class="coin-card__change coin-card__change--down">-0.02%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_algo.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">algo Token</span>
              <span class="coin-card__ticker">ALGO</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.20 USD</span>
              <span class="coin-card__change coin-card__change--up">+1.21%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_pepe.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Pepe</span>
              <span class="coin-card__ticker">PEPE</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0000035 USD</span>
              <span class="coin-card__change coin-card__change--down">-3.13%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_sol.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Sol</span>
              <span class="coin-card__ticker">SOL</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">2.53 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.29%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_eth.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">Ethereum Classic</span>
              <span class="coin-card__ticker">ETC</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">8.61 USD</span>
              <span class="coin-card__change coin-card__change--down">-1.03%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_ada.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">ada</span>
              <span class="coin-card__ticker">ADA</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.27 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.38%</span>
            </div>
          </div>
        </article>

        <article class="coin-card" aria-hidden="true">
          <img src="/assets/icons_crypto/s_shib.webp" alt="" class="coin-card__icon" />
          <div class="coin-card__body">
            <div class="coin-card__top">
              <span class="coin-card__name">shibo</span>
              <span class="coin-card__ticker">shib</span>
            </div>
            <div class="coin-card__bottom">
              <span class="coin-card__price">0.0020 USD</span>
              <span class="coin-card__change coin-card__change--up">+0.01%</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
<section class="demonstration">
  <div class="demonstration__inner">
    <div class="demonstration-text">
      <h1 class="demonstration-text__header set-anim-type2">Start your 7-day demo</h1>
      <p class="demonstration-text__pgon" split-words>Experience CryptoBot in action with a full 7-day demo, giving you
        access to
        the core features of the platform and automated crypto analysis tools</p>
      <p class="demonstration-text__pgtw" split-words>
        Try CryptoBot risk-free and explore how it can simplify crypto monitoring, trading insights, and market tracking
        directly from your device
      </p>
      <div class="demonstration-text__button">
        <button class="button-demo" type="button" aria-label="Get Demo">
          <div class="button-demo-first-block">
            <p class="button-demo__text">Schedule a Demo</p>
            <svg class="button-demo__icon" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12L12.5 0.499965"></path>
              <path d="M1 0.5H12.5V12"></path>
            </svg>
          </div>
          <div class="button-demo-last-block">
            <p class="button-demo__text">Schedule a Demo</p>
            <svg class="button-demo__icon" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12L12.5 0.499965"></path>
              <path d="M1 0.5H12.5V12" class="upper__icon"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
    <div class="demonstration-video-ilistrution">
      <video src="/assets/video/ilistrution_cubizm.webm" autoplay muted loop playsinline preload="auto"></video>
    </div>
    <div class="demonstration-bg"></div>
  </div>
</section>
<section class="devs">
  <div class="devs__head">
    <h2 class="devs__title set-anim-type2">
      Meet the developers behind the product — engineers, designers, and builders
      who turn ideas into fast, reliable experiences
    </h2>
  </div>

  <div class="devs-slider js-devs-slider">
    <div class="devs-slider__viewport">
      <div class="devs-slider__track js-devs-track">
        <article class="dev-card">
          <div class="dev-card__content">
            <p class="dev-card__quote" split-words>
              I focus on frontend architecture and interaction polish, making complex
              interfaces feel fast, clean, and intuitive
            </p>
            <p class="dev-card__role" split-words>Frontend Developer, UI Systems</p>
          </div>

          <div class="dev-card__footer">
            <span class="dev-card__name set-anim-type2">Alex</span>
          </div>
        </article>

        <article class="dev-card">
          <div class="dev-card__content">
            <p class="dev-card__quote" split-words>
              My work is about building stable backend flows, scalable APIs, and
              infrastructure that keeps products dependable under growth
            </p>
            <p class="dev-card__role" split-words>Backend Engineer, Platform</p>
          </div>

          <div class="dev-card__footer">
            <span class="dev-card__name set-anim-type2">Andrew</span>
          </div>
        </article>

        <article class="dev-card">
          <div class="dev-card__content">
            <p class="dev-card__quote" split-words>
              I care about system thinking, product logic, and turning business goals
              into technical solutions that teams can actually maintain
            </p>
            <p class="dev-card__role" split-words>Full-Stack Developer, Product</p>
          </div>

          <div class="dev-card__footer">
            <span class="dev-card__name set-anim-type2">Daniel</span>
          </div>
        </article>

        <article class="dev-card">
          <div class="dev-card__content">
            <p class="dev-card__quote" split-words>
              Performance, accessibility, and thoughtful details matter most to me.
              Good products should feel effortless for every user
            </p>
            <p class="dev-card__role" split-words>Frontend Engineer, Accessibility</p>
          </div>

          <div class="dev-card__footer">
            <span class="dev-card__name set-anim-type2">Max</span>
          </div>
        </article>
      </div>
    </div>

    <div class="devs-slider__controls">
      <button class="devs-slider__arrow js-devs-prev" type="button" aria-label="Previous">
        ←
      </button>
      <button class="devs-slider__arrow js-devs-next" type="button" aria-label="Next">
        →
      </button>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="footer__top">
    <div class="footer__empty"></div>

    <div class="footer__intro">
      <h2 class="footer__title set-anim-type2">
        Microsoft chose Payload to let the world know of its AI ambitions
      </h2>

      <p class="footer__text" split-words>
        In a rapidly evolving and competitive AI landscape, Microsoft recognized
        that the speed at which content operations are executed is crucial.
      </p>

      <p class="footer__text" split-words>
        With Payload’s code-based customization, extensibility, and a close
        partnership between the two teams, Microsoft has significantly enhanced
        its content operations and now better serves their audience of creators
        and industry insiders.
      </p>
    </div>

    <div class="footer__empty"></div>
  </div>

  <div class="footer__bottom">
    <div class="footer__col">
      <p class="footer__label">USE CASES</p>

      <nav class="footer__nav">
        <a href="#">Content Management System</a>
        <a href="#">Enterprise App Builder</a>
        <a href="#">Headless E-Commerce</a>
        <a href="#">Digital Asset Management</a>
      </nav>
    </div>

    <div class="footer__col">
      <p class="footer__label">DEVELOPERS</p>

      <nav class="footer__nav">
        <a href="#">Documentation</a>
        <a href="#">Community Help</a>
        <a href="#">Roadmap</a>
        <a href="#">Templates</a>
        <a href="#">Releases</a>
      </nav>
    </div>

    <div class="footer__col">
      <p class="footer__label">COMPANY</p>

      <nav class="footer__nav">
        <a href="#">Pricing</a>
        <a href="#">Enterprise</a>
        <a href="#">Case Studies</a>
        <a href="#">Partner With Us</a>
        <a href="#">Find a Partner</a>
        <a href="#">Blog</a>
        <a href="#">Security</a>
        <a href="#">Compare Payload</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact</a>
      </nav>
    </div>

    <div class="footer__col footer__col--connect">
      <p class="footer__label">STAY CONNECTED</p>

      <form class="footer__subscribe">
        <input type="email" placeholder="Enter your email" />
        <button type="submit" aria-label="Submit">→</button>
      </form>
    </div>
  </div>
</footer>
<div class="video">
  <div class="video__frame">
    <video id="bgVideo" src="/assets/video/videobg.mp4" autoplay muted loop playsinline preload="auto"></video>
  </div>
</div>
<div class="lines"></div>`;document.querySelector("#layout").innerHTML=f;const u=document.getElementById("bgVideo");u.addEventListener("loadedmetadata",()=>{u.playbackRate=.6});const _=document.querySelector(".js-devs-slider"),p=document.querySelector(".js-devs-track"),v=document.querySelector(".js-devs-prev"),h=document.querySelector(".js-devs-next");if(_&&p&&v&&h){const t=Array.from(p.children);let n=0;const i=()=>window.innerWidth<=768?1:2,c=()=>Math.max(0,t.length-i()),a=()=>{const o=t[0];if(!o)return;const d=o.offsetWidth;p.style.transform=`translate3d(-${d*n}px, 0, 0)`,v.disabled=n<=0,h.disabled=n>=c()};v.addEventListener("click",()=>{n=Math.max(0,n-1),a()}),h.addEventListener("click",()=>{n=Math.min(c(),n+1),a()});let s=0,e=0;_.addEventListener("touchstart",o=>{s=o.changedTouches[0].clientX}),_.addEventListener("touchend",o=>{e=o.changedTouches[0].clientX;const d=s-e;Math.abs(d)<40||(d>0?n=Math.min(c(),n+1):n=Math.max(0,n-1),a())}),window.addEventListener("resize",()=>{n=Math.min(n,c()),a()}),a()}class w{constructor(n){this.observers=[],this.items=n.items}normalizeClasses(n){return n?(Array.isArray(n)?n:[n]).map(c=>c.trim()).filter(Boolean):[]}init(){this.items.forEach(n=>{const{selector:i,threshold:c=.15,rootMargin:a="0px 0px -10% 0px",once:s=!0}=n,e=this.normalizeClasses(n.addClass),o=this.normalizeClasses(n.removeClass),d=document.querySelectorAll(i);if(!d.length)return;const m=new IntersectionObserver((l,y)=>{l.forEach(g=>{const r=g.target;if(g.isIntersecting){const b=r.dataset.delay;b&&(r.style.transitionDelay=`${b}ms`),o.length&&r.classList.remove(...o),e.length&&r.classList.add(...e),s&&y.unobserve(r)}else s||(e.length&&r.classList.remove(...e),o.length&&r.classList.add(...o),r.style.transitionDelay="")})},{threshold:c,rootMargin:a});d.forEach(l=>{o.length&&l.classList.add(...o),m.observe(l)}),this.observers.push(m)})}destroy(){this.observers.forEach(n=>n.disconnect()),this.observers=[]}}function k(t){document.querySelectorAll(t).forEach(i=>{const c=i.textContent;if(!c)return;const a=c.trim().split(/\s+/);i.innerHTML=a.map((s,e)=>`<span class="word" style="transition-delay: ${e*120}ms">${s}</span>`).join(" ")})}class C{constructor(n){this.items=n.items}normalizeClasses(n){return(Array.isArray(n)?n:[n]).map(c=>c.trim()).filter(Boolean)}buildSelector(n,i){return i?n.map(c=>`${i} ${c}`).join(", "):n.join(", ")}init(){this.items.forEach(n=>{const i=this.normalizeClasses(n.addClass),c=this.buildSelector(n.tags,n.parent),a=document.querySelectorAll(c);a.length&&a.forEach(s=>{n.exclude&&s.matches(n.exclude)||s.classList.add(...i)})})}}const S=new C({items:[{parent:".case__inner",tags:["h1","h2","p","h3"],addClass:"set-anim-type2"}]}),D=new w({items:[{selector:".anim",addClass:"push-anim-type1",removeClass:"",once:!0},{selector:".anim-two",addClass:"push-anim-type1",removeClass:"",once:!0},{selector:".case p, .case h3, .case h1, .case h2",addClass:"push-anim-type2",removeClass:"",once:!0},{selector:".demonstration-text__header",addClass:"push-anim-type2",removeClass:"",once:!0},{selector:".demonstration-text > p span",addClass:"push-anim-type3",removeClass:"",once:!0},{selector:".devs__title, .dev-card__name",addClass:"push-anim-type2",removeClass:"",once:!0},{selector:".dev-card__content > p span",addClass:"push-anim-type3",removeClass:"",once:!0},{selector:".footer__title",addClass:"push-anim-type2",removeClass:"",once:!0},{selector:".footer__text span",addClass:"push-anim-type3",removeClass:"",once:!0}]});S.init();k("[split-words]");D.init();
