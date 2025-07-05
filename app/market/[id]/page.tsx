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
          font-family: Verdana, Arial, sans-serif;
          background: linear-gradient(to bottom, #e6e6fa 0%, #d3d3d3 100%);
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }

        .header {
          background: linear-gradient(to bottom, #4169e1 0%, #191970 100%);
          color: white;
          padding: 15px;
          text-align: center;
          border-bottom: 3px solid #000080;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .nav-bar {
          background: linear-gradient(to bottom, #f0f0f0 0%, #d0d0d0 100%);
          padding: 10px;
          border-bottom: 2px solid #999;
        }

        .nav-bar a {
          color: #000080;
          text-decoration: none;
          font-weight: bold;
          padding: 5px 10px;
          border-radius: 3px;
        }

        .nav-bar a:hover {
          background-color: #e0e0e0;
          text-decoration: underline;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }

        .market-header {
          background: linear-gradient(to bottom, #fffacd 0%, #f0e68c 100%);
          border: 2px solid #daa520;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .price-display {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin: 15px 0;
          padding: 15px;
          background: linear-gradient(to right, #f0f8ff 0%, #e6f3ff 100%);
          border-radius: 6px;
          border: 2px solid #b0c4de;
        }

        .price-box {
          text-align: center;
          padding: 10px 20px;
          border-radius: 5px;
          border: 2px solid;
          background: white;
          min-width: 100px;
        }

        .price-yes {
          border-color: #228b22;
          color: #228b22;
        }

        .price-no {
          border-color: #dc143c;
          color: #dc143c;
        }

        .trading-panel {
          background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
          border: 2px solid #4169e1;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .panel-header {
          background: linear-gradient(to right, #4169e1 0%, #191970 100%);
          color: white;
          padding: 10px 15px;
          margin: -20px -20px 15px -20px;
          border-radius: 6px 6px 0 0;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .form-row {
          margin-bottom: 15px;
        }

        .form-label {
          display: inline-block;
          width: 100px;
          font-weight: bold;
          vertical-align: top;
        }

        .radio-group {
          display: inline-block;
        }

        .radio-option {
          display: block;
          margin-bottom: 5px;
        }

        .amount-input {
          padding: 5px;
          border: 2px solid #ccc;
          border-radius: 3px;
          font-family: monospace;
          font-size: 14px;
        }

        .bet-button {
          background: linear-gradient(to bottom, #228b22 0%, #006400 100%);
          color: white;
          border: 2px solid #006400;
          border-radius: 5px;
          padding: 10px 25px;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .bet-button:hover {
          background: linear-gradient(to bottom, #32cd32 0%, #228b22 100%);
        }

        .evidence-panel {
          background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
          border: 2px solid #2e8b57;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .discussion-panel {
          background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
          border: 2px solid #8b4513;
          border-radius: 8px;
          padding: 20px;
        }

        .post {
          background: #f8f8f8;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 10px;
        }

        .post-author {
          color: #000080;
          font-weight: bold;
        }

        .post-time {
          color: #666;
          font-size: 11px;
        }

        .reply-area {
          background: linear-gradient(to bottom, #fffacd 0%, #f0e68c 100%);
          border: 1px solid #daa520;
          border-radius: 4px;
          padding: 15px;
          margin-top: 15px;
        }

        .reply-textarea {
          width: 100%;
          height: 80px;
          padding: 5px;
          border: 2px solid #ccc;
          border-radius: 3px;
          font-family: Verdana, Arial, sans-serif;
          font-size: 11px;
          resize: vertical;
        }

        .reply-button {
          background: linear-gradient(to bottom, #4169e1 0%, #191970 100%);
          color: white;
          border: 2px solid #000080;
          border-radius: 4px;
          padding: 6px 15px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
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
            <textarea
              className="reply-textarea"
              placeholder="Enter your thoughts on this conspiracy theory..."
            ></textarea>
            <button className="reply-button">📝 POST REPLY</button>
          </div>
        </div>
      </div>
    </div>
  )
}
