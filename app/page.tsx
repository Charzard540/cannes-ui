"use client"

export default function HomePage() {
  const categories = {
    "Government & Politics": [
      {
        id: 1,
        title: "JFK Assassination: Lone Gunman vs Multiple Shooters",
        description: "Was Lee Harvey Oswald acting alone, or was there a larger conspiracy?",
        yesPrice: 0.34,
        noPrice: 0.66,
        volume: 15420,
        posts: 847,
        trending: true,
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
      },
      {
        id: 6,
        title: "Watergate: Nixon's Full Knowledge",
        description: "Did President Nixon know about the Watergate break-in from the beginning?",
        yesPrice: 0.73,
        noPrice: 0.27,
        volume: 8900,
        posts: 445,
        trending: false,
      },
    ],
    "Space & UFOs": [
      {
        id: 2,
        title: "Moon Landing: Real or Hollywood Production?",
        description: "Did NASA really land on the moon in 1969, or was it filmed on a sound stage?",
        yesPrice: 0.89,
        noPrice: 0.11,
        volume: 8930,
        posts: 1203,
        trending: false,
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
      },
      {
        id: 5,
        title: "Roswell Incident: Weather Balloon or UFO Crash",
        description: "What really crashed in Roswell, New Mexico in 1947?",
        yesPrice: 0.41,
        noPrice: 0.59,
        volume: 6780,
        posts: 334,
        trending: false,
      },
    ],
    "Historical Events": [
      {
        id: 7,
        title: "Pearl Harbor: Advance Warning Ignored",
        description: "Did FDR have advance knowledge of the Pearl Harbor attack?",
        yesPrice: 0.29,
        noPrice: 0.71,
        volume: 11200,
        posts: 678,
        trending: false,
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
      },
    ],
  }

  return (
    <div className="conspiracy-site">
      <style jsx>{`
        .conspiracy-site {
          font-family: Verdana, Arial, sans-serif;
          background: linear-gradient(to bottom, #e6e6fa 0%, #d3d3d3 100%);
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }

        .header {
          background: linear-gradient(to bottom, #4169e1 0%, #191970 100%);
          color: white;
          padding: 20px;
          text-align: center;
          border-bottom: 3px solid #000080;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .header h1 {
          margin: 0;
          font-size: 28px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          letter-spacing: 2px;
        }

        .header .tagline {
          font-size: 12px;
          font-style: italic;
          margin-top: 5px;
          opacity: 0.9;
        }

        .nav-bar {
          background: linear-gradient(to bottom, #f0f0f0 0%, #d0d0d0 100%);
          padding: 10px;
          border-bottom: 2px solid #999;
          text-align: center;
        }

        .nav-bar a {
          color: #000080;
          text-decoration: none;
          font-weight: bold;
          margin: 0 15px;
          padding: 5px 10px;
          border-radius: 3px;
          transition: background-color 0.2s;
        }

        .nav-bar a:hover {
          background-color: #e0e0e0;
          text-decoration: underline;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .welcome-box {
          background: linear-gradient(to bottom, #fffacd 0%, #f0e68c 100%);
          border: 2px solid #daa520;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 25px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .stats-bar {
          background: linear-gradient(to bottom, #e0e0e0 0%, #c0c0c0 100%);
          border: 1px solid #999;
          border-radius: 5px;
          padding: 8px;
          text-align: center;
          font-size: 11px;
          margin-bottom: 20px;
        }

        .category-section {
          margin-bottom: 30px;
        }

        .category-header {
          background: linear-gradient(to right, #2e8b57 0%, #228b22 100%);
          color: white;
          padding: 12px 15px;
          border-radius: 6px 6px 0 0;
          font-weight: bold;
          font-size: 14px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          border: 2px solid #006400;
          border-bottom: none;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 15px;
          background: #f8f8f8;
          border: 2px solid #006400;
          border-top: none;
          border-radius: 0 0 6px 6px;
          padding: 15px;
        }

        .market-card {
          background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
          border: 2px solid #ccc;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.1s, box-shadow 0.1s;
          position: relative;
        }

        .market-card:hover {
          transform: translateY(-2px);
          box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
          border-color: #4169e1;
        }

        .trending-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: linear-gradient(to bottom, #ff6347 0%, #dc143c 100%);
          color: white;
          padding: 3px 8px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: bold;
          border: 1px solid #b22222;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }

        .card-title {
          font-size: 14px;
          font-weight: bold;
          color: #000080;
          margin-bottom: 8px;
          text-decoration: none;
        }

        .card-title:hover {
          text-decoration: underline;
        }

        .card-description {
          font-size: 11px;
          color: #333;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .price-section {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding: 8px;
          background: linear-gradient(to right, #f0f8ff 0%, #e6f3ff 100%);
          border-radius: 4px;
          border: 1px solid #b0c4de;
        }

        .price-yes {
          color: #228b22;
          font-weight: bold;
          font-size: 13px;
        }

        .price-no {
          color: #dc143c;
          font-weight: bold;
          font-size: 13px;
        }

        .card-stats {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #666;
          margin-bottom: 10px;
        }

        .trade-button {
          background: linear-gradient(to bottom, #4169e1 0%, #191970 100%);
          color: white;
          border: 2px solid #000080;
          border-radius: 4px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          text-decoration: none;
          text-align: center;
          display: block;
          transition: background 0.2s;
        }

        .trade-button:hover {
          background: linear-gradient(to bottom, #5a7ae6 0%, #2e4bc7 100%);
          text-decoration: none;
          color: white;
        }

        .footer {
          background: linear-gradient(to bottom, #2f4f4f 0%, #1c1c1c 100%);
          color: #ddd;
          text-align: center;
          padding: 20px;
          margin-top: 40px;
          border-top: 3px solid #000;
        }

        .footer a {
          color: #87ceeb;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h1>CONSPIRACY PREDICTION EXCHANGE</h1>
        <div className="tagline">Betting on the Truth Behind History's Greatest Mysteries</div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">HOME</a>
        <a href="/markets">MARKETS</a>
        <a href="/portfolio">MY PORTFOLIO</a>
        <a href="/forum">FORUM</a>
        <a href="/leaderboard">LEADERBOARD</a>
        <a href="/login">LOGIN</a>
      </div>

      <div className="container">
        {/* Welcome Message */}
        <div className="welcome-box">
          <strong>Welcome to the Conspiracy Prediction Exchange!</strong>
          <br />
          <br />
          Put your money where your theories are! Trade shares in historical conspiracy theories and profit from the
          truth. Each market represents a different theory about past events. Buy "YES" if you believe the conspiracy
          theory is true, or "NO" if you think the official story is correct.
        </div>

        {/* Stats */}
        <div className="stats-bar">
          <strong>Live Stats:</strong> Users Online: 1,337 | Active Markets: 42 | 24h Volume: $89,420 | Total Trades:
          156,789
        </div>

        {/* Market Categories */}
        {Object.entries(categories).map(([categoryName, markets]) => (
          <div key={categoryName} className="category-section">
            <div className="category-header">📁 {categoryName.toUpperCase()}</div>
            <div className="cards-container">
              {markets.map((market) => (
                <div key={market.id} className="market-card">
                  {market.trending && <div className="trending-badge">🔥 HOT</div>}

                  <a href={`/market/${market.id}`} className="card-title">
                    {market.title}
                  </a>

                  <div className="card-description">{market.description}</div>

                  <div className="price-section">
                    <div className="price-yes">YES: ${market.yesPrice.toFixed(2)}</div>
                    <div className="price-no">NO: ${market.noPrice.toFixed(2)}</div>
                  </div>

                  <div className="card-stats">
                    <span>💰 Volume: ${market.volume.toLocaleString()}</span>
                    <span>💬 Posts: {market.posts}</span>
                  </div>

                  <a href={`/trade/${market.id}`} className="trade-button">
                    🎯 TRADE NOW
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Recent Activity */}
        <div className="category-section">
          <div className="category-header">📈 RECENT FORUM ACTIVITY</div>
          <div
            style={{
              background: "#f8f8f8",
              border: "2px solid #006400",
              borderTop: "none",
              borderRadius: "0 0 6px 6px",
              padding: "15px",
            }}
          >
            <div
              style={{
                background: "linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%)",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong style={{ color: "#000080" }}>TruthSeeker99</strong> <em>(2 min ago)</em>
              <br />
              <span style={{ fontSize: "11px" }}>
                New evidence in JFK case - Zapruder film analysis reveals inconsistencies...
              </span>
            </div>
            <div
              style={{
                background: "linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%)",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong style={{ color: "#000080" }}>SkepticalSarah</strong> <em>(15 min ago)</em>
              <br />
              <span style={{ fontSize: "11px" }}>Moon landing hoax debunked AGAIN - here's the science...</span>
            </div>
            <div
              style={{
                background: "linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%)",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            >
              <strong style={{ color: "#000080" }}>AlienHunter</strong> <em>(1 hour ago)</em>
              <br />
              <span style={{ fontSize: "11px" }}>
                Area 51 worker comes forward with new testimony about UFO tech...
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <strong>Conspiracy Prediction Exchange v2.0</strong>
        <br />
        Copyright © 2001 - All Rights Reserved
        <br />
        <em>"The truth is out there... and it's profitable"</em>
        <br />
        <br />
        <a href="/about">About</a> | <a href="/rules">Rules</a> | <a href="/contact">Contact</a> |{" "}
        <a href="/disclaimer">Disclaimer</a>
        <br />
        <br />
        <span style={{ fontSize: "10px" }}>Best viewed with Internet Explorer 6.0 or Netscape 6.0</span>
      </div>
    </div>
  )
}
