"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

export default function CreateResolutionPage() {
  const params = useParams()
  const [resolutionTitle, setResolutionTitle] = useState("")
  const [resolutionDescription, setResolutionDescription] = useState("")
  const [resolutionType, setResolutionType] = useState("")
  const [evidenceRequired, setEvidenceRequired] = useState("")
  const [timeframe, setTimeframe] = useState("")
  const [votingMechanism, setVotingMechanism] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const resolutionTypes = [
    "Documentary Evidence",
    "Expert Panel Decision",
    "Government Document Release",
    "Scientific Study Results",
    "Court Ruling",
    "Whistleblower Testimony",
    "Archaeological Discovery",
    "Declassified Information",
    "Other",
  ]

  const votingMechanisms = [
    "Simple Majority Vote",
    "Weighted Expert Vote",
    "Stake-Weighted Vote",
    "Unanimous Consensus",
    "2/3 Majority Required",
    "Oracle-Based Resolution",
  ]

  const timeframes = ["1 Month", "3 Months", "6 Months", "1 Year", "2 Years", "5 Years", "10 Years", "No Time Limit"]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!resolutionTitle || !resolutionDescription || !resolutionType || !votingMechanism) {
      alert("Please fill in all required fields!")
      return
    }

    alert(`Resolution mechanism "${resolutionTitle}" has been submitted for review!`)

    // Reset form
    setResolutionTitle("")
    setResolutionDescription("")
    setResolutionType("")
    setEvidenceRequired("")
    setTimeframe("")
    setVotingMechanism("")
    setShowPreview(false)
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
          max-width: 800px;
          margin: 0 auto;
          padding: 10px;
          background-color: #ffffff;
          border: 2px inset #c0c0c0;
        }

        .form-section {
          background-color: #f0f0f0;
          border: 2px outset #c0c0c0;
          margin-bottom: 20px;
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

        .form-group {
          margin-bottom: 15px;
        }

        .form-label {
          display: block;
          font-weight: bold;
          font-size: 12px;
          margin-bottom: 5px;
          color: #000080;
        }

        .required {
          color: #ff0000;
        }

        .form-input {
          width: 100%;
          padding: 5px;
          border: 2px inset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
          font-size: 12px;
          background-color: #ffffff;
        }

        .form-textarea {
          width: 100%;
          height: 100px;
          padding: 5px;
          border: 2px inset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
          font-size: 12px;
          resize: vertical;
          background-color: #ffffff;
        }

        .form-select {
          width: 100%;
          padding: 5px;
          border: 2px inset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
          font-size: 12px;
          background-color: #ffffff;
        }

        .form-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .form-btn {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          padding: 8px 15px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
          font-family: "Times New Roman", Times, serif;
        }

        .form-btn:hover {
          border: 2px inset #c0c0c0;
        }

        .form-btn.primary {
          background-color: #008000;
          color: #ffffff;
        }

        .form-btn.secondary {
          background-color: #ff8000;
          color: #ffffff;
        }

        .preview-section {
          background-color: #ffff99;
          border: 2px solid #000000;
          padding: 15px;
          margin-bottom: 20px;
        }

        .preview-card {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
          padding: 10px;
          margin-top: 10px;
        }

        .preview-title {
          font-size: 14px;
          font-weight: bold;
          color: #0000ff;
          margin-bottom: 5px;
          text-decoration: underline;
        }

        .preview-description {
          font-size: 12px;
          color: #000000;
          margin-bottom: 10px;
        }

        .preview-meta {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #666666;
        }

        .help-text {
          font-size: 11px;
          color: #666666;
          font-style: italic;
          margin-top: 3px;
        }

        .warning-box {
          background-color: #ffcccc;
          border: 2px solid #ff0000;
          padding: 10px;
          margin-bottom: 15px;
          font-size: 11px;
        }

        .info-box {
          background-color: #ffff99;
          border: 2px solid #000000;
          padding: 10px;
          margin-bottom: 15px;
          font-size: 11px;
        }

        .character-count {
          font-size: 10px;
          color: #666666;
          text-align: right;
          margin-top: 2px;
        }

        .character-count.warning {
          color: #ff8000;
        }

        .character-count.error {
          color: #ff0000;
        }

        .market-info-box {
          background-color: #e0e0e0;
          border: 2px solid #000000;
          padding: 10px;
          margin-bottom: 15px;
          font-size: 12px;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>CREATE RESOLUTION MECHANISM</h2>
        <div style={{ fontSize: "12px", fontStyle: "italic", marginTop: "5px" }}>
          Define How This Market Will Be Resolved
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href={`/market/${params.id}`}>← BACK TO MARKET</a>
        <a href="/">HOME</a>
        <a href="/portfolio">MY PORTFOLIO</a>
        <a href="/forum">FORUM</a>
        <a href="/connect">CONNECT WALLET</a>
      </div>

      <div className="container">
        {/* Market Info */}
        <div className="market-info-box">
          <center>
            <strong>📊 MARKET #{params.id}</strong>
            <br />
            <br />
            You are creating a resolution mechanism for this conspiracy theory market.
            <br />
            This will determine how and when the market gets resolved as TRUE or FALSE.
          </center>
        </div>

        {/* Instructions */}
        <div className="info-box">
          <center>
            <strong>⚖️ RESOLUTION MECHANISM GUIDELINES</strong>
            <br />
            <br />
            Create a fair and objective way to resolve this market! Your mechanism should be:
            <br />• <strong>Verifiable</strong> - Based on evidence that can be checked
            <br />• <strong>Objective</strong> - Clear criteria that minimize subjective interpretation
            <br />• <strong>Realistic</strong> - Achievable within the specified timeframe
          </center>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Resolution Title */}
          <div className="form-section">
            <div className="section-header">📝 RESOLUTION TITLE</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Resolution Mechanism Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={resolutionTitle}
                  onChange={(e) => setResolutionTitle(e.target.value)}
                  placeholder="e.g., Government Document Release Resolution"
                  maxLength={100}
                  required
                />
                <div
                  className={`character-count ${resolutionTitle.length > 80 ? "warning" : ""} ${resolutionTitle.length > 95 ? "error" : ""}`}
                >
                  {resolutionTitle.length}/100 characters
                </div>
                <div className="help-text">Choose a clear name that describes how this market will be resolved</div>
              </div>
            </div>
          </div>

          {/* Resolution Description */}
          <div className="form-section">
            <div className="section-header">📄 RESOLUTION CRITERIA</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Detailed Resolution Criteria <span className="required">*</span>
                </label>
                <textarea
                  className="form-textarea"
                  value={resolutionDescription}
                  onChange={(e) => setResolutionDescription(e.target.value)}
                  placeholder="Describe exactly what evidence or event would cause this market to resolve as YES or NO. Be specific about sources, documents, or criteria that would be considered valid."
                  maxLength={500}
                  required
                />
                <div
                  className={`character-count ${resolutionDescription.length > 400 ? "warning" : ""} ${resolutionDescription.length > 480 ? "error" : ""}`}
                >
                  {resolutionDescription.length}/500 characters
                </div>
                <div className="help-text">Be very specific about what would constitute proof</div>
              </div>
            </div>
          </div>

          {/* Resolution Type */}
          <div className="form-section">
            <div className="section-header">🔍 RESOLUTION TYPE</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Type of Evidence Required <span className="required">*</span>
                </label>
                <select
                  className="form-select"
                  value={resolutionType}
                  onChange={(e) => setResolutionType(e.target.value)}
                  required
                >
                  <option value="">-- Select Resolution Type --</option>
                  {resolutionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="help-text">Choose the primary type of evidence that would resolve this market</div>
              </div>
            </div>
          </div>

          {/* Evidence Requirements */}
          <div className="form-section">
            <div className="section-header">📋 EVIDENCE REQUIREMENTS</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">Specific Evidence Required (Optional)</label>
                <textarea
                  className="form-textarea"
                  value={evidenceRequired}
                  onChange={(e) => setEvidenceRequired(e.target.value)}
                  placeholder="List specific documents, testimonies, or other evidence that would be required to resolve this market. For example: 'Declassified CIA documents from 1963-1964' 
                  maxLength={400}
                />
                <div
                  className={`character-count ${evidenceRequired.length > 320 ? "warning" : ""} ${evidenceRequired.length > 380 ? "error" : ""}`}
                >
                  {evidenceRequired.length}/400 characters
                </div>
                <div className="help-text">
                  Specify exactly what evidence would be needed (optional but recommended)
                </div>
              </div>
            </div>
          </div>

          {/* Timeframe */}
          <div className="form-section">
            <div className="section-header">⏰ RESOLUTION TIMEFRAME</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">Expected Resolution Timeframe</label>
                <select className="form-select" value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
                  <option value="">-- Select Timeframe --</option>
                  {timeframes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <div className="help-text">How long do you expect it might take for resolution evidence to emerge?</div>
              </div>
            </div>
          </div>

          {/* Voting Mechanism */}
          <div className="form-section">
            <div className="section-header">🗳️ VOTING MECHANISM</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  How Should This Be Decided? <span className="required">*</span>
                </label>
                <select
                  className="form-select"
                  value={votingMechanism}
                  onChange={(e) => setVotingMechanism(e.target.value)}
                  required
                >
                  <option value="">-- Select Voting Method --</option>
                  {votingMechanisms.map((mechanism) => (
                    <option key={mechanism} value={mechanism}>
                      {mechanism}
                    </option>
                  ))}
                </select>
                <div className="help-text">
                  Choose how the community will decide if the resolution criteria have been met
                </div>
              </div>
            </div>
          </div>

          {/* Cost Information */}
          <div className="form-section">
            <div className="section-header">💰 RESOLUTION MECHANISM COST</div>
            <div className="section-content">
              <div
                style={{
                  background: "#ffff99",
                  border: "2px solid #000000",
                  padding: "15px",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: "bold", color: "#000080", marginBottom: "8px" }}>
                  ⚠️ RESOLUTION CREATION FEE: 5 USDC ⚠️
                </div>
                <div style={{ fontSize: "12px", lineHeight: "1.4" }}>
                  Creating a resolution mechanism requires a one-time fee of <strong>5 USDC</strong>.
                  <br />
                  This helps ensure quality resolution mechanisms and prevents spam.
                  <br />
                  <br />
                </div>
              </div>
              <div className="help-text" style={{ textAlign: "center", fontSize: "11px" }}>
                💡 Tip: Well-designed resolution mechanisms help markets resolve fairly and build trust!
              </div>
            </div>
          </div>

          {/* Preview */}
          {showPreview && resolutionTitle && resolutionDescription && resolutionType && votingMechanism && (
            <div className="preview-section">
              <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#000080" }}>📋 RESOLUTION PREVIEW</h3>
              <div className="preview-card">
                <div className="preview-title">{resolutionTitle}</div>
                <div className="preview-description">{resolutionDescription}</div>
                <div
                  style={{
                    background: "#e0e0e0",
                    border: "1px solid #000000",
                    padding: "8px",
                    marginBottom: "8px",
                    fontSize: "11px",
                  }}
                >
                  <strong>Type:</strong> {resolutionType} | <strong>Voting:</strong> {votingMechanism}
                  {timeframe && (
                    <>
                      {" "}
                      | <strong>Timeframe:</strong> {timeframe}
                    </>
                  )}
                </div>
                <div className="preview-meta">
                  <span>📊 Status: Pending Approval</span>
                  <span>💰 Fee: 5 USDC</span>
                  <span>🗳️ Votes: 0</span>
                </div>
              </div>
            </div>
          )}

          {/* Form Buttons */}
          <div className="form-buttons">
            <button
              type="button"
              className="form-btn secondary"
              onClick={() => setShowPreview(!showPreview)}
              disabled={!resolutionTitle || !resolutionDescription || !resolutionType || !votingMechanism}
            >
              👁️ {showPreview ? "HIDE" : "SHOW"} PREVIEW
            </button>
            <button type="submit" className="form-btn primary">
              SUBMIT RESOLUTION MECHANISM
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
