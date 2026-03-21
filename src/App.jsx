import { useState, useEffect, useRef } from "react";

const NAVY = "#0f1729";
const WHITE = "#ffffff";
const ACCENT_HOVER = "#1a2744";
const GRAY_TEXT = "#555555";
const LIGHT_GRAY = "#999999";
const BORDER = "#e5e5e5";
const SUBTLE_BG = "#f9f9f9";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}


function Hero() {
  return (
    <section className="hero-section" style={{ backgroundColor: WHITE, color: NAVY, minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "100px 24px 80px", textAlign: "center" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center", marginBottom: 32 }}>
            <img src="/TailwindShip.png" alt="Tailwind" style={{ width: 24, height: 24, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Merriweather', Georgia, serif", fontWeight: 400, fontStyle: "italic", fontSize: 22, color: NAVY, letterSpacing: "-0.02em" }}>Tailwind</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}><h1 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.025em", maxWidth: 800, marginBottom: 28, color: NAVY, marginLeft: "auto", marginRight: "auto" }}>We build newsletters that turn <span style={{ fontWeight: 700 }}>your expertise</span> into <span style={{ fontWeight: 700, fontStyle: "italic" }}>reliable revenue.</span></h1></FadeIn>
        <FadeIn delay={0.1}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.6, color: GRAY_TEXT, maxWidth: 600, marginBottom: 40, marginLeft: "auto", marginRight: "auto" }}>Tailwind Studio is your trusted partner in creating email newsletters that capture your expertise, provide value to your audience, grow organically, and convert readers to your products and services.</p></FadeIn>
        <FadeIn delay={0.2}><a href="https://symkgiey390.typeform.com/tailwindstudio" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: WHITE, backgroundColor: NAVY, padding: "14px 32px", borderRadius: 6, textDecoration: "none", transition: "background-color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACCENT_HOVER} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NAVY}>Let's build your newsletter 📬</a></FadeIn>
        <FadeIn delay={0.35}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: LIGHT_GRAY, marginTop: 32, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>30+ publications produced, 1.5M+ subscribers earned, 8-figures in client revenue generated.</p></FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ marginTop: 32 }}>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" style={{ display: "block", margin: "0 auto", animation: "heroArrow 2s ease-in-out infinite" }}>
              <path d="M10 0V24M10 24L2 16M10 24L18 16" stroke={LIGHT_GRAY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WhySection() {
  const [p1Ref, p1] = useInView(0.3);
  const [p2Ref, p2] = useInView(0.3);
  const [p3Ref, p3] = useInView(0.3);
  const [p4Ref, p4] = useInView(0.3);
  const [p5Ref, p5] = useInView(0.3);

  const platforms = [
    { name: "LinkedIn", color: "#0A66C2" },
    { name: "YouTube", color: "#FF0000" },
    { name: "X / Twitter", color: "#71767b" },
    { name: "Podcasts", color: "#9b59b6" },
    { name: "Instagram", color: "#E1306C" },
  ];
  const offers = [{ name: "Coaching" }, { name: "Products" }, { name: "Services" }, { name: "Courses" }, { name: "Community" }];
  const tags = ["Demonstrate expertise", "Nurture & educate", "Build trust", "Provide value"];

  const collected = p2;
  const showHub = p2;
  const showOffers = p4;

  const anim = `
    @keyframes f0{0%,100%{transform:translate(8px,-14px) rotate(-2.5deg)}50%{transform:translate(-6px,8px) rotate(1.5deg)}}
    @keyframes f1{0%,100%{transform:translate(-12px,6px) rotate(1.5deg)}50%{transform:translate(8px,-10px) rotate(-1.5deg)}}
    @keyframes f2{0%,100%{transform:translate(4px,10px) rotate(-1deg)}50%{transform:translate(-8px,-6px) rotate(2deg)}}
    @keyframes f3{0%,100%{transform:translate(-8px,-8px) rotate(2deg)}50%{transform:translate(10px,4px) rotate(-1deg)}}
    @keyframes f4{0%,100%{transform:translate(10px,4px) rotate(-1.5deg)}50%{transform:translate(-4px,-12px) rotate(1deg)}}
    @keyframes orbit0{0%{transform:rotate(0deg) translateX(140px) rotate(0deg)}100%{transform:rotate(360deg) translateX(140px) rotate(-360deg)}}
    @keyframes orbit1{0%{transform:rotate(90deg) translateX(140px) rotate(-90deg)}100%{transform:rotate(450deg) translateX(140px) rotate(-450deg)}}
    @keyframes orbit2{0%{transform:rotate(180deg) translateX(140px) rotate(-180deg)}100%{transform:rotate(540deg) translateX(140px) rotate(-540deg)}}
    @keyframes orbit3{0%{transform:rotate(270deg) translateX(140px) rotate(-270deg)}100%{transform:rotate(630deg) translateX(140px) rotate(-630deg)}}
    @keyframes df0{0%,100%{transform:translate(0,0) rotate(-8deg);opacity:0.22}50%{transform:translate(4px,-8px) rotate(4deg);opacity:0.38}}
    @keyframes df1{0%,100%{transform:translate(0,0) rotate(6deg);opacity:0.18}50%{transform:translate(-5px,-10px) rotate(-4deg);opacity:0.34}}
    @keyframes df2{0%,100%{transform:translate(0,0) rotate(-4deg);opacity:0.16}50%{transform:translate(6px,-6px) rotate(8deg);opacity:0.30}}
    @keyframes df3{0%,100%{transform:translate(0,0) rotate(10deg);opacity:0.20}50%{transform:translate(-4px,-7px) rotate(-6deg);opacity:0.35}}
    @keyframes df4{0%,100%{transform:translate(0,0) rotate(-6deg);opacity:0.17}50%{transform:translate(5px,-9px) rotate(5deg);opacity:0.32}}
    @keyframes df5{0%,100%{transform:translate(0,0) rotate(3deg);opacity:0.21}50%{transform:translate(-6px,-5px) rotate(-8deg);opacity:0.36}}
  `;

  const ease = (d = 0) => `all 0.6s cubic-bezier(0.16,1,0.3,1) ${d}s`;

  // Scatter positions for the 5 pills (centered around a ~320px wide, 180px tall area)
  const scatterPositions = [
    { top: 10, left: 20 },
    { top: 0, left: 180 },
    { top: 75, left: 5 },
    { top: 100, left: 150 },
    { top: 55, left: 230 },
  ];

  return (
    <section className="mobile-section-why" style={{ backgroundColor: WHITE, color: NAVY, padding: "72px 24px 120px", borderTop: `1px solid ${BORDER}` }}>
      <style>{anim}</style>
      <style>{`
        @media(max-width:768px){
          .funnel-grid{grid-template-columns:1fr!important}
          .funnel-sticky{position:relative!important;top:auto!important;margin-bottom:48px}
        }
      `}</style>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: LIGHT_GRAY, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Why newsletters</p></FadeIn>
          <FadeIn delay={0.05}><h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", maxWidth: 700, margin: "0 auto", color: NAVY }}>Your newsletter is the <span style={{ fontWeight: 700 }}>central hub</span> of your sales funnel.</h2></FadeIn>
        </div>

        <div className="funnel-grid" style={{ display: "grid", gridTemplateColumns: "5fr 6fr", gap: 56, alignItems: "start" }}>

          {/* LEFT: sticky funnel */}
          <div className="funnel-sticky" style={{ position: "sticky", top: 100, alignSelf: "start", display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 340 }}>

              {/* Platforms - always absolute positioned, animate between scatter and collected */}
              {(() => {
                // Collected positions (centered row layout, simulated)
                const collectedPositions = [
                  { top: 0, left: 30 },
                  { top: 0, left: 128 },
                  { top: 0, left: 220 },
                  { top: 42, left: 70 },
                  { top: 42, left: 178 },
                ];
                return (
                  <div style={{
                    position: "relative", width: 340,
                    height: collected ? 84 : 180,
                    transition: "height 1.4s cubic-bezier(0.16,1,0.3,1)",
                  }}>
                    {platforms.map((p, i) => {
                      const target = collected ? collectedPositions[i] : scatterPositions[i];
                      return (
                        <div key={i} style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                          color: NAVY, backgroundColor: SUBTLE_BG,
                          border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 14px",
                          display: "inline-flex", alignItems: "center", gap: 7,
                          position: "absolute",
                          top: target.top,
                          left: target.left,
                          animation: !collected && p1 ? `f${i} ${4 + i * 0.5}s ease-in-out infinite` : "none",
                          transition: `top 1.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, left 1.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, opacity 0.6s ease`,
                          opacity: p1 ? 1 : 0,
                          whiteSpace: "nowrap",
                        }}>
                          <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: p.color, flexShrink: 0 }} />
                          {p.name}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}

              {/* Arrow down */}
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                padding: "28px 0",
                opacity: showHub ? 1 : 0, maxHeight: showHub ? 120 : 0, overflow: "hidden",
                transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.4s",
              }}>
                <div style={{ width: 1, height: 52, backgroundColor: BORDER }} />
                <svg width="14" height="9" viewBox="0 0 16 10" fill="none" style={{ marginTop: -1 }}>
                  <path d="M1 1L8 8L15 1" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Newsletter card with glow and orbiting tags */}
              <div style={{
                opacity: showHub ? 1 : 0, transform: showHub ? "scale(1)" : "scale(0.8)",
                transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.7s",
                position: "relative",
                margin: "0 auto",
              }}>
                <div style={{ position: "relative", width: 320, height: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {/* Orbiting tags */}
                  {showHub && tags.map((tag, i) => (
                    <div key={i} style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      marginTop: -12, marginLeft: -32,
                      animation: `orbit${i} 24s linear infinite`,
                      zIndex: 2, pointerEvents: "none",
                    }}>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600,
                        color: GRAY_TEXT, backgroundColor: WHITE,
                        border: `1px solid ${BORDER}`, borderRadius: 12, padding: "5px 12px",
                        whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                        display: "inline-block",
                      }}>{tag}</span>
                    </div>
                  ))}

                  {/* Glow behind the card */}
                  <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 280, height: 200,
                    background: "radial-gradient(ellipse, rgba(15,23,41,0.10) 0%, rgba(15,23,41,0.04) 40%, transparent 70%)",
                    borderRadius: 60, filter: "blur(16px)",
                    zIndex: 0,
                  }} />

                  {/* The card */}
                  <div style={{
                    width: 200, padding: "28px 20px", textAlign: "center",
                    background: WHITE, borderRadius: 14,
                    border: `2px solid ${NAVY}`,
                    boxShadow: "0 8px 40px rgba(15,23,41,0.12), 0 2px 8px rgba(15,23,41,0.06)",
                    position: "relative", zIndex: 1,
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 10px" }}>
                      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13L2 4" />
                    </svg>
                    <div style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 16, color: NAVY }}>Your Newsletter</div>
                  </div>
                </div>
              </div>

              {/* Arrow out */}
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                padding: "28px 0",
                opacity: showOffers ? 1 : 0, maxHeight: showOffers ? 120 : 0, overflow: "hidden",
                transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}>
                <div style={{ width: 1, height: 52, backgroundColor: BORDER }} />
                <svg width="14" height="9" viewBox="0 0 16 10" fill="none" style={{ marginTop: -1 }}>
                  <path d="M1 1L8 8L15 1" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Offers + dollars */}
              {(() => {
                // Scattered positions for offers
                const offerScatter = [
                  { top: 20, left: 10 },
                  { top: 0, left: 140 },
                  { top: 50, left: 220 },
                  { top: 60, left: 60 },
                  { top: 15, left: 260 },
                ];
                // Collected positions (centered rows)
                const offerCollected = [
                  { top: 0, left: 28 },
                  { top: 0, left: 118 },
                  { top: 0, left: 208 },
                  { top: 42, left: 68 },
                  { top: 42, left: 168 },
                ];
                const dollars = [
                  { top: -16, left: -24, anim: "df0", dur: 4.5, size: 18 },
                  { top: 10, left: 320, anim: "df1", dur: 5.2, size: 16 },
                  { top: -8, left: 280, anim: "df2", dur: 3.8, size: 20 },
                  { top: 50, left: -16, anim: "df3", dur: 4.8, size: 14 },
                  { top: 60, left: 300, anim: "df4", dur: 5.5, size: 17 },
                  { top: -12, left: 120, anim: "df5", dur: 4.2, size: 15 },
                  { top: 70, left: 180, anim: "df0", dur: 5.0, size: 13 },
                  { top: 30, left: -30, anim: "df2", dur: 4.0, size: 19 },
                ];
                const target = showOffers ? offerCollected : offerScatter;

                return (
                  <div style={{
                    position: "relative", width: 340, height: showOffers ? 84 : 100,
                    transition: "height 1.4s cubic-bezier(0.16,1,0.3,1)",
                  }}>
                    {/* Dollar signs */}
                    {showOffers && dollars.map((d, i) => (
                      <span key={`d${i}`} style={{
                        position: "absolute", top: d.top, left: d.left,
                        fontFamily: "'DM Sans', sans-serif", fontSize: d.size, color: "#2d8f4e",
                        animation: `${d.anim} ${d.dur}s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`,
                        pointerEvents: "none", userSelect: "none",
                      }}>$</span>
                    ))}

                    {/* Offer pills */}
                    {offers.map((o, i) => (
                      <div key={i} style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                        color: WHITE, backgroundColor: NAVY, borderRadius: 8, padding: "8px 16px",
                        position: "absolute",
                        top: showOffers ? target[i].top : offerScatter[i].top,
                        left: showOffers ? target[i].left : offerScatter[i].left,
                        opacity: showOffers ? 1 : 0,
                        transition: `top 1.4s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.12}s, left 1.4s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.12}s, opacity 0.8s ease ${0.1 + i * 0.1}s`,
                        whiteSpace: "nowrap",
                      }}>{o.name}</div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>

          {/* RIGHT: scrolling copy */}
          <div style={{ maxWidth: 520 }}>
            <div ref={p1Ref} style={{ paddingTop: 24 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 12, opacity: p1 ? 1 : 0, transform: p1 ? "translateY(0)" : "translateY(16px)", transition: ease() }}>
                Your expertise is scattered across platforms you don't control. LinkedIn, YouTube, X, Instagram, podcasts. Every one of them decides who sees your work and when.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, fontWeight: 700, color: NAVY, marginBottom: 32, opacity: p1 ? 1 : 0, transform: p1 ? "translateY(0)" : "translateY(16px)", transition: ease(0.12) }}>
                You're building on rented land.
              </p>
            </div>

            <div ref={p2Ref}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 32, opacity: p2 ? 1 : 0, transform: p2 ? "translateY(0)" : "translateY(16px)", transition: ease() }}>
                A newsletter captures that attention and moves it to a channel you own. Whether you have years of content or just the knowledge in your head, a newsletter turns your expertise into something your audience receives directly, every week, with no algorithm in between.
              </p>
            </div>

            <div ref={p3Ref}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 12, opacity: p3 ? 1 : 0, transform: p3 ? "translateY(0)" : "translateY(16px)", transition: ease() }}>
                From there, every edition builds trust, demonstrates your expertise, and naturally drives readers toward your offers. For high-ticket services, coaching, and complex products, people need to know you before they buy.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, fontWeight: 700, color: NAVY, marginBottom: 32, opacity: p3 ? 1 : 0, transform: p3 ? "translateY(0)" : "translateY(16px)", transition: ease(0.12) }}>
                A newsletter is how they get to know you.
              </p>
            </div>

            <div ref={p4Ref}>
              <p style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: 1.4, color: NAVY, marginBottom: 12, opacity: p4 ? 1 : 0, transform: p4 ? "translateY(0)" : "translateY(16px)", transition: ease() }}>
                If the newsletter is this important to your sales funnel, it better be good.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 32, opacity: p4 ? 1 : 0, transform: p4 ? "translateY(0)" : "translateY(16px)", transition: ease(0.12) }}>
                Creating a great newsletter without the systems, knowledge, or team is time-consuming and has a steep learning curve.
              </p>
            </div>

            <div ref={p5Ref} style={{ marginBottom: 40 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, fontWeight: 700, color: NAVY, opacity: p5 ? 1 : 0, transform: p5 ? "translateY(0)" : "translateY(16px)", transition: ease() }}>
                That's where we come in 👇
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const cards = [
    { num: "01", title: "We capture your expertise and turn it into a newsletter people actually read.", body: "Whether you have a backlog of content or just years of knowledge in your head, we extract what makes you the expert and package it into a weekly newsletter that hooks readers, delivers real value, and drives them toward your products and services.", rotate: -0.8,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={LIGHT_GRAY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg> },
    { num: "02", title: "We build the infrastructure behind it.", body: "Landing pages that convert. Onboarding surveys that segment your audience. Welcome sequences that build trust from day one. Re-engagement flows that keep your list healthy. All managed for you.", rotate: 0.5,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={LIGHT_GRAY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg> },
    { num: "03", title: "We grow your list with the right people.", body: "For clients who want to accelerate, we run Meta ad campaigns that fill the top of the funnel with qualified subscribers. We handle the creative, the targeting, and the optimization.", rotate: -0.3,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={LIGHT_GRAY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg> },
  ];
  return (
    <section className="mobile-section" style={{ backgroundColor: WHITE, padding: "100px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: LIGHT_GRAY, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}>What we do</p></FadeIn>
        <FadeIn delay={0.05}><h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: NAVY, letterSpacing: "-0.02em", maxWidth: 600, margin: "0 auto 56px", textAlign: "center" }}>We handle <span style={{ fontWeight: 700 }}>the entire newsletter funnel</span> so you don't have to.</h2></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {cards.map((card, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.08}>
              <div
                style={{
                  position: "relative",
                  backgroundColor: WHITE,
                  borderRadius: 12,
                  border: `1.5px solid ${BORDER}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transform: `rotate(${card.rotate}deg)`,
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
                  boxShadow: "0 2px 12px rgba(15,23,41,0.04)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg) translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(15,23,41,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${card.rotate}deg)`;
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(15,23,41,0.04)";
                }}
              >
                {/* Envelope flap */}
                <svg viewBox="0 0 340 40" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: 36, display: "block", flexShrink: 0 }}>
                  <path d="M0,0 L170,32 L340,0" stroke={BORDER} strokeWidth="1.5" fill={SUBTLE_BG} />
                </svg>

                <div style={{ padding: "20px 28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    {card.icon}
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: LIGHT_GRAY, letterSpacing: "0.04em" }}>{card.num}</span>
                  </div>

                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 12, letterSpacing: "-0.01em", lineHeight: 1.35 }}>{card.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: GRAY_TEXT, margin: 0, flex: 1 }}>{card.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote({ children, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <div style={{
        backgroundColor: SUBTLE_BG, borderRadius: 12, padding: "24px 28px",
        borderLeft: `3px solid ${NAVY}`, marginBottom: 24,
        position: "relative",
      }}>
        <svg width="20" height="16" viewBox="0 0 24 20" fill="none" style={{ position: "absolute", top: 20, left: 24, opacity: 0.08 }}>
          <path d="M0 20V12C0 5.4 4.2 1.4 10 0l1.4 2.8C7.6 4 5.8 6.6 5.4 10H10v10H0zm14 0V12c0-6.6 4.2-10.6 10-12l1.4 2.8C21.6 4 19.8 6.6 19.4 10H24v10H14z" fill={NAVY} />
        </svg>
        <p style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 15, lineHeight: 1.7, color: NAVY, fontStyle: "italic", position: "relative", zIndex: 1 }}>{children}</p>
      </div>
    </FadeIn>
  );
}

