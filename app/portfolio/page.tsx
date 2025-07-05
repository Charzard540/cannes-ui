"use client"

import { useState } from "react"

export default function Portfolio() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  // Mock data for open positions
  const openPositions = [
    {
      id: 1,
      market: "Area 51: Alien Technology Reverse Engineering",
      position: "YES",
      shares: 150,
      avgPrice: 0.65,
      currentPrice: 0.72,
      value: 108.0,
      pnl: 10.5,
      pnlPercent: 10.77,
    },
    {
      id: 2,
      market: "The Moon Landing: Real or Fake?",
      position: "NO",
      shares: 200,
      avgPrice: 0.45,
      currentPrice: 0.38,
      value: 76.0,
      pnl: -14.0,
      pnlPercent: -15.56,
    },
    {
      id: 3,
      market: "JFK Assassination: Lone Gunman vs Multiple Shooters",
      position: "YES",
      shares: 75,
      avgPrice: 0.8,
      currentPrice: 0.85,
      value: 63.75,
      pnl: 3.75,
      pnlPercent: 6.25,
    },
  ]

  const totalValue = openPositions.reduce((sum, pos) => sum + pos.value, 0)
  const totalPnL = openPositions.reduce((sum, pos) => sum + pos.pnl, 0)

  const connectWallet = () => {
    // Mock wallet connection
    setIsConnected(true)
    setWalletAddress("0x1234...5678")
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  return (
    <div className="conspiracy-site">
      <style jsx>{`
        .conspiracy-site {
          font-family: "Times New Roman", Times, serif;
          background-image: url('/pyramids.jpeg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
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

        .section-header {
          background-color: #008000;
          color: #ffffff;
          padding: 8px;
          font-weight: bold;
          font-size: 14px;
          border: 2px outset #c0c0c0;
          margin-bottom: 0;
        }

        .section-content {
          background-color: #f0f0f0;
          border: 2px inset #c0c0c0;
          border-top: none;
          padding: 15px;
          margin-bottom: 20px;
        }

        .wallet-box {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
          padding: 15px;
          text-align: center;
          margin-bottom: 15px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
          margin-bottom: 20px;
        }

        .stat-card {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
          padding: 12px;
          text-align: center;
        }

        .stat-title {
          font-size: 12px;
          color: #000080;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: bold;
          color: #000000;
        }

        .stat-value.positive {
          color: #008000;
        }

        .stat-value.negative {
          color: #ff0000;
        }

        .positions-table {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
          width: 100%;
          border-collapse: collapse;
        }

        .positions-table th {
          background-color: #c0c0c0;
          border: 1px solid #000000;
          padding: 8px;
          font-size: 11px;
          font-weight: bold;
          text-align: left;
        }

        .positions-table td {
          border: 1px solid #000000;
          padding: 8px;
          font-size: 11px;
          vertical-align: top;
        }

        .positions-table tr:nth-child(even) {
          background-color: #f8f8f8;
        }

        .position-badge {
          padding: 2px 6px;
          font-size: 10px;
          font-weight: bold;
          border: 1px solid #000000;
        }

        .position-yes {
          background-color: #90EE90;
          color: #006400;
        }

        .position-no {
          background-color: #FFB6C1;
          color: #8B0000;
        }

        .button {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          margin: 2px;
        }

        .button:hover {
          border: 2px inset #c0c0c0;
        }

        .button-primary {
          background-color: #0000ff;
          color: #ffffff;
        }

        .activity-item {
          background-color: #ffffff;
          border: 1px solid #c0c0c0;
          padding: 10px;
          margin-bottom: 8px;
          font-size: 11px;
        }

        .activity-time {
          color: #666666;
          font-style: italic;
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

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .positions-table {
            font-size: 10px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h1>CONSPIRACY PREDICTION EXCHANGE</h1>
        <div className="tagline">My Portfolio - Track Your Conspiracy Investments</div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">HOME</a>
        <a href="/create">CREATE A MARKET</a>
        <a href="/markets">ALL MARKETS</a>
        <a href="/portfolio">VIEW PORTFOLIO</a>
        <a href="/connect">CONNECT WALLET</a>
      </div>

      <div className="container">
        {/* Wallet Connection Section */}
        <div className="section-header">💰 WALLET CONNECTION</div>
        <div className="section-content">
          <div className="wallet-box">
            {!isConnected ? (
              <div>
                <p style={{ marginBottom: "10px", fontSize: "12px" }}>
                  <b>*** CONNECT YOUR WALLET TO VIEW PORTFOLIO ***</b>
                </p>
                <p style={{ marginBottom: "15px", fontSize: "11px" }}>
                  Connect your wallet to track your conspiracy theory investments and view your trading history.
                </p>
                <button onClick={connectWallet} className="button button-primary">
                  🔗 CONNECT WALLET
                </button>
              </div>
            ) : (
              <div>
                <p style={{ marginBottom: "5px", fontSize: "11px", color: "#008000" }}>
                  <b>✅ WALLET CONNECTED</b>
                </p>
                <p style={{ marginBottom: "10px", fontSize: "12px", fontFamily: "monospace" }}>{walletAddress}</p>
                <button onClick={disconnectWallet} className="button">
                  🔌 DISCONNECT
                </button>
              </div>
            )}
          </div>
        </div>

        {isConnected && (
          <>
            {/* Portfolio Summary */}
            <div className="section-header">📊 PORTFOLIO SUMMARY</div>
            <div className="section-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-title">TOTAL VALUE</div>
                  <div className="stat-value">${totalValue.toFixed(2)}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-title">TOTAL P&L</div>
                  <div className={`stat-value ${totalPnL >= 0 ? "positive" : "negative"}`}>
                    {totalPnL >= 0 ? "+" : ""}${totalPnL.toFixed(2)}
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-title">OPEN POSITIONS</div>
                  <div className="stat-value">{openPositions.length}</div>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="section-header">📈 OPEN POSITIONS</div>
            <div className="section-content">
              <table className="positions-table">
                <thead>
                  <tr>
                    <th>MARKET</th>
                    <th>POS</th>
                    <th>SHARES</th>
                    <th>AVG PRICE</th>
                    <th>CURRENT</th>
                    <th>VALUE</th>
                    <th>P&L</th>
                    <th>P&L %</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {openPositions.map((position) => (
                    <tr key={position.id}>
                      <td style={{ maxWidth: "150px" }}>
                        <div style={{ fontSize: "10px", lineHeight: "1.2" }}>{position.market}</div>
                      </td>
                      <td>
                        <span
                          className={`position-badge ${position.position === "YES" ? "position-yes" : "position-no"}`}
                        >
                          {position.position}
                        </span>
                      </td>
                      <td>{position.shares}</td>
                      <td>${position.avgPrice.toFixed(2)}</td>
                      <td>${position.currentPrice.toFixed(2)}</td>
                      <td>${position.value.toFixed(2)}</td>
                      <td style={{ color: position.pnl >= 0 ? "#008000" : "#ff0000" }}>
                        {position.pnl >= 0 ? "+" : ""}${position.pnl.toFixed(2)}
                      </td>
                      <td style={{ color: position.pnlPercent >= 0 ? "#008000" : "#ff0000" }}>
                        {position.pnlPercent >= 0 ? "+" : ""}
                        {position.pnlPercent.toFixed(1)}%
                      </td>
                      <td>
                        <button className="button" style={{ fontSize: "9px", padding: "3px 6px" }}>
                          SELL
                        </button>
                        <button className="button" style={{ fontSize: "9px", padding: "3px 6px" }}>
                          VIEW
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Recent Activity */}
            <div className="section-header">🕒 RECENT ACTIVITY</div>
            <div className="section-content">
              <div className="activity-item">
                <div style={{ fontWeight: "bold", marginBottom: "3px" }}>
                  Bought 50 YES shares - Area 51: Alien Technology Reverse Engineering
                </div>
                <div>
                  Price: $0.65 per share | Total: $32.50
                  <span className="activity-time" style={{ float: "right" }}>
                    2 hours ago
                  </span>
                </div>
              </div>
              <div className="activity-item">
                <div style={{ fontWeight: "bold", marginBottom: "3px" }}>
                  Sold 25 NO shares - The Moon Landing: Real or Fake?
                </div>
                <div>
                  Price: $0.45 per share | Total: $11.25
                  <span className="activity-time" style={{ float: "right" }}>
                    1 day ago
                  </span>
                </div>
              </div>
              <div className="activity-item">
                <div style={{ fontWeight: "bold", marginBottom: "3px" }}>
                  Bought 75 YES shares - JFK Assassination: Lone Gunman vs Multiple Shooters
                </div>
                <div>
                  Price: $0.80 per share | Total: $60.00
                  <span className="activity-time" style={{ float: "right" }}>
                    3 days ago
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
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
