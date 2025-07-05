"use client"

import { useState, useEffect } from "react"

export default function AddResolutionPage() {
  const [isVibeMode, setIsVibeMode] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    deadline: "",
    successCriteria: "",
  })

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("conspiracyTheme")
    if (savedTheme !== null) {
      setIsVibeMode(savedTheme === "vibe")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isVibeMode
    setIsVibeMode(newTheme)
    localStorage.setItem("conspiracyTheme", newTheme ? "vibe" : "retro")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.description.trim() || !formData.type) {
      alert("Please fill in all required fields!")
      return
    }
    alert("Resolution mechanism submitted successfully!")
    // Reset form
    setFormData({
      name: "",
      description: "",
      type: "",
      deadline: "",
      successCriteria: "",
    })
  }

  const resolutionTypes = [
    "Government Document Release",
    "Scientific Analysis",
    "Expert Panel Review",
    "Independent Investigation",
    "Satellite/Probe Evidence",
    "Whistleblower Testimony",
    "Court Ruling",
    "Academic Study",
    "Media Investigation",
    "Public Records Request",
  ]

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

        /* Header styles */
        .header {
          padding: 15px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .conspiracy-site-vibe .header {
          background: linear-gradient(135deg, #000080, #4b0082, #8b008b);
          color: #00ff41;
          border-width: 3px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1);
          animation: headerGlow 3s ease-in-out infinite alternate;
        }

        .conspiracy-site-retro .header {
          background-color: rgba(0, 0, 128, 0.9);
          color: #ffff00;
          border-width: 3px;
          border-style: outset;
          border-color: #c0c0c0;
        }

        @keyframes headerGlow {
          0% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1); }
          100% { box-shadow: 0 0 30px rgba(0, 255, 65, 0.8), inset 0 0 30px rgba(0, 255, 65, 0.2); }
        }

        /* Navigation styles */
        .nav-bar {
          padding: 10px;
          position: relative;
          z-index: 2;
        }

        .conspiracy-site-vibe .nav-bar {
          background: linear-gradient(90deg, #2d2d2d, #1a1a1a, #2d2d2d);
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
        }

        .conspiracy-site-retro .nav-bar {
          background-color: rgba(192, 192, 192, 0.9);
          border-width: 2px;
          border-style: inset;
          border-color: #c0c0c0;
        }

        .nav-bar a {
          font-weight: bold;
          padding: 5px 10px;
          font-size: 12px;
          margin-right: 15px;
          transition: all 0.3s ease;
        }

        .conspiracy-site-vibe .nav-bar a {
          color: #00ff41;
          text-decoration: none;
          border-width: 1px;
          border-style: solid;
          border-color: transparent;
          text-shadow: 0 0 5px #00ff41;
        }

        .conspiracy-site-vibe .nav-bar a:hover {
          color: #ff00ff;
          border-color: #ff00ff;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
          text-shadow: 0 0 10px #ff00ff;
        }

        .conspiracy-site-retro .nav-bar a {
          color: #0000ff;
          text-decoration: underline;
          font-weight: normal;
        }

        .conspiracy-site-retro .nav-bar a:hover {
          color: #ff0000;
        }

        /* Container styles */
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 15px;
          position: relative;
          z-index: 2;
        }

        .conspiracy-site-vibe .container {
          background: rgba(0, 0, 0, 0.8);
          border-width: 2px;
          border-style: solid;
          border-color: #00ff41;
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
          backdrop-filter: blur(10px);
        }

        .conspiracy-site-retro .container {
          background-color: rgba(255, 255, 255, 0.95);
          border-width: 2px;
          border-style: inset;
          border-color: #c0c0c0;
        }

        /* Form styles */
        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-weight: bold;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .conspiracy-site-vibe .form-label {
          color: #00ff41;
          text-shadow: 0 0 5px #00ff41;
        }

        .conspiracy-site-retro .form-label {
          color: #000080;
        }

        .form-input, .form-textarea, .form-select {
          width: 100%;
          padding: 10px;
          border-width: 2px;
          font-size: 13px;
          box-sizing: border-box;
        }

        .conspiracy-site-vibe .form-input,
        .conspiracy-site-vibe .form-textarea,
        .conspiracy-site-vibe .form-select {
          background: rgba(0, 0, 0, 0.7);
          color: #00ff41;
          border-style: solid;
          border-color: #00ff41;
          font-family: "Courier New", monospace;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }

        .conspiracy-site-vibe .form-input:focus,
        .conspiracy-site-vibe .form-textarea:focus,
        .conspiracy-site-vibe .form-select:focus {
          outline: none;
          border-color: #ff00ff;
          box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
        }

        .conspiracy-site-retro .form-input,
        .conspiracy-site-retro .form-textarea,
        .conspiracy-site-retro .form-select {
          background: #ffffff;
          color: #000000;
          border-style: inset;
          border-color: #c0c0c0;
          font-family: "Times New Roman", Times, serif;
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }

        /* Button styles */
        .btn {
          padding: 12px 25px;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
          margin: 10px 5px;
          transition: all 0.3s ease;
          border-width: 2px;
        }

        .conspiracy-site-vibe .btn-primary {
          background: linear-gradient(135deg, #8b008b, #4b0082);
          color: #00ff41;
          border-style: solid;
          border-color: #00ff41;
          text-shadow: 0 0 5px #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
        }

        .conspiracy-site-vibe .btn-primary:hover {
          background: linear-gradient(135deg, #ff00ff, #8b008b);
          border-color: #ff00ff;
          color: #ffffff;
          text-shadow: 0 0 10px #ffffff;
          box-shadow: 0 0 25px rgba(255, 0, 255, 0.6);
          transform: scale(1.05);
        }

        .conspiracy-site-vibe .btn-secondary {
          background: linear-gradient(135deg, #2d2d2d, #1a1a1a);
          color: #00ff41;
          border-style: solid;
          border-color: #00ff41;
          text-shadow: 0 0 5px #00ff41;
        }

        .conspiracy-site-vibe .btn-secondary:hover {
          border-color: #ff00ff;
          color: #ff00ff;
          text-shadow: 0 0 10px #ff00ff;
        }

        .conspiracy-site-retro .btn-primary {
          background: #0000ff;
          color: #ffffff;
          border-style: outset;
          border-color: #0000ff;
        }

        .conspiracy-site-retro .btn-primary:hover {
          border-style: inset;
        }

        .conspiracy-site-retro .btn-secondary {
          background: #c0c0c0;
          color: #000000;
          border-style: outset;
          border-color: #c0c0c0;
        }

        .conspiracy-site-retro .btn-secondary:hover {
          border-style: inset;
        }

        /* Help section styles */
        .help-section {
          margin-top: 30px;
          padding: 20px;
          border-width: 2px;
          border-style: solid;
        }

        .conspiracy-site-vibe .help-section {
          background: rgba(0, 0, 0, 0.6);
          border-color: #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }

        .conspiracy-site-retro .help-section {
          background: rgba(255, 255, 255, 0.8);
          border-color: #000000;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .theme-toggle {
            top: 10px;
            right: 10px;
            padding: 8px 12px;
            font-size: 11px;
          }
          
          .container {
            padding: 10px;
          }
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isVibeMode ? "🕹️ RETRO MODE" : "🌈 VIBE MODE"}
      </button>

      {/* Header */}
      <div className="header">
        <h2
          style={{
            margin: 0,
            fontSize: isVibeMode ? "22px" : "20px",
            textShadow: isVibeMode ? "0 0 10px #00ff41" : "none",
            fontWeight: "bold",
          }}
        >
          {isVibeMode ? "🛸 ADD RESOLUTION MECHANISM 🛸" : "ADD RESOLUTION MECHANISM"}
        </h2>
        <div
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            marginTop: "8px",
            color: isVibeMode ? "#ff00ff" : "inherit",
            textShadow: isVibeMode ? "0 0 5px #ff00ff" : "none",
          }}
        >
          {isVibeMode
            ? "✨ Propose How This Market Should Be Resolved ✨"
            : "Propose How This Market Should Be Resolved"}
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="javascript:history.back()">{isVibeMode ? "🔙 BACK TO MARKET" : "← BACK TO MARKET"}</a>
        <a href="/">{isVibeMode ? "🏠 HOME" : "HOME"}</a>
        <a href="/markets">{isVibeMode ? "📊 ALL MARKETS" : "ALL MARKETS"}</a>
        <a href="/portfolio">{isVibeMode ? "💼 MY PORTFOLIO" : "MY PORTFOLIO"}</a>
      </div>

      <div className="container">
        {/* Form Section */}
        <div
          style={{
            background: isVibeMode
              ? "linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 255, 0.1))"
              : "rgba(255, 255, 153, 0.8)",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: isVibeMode ? "#00ff41" : "#000000",
            padding: "25px",
            marginBottom: "20px",
            boxShadow: isVibeMode ? "0 0 15px rgba(0, 255, 65, 0.3)" : "none",
          }}
        >
          <div
            style={{
              fontSize: isVibeMode ? "18px" : "16px",
              fontWeight: "bold",
              color: isVibeMode ? "#00ff41" : "#000080",
              marginBottom: "20px",
              textShadow: isVibeMode ? "0 0 10px #00ff41" : "none",
            }}
          >
            {isVibeMode ? "⚖️ RESOLUTION MECHANISM FORM" : "RESOLUTION MECHANISM FORM"}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{isVibeMode ? "📝" : ""} Resolution Mechanism Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter a clear, descriptive name for your resolution mechanism"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{isVibeMode ? "📋" : ""} Detailed Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Provide a comprehensive description of how this resolution mechanism would work, what evidence it would provide, and how it would definitively resolve the market..."
                className="form-textarea"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{isVibeMode ? "🔍" : ""} Resolution Type *</label>
              <select name="type" value={formData.type} onChange={handleInputChange} className="form-select" required>
                <option value="">Select a resolution type...</option>
                {resolutionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">{isVibeMode ? "📅" : ""} Proposed Deadline (Optional)</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{isVibeMode ? "✅" : ""} Success Criteria (Optional)</label>
              <textarea
                name="successCriteria"
                value={formData.successCriteria}
                onChange={handleInputChange}
                placeholder="Define specific criteria that would constitute success for this resolution mechanism..."
                className="form-textarea"
                style={{ minHeight: "80px" }}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <button type="submit" className="btn btn-primary">
                {isVibeMode ? "🚀 SUBMIT RESOLUTION MECHANISM" : "SUBMIT RESOLUTION MECHANISM"}
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = "javascript:history.back()")}
                className="btn btn-secondary"
              >
                {isVibeMode ? "❌ CANCEL" : "CANCEL"}
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="help-section">
          <div
            style={{
              fontSize: isVibeMode ? "16px" : "14px",
              fontWeight: "bold",
              color: isVibeMode ? "#ff00ff" : "#000080",
              marginBottom: "15px",
              textShadow: isVibeMode ? "0 0 5px #ff00ff" : "none",
            }}
          >
            {isVibeMode
              ? "💡 TIPS FOR CREATING GOOD RESOLUTION MECHANISMS"
              : "TIPS FOR CREATING GOOD RESOLUTION MECHANISMS"}
          </div>
          <div
            style={{
              fontSize: "12px",
              lineHeight: 1.6,
              color: isVibeMode ? "#00ffff" : "#000000",
              textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <strong>{isVibeMode ? "🎯" : "•"} Be Specific:</strong> Clearly define what evidence or outcome would
              resolve the market definitively.
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong>{isVibeMode ? "⏰" : "•"} Set Realistic Timelines:</strong> Consider how long it might
              realistically take to obtain the required evidence.
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong>{isVibeMode ? "🔍" : "•"} Consider Feasibility:</strong> Ensure your proposed mechanism is
              actually achievable with current technology and resources.
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong>{isVibeMode ? "⚖️" : "•"} Avoid Bias:</strong> Design mechanisms that would provide objective,
              verifiable evidence rather than subjective interpretations.
            </div>
            <div>
              <strong>{isVibeMode ? "📊" : "•"} Think About Edge Cases:</strong> Consider what would happen if the
              evidence is inconclusive or contradictory.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
