"use client"

import { useState, useEffect } from "react"

export default function MarketsPage() {
  const [isVibeMode, setIsVibeMode] = useState(true)

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("conspiracyTheme")
    if (savedTheme !== null) {
      setIsVibeMode(savedTheme === "vibe")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isVibeMode
    setIsVibeMode(newTheme)
    localStorage.setItem("conspiracyTheme", newTheme ? "vibe" : "retro")
  }

  const allMarkets = [
    {
      id: 1,
      title: "JFK Assassination: Lone Gunman vs Multiple Shooters",
      description: "Was Lee Harvey Oswald acting alone, or was there a larger conspiracy?",
      yesPrice: 0.34,
      noPrice: 0.66,
      volume: 15420,
      posts: 847,
      trending: true,
      category: "Government & Politics",
    },
    {
      id: 2,
      title: "The Moon Landing: Real or Fake?",
      description: "Did NASA really land on the moon in 1969?",
      yesPrice: 0.89,
      noPrice: 0.11,
      volume: 8930,
      posts: 1203,
      trending: false,
      category: "Space & UFOs",
    },
    {
      id: 3,
      title: "Dever Airport: Secret Government Base",
      description: "Is the US government operating a secret drone base out of Denver Airport??",
      yesPrice: 0.23,
      noPrice: 0.77,
      volume: 12100,
      posts: 592,
      trending: true,
      category: "Space & UFOs",
    },
    {
      id: 4,
      title: "9/11: Inside Job or Foreign Attack",
      description: "Was 9/11 carried out solely by foreign terrorists or was there government involvement?",
      yesPrice: 0.18,
      noPrice: 0.82,
      volume: 22340,
      posts: 2156,
      trending: false,
      category: "Government & Politics",
    },
    {
      id: 7,
      title: "Pearl Harbor: Advance Warning Ignored",
      description: "Did FDR have advance knowledge of the Pearl Harbor attack?",
      yesPrice: 0.29,
      noPrice: 0.71,
      volume: 11200,
      posts: 678,
      trending: false,
      category: "Historical Events",
    },
    {
      id: 8,
      title: "Titanic: Insurance Fraud Conspiracy",
      description: "Was the Titanic disaster an elaborate insurance fraud scheme?",
      yesPrice: 0.15,
      noPrice: 0.85,
      volume: 5600,
      posts: 289,
      trending: false,
      category: "Historical Events",
    },
    {
      id: 9,
      title: "Roswell UFO Crash",
      description: "Was the 1947 Roswell incident really a crashed UFO?",
      yesPrice: 0.41,
      noPrice: 0.59,
      volume: 9800,
      posts: 734,
      trending: true,
      category: "Space & UFOs",
    },
    {
      id: 10,
      title: "Princess Diana: Assassination?",
      description: "Was Princess Diana's death in 1997 a planned assassination?",
      yesPrice: 0.27,
      noPrice: 0.73,
      volume: 13450,
      posts: 1089,
      trending: false,
      category: "Government & Politics",
    },
  ]

  return (
    <div className={isVibeMode ? "conspiracy-site-vibe" : "conspiracy-site-retro"}>
      <style jsx>{`
        /* VIBE MODE STYLES */
        .conspiracy-site-vibe {
          font-family: "Courier New", monospace;
          background: linear-gradient(45deg, #1a0033, #330066, #1a0033, #660033);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .conspiracy-site-vibe::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .conspiracy-site-vibe .header {
          background: linear-gradient(135deg, #000080, #4b0082, #8b008b);
          color: #00ff41;
          padding: 20px;
          text-align: center;
          border-width: 3px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1);
          position: relative;
          z-index: 2;
          animation: headerGlow 3s ease-in-out infinite alternate;
        }

        @keyframes headerGlow {
          0% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1); }
          100% { box-shadow: 0 0 30px rgba(0, 255, 65, 0.8), inset 0 0 30px rgba(0, 255, 65, 0.2); }
        }

        .conspiracy-site-vibe .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
          text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41;
          animation: textFlicker 2s infinite alternate;
        }

        @keyframes textFlicker {
          0% { opacity: 1; }
          50% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        .conspiracy-site-vibe .header .tagline {
          font-size: 14px;
          font-style: italic;
          margin-top: 8px;
          color: #ff00ff;
          text-shadow: 0 0 5px #ff00ff;
          animation: taglineGlow 4s ease-in-out infinite alternate;
        }

        @keyframes taglineGlow {
          0% { color: #ff00ff; text-shadow: 0 0 5px #ff00ff; }
          100% { color: #00ffff; text-shadow: 0 0 10px #00ffff; }
        }

        .conspiracy-site-vibe .nav-bar {
          background: linear-gradient(90deg, #2d2d2d, #1a1a1a, #2d2d2d);
          padding: 12px;
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .conspiracy-site-vibe .nav-bar a {
          color: #00ff41;
          text-decoration: none;
          font-weight: bold;
          margin: 0 15px;
          font-size: 13px;
          padding: 5px 10px;
          border-width: 1px;
          border-style: solid;
          border-color: transparent;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px #00ff41;
        }

        .conspiracy-site-vibe .nav-bar a:hover {
          color: #ff00ff;
          border-color: #ff00ff;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
          text-shadow: 0 0 10px #ff00ff;
          transform: scale(1.05);
        }

        .conspiracy-site-vibe .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 15px;
          background: rgba(0, 0, 0, 0.8);
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
          position: relative;
          z-index: 2;
          backdrop-filter: blur(10px);
        }

        /* RETRO MODE STYLES */
        .conspiracy-site-retro {
          font-family: "Times New Roman", Times, serif;
          background-color: #c0c0c0;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        .conspiracy-site-retro .header {
          background-color: #000080;
          color: #ffff00;
          padding: 10px;
          text-align: center;
          border-width: 3px;
          border-style: outset;
          border-color: #c0c0c0;
        }

        .conspiracy-site-retro .header h1 {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
        }

        .conspiracy-site-retro .header .tagline {
          font-size: 12px;
          font-style: italic;
          margin-top: 5px;
        }

        .conspiracy-site-retro .nav-bar {
          background-color: #c0c0c0;
          padding: 8px;
          border-width: 2px;
          border-style: inset;
          border-color: #c0c0c0;
          text-align: center;
        }

        .conspiracy-site-retro .nav-bar a {
          color: #0000ff;
          text-decoration: underline;
          font-weight: normal;
          padding: 2px 5px;
          font-size: 12px;
          margin: 0 5px;
        }

        .conspiracy-site-retro .nav-bar a:hover {
          color: #ff0000;
        }

        .conspiracy-site-retro .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 10px;
          background-color: #ffffff;
          border-width: 2px;
          border-style: inset;
          border-color: #c0c0c0;
        }

        /* Theme Toggle Button */
        .theme-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          padding: 10px 15px;
          font-weight: bold;
          cursor: pointer;
          border-radius: 5px;
          transition: all 0.3s ease;
          font-family: "Courier New", monospace;
          font-size: 12px;
        }

        .conspiracy-site-vibe .theme-toggle {
          background: linear-gradient(135deg, #8b008b, #4b0082);
          color: #00ff41;
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          text-shadow: 0 0 5px #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.4);
        }

        .conspiracy-site-vibe .theme-toggle:hover {
          background: linear-gradient(135deg, #ff00ff, #8b008b);
          border-color: #ff00ff;
          color: #ffffff;
          text-shadow: 0 0 10px #ffffff;
          box-shadow: 0 0 25px rgba(255, 0, 255, 0.6);
          transform: scale(1.1);
        }

        .conspiracy-site-retro .theme-toggle {
          background-color: #008000;
          color: #ffffff;
          border-width: 2px;
          border-style: outset;
          border-color: #008000;
          font-family: "Times New Roman", Times, serif;
        }

        .conspiracy-site-retro .theme-toggle:hover {
          border-style: inset;
        }

        .page-header {
          padding: 15px;
          margin-bottom: 20px;
          font-size: 13px;
          text-align: center;
        }

        .conspiracy-site-vibe .page-header {
          background: linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 255, 0.1));
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          color: #00ff41;
          text-shadow: 0 0 5px #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
          animation: welcomeBoxPulse 6s ease-in-out infinite;
        }

        .conspiracy-site-retro .page-header {
          background-color: #ffff99;
          border-width: 2px;
          border-style: solid;
          border-color: #000000;
          color: #000000;
        }

        @keyframes welcomeBoxPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(0, 255, 65, 0.3); }
          50% { box-shadow: 0 0 25px rgba(0, 255, 65, 0.6); }
        }

        .stats-bar {
          padding: 8px;
          text-align: center;
          font-size: 11px;
          margin-bottom: 20px;
        }

        .conspiracy-site-vibe .stats-bar {
          background: linear-gradient(90deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 255, 0.1), rgba(0, 255, 65, 0.1));
          border-width: 1px;
          border-style: solid;
          border-color: #00ff41;
          color: #00ffff;
          text-shadow: 0 0 3px #00ffff;
          animation: statsGlow 3s ease-in-out infinite alternate;
        }

        .conspiracy-site-retro .stats-bar {
          background-color: #e0e0e0;
          border-width: 1px;
          border-style: solid;
          border-color: #000000;
          color: #000000;
        }

        @keyframes statsGlow {
          0% { border-color: #00ff41; }
          100% { border-color: #ff00ff; }
        }

        .markets-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }

        .market-card {
          padding: 15px;
          display: flex;
          flex-direction: column;
          min-height: 200px;
          position: relative;
          transition: all 0.3s ease;
        }

        .conspiracy-site-vibe .market-card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(75, 0, 130, 0.2));
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }

        .conspiracy-site-vibe .market-card:hover {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(255, 0, 255, 0.2));
          border-color: #ff00ff;
          box-shadow: 0 0 25px rgba(255, 0, 255, 0.5);
          transform: translateY(-5px) scale(1.02);
        }

        .conspiracy-site-retro .market-card {
          background-color: #ffffff;
          border-width: 2px;
          border-style: solid;
          border-color: #000000;
        }

        .conspiracy-site-retro .market-card:hover {
          background-color: #f8f8f8;
        }

        .trending-badge {
          padding: 3px 8px;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 3;
        }

        .conspiracy-site-vibe .trending-badge {
          background: linear-gradient(45deg, #ff0000, #ff6600);
          color: #ffffff;
          border-width: 1px;
          border-style: solid;
          border-color: #ffffff;
          animation: trendingPulse 2s ease-in-out infinite;
          text-shadow: 0 0 5px #000000;
        }

        .conspiracy-site-retro .trending-badge {
          background-color: #ff0000;
          color: #ffffff;
          border-width: 1px;
          border-style: solid;
          border-color: #000000;
        }

        @keyframes trendingPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .markets-grid {
            grid-template-columns: 1fr;
          }
          .header h1 {
            font-size: 22px;
          }
          .theme-toggle {
            top: 10px;
            right: 10px;
            padding: 8px 12px;
            font-size: 11px;
          }
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isVibeMode ? "🕹️ RETRO MODE" : "🌈 VIBE MODE"}
      </button>

      {/* Header */}
      <div className="header">
        <h1>{isVibeMode ? "🛸 CONSPIRACY PREDICTION EXCHANGE 🛸" : "CONSPIRACY PREDICTION EXCHANGE"}</h1>
        <div className="tagline">
          {isVibeMode
            ? "✨ Betting on the Truth Behind History's Greatest Mysteries ✨"
            : "Trade on the Truth Behind History's Mysteries"}
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">{isVibeMode ? "🏠 HOME" : "HOME"}</a>
        <a href="/create">{isVibeMode ? "➕ CREATE A MARKET" : "CREATE A MARKET"}</a>
        <a href="/markets">{isVibeMode ? "📊 ALL MARKETS" : "ALL MARKETS"}</a>
        <a href="/portfolio">{isVibeMode ? "💼 VIEW PORTFOLIO" : "VIEW PORTFOLIO"}</a>
        <a href="/connect">{isVibeMode ? "🔗 CONNECT WALLET" : "CONNECT WALLET"}</a>
      </div>

      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <center>
            <b>{isVibeMode ? "🌟 *** ALL CONSPIRACY MARKETS *** 🌟" : "*** ALL CONSPIRACY MARKETS ***"}</b>
            <br />
            <br />
            Browse all active prediction markets and place your bets on history's greatest mysteries!
          </center>
        </div>

        {/* Stats */}
        <div className="stats-bar">
          <center>
            <b>{isVibeMode ? "📈 *** MARKET STATS *** 📈" : "*** MARKET STATS ***"}</b>
            <br />
            {isVibeMode ? "🎯" : ""} Total Markets: {allMarkets.length} | {isVibeMode ? "👥" : ""} Active Traders: 2,847
            | {isVibeMode ? "💰" : ""} 24h Volume: $156,890
            <br />
            <span style={{ fontSize: "10px" }}>
              {isVibeMode ? "⏰" : ""} Last Updated: {new Date().toLocaleString()}
            </span>
          </center>
        </div>

        {/* Markets Grid */}
        <div className="markets-grid">
          {allMarkets.map((market) => (
            <div key={market.id} className="market-card">
              {market.trending && <div className="trending-badge">{isVibeMode ? "🔥 HOT" : "HOT"}</div>}

              {market.id === 2 && (
                <img
                  src="/moon-landing.jpg"
                  alt="Moon Landing"
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: isVibeMode ? "#00ff41" : "#000000",
                    marginBottom: "10px",
                    marginTop: "25px",
                    filter: isVibeMode ? "hue-rotate(30deg) saturate(1.2)" : "none",
                    transition: "all 0.3s ease",
                  }}
                />
              )}

              <div
                style={{
                  fontSize: "10px",
                  color: isVibeMode ? "#ff00ff" : "#666666",
                  fontStyle: "italic",
                  marginBottom: "6px",
                  textShadow: isVibeMode ? "0 0 3px #ff00ff" : "none",
                }}
              >
                {isVibeMode ? "📁" : ""} {market.category}
              </div>

              <a
                href={`/market/${market.id}`}
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: isVibeMode ? "#00ff41" : "#0000ff",
                  marginBottom: "10px",
                  textDecoration: isVibeMode ? "none" : "underline",
                  lineHeight: 1.3,
                  textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {market.title}
              </a>

              <div
                style={{
                  fontSize: "12px",
                  color: isVibeMode ? "#00ffff" : "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.4,
                  flexGrow: 1,
                  textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
                }}
              >
                {market.description}
              </div>

              <div
                style={{
                  background: isVibeMode
                    ? "linear-gradient(90deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 0, 0.1))"
                    : "#e0e0e0",
                  borderWidth: isVibeMode ? "1px" : "2px",
                  borderStyle: isVibeMode ? "solid" : "inset",
                  borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
                  padding: "8px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "28px",
                  animation: isVibeMode ? "priceGlow 5s ease-in-out infinite alternate" : "none",
                }}
              >
                <div
                  style={{
                    color: isVibeMode ? "#00ff00" : "#008000",
                    fontWeight: "bold",
                    fontSize: "13px",
                    textShadow: isVibeMode ? "0 0 5px #00ff00" : "none",
                  }}
                >
                  {isVibeMode ? "✅" : ""} YES: ${market.yesPrice.toFixed(2)}
                </div>
                <div
                  style={{
                    color: isVibeMode ? "#ff0040" : "#ff0000",
                    fontWeight: "bold",
                    fontSize: "13px",
                    textShadow: isVibeMode ? "0 0 5px #ff0040" : "none",
                  }}
                >
                  {isVibeMode ? "❌" : ""} NO: ${market.noPrice.toFixed(2)}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "11px",
                  color: isVibeMode ? "#00ffff" : "#000000",
                  marginBottom: "12px",
                  textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
                }}
              >
                <span>
                  {isVibeMode ? "💰" : ""} ${market.volume.toLocaleString()}
                </span>
                <span>
                  {isVibeMode ? "💬" : ""} {market.posts}
                </span>
              </div>

              <a
                href={`/trade/${market.id}`}
                style={{
                  background: isVibeMode ? "linear-gradient(135deg, #8b008b, #4b0082)" : "#008000",
                  color: isVibeMode ? "#00ff41" : "#ffffff",
                  borderWidth: "2px",
                  borderStyle: isVibeMode ? "solid" : "outset",
                  borderColor: isVibeMode ? "#00ff41" : "#008000",
                  padding: "8px 10px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                  display: "block",
                  textDecoration: "none",
                  height: "32px",
                  lineHeight: "16px",
                  transition: "all 0.3s ease",
                  textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
                  boxShadow: isVibeMode ? "0 0 10px rgba(0, 255, 65, 0.3)" : "none",
                }}
              >
                {isVibeMode ? "🎯 TRADE NOW" : "TRADE NOW"}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: isVibeMode ? "linear-gradient(135deg, #1a1a1a, #2d2d2d)" : "#c0c0c0",
          color: isVibeMode ? "#00ff41" : "#000000",
          textAlign: "center",
          padding: "20px",
          marginTop: "25px",
          borderWidth: "2px",
          borderStyle: isVibeMode ? "solid" : "inset",
          borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
          fontSize: "12px",
          textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
          position: "relative",
          zIndex: 2,
        }}
      >
        <strong>
          {isVibeMode ? "🛸" : ""} Conspiracy Prediction Exchange v2.0 {isVibeMode ? "🛸" : ""}
        </strong>
        <br />
        Copyright © 2001 - All Rights Reserved
        <br />
        <em>
          {isVibeMode ? "✨" : ""} "The truth is out there... and it's profitable" {isVibeMode ? "✨" : ""}
        </em>
        <br />
        <br />
        <a
          href="/about"
          style={{ color: isVibeMode ? "#ff00ff" : "#0000ff", textDecoration: isVibeMode ? "none" : "underline" }}
        >
          About
        </a>{" "}
        |{" "}
        <a
          href="/rules"
          style={{ color: isVibeMode ? "#ff00ff" : "#0000ff", textDecoration: isVibeMode ? "none" : "underline" }}
        >
          Rules
        </a>{" "}
        |{" "}
        <a
          href="/contact"
          style={{ color: isVibeMode ? "#ff00ff" : "#0000ff", textDecoration: isVibeMode ? "none" : "underline" }}
        >
          Contact
        </a>{" "}
        |{" "}
        <a
          href="/disclaimer"
          style={{ color: isVibeMode ? "#ff00ff" : "#0000ff", textDecoration: isVibeMode ? "none" : "underline" }}
        >
          Disclaimer
        </a>
        <br />
        <br />
        <span style={{ fontSize: "10px" }}>
          {isVibeMode ? "💻" : ""} Best viewed with Internet Explorer 6.0 or Netscape 6.0
        </span>
      </div>
    </div>
  )
}
