"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

export default function MarketPage() {
  const params = useParams()
  const [betAmount, setBetAmount] = useState("")
  const [fundAmount, setFundAmount] = useState("")
  const [betType, setBetType] = useState("YES")
  const [selectedTimeframe, setSelectedTimeframe] = useState("1d")
  const [newPost, setNewPost] = useState("")

  // Mock data for different markets - in real app this would come from API/database
  const marketData = {
    1: {
      title: "Apollo Moon Landing: Real Achievement vs Hollywood Hoax",
      description:
        "Did NASA really land astronauts on the moon in 1969, or was it an elaborate film production staged to win the Space Race against the Soviet Union?",
      yesPrice: 0.11,
      noPrice: 0.89,
      volume: 8930,
      posts: 1203,
      category: "Space & UFOs",
      dateCreated: "February 8, 2024",
    },
    2: {
      title: "[Alternative Market Title]",
      description: "[Alternative Market Description]",
      yesPrice: 0.5,
      noPrice: 0.5,
      volume: 0,
      posts: 0,
      category: "[Alternative Category]",
      dateCreated: "[Alternative Date]",
    },
  }

  // Mock resolution mechanisms data
  const resolutionMechanisms = [
    {
      id: 1,
      name: "NASA Archive Document Release",
      description:
        "Market resolves YES if NASA releases classified documents that confirm the moon landing was staged. Market resolves NO if documents confirm authentic lunar missions or no new evidence emerges by December 2025.",
      type: "Government Document Release",
      votes: 23,
    },
    {
      id: 2,
      name: "Independent Lunar Probe",
      description:
        "A probe is sent to the moon to the coordinates of the supposed 1969 lunar landing. It searches for evidence including the flag, debris, or footprints.",
      type: "Scientific Analysis",
      votes: 18,
    },
    {
      id: 3,
      name: "Lunar Optical Satellite",
      description:
        "Independent Satellite captures images of the landing site and returns conclusive images.",
      type: "Scientific Analysis",
      votes: 12,
    },
  ]

  const market = marketData[params.id] || marketData[1]

  const handleBuyYes = () => {
    if (!betAmount || Number.parseFloat(betAmount) <= 0) {
      alert("Please enter a valid amount!")
      return
    }
    alert(`Bought YES shares: $${betAmount}`)
    setBetAmount("")
  }

  const handleBuyNo = () => {
    if (!betAmount || Number.parseFloat(betAmount) <= 0) {
      alert("Please enter a valid amount!")
      return
    }
    alert(`Bought NO shares: $${betAmount}`)
    setBetAmount("")
  }

  const handleSellYes = () => {
    alert("Sell YES functionality coming soon!")
  }

  const handleSellNo = () => {
    alert("Sell NO functionality coming soon!")
  }

  const handleFundMarket = (e) => {
    e.preventDefault()
    if (!fundAmount || Number.parseFloat(fundAmount) <= 0) {
      alert("Please enter a valid fund amount!")
      return
    }
    alert(`Market funded with: $${fundAmount}`)
    setFundAmount("")
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (!newPost.trim()) {
      alert("Please enter a message!")
      return
    }
    alert("Post submitted!")
    setNewPost("")
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
          padding: 10px;
          text-align: center;
          border: 3px outset #c0c0c0;
        }

        .nav-bar {
          background-color: #c0c0c0;
          padding: 8px;
          border: 2px inset #c0c0c0;
        }

        .nav-bar a {
          color: #0000ff;
          text-decoration: underline;
          font-weight: normal;
          padding: 2px 5px;
          font-size: 12px;
        }

        .nav-bar a:hover {
          color: #ff0000;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 10px;
          background-color: #ffffff;
          border: 2px inset #c0c0c0;
        }

        .market-header {
          background-color: #ffff99;
          border: 2px solid #000000;
          padding: 15px;
          margin-bottom: 15px;
        }

        .market-title {
          font-size: 18px;
          font-weight: bold;
          color: #000080;
          margin-bottom: 10px;
        }

        .market-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          margin-bottom: 10px;
          color: #000000;
        }

        .market-description {
          font-size: 12px;
          line-height: 1.4;
          margin: 10px 0;
          color: #000000;
        }

        .price-display {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 15px 0;
          padding: 10px;
          background-color: #e0e0e0;
          border: 2px inset #c0c0c0;
        }

        .price-box {
          text-align: center;
          padding: 8px 15px;
          border: 2px outset #c0c0c0;
          background-color: #ffffff;
          min-width: 80px;
        }

        .price-yes {
          color: #008000;
          font-weight: bold;
        }

        .price-no {
          color: #ff0000;
          font-weight: bold;
        }

        .stats-row {
          display: flex;
          justify-content: space-around;
          font-size: 11px;
          color: #000000;
          background-color: #f0f0f0;
          border: 1px solid #000000;
          padding: 5px;
        }

        .section {
          background-color: #f0f0f0;
          border: 2px outset #c0c0c0;
          margin-bottom: 15px;
        }

        .section-header {
          background-color: #008000;
          color: #ffffff;
          padding: 8px;
          font-weight: bold;
          font-size: 14px;
          border-bottom: 2px solid #000000;
        }

        .section-content {
          padding: 15px;
          background-color: #ffffff;
        }

        .trading-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          align-items: start;
        }

        .form-group {
          margin-bottom: 10px;
        }

        .form-label {
          display: block;
          font-weight: bold;
          font-size: 12px;
          margin-bottom: 5px;
          color: #000080;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
        }

        .amount-input {
          padding: 5px;
          border: 2px inset #c0c0c0;
          font-family: "Courier New", monospace;
          font-size: 12px;
          width: 120px;
        }

        .bet-button {
          background-color: #008000;
          color: #ffffff;
          border: 2px outset #008000;
          padding: 8px 15px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
          margin: 5px;
        }

        .bet-button:hover {
          border: 2px inset #008000;
        }

        .sell-button {
          background-color: #ff0000;
          color: #ffffff;
          border: 2px outset #ff0000;
        }

        .sell-button:hover {
          border: 2px inset #ff0000;
        }

        .fund-button {
          background-color: #0000ff;
          color: #ffffff;
          border: 2px outset #0000ff;
          padding: 8px 15px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
          margin-top: 10px;
        }

        .fund-button:hover {
          border: 2px inset #0000ff;
        }

        .chart-container {
          background-color: #ffffff;
          border: 2px inset #c0c0c0;
          padding: 10px;
          margin-bottom: 10px;
        }

        .timeframe-buttons {
          display: flex;
          gap: 5px;
          margin-bottom: 10px;
        }

        .timeframe-btn {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 3px 8px;
          font-size: 10px;
          cursor: pointer;
          font-weight: bold;
        }

        .timeframe-btn:hover {
          border: 2px inset #c0c0c0;
        }

        .timeframe-btn.active {
          background-color: #000080;
          color: #ffffff;
          border: 2px inset #c0c0c0;
        }

        .chart-placeholder {
          width: 100%;
          height: 200px;
          background-color: #f8f8f8;
          border: 1px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #666666;
        }

        .resolution-button {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 10px 20px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
          font-family: "Times New Roman", Times, serif;
        }

        .resolution-button:hover {
          border: 2px inset #c0c0c0;
        }

        .vote-button {
          background-color: #008000;
          color: #ffffff;
        }

        .create-button {
          background-color: #ff8000;
          color: #ffffff;
        }

        .resolution-card {
          background-color: #ffffff;
          border: 1px solid #000000;
          padding: 10px;
          margin-bottom: 10px;
        }

        .resolution-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          padding-bottom: 5px;
          border-bottom: 1px solid #cccccc;
        }

        .resolution-card-title {
          font-weight: bold;
          font-size: 13px;
          color: #0000ff;
        }

        .resolution-card-description {
          font-size: 11px;
          line-height: 1.4;
          margin-bottom: 8px;
          color: #000000;
        }

        .resolution-card-meta {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #666666;
        }

        .view-more-button {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 5px 15px;
          font-size: 11px;
          cursor: pointer;
          margin: 10px 0 15px 0;
          font-weight: bold;
        }

        .view-more-button:hover {
          border: 2px inset #c0c0c0;
        }

        .forum-form {
          margin-top: 15px;
          padding: 10px;
          background-color: #f8f8f8;
          border: 1px solid #cccccc;
        }

        .forum-textarea {
          width: 100%;
          height: 80px;
          padding: 5px;
          border: 1px solid #000000;
          font-family: "Times New Roman", Times, serif;
          font-size: 12px;
          resize: vertical;
        }

        .forum-button {
          background-color: #e0e0e0;
          border: 1px solid #000000;
          padding: 5px 15px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 8px;
          font-size: 11px;
        }

        .forum-button:hover {
          background-color: #d0d0d0;
        }

        .forum-post {
          background-color: #ffffff;
          border: 1px solid #000000;
          padding: 10px;
          margin-bottom: 10px;
        }

        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }

        .post-author {
          color: #0000ff;
          font-weight: bold;
          font-size: 12px;
        }

        .post-time {
          color: #808080;
          font-size: 10px;
        }

        .post-content {
          font-size: 11px;
          line-height: 1.4;
          color: #000000;
        }

        .button-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
          margin-top: 10px;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>MARKET DETAILS</h2>
        <div style={{ fontSize: "12px", fontStyle: "italic", marginTop: "5px" }}>
          Trade on the Truth Behind History's Mysteries
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">← BACK TO MARKETS</a>
        <a href="/markets">ALL MARKETS</a>
        <a href="/portfolio">MY PORTFOLIO</a>
        <a href="/forum">FORUM</a>
        <a href="/connect">CONNECT WALLET</a>
      </div>

      <div className="container">
        {/* Market Header */}
        <div className="market-header">
          <div className="market-title">{market.title}</div>
          <div className="market-meta">
            <span>
              <strong>Category:</strong> {market.category}
            </span>
            <span>
              <strong>Created:</strong> {market.dateCreated}
            </span>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "15px" }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flex: 1 }}>
              <div>
                <div className="form-group">
                  <label className="form-label">Fund This Market:</label>
                  <form onSubmit={handleFundMarket} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>$</span>
                    <input
                      type="number"
                      className="amount-input"
                      value={fundAmount}
                      onChange={(e) => setFundAmount(e.target.value)}
                      placeholder="0.00"
                      min="0.01"
                      step="0.01"
                    />
                    <button type="submit" className="fund-button">
                      💰 FUND
                    </button>
                  </form>
                  <div style={{ fontSize: "10px", color: "#666666", marginTop: "5px" }}>
                    Connect wallet to fund market
                  </div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div className="market-description">{market.description}</div>
              </div>
            </div>
            <div style={{ marginLeft: "20px", minWidth: "150px" }}>
              <div
                style={{
                  width: "150px",
                  height: "100px",
                  border: "2px inset #c0c0c0",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  color: "#666666",
                  textAlign: "center",
                }}
              >
                [Market Image]
                <br />
                <small>Upload evidence photo</small>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <span>
              <strong>24h Volume:</strong> ${market.volume.toLocaleString()}
            </span>
            <span>
              <strong>Total Posts:</strong> {market.posts}
            </span>
            <span>
              <strong>Market ID:</strong> #{params.id}
            </span>
          </div>
        </div>

        {/* Trading Section */}
        <div className="section">
          <div className="section-header">🎯 PLACE YOUR BET</div>
          <div className="section-content">
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              {/* YES Section */}
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: "14px", fontWeight: "bold", color: "#008000", marginBottom: "5px" }}>
                  YES - Moon Landing was FAKE
                </div>
                <div style={{ fontSize: "18px", fontWeight: "bold", color: "#008000", marginBottom: "10px" }}>
                  ${market.yesPrice.toFixed(2)}
                </div>
                <div className="form-group">
                  <label className="form-label">Amount (USDC):</label>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>$</span>
                  <input
                    type="number"
                    className="amount-input"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <button className="bet-button" onClick={handleBuyYes}>
                    BUY YES
                  </button>
                  <button className="bet-button sell-button" onClick={handleSellYes}>
                    SELL YES
                  </button>
                </div>
              </div>

              {/* NO Section */}
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: "14px", fontWeight: "bold", color: "#ff0000", marginBottom: "5px" }}>
                  NO - Moon Landing was REAL
                </div>
                <div style={{ fontSize: "18px", fontWeight: "bold", color: "#ff0000", marginBottom: "10px" }}>
                  ${market.noPrice.toFixed(2)}
                </div>
                <div className="form-group">
                  <label className="form-label">Amount (USDC):</label>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>$</span>
                  <input
                    type="number"
                    className="amount-input"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <button className="bet-button" onClick={handleBuyNo}>
                    BUY NO
                  </button>
                  <button className="bet-button sell-button" onClick={handleSellNo}>
                    SELL NO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div className="section">
          <div className="section-header">📈 PRICE CHART</div>
          <div className="section-content">
            <div className="chart-container">
              <div className="timeframe-buttons">
                {["1hr", "6hr", "1d", "1w", "1m"].map((timeframe) => (
                  <button
                    key={timeframe}
                    className={`timeframe-btn ${selectedTimeframe === timeframe ? "active" : ""}`}
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="chart-placeholder">
                <div style={{ textAlign: "center" }}>
                  <strong>PRICE CHART - {selectedTimeframe.toUpperCase()}</strong>
                  <br />
                  <br />📊 Trading activity for the last {selectedTimeframe}
                  <br />
                  <small>(Interactive chart would display here)</small>
                  <br />
                  <br />
                  <div style={{ fontSize: "10px", color: "#000080" }}>
                    Current Spread: ${Math.abs(market.yesPrice - market.noPrice).toFixed(2)} | Volume: $
                    {market.volume.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resolution Mechanisms */}
        <div className="section">
          <div className="section-header">⚖️ HOW TO RESOLVE THIS MARKET</div>
          <div className="section-content">
            {/* Resolution Mechanism Cards */}
            {resolutionMechanisms.map((mechanism) => (
              <div key={mechanism.id} className="resolution-card">
                <div className="resolution-card-header">
                  <div className="resolution-card-title">{mechanism.name}</div>
                </div>
                <div className="resolution-card-content">
                  <div className="resolution-card-description">{mechanism.description}</div>
                  <div className="resolution-card-meta">
                    <span>
                      <strong>Type:</strong> {mechanism.type}
                    </span>
                    <span>
                      <strong>Votes:</strong> {mechanism.votes}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <button className="view-more-button" onClick={() => alert("View more resolution mechanisms")}>
              View More
            </button>

            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                marginTop: "15px",
                paddingTop: "15px",
                borderTop: "1px solid #cccccc",
              }}
            >
              <button
                className="resolution-button vote-button"
                onClick={() => alert("Vote functionality coming soon!")}
              >
                🗳️ VOTE
              </button>
              <button
                className="resolution-button create-button"
                onClick={() => (window.location.href = `/resolution/${params.id}`)}
              >
                ⚙️ CREATE A RESOLUTION MECHANISM
              </button>
            </div>
          </div>
        </div>

        {/* Forum Section */}
        <div className="section">
          <div className="section-header">📋 FORUM</div>
          <div className="section-content">
            {/* Recent Posts */}
            <div className="forum-post">
              <div className="post-header">
                <span className="post-author">SpaceSkeptic42</span>
                <span className="post-time">2 minutes ago</span>
              </div>
              <div className="post-content">
                The flag waving in the "lunar wind" is the smoking gun. There's no atmosphere on the moon, so how could
                the flag move like that? Clear evidence of studio lighting and fans.
              </div>
            </div>

            <div className="forum-post">
              <div className="post-header">
                <span className="post-author">ApolloBeliever</span>
                <span className="post-time">15 minutes ago</span>
              </div>
              <div className="post-content">
                The retroreflectors placed on the moon are still being used by observatories today. You can't fake that
                kind of evidence. I'm betting NO on this one - the landing was real.
              </div>
            </div>

            <div className="forum-post">
              <div className="post-header">
                <span className="post-author">FilmAnalyst99</span>
                <span className="post-time">1 hour ago</span>
              </div>
              <div className="post-content">
                Stanley Kubrick's 2001: A Space Odyssey came out in 1968. The technology to fake the moon landing
                footage existed, and Kubrick had the skills to pull it off. Coincidence?
              </div>
            </div>

            {/* Post Form */}
            <div className="forum-form">
              <form onSubmit={handlePostSubmit}>
                <div className="form-group">
                  <label className="form-label">Add your comment:</label>
                  <textarea
                    className="forum-textarea"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your thoughts about the moon landing evidence..."
                    required
                  />
                </div>
                <button type="submit" className="forum-button">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
