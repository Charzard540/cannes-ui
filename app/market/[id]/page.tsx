"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

export default function MarketPage() {
  const params = useParams()
  const [betAmount, setBetAmount] = useState("")
  const [betType, setBetType] = useState("YES")
  const [selectedTimeframe, setSelectedTimeframe] = useState("1d")
  const [newPost, setNewPost] = useState("")

  // Mock data for different markets - in real app this would come from API/database
  const marketData = {
    1: {
      title: "[Market Title from Create Form]",
      description: "[Market Description from Create Form - explaining the conspiracy theory and resolution criteria]",
      yesPrice: 0.5,
      noPrice: 0.5,
      volume: 0,
      posts: 0,
      category: "[Category Selected from Create Form]",
      dateCreated: "[Date Market was Created]",
      evidence: [
        "[Evidence Point 1 - Key supporting argument]",
        "[Evidence Point 2 - Historical documentation]",
        "[Evidence Point 3 - Witness testimony or analysis]",
        "[Evidence Point 4 - Official records or reports]",
        "[Evidence Point 5 - Scientific or technical evidence]",
        "[Evidence Point 6 - Additional supporting material]",
      ],
      recentPosts: [
        {
          author: "[Username]",
          time: "[Time ago]",
          content: "[User comment about the conspiracy theory and their trading position]",
        },
        {
          author: "[Username]",
          time: "[Time ago]",
          content: "[User response or counterargument to previous posts]",
        },
        {
          author: "[Username]",
          time: "[Time ago]",
          content: "[User sharing new evidence or analysis related to the market]",
        },
        {
          author: "[Username]",
          time: "[Time ago]",
          content: "[User discussing market trends and price movements]",
        },
      ],
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
      evidence: [
        "[Alternative Evidence Point 1]",
        "[Alternative Evidence Point 2]",
        "[Alternative Evidence Point 3]",
        "[Alternative Evidence Point 4]",
        "[Alternative Evidence Point 5]",
        "[Alternative Evidence Point 6]",
      ],
    },
  }

  const market = marketData[params.id] || marketData[1]

  const handleBetSubmit = (e) => {
    e.preventDefault()
    if (!betAmount || Number.parseFloat(betAmount) <= 0) {
      alert("Please enter a valid bet amount!")
      return
    }
    alert(`Bet placed: $${betAmount} on ${betType}`)
    setBetAmount("")
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
          margin-top: 10px;
        }

        .bet-button:hover {
          border: 2px inset #008000;
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

        .evidence-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .evidence-item {
          background-color: #ffffff;
          border: 1px solid #000000;
          padding: 8px;
          margin-bottom: 5px;
          font-size: 12px;
        }

        .evidence-item:before {
          content: "📋 ";
          margin-right: 5px;
        }

        .post {
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

        .reply-form {
          background-color: #ffff99;
          border: 2px solid #000000;
          padding: 10px;
          margin-top: 15px;
        }

        .reply-textarea {
          width: 100%;
          height: 60px;
          padding: 5px;
          border: 2px inset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
          font-size: 12px;
          resize: vertical;
        }

        .reply-button {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 5px 10px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 5px;
          font-size: 11px;
        }

        .reply-button:hover {
          border: 2px inset #c0c0c0;
        }

        .potential-payout {
          background-color: #e0ffe0;
          border: 1px solid #008000;
          padding: 8px;
          margin-top: 10px;
          font-size: 11px;
          text-align: center;
        }

        .warning-text {
          background-color: #ffe0e0;
          border: 1px solid #ff0000;
          padding: 5px;
          margin-top: 5px;
          font-size: 10px;
          text-align: center;
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
      `}</style>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>CONSPIRACY MARKET DETAILS</h2>
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
          <div className="market-description">{market.description}</div>

          <div className="price-display">
            <div className="price-box">
              <div style={{ fontSize: "11px" }}>YES</div>
              <div className="price-yes" style={{ fontSize: "18px" }}>
                ${market.yesPrice.toFixed(2)}
              </div>
              <div style={{ fontSize: "10px" }}>Conspiracy TRUE</div>
            </div>
            <div className="price-box">
              <div style={{ fontSize: "11px" }}>NO</div>
              <div className="price-no" style={{ fontSize: "18px" }}>
                ${market.noPrice.toFixed(2)}
              </div>
              <div style={{ fontSize: "10px" }}>Official Story TRUE</div>
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
            <form onSubmit={handleBetSubmit}>
              <div className="trading-form">
                <div>
                  <div className="form-group">
                    <label className="form-label">Choose Your Position:</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="position"
                          value="YES"
                          checked={betType === "YES"}
                          onChange={(e) => setBetType(e.target.value)}
                        />
                        <strong style={{ color: "#008000" }}>YES</strong> - Conspiracy Theory is TRUE
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="position"
                          value="NO"
                          checked={betType === "NO"}
                          onChange={(e) => setBetType(e.target.value)}
                        />
                        <strong style={{ color: "#ff0000" }}>NO</strong> - Official Story is TRUE
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Bet Amount (USDC):</label>
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

                  <button type="submit" className="bet-button">
                    💰 PLACE BET
                  </button>
                </div>

                <div>
                  {betAmount && Number.parseFloat(betAmount) > 0 && (
                    <div className="potential-payout">
                      <strong>Potential Payout:</strong>
                      <br />$
                      {(Number.parseFloat(betAmount) / (betType === "YES" ? market.yesPrice : market.noPrice)).toFixed(
                        2,
                      )}
                      <br />
                      <small>
                        Profit: $
                        {(
                          Number.parseFloat(betAmount) / (betType === "YES" ? market.yesPrice : market.noPrice) -
                          Number.parseFloat(betAmount)
                        ).toFixed(2)}
                      </small>
                    </div>
                  )}
                </div>
              </div>
            </form>
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

        {/* Evidence Section */}
        <div className="section">
          <div className="section-header">⚖️ HOW TO RESOLVE THIS MARKET</div>
          <div className="section-content">
            <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
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
      </div>
    </div>
  )
}
