"use client"

export default function MarketsPage() {
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
      title: "Area 51: Alien Technology Reverse Engineering",
      description: "Is the US government reverse engineering alien technology at Area 51?",
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
      title: "Roswell UFO Crash: Cover-up or Weather Balloon?",
      description: "Was the 1947 Roswell incident really a crashed UFO or just a weather balloon?",
      yesPrice: 0.41,
      noPrice: 0.59,
      volume: 9800,
      posts: 734,
      trending: true,
      category: "Space & UFOs",
    },
    {
      id: 10,
      title: "Princess Diana: Accident or Assassination?",
      description: "Was Princess Diana's death in 1997 a tragic accident or planned assassination?",
      yesPrice: 0.27,
      noPrice: 0.73,
      volume: 13450,
      posts: 1089,
      trending: false,
      category: "Government & Politics",
    },
  ]

  return (
    <div className="conspiracy-site">
      <style jsx>{`
        .conspiracy-site {
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

        .conspiracy-site::before {
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

        .header {
          background: linear-gradient(135deg, #000080, #4b0082, #8b008b);
          color: #00ff41;
          padding: 20px;
          text-align: center;
          border: 3px solid #00ff41;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1);
          position: relative;
          z-index: 2;
          animation: headerGlow 3s ease-in-out infinite alternate;
        }

        @keyframes headerGlow {
          0% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1); }
          100% { box-shadow: 0 0 30px rgba(0, 255, 65, 0.8), inset 0 0 30px rgba(0, 255, 65, 0.2); }
        }

        .header h1 {
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

        .header .tagline {
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

        .nav-bar {
          background: linear-gradient(90deg, #2d2d2d, #1a1a1a, #2d2d2d);
          padding: 12px;
          border: 2px solid #00ff41;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .nav-bar a {
          color: #00ff41;
          text-decoration: none;
          font-weight: bold;
          margin: 0 15px;
          font-size: 13px;
          padding: 5px 10px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px #00ff41;
        }

        .nav-bar a:hover {
          color: #ff00ff;
          border: 1px solid #ff00ff;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
          text-shadow: 0 0 10px #ff00ff;
          transform: scale(1.05);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 15px;
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid #00ff41;
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
          position: relative;
          z-index: 2;
          backdrop-filter: blur(10px);
        }

        .page-header {
          background: linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 255, 0.1));
          border: 2px solid #00ff41;
          padding: 15px;
          margin-bottom: 20px;
          font-size: 13px;
          text-align: center;
          color: #00ff41;
          text-shadow: 0 0 5px #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
          animation: welcomeBoxPulse 6s ease-in-out infinite;
        }

        @keyframes welcomeBoxPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(0, 255, 65, 0.3); }
          50% { box-shadow: 0 0 25px rgba(0, 255, 65, 0.6); }
        }

        .stats-bar {
          background: linear-gradient(90deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 255, 0.1), rgba(0, 255, 65, 0.1));
          border: 1px solid #00ff41;
          padding: 8px;
          text-align: center;
          font-size: 11px;
          margin-bottom: 20px;
          color: #00ffff;
          text-shadow: 0 0 3px #00ffff;
          animation: statsGlow 3s ease-in-out infinite alternate;
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
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(75, 0, 130, 0.2));
          border: 2px solid #00ff41;
          padding: 15px;
          display: flex;
          flex-direction: column;
          min-height: 200px;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }

        .market-card:hover {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(255, 0, 255, 0.2));
          border-color: #ff00ff;
          box-shadow: 0 0 25px rgba(255, 0, 255, 0.5);
          transform: translateY(-5px) scale(1.02);
        }

        .trending-badge {
          background: linear-gradient(45deg, #ff0000, #ff6600);
          color: #ffffff;
          padding: 3px 8px;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: 10px;
          right: 10px;
          border: 1px solid #ffffff;
          z-index: 3;
          animation: trendingPulse 2s ease-in-out infinite;
          text-shadow: 0 0 5px #000000;
        }

        @keyframes trendingPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .card-image {
          width: 100%;
          height: 80px;
          object-fit: cover;
          border: 2px solid #00ff41;
          margin-bottom: 10px;
          margin-top: 25px;
          filter: hue-rotate(30deg) saturate(1.2);
          transition: all 0.3s ease;
        }

        .card-image:hover {
          filter: hue-rotate(60deg) saturate(1.5);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }

        .card-category {
          font-size: 10px;
          color: #ff00ff;
          font-style: italic;
          margin-bottom: 6px;
          text-shadow: 0 0 3px #ff00ff;
        }

        .card-title {
          font-size: 15px;
          font-weight: bold;
          color: #00ff41;
          margin-bottom: 10px;
          text-decoration: none;
          line-height: 1.3;
          text-shadow: 0 0 5px #00ff41;
          transition: all 0.3s ease;
        }

        .card-title:hover {
          color: #ff00ff;
          text-shadow: 0 0 10px #ff00ff;
          transform: scale(1.02);
        }

        .card-description {
          font-size: 12px;
          color: #00ffff;
          margin-bottom: 10px;
          line-height: 1.4;
          flex-grow: 1;
          text-shadow: 0 0 3px #00ffff;
        }

        .price-section {
          background: linear-gradient(90deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 0, 0.1));
          border: 1px solid #00ff41;
          padding: 8px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 28px;
          animation: priceGlow 5s ease-in-out infinite alternate;
        }

        @keyframes priceGlow {
          0% { border-color: #00ff41; }
          100% { border-color: #ff00ff; }
        }

        .price-yes {
          color: #00ff00;
          font-weight: bold;
          font-size: 13px;
          text-shadow: 0 0 5px #00ff00;
        }

        .price-no {
          color: #ff0040;
          font-weight: bold;
          font-size: 13px;
          text-shadow: 0 0 5px #ff0040;
        }

        .card-stats {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #00ffff;
          margin-bottom: 12px;
          text-shadow: 0 0 3px #00ffff;
        }

        .trade-button {
          background: linear-gradient(135deg, #8b008b, #4b0082);
          color: #00ff41;
          border: 2px solid #00ff41;
          padding: 8px 10px;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          text-align: center;
          display: block;
          text-decoration: none;
          height: 32px;
          line-height: 16px;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px #00ff41;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }

        .trade-button:hover {
          background: linear-gradient(135deg, #ff00ff, #8b008b);
          border-color: #ff00ff;
          color: #ffffff;
          text-shadow: 0 0 10px #ffffff;
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.6);
          transform: scale(1.05);
        }

        .footer {
          background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
          color: #00ff41;
          text-align: center;
          padding: 20px;
          margin-top: 25px;
          border: 2px solid #00ff41;
          font-size: 12px;
          text-shadow: 0 0 5px #00ff41;
          position: relative;
          z-index: 2;
        }

        .footer a {
          color: #ff00ff;
          text-decoration: none;
          text-shadow: 0 0 5px #ff00ff;
          transition: all 0.3s ease;
        }

        .footer a:hover {
          color: #00ffff;
          text-shadow: 0 0 10px #00ffff;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .markets-grid {
            grid-template-columns: 1fr;
          }
          .header h1 {
            font-size: 22px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h1>🛸 CONSPIRACY PREDICTION EXCHANGE 🛸</h1>
        <div className="tagline">✨ Betting on the Truth Behind History's Greatest Mysteries ✨</div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">🏠 HOME</a>
        <a href="/create">➕ CREATE A MARKET</a>
        <a href="/markets">📊 ALL MARKETS</a>
        <a href="/portfolio">💼 VIEW PORTFOLIO</a>
        <a href="/connect">🔗 CONNECT WALLET</a>
      </div>

      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <center>
            <b>🌟 *** ALL CONSPIRACY MARKETS *** 🌟</b>
            <br />
            <br />
            Browse all active prediction markets and place your bets on history's greatest mysteries!
          </center>
        </div>

        {/* Stats */}
        <div className="stats-bar">
          <center>
            <b>📈 *** MARKET STATS *** 📈</b>
            <br />🎯 Total Markets: {allMarkets.length} | 👥 Active Traders: 2,847 | 💰 24h Volume: $156,890
            <br />
            <span style={{ fontSize: "10px" }}>⏰ Last Updated: {new Date().toLocaleString()}</span>
          </center>
        </div>

        {/* Markets Grid */}
        <div className="markets-grid">
          {allMarkets.map((market) => (
            <div key={market.id} className="market-card">
              {market.trending && <div className="trending-badge">🔥 HOT</div>}

              {market.id === 2 && <img src="/moon-landing.jpg" alt="Moon Landing" className="card-image" />}

              <div className="card-category">📁 {market.category}</div>
              <a href={`/market/${market.id}`} className="card-title">
                {market.title}
              </a>
              <div className="card-description">{market.description}</div>

              <div className="price-section">
                <div className="price-yes">✅ YES: ${market.yesPrice.toFixed(2)}</div>
                <div className="price-no">❌ NO: ${market.noPrice.toFixed(2)}</div>
              </div>

              <div className="card-stats">
                <span>💰 ${market.volume.toLocaleString()}</span>
                <span>💬 {market.posts}</span>
              </div>

              <a href={`/trade/${market.id}`} className="trade-button">
                🎯 TRADE NOW
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <strong>🛸 Conspiracy Prediction Exchange v2.0 🛸</strong>
        <br />
        Copyright © 2001 - All Rights Reserved
        <br />
        <em>✨ "The truth is out there... and it's profitable" ✨</em>
        <br />
        <br />
        <a href="/about">About</a> | <a href="/rules">Rules</a> | <a href="/contact">Contact</a> |{" "}
        <a href="/disclaimer">Disclaimer</a>
        <br />
        <br />
        <span style={{ fontSize: "10px" }}>💻 Best viewed with Internet Explorer 6.0 or Netscape 6.0</span>
      </div>
    </div>
  )
}
