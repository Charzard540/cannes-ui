"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

export default function MarketPage() {
  const params = useParams()
  const [betAmount, setBetAmount] = useState("")
  const [betType, setBetType] = useState("YES")

  const marketData = {
    1: {
      title: "JFK Assassination: Lone Gunman vs Multiple Shooters",
      description:
        "Was Lee Harvey Oswald acting alone, or was there a larger conspiracy involving multiple shooters, the CIA, the Mafia, or other government agencies?",
      yesPrice: 0.34,
      noPrice: 0.66,
      volume: 15420,
      posts: 847,
      category: "Government & Politics",
      evidence: [
        "Magic bullet theory inconsistencies",
        "Witness testimony of shots from grassy knoll",
        "Zapruder film frame analysis",
        "Oswald's connections to intelligence agencies",
      ],
    },
  }

  const market = marketData[1]

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
          max-width: 800px;
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

        .price-display {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 10px 0;
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
        }

        .price-no {
          color: #ff0000;
        }

        .trading-panel {
          background-color: #f0f0f0;
          border: 2px inset #c0c0c0;
          padding: 15px;
          margin-bottom: 15px;
        }

        .panel-header {
          background-color: #000080;
          color: #ffffff;
          padding: 5px 10px;
          margin: -15px -15px 10px -15px;
          font-weight: bold;
          border-bottom: 2px solid #000000;
        }

        .form-row {
          margin-bottom: 10px;
        }

        .form-label {
          display: inline-block;
          width: 80px;
          font-weight: bold;
          vertical-align: top;
        }

        .radio-group {
          display: inline-block;
        }

        .radio-option {
          display: block;
          margin-bottom: 3px;
          font-size: 12px;
        }

        .amount-input {
          padding: 2px;
          border: 2px inset #c0c0c0;
          font-family: "Courier New", monospace;
          font-size: 12px;
        }

        .bet-button {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 6px 15px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
        }

        .bet-button:hover {
          border: 2px inset #c0c0c0;
        }

        .evidence-panel {
          background-color: #f0f0f0;
          border: 2px inset #c0c0c0;
          padding: 15px;
          margin-bottom: 15px;
        }

        .discussion-panel {
          background-color: #f0f0f0;
          border: 2px inset #c0c0c0;
          padding: 15px;
        }

        .post {
          background-color: #ffffff;
          border: 1px solid #000000;
          padding: 8px;
          margin-bottom: 8px;
        }

        .post-author {
          color: #0000ff;
          font-weight: bold;
        }

        .post-time {
          color: #808080;
          font-size: 10px;
        }

        .reply-area {
          background-color: #ffff99;
          border: 1px solid #000000;
          padding: 10px;
          margin-top: 10px;
        }

        .reply-textarea {
          width: 100%;
          height: 60px;
          padding: 2px;
          border: 2px inset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
          font-size: 12px;
          resize: none;
        }

        .reply-button {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 4px 10px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 5px;
          font-size: 11px;
        }

        .reply-button:hover {
          border: 2px inset #c0c0c0;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>MARKET DETAILS</h2>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">← BACK TO MARKETS</a>
      </div>

      <div className="container">
        {/* Market Info */}
        <div className="market-header">
          <h1 style={{ margin: "0 0 10px 0", color: "#000080", fontSize: "18px" }}>{market.title}</h1>
          <div style={{ fontSize: "12px", marginBottom: "10px" }}>
            <strong>Category:</strong> {market.category}
          </div>
          <p style={{ fontSize: "12px", lineHeight: "1.4", margin: "10px 0" }}>{market.description}</p>

          <div className="price-display">
            <div className="price-box price-yes">
              <div style={{ fontSize: "11px" }}>YES</div>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>${market.yesPrice.toFixed(2)}</div>
            </div>
            <div className="price-box price-no">
              <div style={{ fontSize: "11px" }}>NO</div>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>${market.noPrice.toFixed(2)}</div>
            </div>
          </div>

          <div style={{ textAlign: "center", fontSize: "11px" }}>
            <strong>Total Volume:</strong> ${market.volume.toLocaleString()} | <strong>Discussion Posts:</strong>{" "}
            {market.posts}
          </div>
        </div>

        {/* Trading Interface */}
        <div className="trading-panel">
          <div className="panel-header">🎯 PLACE YOUR BET</div>

          <form>
            <div className="form-row">
              <span className="form-label">Position:</span>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="position"
                    value="YES"
                    checked={betType === "YES"}
                    onChange={(e) => setBetType(e.target.value)}
                  />{" "}
                  <strong style={{ color: "#228b22" }}>YES</strong> - Conspiracy Theory is TRUE
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="position"
                    value="NO"
                    checked={betType === "NO"}
                    onChange={(e) => setBetType(e.target.value)}
                  />{" "}
                  <strong style={{ color: "#dc143c" }}>NO</strong> - Official Story is TRUE
                </label>
              </div>
            </div>

            <div className="form-row">
              <span className="form-label">Amount:</span>
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>$</span>
              <input
                type="text"
                className="amount-input"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                placeholder="0.00"
                style={{ width: "100px", marginLeft: "5px" }}
              />
            </div>

            <div className="form-row">
              <button type="submit" className="bet-button">
                💰 PLACE BET
              </button>
            </div>
          </form>
        </div>

        {/* Evidence */}
        <div className="evidence-panel">
          <div className="panel-header" style={{ background: "linear-gradient(to right, #2e8b57 0%, #228b22 100%)" }}>
            📋 KEY EVIDENCE & ARGUMENTS
          </div>
          <ul style={{ fontSize: "12px", lineHeight: "1.5" }}>
            {market.evidence.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Discussion */}
        <div className="discussion-panel">
          <div className="panel-header" style={{ background: "linear-gradient(to right, #8b4513 0%, #a0522d 100%)" }}>
            💬 RECENT DISCUSSION ({market.posts} posts)
          </div>

          <div className="post">
            <span className="post-author">ConspiracyKing</span> <span className="post-time">- 5 minutes ago</span>
            <div style={{ fontSize: "11px", marginTop: "5px" }}>
              The ballistics evidence clearly shows multiple shooters. How can anyone still believe the lone gunman
              theory?
            </div>
          </div>

          <div className="post">
            <span className="post-author">SkepticalSam</span> <span className="post-time">- 12 minutes ago</span>
            <div style={{ fontSize: "11px", marginTop: "5px" }}>
              @ConspiracyKing The Warren Commission thoroughly investigated this. Oswald acted alone.
            </div>
          </div>

          <div className="post">
            <span className="post-author">TruthSeeker99</span> <span className="post-time">- 1 hour ago</span>
            <div style={{ fontSize: "11px", marginTop: "5px" }}>
              New documents released under FOIA show CIA involvement. This market is going to flip soon!
            </div>
          </div>

          <div className="reply-area">
            <strong>Post a Reply:</strong>
            <textarea className="reply-textarea" placeholder="Enter your thoughts on this conspiracy theory..." />
            <button className="reply-button">📝 POST REPLY</button>
          </div>
        </div>
      </div>
    </div>
  )
}
