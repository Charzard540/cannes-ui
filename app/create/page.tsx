"use client"

import { useState } from "react"

export default function CreateMarketPage() {
  const [marketName, setMarketName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const categories = [
    "Government & Politics",
    "Space & UFOs",
    "Historical Events",
    "Medical & Health",
    "Technology & Science",
    "Secret Societies",
    "Cryptozoology",
    "Other",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!marketName || !description || !category) {
      alert("Please fill in all required fields!")
      return
    }

    // Simulate market creation
    alert(`Market "${marketName}" has been submitted for review! It will be live within 24 hours.`)

    // Reset form
    setMarketName("")
    setDescription("")
    setCategory("")
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

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .image-option {
          border: 2px outset #c0c0c0;
          padding: 8px;
          text-align: center;
          cursor: pointer;
          background-color: #f8f8f8;
          transition: all 0.2s;
        }

        .image-option:hover {
          background-color: #ffffcc;
          border: 2px inset #c0c0c0;
        }

        .image-option.selected {
          background-color: #90ee90;
          border: 2px inset #008000;
        }

        .image-preview {
          width: 60px;
          height: 60px;
          background-color: #e0e0e0;
          border: 1px solid #000000;
          margin: 0 auto 5px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #666666;
        }

        .image-name {
          font-size: 10px;
          font-weight: bold;
          color: #000080;
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

        .image-upload-area {
          margin-top: 10px;
        }

        .upload-box {
          border: 2px dashed #666666;
          background-color: #f8f8f8;
          padding: 30px;
          text-align: center;
          cursor: pointer;
          position: relative;
          transition: all 0.3s;
        }

        .upload-box:hover {
          border-color: #000080;
          background-color: #ffffcc;
        }

        .upload-icon {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .upload-text {
          font-size: 12px;
          color: #000080;
        }

        .upload-text strong {
          font-size: 13px;
        }

        .upload-text small {
          font-size: 10px;
          color: #666666;
        }

        .file-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>CREATE A NEW CONSPIRACY MARKET</h2>
        <div style={{ fontSize: "12px", fontStyle: "italic", marginTop: "5px" }}>
          Submit Your Own Conspiracy Theory for Trading
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">← BACK TO HOME</a>
        <a href="/markets">ALL MARKETS</a>
        <a href="/portfolio">MY PORTFOLIO</a>
        <a href="/forum">FORUM</a>
        <a href="/connect">CONNECT WALLET</a>
      </div>

      <div className="container">
        {/* Instructions */}
        <div className="info-box">
          <center>
            <strong>📝 MARKET CREATION GUIDELINES</strong>
            <br />
            <br />
            Create your own conspiracy theory market! Make sure your conspiracy theory is:
            <br />• <strong>Historically significant</strong> - Based on real events or claims
            <br />• <strong>Interesting</strong> - Will generate discussion and trading activity
          </center>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Market Name */}
          <div className="form-section">
            <div className="section-header">📝 MARKET NAME</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Market Title <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={marketName}
                  onChange={(e) => setMarketName(e.target.value)}
                  placeholder="e.g., Bigfoot: Real Creature or Elaborate Hoax?"
                  maxLength={100}
                  required
                />
                <div
                  className={`character-count ${marketName.length > 80 ? "warning" : ""} ${marketName.length > 95 ? "error" : ""}`}
                >
                  {marketName.length}/100 characters
                </div>
                <div className="help-text">
                  Choose a clear, engaging title that presents both sides of the conspiracy theory
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-section">
            <div className="section-header">📄 DESCRIPTION</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Market Description <span className="required">*</span>
                </label>
                <textarea
                  className="form-textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the conspiracy theory, key evidence, and what would need to happen for the market to resolve as 'YES' (conspiracy true) or 'NO' (official story correct). Include relevant dates, people, and events."
                  maxLength={500}
                  required
                />
                <div
                  className={`character-count ${description.length > 400 ? "warning" : ""} ${description.length > 480 ? "error" : ""}`}
                >
                  {description.length}/500 characters
                </div>
                <div className="help-text">
                  Provide enough detail for traders to understand the conspiracy theory and make informed bets
                </div>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="form-section">
            <div className="section-header">📁 CATEGORY</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Market Category <span className="required">*</span>
                </label>
                <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
                  <option value="">-- Select a Category --</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="help-text">Choose the category that best fits your conspiracy theory</div>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="form-section">
            <div className="section-header">🖼️ UPLOAD IMAGE</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">Market Image (Optional)</label>
                <div className="image-upload-area">
                  <div className="upload-box">
                    <div className="upload-icon">📁</div>
                    <div className="upload-text">
                      <strong>Drop an image here or click to browse</strong>
                      <br />
                      <small>Supported formats: JPG, PNG, GIF (Max 2MB)</small>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="file-input"
                      onChange={(e) => {
                        const file = e.target.files[0]
                        if (file) {
                          // Handle file upload logic here
                          console.log("File selected:", file.name)
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="help-text">
                  Upload an image that represents your conspiracy theory (optional but recommended)
                </div>
              </div>
            </div>
          </div>

          {/* Cost Information */}
          <div className="form-section">
            <div className="section-header">💰 MARKET CREATION COST</div>
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
                  ⚠️ MARKET CREATION FEE: 10 USDC ⚠️
                </div>
                <div style={{ fontSize: "12px", lineHeight: "1.4" }}>
                  Creating and submitting a new conspiracy theory market requires a one-time fee of{" "}
                  <strong>10 USDC</strong>.
                  <br />
                  This fee helps maintain the quality of markets and prevents spam submissions.
                  <br />
                  <br />
                </div>
              </div>
              <div className="help-text" style={{ textAlign: "center", fontSize: "11px" }}>
                💡 Tip: Popular markets can generate significant trading fees for their creators!
              </div>
            </div>
          </div>

          {/* Preview */}
          {showPreview && marketName && description && category && (
            <div className="preview-section">
              <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#000080" }}>📋 MARKET PREVIEW</h3>
              <div className="preview-card">
                <div className="preview-title">{marketName}</div>
                <div className="preview-description">{description}</div>
                <div
                  style={{
                    background: "#e0e0e0",
                    border: "1px solid #000000",
                    padding: "5px",
                    marginBottom: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                  }}
                >
                  <div style={{ color: "#008000", fontWeight: "bold" }}>YES: $0.50</div>
                  <div style={{ color: "#ff0000", fontWeight: "bold" }}>NO: $0.50</div>
                </div>
                <div className="preview-meta">
                  <span>💰 Volume: $0</span>
                  <span>💬 Posts: 0</span>
                  <span>📁 {category}</span>
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
              disabled={!marketName || !description || !category}
            >
              👁️ {showPreview ? "HIDE" : "SHOW"} PREVIEW
            </button>
            <button type="submit" className="form-btn primary">
              SUBMIT MARKET
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
