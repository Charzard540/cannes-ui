"use client"

import { useState, useEffect } from "react"

export default function CreateMarketPage() {
  const [marketName, setMarketName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [isVibeMode, setIsVibeMode] = useState(true)

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("conspiracyTheme")
    if (savedTheme !== null) {
      setIsVibeMode(savedTheme === "vibe")
    }
  }, [])

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

  const toggleTheme = () => {
    const newTheme = !isVibeMode
    setIsVibeMode(newTheme)
    localStorage.setItem("conspiracyTheme", newTheme ? "vibe" : "retro")
  }

  return (
    <div className={isVibeMode ? "conspiracy-site-vibe" : "conspiracy-site-retro"}>
      <style jsx>{`
        /* VIBE MODE STYLES */
        .conspiracy-site-vibe {
          font-family: "Courier New", monospace;
          background: linear-gradient(45deg, #1a0033, #330066, #1a0033, #660033);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .conspiracy-site-vibe::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .conspiracy-site-vibe .header {
          background: linear-gradient(135deg, #000080, #4b0082, #8b008b);
          color: #00ff41;
          padding: 20px;
          text-align: center;
          border-width: 3px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1);
          position: relative;
          z-index: 2;
          animation: headerGlow 3s ease-in-out infinite alternate;
        }

        @keyframes headerGlow {
          0% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1); }
          100% { box-shadow: 0 0 30px rgba(0, 255, 65, 0.8), inset 0 0 30px rgba(0, 255, 65, 0.2); }
        }

        .conspiracy-site-vibe .nav-bar {
          background: linear-gradient(90deg, #2d2d2d, #1a1a1a, #2d2d2d);
          padding: 12px;
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .conspiracy-site-vibe .nav-bar a {
          color: #00ff41;
          text-decoration: none;
          font-weight: bold;
          margin: 0 15px;
          font-size: 13px;
          padding: 5px 10px;
          border-width: 1px;
          border-style: solid;
          border-color: transparent;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px #00ff41;
        }

        .conspiracy-site-vibe .nav-bar a:hover {
          color: #ff00ff;
          border-color: #ff00ff;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
          text-shadow: 0 0 10px #ff00ff;
          transform: scale(1.05);
        }

        .conspiracy-site-vibe .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 15px;
          background: rgba(0, 0, 0, 0.8);
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
          position: relative;
          z-index: 2;
          backdrop-filter: blur(10px);
        }

        /* RETRO MODE STYLES */
        .conspiracy-site-retro {
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

        .conspiracy-site-retro .header {
          background-color: #000080;
          color: #ffff00;
          padding: 10px;
          text-align: center;
          border: 3px outset #c0c0c0;
        }

        .conspiracy-site-retro .nav-bar {
          background-color: #c0c0c0;
          padding: 8px;
          border: 2px inset #c0c0c0;
        }

        .conspiracy-site-retro .nav-bar a {
          color: #0000ff;
          text-decoration: underline;
          font-weight: normal;
          padding: 2px 8px;
          font-size: 12px;
        }

        .conspiracy-site-retro .nav-bar a:hover {
          color: #ff0000;
        }

        .conspiracy-site-retro .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 10px;
          background-color: #ffffff;
          border: 2px inset #c0c0c0;
        }

        /* Theme Toggle Button */
        .theme-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          padding: 10px 15px;
          font-weight: bold;
          cursor: pointer;
          border-radius: 5px;
          transition: all 0.3s ease;
          font-family: "Courier New", monospace;
          font-size: 12px;
        }

        .conspiracy-site-vibe .theme-toggle {
          background: linear-gradient(135deg, #8b008b, #4b0082);
          color: #00ff41;
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          text-shadow: 0 0 5px #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.4);
        }

        .conspiracy-site-vibe .theme-toggle:hover {
          background: linear-gradient(135deg, #ff00ff, #8b008b);
          border-color: #ff00ff;
          color: #ffffff;
          text-shadow: 0 0 10px #ffffff;
          box-shadow: 0 0 25px rgba(255, 0, 255, 0.6);
          transform: scale(1.1);
        }

        .conspiracy-site-retro .theme-toggle {
          background-color: #008000;
          color: #ffffff;
          border-width: 2px;
          border-style: outset;
          border-color: #008000;
          font-family: "Times New Roman", Times, serif;
        }

        .conspiracy-site-retro .theme-toggle:hover {
          border-style: inset;
        }

        .form-section {
          margin-bottom: 20px;
        }

        .conspiracy-site-vibe .form-section {
          background: linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 255, 0.1));
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
          animation: formGlow 6s ease-in-out infinite alternate;
        }

        .conspiracy-site-retro .form-section {
          background-color: #f0f0f0;
          border: 2px outset #c0c0c0;
        }

        @keyframes formGlow {
          0% { box-shadow: 0 0 15px rgba(0, 255, 65, 0.3); }
          100% { box-shadow: 0 0 25px rgba(255, 0, 255, 0.4); }
        }

        .section-header {
          padding: 12px;
          font-weight: bold;
          font-size: 16px;
        }

        .conspiracy-site-vibe .section-header {
          background: linear-gradient(135deg, #8b008b, #4b0082, #000080);
          color: #00ff41;
          border-bottom-width: 2px;
          border-bottom-style: solid;
          border-bottom-color: #00ff41;
          text-shadow: 0 0 10px #00ff41;
        }

        .conspiracy-site-retro .section-header {
          background-color: #008000;
          color: #ffffff;
          border-bottom: 2px solid #000000;
        }

        .section-content {
          padding: 20px;
        }

        .conspiracy-site-vibe .section-content {
          background: rgba(0, 0, 0, 0.6);
        }

        .conspiracy-site-retro .section-content {
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
        }

        .conspiracy-site-vibe .form-label {
          color: #00ffff;
          text-shadow: 0 0 5px #00ffff;
        }

        .conspiracy-site-retro .form-label {
          color: #000080;
        }

        .required {
          color: #ff0000;
        }

        .conspiracy-site-vibe .required {
          color: #ff00ff;
          text-shadow: 0 0 5px #ff00ff;
        }

        .form-input {
          width: 100%;
          padding: 5px;
          font-size: 12px;
        }

        .conspiracy-site-vibe .form-input {
          border: 2px solid #00ff41;
          background: rgba(0, 0, 0, 0.8);
          color: #00ff41;
          font-family: "Courier New", monospace;
          text-shadow: 0 0 3px #00ff41;
        }

        .conspiracy-site-vibe .form-input:focus {
          border-color: #ff00ff;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
          outline: none;
        }

        .conspiracy-site-retro .form-input {
          border: 2px inset #c0c0c0;
          background-color: #ffffff;
          color: #000000;
          font-family: "Times New Roman", Times, serif;
        }

        .form-textarea {
          width: 100%;
          height: 100px;
          padding: 5px;
          font-size: 12px;
          resize: vertical;
        }

        .conspiracy-site-vibe .form-textarea {
          border: 2px solid #00ff41;
          background: rgba(0, 0, 0, 0.8);
          color: #00ff41;
          font-family: "Courier New", monospace;
          text-shadow: 0 0 3px #00ff41;
        }

        .conspiracy-site-vibe .form-textarea:focus {
          border-color: #ff00ff;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
          outline: none;
        }

        .conspiracy-site-retro .form-textarea {
          border: 2px inset #c0c0c0;
          background-color: #ffffff;
          color: #000000;
          font-family: "Times New Roman", Times, serif;
        }

        .form-select {
          width: 100%;
          padding: 5px;
          font-size: 12px;
        }

        .conspiracy-site-vibe .form-select {
          border: 2px solid #00ff41;
          background: rgba(0, 0, 0, 0.8);
          color: #00ff41;
          font-family: "Courier New", monospace;
        }

        .conspiracy-site-vibe .form-select:focus {
          border-color: #ff00ff;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
          outline: none;
        }

        .conspiracy-site-retro .form-select {
          border: 2px inset #c0c0c0;
          background-color: #ffffff;
          color: #000000;
          font-family: "Times New Roman", Times, serif;
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

        .conspiracy-site-vibe .upload-box {
          border: 2px dashed #00ff41;
          background: rgba(0, 0, 0, 0.6);
          color: #00ff41;
        }

        .upload-box:hover {
          border-color: #000080;
          background-color: #ffffcc;
        }

        .conspiracy-site-vibe .upload-box:hover {
          border-color: #ff00ff;
          background: rgba(255, 0, 255, 0.1);
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
        }

        .upload-icon {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .upload-text {
          font-size: 12px;
        }

        .conspiracy-site-vibe .upload-text {
          color: #00ff41;
        }

        .conspiracy-site-retro .upload-text {
          color: #000080;
        }

        .upload-text strong {
          font-size: 13px;
        }

        .upload-text small {
          font-size: 10px;
        }

        .conspiracy-site-vibe .upload-text small {
          color: #00ffff;
        }

        .conspiracy-site-retro .upload-text small {
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

        .form-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .form-btn {
          padding: 8px 15px;
          font-weight: bold;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .conspiracy-site-vibe .form-btn {
          background: linear-gradient(135deg, #8b008b, #4b0082);
          color: #00ff41;
          border: 2px solid #00ff41;
          text-shadow: 0 0 5px #00ff41;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
          font-family: "Courier New", monospace;
        }

        .conspiracy-site-vibe .form-btn:hover {
          background: linear-gradient(135deg, #ff00ff, #8b008b);
          border-color: #ff00ff;
          color: #ffffff;
          text-shadow: 0 0 10px #ffffff;
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.6);
          transform: scale(1.05);
        }

        .conspiracy-site-retro .form-btn {
          background-color: #c0c0c0;
          color: #000000;
          border: 2px outset #c0c0c0;
          font-family: "Times New Roman", Times, serif;
        }

        .conspiracy-site-retro .form-btn:hover {
          border: 2px inset #c0c0c0;
        }

        .conspiracy-site-vibe .form-btn.primary {
          background: linear-gradient(135deg, #ff00ff, #00ffff);
        }

        .conspiracy-site-retro .form-btn.primary {
          background-color: #008000;
          color: #ffffff;
        }

        .conspiracy-site-vibe .form-btn.secondary {
          background: linear-gradient(135deg, #ffff00, #ff00ff);
        }

        .conspiracy-site-retro .form-btn.secondary {
          background-color: #ff8000;
          color: #ffffff;
        }

        .preview-section {
          margin-bottom: 20px;
          padding: 15px;
        }

        .conspiracy-site-vibe .preview-section {
          background: rgba(255, 255, 0, 0.1);
          border: 2px solid #ffff00;
          box-shadow: 0 0 20px rgba(255, 255, 0, 0.3);
        }

        .conspiracy-site-retro .preview-section {
          background-color: #ffff99;
          border: 2px solid #000000;
        }

        .preview-card {
          padding: 10px;
          margin-top: 10px;
        }

        .conspiracy-site-vibe .preview-card {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid #00ff41;
          color: #00ff41;
        }

        .conspiracy-site-retro .preview-card {
          background-color: #ffffff;
          border: 2px outset #c0c0c0;
        }

        .preview-title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .conspiracy-site-vibe .preview-title {
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
          text-decoration: none;
        }

        .conspiracy-site-retro .preview-title {
          color: #0000ff;
          text-decoration: underline;
        }

        .preview-description {
          font-size: 12px;
          margin-bottom: 10px;
        }

        .conspiracy-site-vibe .preview-description {
          color: #00ff41;
        }

        .conspiracy-site-retro .preview-description {
          color: #000000;
        }

        .preview-meta {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }

        .conspiracy-site-vibe .preview-meta {
          color: #ffff00;
        }

        .conspiracy-site-retro .preview-meta {
          color: #666666;
        }

        .help-text {
          font-size: 11px;
          font-style: italic;
          margin-top: 3px;
        }

        .conspiracy-site-vibe .help-text {
          color: #00ffff;
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
        }

        .conspiracy-site-retro .help-text {
          color: #666666;
        }

        .info-box {
          padding: 10px;
          margin-bottom: 15px;
          font-size: 11px;
        }

        .conspiracy-site-vibe .info-box {
          background: rgba(255, 255, 0, 0.1);
          border: 2px solid #ffff00;
          color: #ffff00;
          box-shadow: 0 0 15px rgba(255, 255, 0, 0.3);
        }

        .conspiracy-site-retro .info-box {
          background-color: #ffff99;
          border: 2px solid #000000;
          color: #000000;
        }

        .character-count {
          font-size: 10px;
          text-align: right;
          margin-top: 2px;
        }

        .conspiracy-site-vibe .character-count {
          color: #00ffff;
        }

        .conspiracy-site-retro .character-count {
          color: #666666;
        }

        .character-count.warning {
          color: #ff8000;
        }

        .character-count.error {
          color: #ff0000;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .theme-toggle {
            top: 10px;
            right: 10px;
            padding: 8px 12px;
            font-size: 11px;
          }
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isVibeMode ? "🕹️ RETRO MODE" : "🌈 VIBE MODE"}
      </button>

      {/* Header */}
      <div className="header">
        <h2 style={{ margin: 0, fontSize: "20px" }}>
          {isVibeMode ? "🚀 CREATE A NEW CONSPIRACY MARKET 🚀" : "CREATE A NEW CONSPIRACY MARKET"}
        </h2>
        <div style={{ fontSize: "12px", fontStyle: "italic", marginTop: "5px" }}>
          {isVibeMode
            ? "🔮 Submit Your Own Conspiracy Theory for Trading 🔮"
            : "Submit Your Own Conspiracy Theory for Trading"}
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
            <strong>{isVibeMode ? "📝 MARKET CREATION GUIDELINES 📝" : "📝 MARKET CREATION GUIDELINES"}</strong>
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
            <div className="section-header">{isVibeMode ? "📝 MARKET NAME 📝" : "📝 MARKET NAME"}</div>
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
                <div className="help-text">Choose a clear, engaging title</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-section">
            <div className="section-header">{isVibeMode ? "📄 DESCRIPTION 📄" : "📄 DESCRIPTION"}</div>
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
            <div className="section-header">{isVibeMode ? "📁 CATEGORY 📁" : "📁 CATEGORY"}</div>
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
            <div className="section-header">{isVibeMode ? "🖼️ UPLOAD IMAGE 🖼️" : "🖼️ UPLOAD IMAGE"}</div>
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">Market Image (Optional)</label>
                <div className="image-upload-area">
                  <div className="upload-box">
                    <div className="upload-icon">{isVibeMode ? "💾" : "📁"}</div>
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
            <div className="section-header">
              {isVibeMode ? "💰 MARKET CREATION COST 💰" : "💰 MARKET CREATION COST"}
            </div>
            <div className="section-content">
              <div
                style={{
                  background: isVibeMode ? "rgba(255, 255, 0, 0.1)" : "#ffff99",
                  border: isVibeMode ? "2px solid #ffff00" : "2px solid #000000",
                  padding: "15px",
                  textAlign: "center",
                  marginBottom: "10px",
                  boxShadow: isVibeMode ? "0 0 15px rgba(255, 255, 0, 0.3)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: isVibeMode ? "#ffff00" : "#000080",
                    marginBottom: "8px",
                    textShadow: isVibeMode ? "0 0 10px rgba(255, 255, 0, 0.8)" : "none",
                  }}
                >
                  {isVibeMode ? "⚠️ MARKET CREATION FEE: 10 USDC ⚠️" : "⚠️ MARKET CREATION FEE: 10 USDC ⚠️"}
                </div>
                <div style={{ fontSize: "12px", lineHeight: "1.4", color: isVibeMode ? "#00ff00" : "inherit" }}>
                  Creating and submitting a new conspiracy theory market requires a one-time fee of{" "}
                  <strong>10 USDC</strong>.
                  <br />
                  This fee helps maintain the quality of markets and prevents spam submissions.
                  <br />
                  <br />
                </div>
              </div>
              <div className="help-text" style={{ textAlign: "center", fontSize: "11px" }}>
                {isVibeMode
                  ? "💡 Tip: Popular markets can generate significant trading fees for their creators! 💡"
                  : "💡 Tip: Popular markets can generate significant trading fees for their creators!"}
              </div>
            </div>
          </div>

          {/* Preview */}
          {showPreview && marketName && description && category && (
            <div className="preview-section">
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "14px",
                  color: isVibeMode ? "#ffff00" : "#000080",
                  textShadow: isVibeMode ? "0 0 10px rgba(255, 255, 0, 0.8)" : "none",
                }}
              >
                {isVibeMode ? "📋 MARKET PREVIEW 📋" : "📋 MARKET PREVIEW"}
              </h3>
              <div className="preview-card">
                <div className="preview-title">{marketName}</div>
                <div className="preview-description">{description}</div>
                <div
                  style={{
                    background: isVibeMode ? "rgba(0, 0, 0, 0.8)" : "#e0e0e0",
                    border: isVibeMode ? "1px solid #00ff00" : "1px solid #000000",
                    padding: "5px",
                    marginBottom: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      color: isVibeMode ? "#00ff00" : "#008000",
                      fontWeight: "bold",
                      textShadow: isVibeMode ? "0 0 10px rgba(0, 255, 0, 0.8)" : "none",
                    }}
                  >
                    YES: $0.50
                  </div>
                  <div
                    style={{
                      color: isVibeMode ? "#ff0000" : "#ff0000",
                      fontWeight: "bold",
                      textShadow: isVibeMode ? "0 0 10px rgba(255, 0, 0, 0.8)" : "none",
                    }}
                  >
                    NO: $0.50
                  </div>
                </div>
                <div className="preview-meta">
                  <span>{isVibeMode ? "💰" : "💰"} Volume: $0</span>
                  <span>{isVibeMode ? "💬" : "💬"} Posts: 0</span>
                  <span>
                    {isVibeMode ? "📁" : "📁"} {category}
                  </span>
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
              {isVibeMode ? "👁️" : "👁️"} {showPreview ? "HIDE" : "SHOW"} PREVIEW
            </button>
            <button type="submit" className="form-btn primary">
              {isVibeMode ? "🚀 SUBMIT MARKET 🚀" : "SUBMIT MARKET"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