function ProofSection() {
  const stats = [
    { big: "1x \u2192 5x/week", label: "send frequency" },
    { big: "10X", label: "revenue from newsletter" },
    { big: "\u201CTotally hands off\u201D", label: "Ben Kelly, Acquisition Ace", isQuote: true },
  ];
  return (
    <section className="mobile-section" style={{ backgroundColor: WHITE, color: NAVY, padding: "100px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: LIGHT_GRAY, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}><span style={{ background: "rgba(255,240,0,0.45)", padding: "3px 10px", borderRadius: 3, transform: "rotate(-0.5deg)", display: "inline-block" }}>Case study</span></p></FadeIn>
        <FadeIn delay={0.05}><h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", maxWidth: 680, margin: "0 auto 32px", textAlign: "center", color: NAVY }}>From inconsistent sends to <span style={{ fontWeight: 700 }}>10X newsletter revenue.</span></h2></FadeIn>

        <FadeIn delay={0.07}>
          <div style={{ maxWidth: 720, margin: "0 auto 36px", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(15,23,41,0.10)" }}>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe src="https://player.vimeo.com/video/1175668468?h=a5489636fa&badge=0&autopause=0&player_id=0&app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Tailwind x Ben Kelly" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <img src="/TailwindShip.png" alt="Tailwind" style={{ width: 24, height: 24, objectFit: "contain" }} />
              <span style={{ fontFamily: "'Merriweather', Georgia, serif", fontWeight: 400, fontStyle: "italic", fontSize: 22, color: NAVY, letterSpacing: "-0.02em" }}>Tailwind</span>
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: LIGHT_GRAY, fontWeight: 500 }}>&times;</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="https://cdn.prod.website-files.com/674cb9344353766e35f283dd/696e8d9aeeb4618a31068a43_Untitled_design_-_2025-12-10T165414.876.png" alt="Ben Kelly" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: `1.5px solid ${BORDER}` }} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: NAVY, lineHeight: 1.2 }}>Ben Kelly</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: LIGHT_GRAY, lineHeight: 1.2 }}>Founder, Acquisition Ace</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn delay={0.1}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 24 }}>Ben Kelly runs Acquisition Ace, a community helping people acquire businesses. He'd built his newsletter to a few thousand subscribers on his own, but it kept falling to the back burner. Then something clicked.</p></FadeIn>

          <Quote delay={0.15}>"I realized that the subscribers I had to my newsletter were some of the best leads that I had, and I realized I need to focus on this because I think this can become one of my biggest channels."</Quote>

          <FadeIn delay={0.2}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 24 }}>We took over the full newsletter operation: writing in Ben's voice by studying his existing content, repurposing his YouTube and Instagram into newsletter editions, and scaling send frequency from once a week to five days a week.</p></FadeIn>

          <Quote delay={0.25}>"Very rarely do I have to make any kind of major changes. Most of the time it's just like changing one word. And then there's a lot of times where I don't do anything other than saying 'that looks great.'"</Quote>

          <FadeIn delay={0.3}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 24 }}>Today, the newsletter drives 10X the revenue it did before.</p></FadeIn>

          <Quote delay={0.35}>"It's 10X the amount of revenue that we were receiving from the newsletter. The same size audience, but 10X the revenue. And that's all because of the frequency, the quality, the design, everything that your team runs on the newsletter."</Quote>

          <FadeIn delay={0.4}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 24 }}>And for Ben, it's not just about revenue, it's about building something he actually owns.</p></FadeIn>

          <Quote delay={0.45}>"You can get banned from Instagram, you get banned from YouTube. Guess what? If you have people's emails and they opted in, you own that."</Quote>
        </div>

        <div className="proof-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 56 }}>
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={0.5 + i * 0.08}>
              <div style={{ borderLeft: `3px solid ${NAVY}`, paddingLeft: 24 }}>
                <div style={{ fontFamily: stat.isQuote ? "'Merriweather', Georgia, serif" : "'Merriweather', Georgia, serif", fontSize: stat.isQuote ? "clamp(18px, 2.5vw, 22px)" : "clamp(28px, 3.5vw, 36px)", fontWeight: 400, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.2, fontStyle: stat.isQuote ? "italic" : "normal" }}>{stat.big}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: LIGHT_GRAY, marginTop: 4 }}>{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}><div style={{ marginTop: 56, textAlign: "center" }}><a href="https://symkgiey390.typeform.com/tailwindstudio" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: WHITE, backgroundColor: NAVY, padding: "14px 32px", borderRadius: 6, textDecoration: "none", transition: "background-color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACCENT_HOVER} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NAVY}>Build your funnel</a></div></FadeIn>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mobile-section" style={{ backgroundColor: WHITE, padding: "100px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <FadeIn><h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, color: NAVY, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>Built by a newsletter operator, not a marketing agency.</h2></FadeIn>
            <FadeIn delay={0.1}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: GRAY_TEXT, marginBottom: 20 }}>Tailwind is run by Ryan, who led newsletter growth at The Hustle before and after its acquisition by HubSpot. He's spent his career building, growing, and monetizing newsletters. Tailwind is how he does that for other businesses.</p></FadeIn>
            <FadeIn delay={0.15}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: GRAY_TEXT, margin: 0 }}>This isn't a big agency with layers of account managers. It's a small, hands-on team that treats your newsletter like their own.</p></FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="about-photo" style={{ backgroundColor: SUBTLE_BG, borderRadius: 12, aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${BORDER}` }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: LIGHT_GRAY, textAlign: "center", padding: 24 }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={BORDER} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 12px" }}><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                Headshot goes here
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WallOfLove() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.src = "https://widget.senja.io/widget/249bbaf1-cb7d-444b-a130-5f2f97ad7857/platform.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => { try { document.body.removeChild(script); } catch(e) {} };
  }, []);
  return (
    <section className="mobile-section" style={{ backgroundColor: WHITE, padding: "100px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: LIGHT_GRAY, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}>Testimonials</p></FadeIn>
        <FadeIn delay={0.05}><h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", maxWidth: 800, margin: "0 auto 48px", textAlign: "center", color: NAVY }}>Some more <span style={{ fontWeight: 700, fontStyle: "italic" }}>love</span> for Tailwind 👇</h2></FadeIn>
        <div
          ref={containerRef}
          className="senja-embed"
          data-id="249bbaf1-cb7d-444b-a130-5f2f97ad7857"
          data-mode="shadow"
          data-lazyload="false"
          style={{ display: "block", width: "100%" }}
        />
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="mobile-section" style={{ backgroundColor: NAVY, color: WHITE, padding: "100px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <FadeIn><h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 20, color: WHITE }}>Ready to turn your content into a revenue channel?</h2></FadeIn>
        <FadeIn delay={0.1}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>Book a call and we'll walk through what a newsletter funnel looks like for your business.</p></FadeIn>
        <FadeIn delay={0.2}><a href="https://symkgiey390.typeform.com/tailwindstudio" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, backgroundColor: WHITE, padding: "16px 40px", borderRadius: 6, textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>Book a call</a></FadeIn>
        <FadeIn delay={0.3}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.25)", marginTop: 48 }}>© 2026 Tailwind Studio. tailwindstudio.co</p></FadeIn>
      </div>
    </section>
  );
}

export default function TailwindStudio() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: WHITE }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        ::selection{background:${NAVY};color:${WHITE}}
        @keyframes heroArrow{0%,100%{transform:translateY(0);opacity:0.4}50%{transform:translateY(8px);opacity:1}}
        @media(max-width:768px){
          .mobile-section{padding-top:56px!important;padding-bottom:56px!important}
          .mobile-section-why{padding-top:36px!important;padding-bottom:56px!important}
          .proof-grid{grid-template-columns:1fr!important;gap:32px!important}
          .proof-stats{grid-template-columns:1fr!important;gap:24px!important}
          .about-grid{grid-template-columns:1fr!important;gap:32px!important}
          .about-photo{aspect-ratio:3/2!important}
          .hero-section{min-height:auto!important;padding-top:100px!important;padding-bottom:48px!important}
        }
      `}</style>
      <Hero /><WhySection /><WhatWeDo /><ProofSection /><WallOfLove /><FooterCTA />
    </div>
  );
}
