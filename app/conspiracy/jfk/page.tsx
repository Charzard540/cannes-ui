"use client"

import { useState } from "react"

export default function JFKConspiracyPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1d")
  const [showResolutionForm, setShowResolutionForm] = useState(false)
  const [showFundingForm, setShowFundingForm] = useState(false)
  const [fundingAmount, setFundingAmount] = useState("")

  // JFK Assassination data
  const conspiracyData = {
    name: "JFK Assassination: Lone Gunman vs Multiple Shooters",
    description:
      "Was Lee Harvey Oswald acting alone when he assassinated President John F. Kennedy on November 22, 1963, or was there a larger conspiracy involving multiple shooters, the CIA, the Mafia, or other government agencies? This market examines evidence from the Warren Commission, House Select Committee on Assassinations, and subsequent investigations to determine the truth behind one of America's most controversial historical events.",
    dateCreated: "March 15, 2001",
    forumLink: "/forum/jfk-assassination",
    currentPrice: { yes: 0.34, no: 0.66 },
    volume24h: 15420,
    totalFunding: 89750,
    fundingGoal: 150000,
    contributors: 247,
  }

  // Mock trading data for different timeframes
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
    let baseYes = 0.34
    const baseNo = 0.66

    for (let i = 0; i < points; i++) {
      const yesPrice = Math.max(0.05, Math.min(0.95, baseYes + (Math.random() - 0.5) * 0.08))
      const noPrice = Math.max(0.05, Math.min(0.95, 1 - yesPrice))

      data.push({
        time: i,
        yes: yesPrice,
        no: noPrice,
        volume: Math.floor(Math.random() * 2000) + 500,
      })

      baseYes = yesPrice
    }

    return data
  }

  const tradingData = generateTradingData(selectedTimeframe)

  // Resolution criteria (these would be generated from user submissions)
  const resolutionCriteria = [
    {
      id: 1,
      title: "Official Document Release",
      description:
        "Resolution based on declassified government documents from the CIA, FBI, or other agencies that provide definitive evidence of conspiracy or confirm the lone gunman theory. Documents must be authenticated by at least two independent experts.",
      weight: "40%",
      submittedBy: "HistoryBuff1963",
      votes: 156,
      dateSubmitted: "March 20, 2001",
    },
    {
      id: 2,
      title: "Expert Historical Consensus",
      description:
        "Consensus among at least 5 major historical institutions, assassination research organizations, or peer-reviewed academic studies published in reputable journals. Must represent diverse viewpoints and methodologies.",
      weight: "35%",
      submittedBy: "AcademicResearcher",
      votes: 134,
      dateSubmitted: "March 22, 2001",
    },
    {
      id: 3,
      title: "New Physical Evidence Discovery",
      description:
        "Discovery and verification of new ballistic evidence, forensic analysis, photographic evidence, or witness testimony that definitively supports either the conspiracy or lone gunman theory. Evidence must be verified by independent forensic experts.",
      weight: "25%",
      submittedBy: "ForensicExpert99",
      votes: 98,
      dateSubmitted: "March 25, 2001",
    },
  ]

  const handleFundingSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for pledging $${fundingAmount} to help resolve this conspiracy!`)
    setFundingAmount("")
    setShowFundingForm(false)
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
          padding: 2px 8px;
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
          height: 250px;
          background-color: #f8f8f8;
          border: 1px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #666666;
          position: relative;
          background-image: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                            linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                            linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                            linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .criteria-card {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
          padding: 12px;
        }

        .criteria-card:hover {
          background-color: #ffffcc;
        }

        .criteria-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .criteria-title {
          font-size: 13px;
          font-weight: bold;
          color: #000080;
        }

        .criteria-weight {
          font-size: 10px;
          font-weight: bold;
          color: #008000;
          background-color: #e0e0e0;
          padding: 2px 5px;
          border: 1px solid #000000;
        }

        .criteria-description {
          font-size: 11px;
          color: #000000;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .criteria-meta {
          font-size: 10px;
          color: #666666;
          border-top: 1px solid #cccccc;
          padding-top: 5px;
          display: flex;
          justify-content: space-between;
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

        .funding-section {
          background-color: #fff8dc;
          border: 2px solid #daa520;
          padding: 15px;
          margin-bottom: 15px;
        }

        .funding-progress {
          background-color: #e0e0e0;
          border: 2px inset #c0c0c0;
          height: 20px;
          margin: 10px 0;
          position: relative;
        }

        .funding-bar {
          background-color: #32cd32;
          height: 100%;
          transition: width 0.3s ease;
        }

        .funding-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 10px;
          font-weight: bold;
          color: #000000;
        }

        .funding-stats {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-bottom: 10px;
        }

        .fund-btn {
          background-color: #32cd32;
          color: #ffffff;
          border: 2px outset #32cd32;
          padding: 8px 15px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
        }

        .fund-btn:hover {
          border: 2px inset #32cd32;
        }

        .funding-form {
          background-color: #f0fff0;
          border: 2px solid #32cd32;
          padding: 15px;
          margin-top: 15px;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>JFK ASSASSINATION CONSPIRACY</h2>
        <div style={{ fontSize: "12px", fontStyle: "italic", marginTop: "5px" }}>
          Investigating America's Most Controversial Historical Event
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">← BACK TO MARKETS</a>
        <a href="/markets">ALL MARKETS</a>
        <a href="/portfolio">MY PORTFOLIO</a>
        <a href="/forum">FORUM</a>
        <a href="/login">LOGIN</a>
      </div>

      <div className="container">
        {/* Section 1: Name, Description, Date Created, Link to Forum */}
        <div className="section">
          <div className="section-header">📋 CONSPIRACY INFORMATION</div>
          <div className="section-content">
            <div className="conspiracy-title">{conspiracyData.name}</div>
            <div className="conspiracy-description">{conspiracyData.description}</div>
            <div className="meta-info">
              <span>
                <strong>Date Created:</strong> {conspiracyData.dateCreated}
              </span>
              <a href={conspiracyData.forumLink} className="forum-link">
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
                  <strong style={{ fontSize: "14px", color: "#000080" }}>
                    JFK CONSPIRACY PRICE CHART - {selectedTimeframe.toUpperCase()}
                  </strong>
                  <br />
                  <br />📊 Trading data for the last {selectedTimeframe}
                  <br />
                  <small style={{ color: "#666666" }}>(Interactive chart visualization would display here)</small>
                  <br />
                  <br />
                  <div style={{ fontSize: "10px", color: "#000080" }}>
                    Data Points: {tradingData.length} | Avg Volume:{" "}
                    {Math.floor(tradingData.reduce((sum, d) => sum + d.volume, 0) / tradingData.length)}
                    <br />
                    Current Trend:{" "}
                    {tradingData[tradingData.length - 1]?.yes > tradingData[0]?.yes ? "📈 Rising" : "📉 Falling"}
                  </div>
                </div>
              </div>
              <div className="price-display">
                <div className="price-box">
                  <div style={{ fontSize: "10px" }}>CONSPIRACY TRUE</div>
                  <div className="price-yes" style={{ fontSize: "16px" }}>
                    ${conspiracyData.currentPrice.yes.toFixed(2)}
                  </div>
                </div>
                <div className="price-box">
                  <div style={{ fontSize: "10px" }}>24H VOLUME</div>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                    ${conspiracyData.volume24h.toLocaleString()}
                  </div>
                </div>
                <div className="price-box">
                  <div style={{ fontSize: "10px" }}>OFFICIAL STORY</div>
                  <div className="price-no" style={{ fontSize: "16px" }}>
                    ${conspiracyData.currentPrice.no.toFixed(2)}
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
              📝 SUBMIT RESOLUTION CRITERIA
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

            <h3 style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#000080" }}>
              Current Resolution Criteria (Generated from User Submissions)
            </h3>

            <div className="resolution-criteria">
              {resolutionCriteria.map((criteria) => (
                <div key={criteria.id} className="criteria-card">
                  <div className="criteria-header">
                    <div className="criteria-title">{criteria.title}</div>
                    <div className="criteria-weight">Weight: {criteria.weight}</div>
                  </div>
                  <div className="criteria-description">{criteria.description}</div>
                  <div className="criteria-meta">
                    <span>By: {criteria.submittedBy}</span>
                    <span>👍 {criteria.votes} votes</span>
                    <span>{criteria.dateSubmitted}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Fund to Resolve */}
        <div className="section">
          <div className="section-header">💰 FUND THE RESOLUTION</div>
          <div className="section-content">
            <div className="funding-section">
              <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#000080" }}>
                Help Fund Independent Investigation
              </h3>
              <p style={{ fontSize: "12px", margin: "0 0 10px 0" }}>
                Your contributions will fund independent researchers, document analysis, forensic experts, and
                historical investigations to help resolve this conspiracy once and for all.
              </p>

              <div className="funding-stats">
                <span>
                  <strong>Raised:</strong> ${conspiracyData.totalFunding.toLocaleString()}
                </span>
                <span>
                  <strong>Goal:</strong> ${conspiracyData.fundingGoal.toLocaleString()}
                </span>
                <span>
                  <strong>Contributors:</strong> {conspiracyData.contributors}
                </span>
              </div>

              <div className="funding-progress">
                <div
                  className="funding-bar"
                  style={{ width: `${(conspiracyData.totalFunding / conspiracyData.fundingGoal) * 100}%` }}
                ></div>
                <div className="funding-text">
                  {Math.round((conspiracyData.totalFunding / conspiracyData.fundingGoal) * 100)}% Funded
                </div>
              </div>

              <button className="fund-btn" onClick={() => setShowFundingForm(!showFundingForm)}>
                💵 CONTRIBUTE TO INVESTIGATION
              </button>

              {showFundingForm && (
                <form className="funding-form" onSubmit={handleFundingSubmit}>
                  <h4 style={{ margin: "0 0 10px 0", fontSize: "13px", color: "#000080" }}>Make a Contribution</h4>
                  <div className="form-group">
                    <label className="form-label">Contribution Amount ($):</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="Enter amount..."
                      value={fundingAmount}
                      onChange={(e) => setFundingAmount(e.target.value)}
                      min="1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message (Optional):</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Why are you contributing to this investigation?"
                    ></textarea>
                  </div>
                  <div className="form-buttons">
                    <button type="submit" className="form-btn primary">
                      CONTRIBUTE ${fundingAmount || "0"}
                    </button>
                    <button type="button" className="form-btn" onClick={() => setShowFundingForm(false)}>
                      CANCEL
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div style={{ fontSize: "11px", color: "#666666", marginTop: "10px" }}>
              <strong>Recent Contributors:</strong>
              <br />• TruthSeeker1963 - $500 - "The truth must come out!"
              <br />• HistoryBuff - $250 - "For historical accuracy"
              <br />• Anonymous - $1000 - "Justice for JFK"
              <br />• ConspiracyHunter - $150 - "Follow the evidence"
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
