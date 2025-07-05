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
      {
        id: 9,
        title: "MLK Assassination: FBI Involvement",
        description: "Was the FBI involved in the assassination of Martin Luther King Jr.?",
        yesPrice: 0.42,
        noPrice: 0.58,
        volume: 13200,
        posts: 623,
        trending: true,
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
      {
        id: 10,
        title: "Phoenix Lights: Military Exercise or UFO Fleet",
        description: "Were the 1997 Phoenix Lights a military operation or mass UFO sighting?",
        yesPrice: 0.36,
        noPrice: 0.64,
        volume: 9450,
        posts: 412,
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
      {
        id: 11,
        title: "Lincoln Assassination: Wider Conspiracy",
        description: "Was John Wilkes Booth part of a larger Confederate conspiracy?",
        yesPrice: 0.67,
        noPrice: 0.33,
        volume: 7800,
        posts: 356,
        trending: false,
      },
      {
        id: 12,
        title: "Oklahoma City Bombing: Additional Conspirators",
        description: "Were there additional conspirators beyond Timothy McVeigh and Terry Nichols?",
        yesPrice: 0.31,
        noPrice: 0.69,
        volume: 10500,
        posts: 534,
        trending: true,
      },
    ],
  }

  return (
    <div className="conspiracy-site">
      <style jsx>{`
        .conspiracy-site {
          font-family: "Times New Roman", Times, serif;
          background-color: #c0c0c0;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        .header {
          background-color: #000080;
          color: #ffff00;
          padding: 15px;
          text-align: center;
          border: 3px outset #c0c0c0;
        }

        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }

        .header .tagline {
          font-size: 12px;
          font-style: italic;
          margin-top: 5px;
          color: #ffffff;
        }

        .nav-bar {
          background-color: #c0c0c0;
          padding: 8px;
          border: 2px inset #c0c0c0;
          text-align: center;
        }

        .nav-bar a {
          color: #0000ff;
          text-decoration: underline;
          font-weight: normal;
          margin: 0 10px;
          font-size: 12px;
        }

        .nav-bar a:hover {
          color: #ff0000;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 10px;
          background-color: #ffffff;
          border: 2px inset #c0c0c0;
        }

        .welcome-box {
          background-color: #ffff99;
          border: 2px solid #000000;
          padding: 10px;
          margin-bottom: 15px;
          font-size: 12px;
        }

        .stats-bar {
          background-color: #e0e0e0;
          border: 1px solid #000000;
          padding: 5px;
          text-align: center;
          font-size: 10px;
          margin-bottom: 15px;
        }

        .category-section {
          margin-bottom: 20px;
        }

        .category-header {
          background-color: #008000;
          color: #ffffff;
          padding: 8px;
          font-weight: bold;
          font-size: 14px;
          border: 2px outset #c0c0c0;
        }

        .cards-container {
          background-color: #f0f0f0;
          border: 2px inset #c0c0c0;
          padding: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .market-card {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
          padding: 10px;
        }

        .market-card:hover {
          background-color: #ffffcc;
        }

        .trending-badge {
          background-color: #ff0000;
          color: #ffffff;
          padding: 2px 6px;
          font-size: 10px;
          font-weight: bold;
          float: right;
          border: 1px solid #000000;
        }

        .card-title {
          font-size: 14px;
          font-weight: bold;
          color: #0000ff;
          margin-bottom: 5px;
          text-decoration: underline;
          clear: both;
        }

        .card-title:hover {
          color: #ff0000;
        }

        .card-description {
          font-size: 12px;
          color: #000000;
          margin-bottom: 10px;
        }

        .price-section {
          background-color: #e0e0e0;
          border: 1px solid #000000;
          padding: 5px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }

        .price-yes {
          color: #008000;
          font-weight: bold;
          font-size: 12px;
        }

        .price-no {
          color: #ff0000;
          font-weight: bold;
          font-size: 12px;
        }

        .card-stats {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #000000;
          margin-bottom: 8px;
        }

        .trade-button {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 4px 8px;
          font-size: 11px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          text-align: center;
          display: block;
          text-decoration: none;
        }

        .trade-button:hover {
          border: 2px inset #c0c0c0;
        }

        .footer {
          background-color: #808080;
          color: #ffffff;
          text-align: center;
          padding: 15px;
          margin-top: 20px;
          border: 2px inset #c0c0c0;
          font-size: 11px;
        }

        .footer a {
          color: #ffff00;
          text-decoration: underline;
        }

        .footer a:hover {
          color: #ffffff;
        }

        .blink {
          animation: blink 1s linear infinite;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .cards-container {
            grid-template-columns: 1fr;
          }
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
          <center>
            <b>*** WELCOME TO THE CONSPIRACY PREDICTION EXCHANGE ***</b>
            <br />
            <br />
            <span style={{ color: "red" }}>NEW!</span> Put your money where your theories are! Trade shares in
            historical conspiracy theories and profit from the truth. Each market represents a different theory about
            past events. Buy "YES" if you believe the conspiracy theory is true, or "NO" if you think the official story
            is correct.
            <br />
            <br />
            <span className="blink">*** UPDATED DAILY ***</span>
          </center>
        </div>

        {/* Stats */}
        <div className="stats-bar">
          <center>
            <b>*** LIVE STATS ***</b>
            <br />
            Users Online: 1,337 | Active Markets: 42 | 24h Volume: $89,420 | Total Trades: 156,789
            <br />
            <span style={{ fontSize: "10px" }}>Last Updated: {new Date().toLocaleString()}</span>
          </center>
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
