"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

export default function ConspiracyPage() {
  const params = useParams()
  const [selectedTimeframe, setSelectedTimeframe] = useState("1d")
  const [showResolutionForm, setShowResolutionForm] = useState(false)

  // Mock data for different conspiracies
  const conspiracyData = {
    1: {
      name: "JFK Assassination: Lone Gunman vs Multiple Shooters",
      description:
        "Was Lee Harvey Oswald acting alone, or was there a larger conspiracy involving multiple shooters, the CIA, the Mafia, or other government agencies? This market will resolve based on official government document releases and credible historical evidence.",
      dateCreated: "March 15, 2001",
      forumLink: "/forum/jfk-assassination",
      currentPrice: { yes: 0.34, no: 0.66 },
      volume24h: 15420,
      resolutionCriteria: [
        {
          title: "Official Document Release",
          description:
            "Resolution based on declassified government documents that provide definitive evidence of conspiracy or lone gunman theory.",
          weight: "40%",
        },
        {
          title: "Expert Historical Consensus",
          description:
            "Consensus among at least 3 major historical institutions or assassination research organizations.",
          weight: "35%",
        },
        {
          title: "New Physical Evidence",
          description:
            "Discovery of new ballistic, forensic, or photographic evidence that definitively supports one theory.",
          weight: "25%",
        },
      ],
    },
    2: {
      name: "Moon Landing: Real or Hollywood Production?",
      description:
        "Did NASA really land on the moon in 1969, or was it filmed on a sound stage? This market examines the evidence for and against the Apollo moon landing conspiracy theory.",
      dateCreated: "April 2, 2001",
      forumLink: "/forum/moon-landing",
      currentPrice: { yes: 0.89, no: 0.11 },
      volume24h: 8930,
      resolutionCriteria: [
        {
          title: "NASA Document Analysis",
          description:
            "Comprehensive analysis of NASA's technical documentation and mission records by independent experts.",
          weight: "50%",
        },
        {
          title: "Physical Evidence Verification",
          description:
            "Third-party verification of moon rocks, retroreflectors, and other physical evidence from the missions.",
          weight: "30%",
        },
        {
          title: "Technological Feasibility Study",
          description:
            "Independent assessment of 1960s technology capabilities for both moon landing and film production.",
          weight: "20%",
        },
      ],
    },
  }

  // Mock trading data for the graph
  const generateTradingData = (timeframe) => {
    const dataPoints = {
      "1hr": 12,
      "6hr": 24,
      "1d": 48,
      "1w": 168,
      "1m": 720,
    }

    const points = dataPoints[timeframe] || 48
    const data = []

    for (let i = 0; i < points; i++) {
      data.push({
        time: i,
        yes: 0.34 + (Math.random() - 0.5) * 0.1,
        no: 0.66 + (Math.random() - 0.5) * 0.1,
        volume: Math.floor(Math.random() * 1000) + 500,
      })
    }

    return data
  }

  const conspiracy = conspiracyData[params.id] || conspiracyData[1]
  const tradingData = generateTradingData(selectedTimeframe)

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

        .section {
          margin-bottom: 20px;
          border: 2px outset #c0c0c0;
          background-color: #f0f0f0;
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

        .conspiracy-title {
          font-size: 18px;
          font-weight: bold;
          color: #000080;
          margin-bottom: 10px;
        }

        .conspiracy-description {
          font-size: 12px;
          line-height: 1.4;
          margin-bottom: 15px;
          color: #000000;
        }

        .meta-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #e0e0e0;
          border: 1px solid #000000;
          padding: 8px;
          font-size: 11px;
        }

        .forum-link {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 4px 8px;
          text-decoration: none;
          font-weight: bold;
          font-size: 11px;
        }

        .forum-link:hover {
          border: 2px inset #c0c0c0;
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
          position: relative;
        }

        .price-display {
          display: flex;
          justify-content: space-around;
          background-color: #e0e0e0;
          border: 1px solid #000000;
          padding: 8px;
          margin-top: 10px;
        }

        .price-box {
          text-align: center;
          padding: 5px 10px;
          border: 2px outset #c0c0c0;
          background-color: #ffffff;
        }

        .price-yes {
          color: #008000;
          font-weight: bold;
        }

        .price-no {
          color: #ff0000;
          font-weight: bold;
        }

        .resolution-criteria {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .criteria-card {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
          padding: 10px;
        }

        .criteria-card:hover {
          background-color: #ffffcc;
        }

        .criteria-title {
          font-size: 13px;
          font-weight: bold;
          color: #000080;
          margin-bottom: 5px;
        }

        .criteria-description {
          font-size: 11px;
          color: #000000;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .criteria-weight {
          font-size: 10px;
          font-weight: bold;
          color: #008000;
          background-color: #e0e0e0;
          padding: 2px 5px;
          border: 1px solid #000000;
          display: inline-block;
        }

        .submit-resolution-btn {
          background-color: #ff8000;
          color: #ffffff;
          border: 2px outset #ff8000;
          padding: 8px 15px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
          margin-bottom: 15px;
        }

        .submit-resolution-btn:hover {
          border: 2px inset #ff8000;
        }

        .resolution-form {
          background-color: #ffff99;
          border: 2px solid #000000;
          padding: 15px;
          margin-bottom: 15px;
        }

        .form-group {
          margin-bottom: 10px;
        }

        .form-label {
          display: block;
          font-weight: bold;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .form-input {
          width: 100%;
          padding: 3px;
          border: 2px inset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
          font-size: 11px;
        }

        .form-textarea {
          width: 100%;
          height: 60px;
          padding: 3px;
          border: 2px inset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
          font-size: 11px;
          resize: none;
        }

        .form-buttons {
          display: flex;
          gap: 10px;
        }

        .form-btn {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 5px 10px;
          font-weight: bold;
          cursor: pointer;
          font-size: 11px;
        }

        .form-btn:hover {
          border: 2px inset #c0c0c0;
        }

        .form-btn.primary {
          background-color: #008000;
          color: #ffffff;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>CONSPIRACY DETAILS</h2>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">← BACK TO MARKETS</a>
        <a href="/markets">ALL MARKETS</a>
        <a href="/portfolio">MY PORTFOLIO</a>
      </div>

      <div className="container">
        {/* Section 1: Name, Description, Date Created, Link to Forum */}
        <div className="section">
          <div className="section-header">📋 CONSPIRACY INFORMATION</div>
          <div className="section-content">
            <div className="conspiracy-title">{conspiracy.name}</div>
            <div className="conspiracy-description">{conspiracy.description}</div>
            <div className="meta-info">
              <span>
                <strong>Date Created:</strong> {conspiracy.dateCreated}
              </span>
              <a href={conspiracy.forumLink} className="forum-link">
                💬 DISCUSS IN FORUM
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Graph of Trading Action */}
        <div className="section">
          <div className="section-header">📈 TRADING ACTIVITY</div>
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
                  <br />📊 Trading data for the last {selectedTimeframe}
                  <br />
                  <small>(Chart visualization would display here)</small>
                  <br />
                  <br />
                  <div style={{ fontSize: "10px", color: "#000080" }}>
                    Data Points: {tradingData.length} | Avg Volume:{" "}
                    {Math.floor(tradingData.reduce((sum, d) => sum + d.volume, 0) / tradingData.length)}
                  </div>
                </div>
              </div>
              <div className="price-display">
                <div className="price-box">
                  <div style={{ fontSize: "10px" }}>CURRENT YES</div>
                  <div className="price-yes" style={{ fontSize: "16px" }}>
                    ${conspiracy.currentPrice.yes.toFixed(2)}
                  </div>
                </div>
                <div className="price-box">
                  <div style={{ fontSize: "10px" }}>24H VOLUME</div>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>${conspiracy.volume24h.toLocaleString()}</div>
                </div>
                <div className="price-box">
                  <div style={{ fontSize: "10px" }}>CURRENT NO</div>
                  <div className="price-no" style={{ fontSize: "16px" }}>
                    ${conspiracy.currentPrice.no.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Resolution Mechanism */}
        <div className="section">
          <div className="section-header">⚖️ RESOLUTION MECHANISM</div>
          <div className="section-content">
            <button className="submit-resolution-btn" onClick={() => setShowResolutionForm(!showResolutionForm)}>
              📝 SUBMIT RESOLUTION MECHANISM
            </button>

            {showResolutionForm && (
              <div className="resolution-form">
                <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#000080" }}>
                  Propose New Resolution Criteria
                </h3>
                <div className="form-group">
                  <label className="form-label">Criteria Title:</label>
                  <input type="text" className="form-input" placeholder="Enter criteria title..." />
                </div>
                <div className="form-group">
                  <label className="form-label">Description:</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Describe how this criteria should be evaluated..."
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Suggested Weight (%):</label>
                  <input type="number" className="form-input" placeholder="25" min="1" max="100" />
                </div>
                <div className="form-buttons">
                  <button className="form-btn primary">SUBMIT PROPOSAL</button>
                  <button className="form-btn" onClick={() => setShowResolutionForm(false)}>
                    CANCEL
                  </button>
                </div>
              </div>
            )}

            <h3 style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#000080" }}>Current Resolution Criteria</h3>

            <div className="resolution-criteria">
              {conspiracy.resolutionCriteria.map((criteria, index) => (
                <div key={index} className="criteria-card">
                  <div className="criteria-title">{criteria.title}</div>
                  <div className="criteria-description">{criteria.description}</div>
                  <div className="criteria-weight">Weight: {criteria.weight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
