"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

export default function MarketPage() {
  const params = useParams()
  const [betAmount, setBetAmount] = useState("")
  const [fundAmount, setFundAmount] = useState("")
  const [betType, setBetType] = useState("YES")
  const [selectedTimeframe, setSelectedTimeframe] = useState("1d")
  const [newPost, setNewPost] = useState("")
  const [chartData, setChartData] = useState([])
  const [isVibeMode, setIsVibeMode] = useState(true)

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

  // Generate random chart data
  const generateChartData = (timeframe) => {
    const dataPoints = {
      "1hr": 60,
      "6hr": 72,
      "1d": 96,
      "1w": 168,
      "1m": 240,
    }

    const points = dataPoints[timeframe] || 96
    const data = []
    let yesPrice = 0.11 // Starting price for moon landing conspiracy
    let noPrice = 0.89

    for (let i = 0; i < points; i++) {
      // Add some realistic price movement
      const volatility = 0.02
      const change = (Math.random() - 0.5) * volatility
      yesPrice = Math.max(0.01, Math.min(0.99, yesPrice + change))
      noPrice = 1 - yesPrice

      data.push({
        time: i,
        yesPrice: yesPrice,
        noPrice: noPrice,
        volume: Math.random() * 1000 + 500,
      })
    }

    return data
  }

  // Generate chart on component mount and timeframe change
  useEffect(() => {
    setChartData(generateChartData(selectedTimeframe))
  }, [selectedTimeframe])

  // SVG Chart Component
  const PriceChart = ({ data, timeframe }) => {
    if (!data || data.length === 0) return null

    const width = 600
    const height = 200
    const padding = 40

    const maxPrice = Math.max(...data.map((d) => Math.max(d.yesPrice, d.noPrice)))
    const minPrice = Math.min(...data.map((d) => Math.min(d.yesPrice, d.noPrice)))

    const xScale = (index) => padding + (index / (data.length - 1)) * (width - 2 * padding)
    const yScale = (price) => height - padding - ((price - minPrice) / (maxPrice - minPrice)) * (height - 2 * padding)

    const yesPath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(d.yesPrice)}`).join(" ")
    const noPath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(d.noPrice)}`).join(" ")

    if (isVibeMode) {
      return (
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(75, 0, 130, 0.3))",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#00ff41",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 0 20px rgba(0, 255, 65, 0.3)",
          }}
        >
          <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 40" fill="none" stroke="rgba(0, 255, 65, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Price lines */}
            <path d={yesPath} fill="none" stroke="#00ff00" strokeWidth="3" filter="drop-shadow(0 0 5px #00ff00)" />
            <path d={noPath} fill="none" stroke="#ff0040" strokeWidth="3" filter="drop-shadow(0 0 5px #ff0040)" />

            {/* Data points */}
            {data.map((d, i) => (
              <g key={i}>
                <circle
                  cx={xScale(i)}
                  cy={yScale(d.yesPrice)}
                  r="3"
                  fill="#00ff00"
                  filter="drop-shadow(0 0 3px #00ff00)"
                />
                <circle
                  cx={xScale(i)}
                  cy={yScale(d.noPrice)}
                  r="3"
                  fill="#ff0040"
                  filter="drop-shadow(0 0 3px #ff0040)"
                />
              </g>
            ))}

            {/* Y-axis labels */}
            <text x="10" y={yScale(maxPrice)} fill="#00ff41" fontSize="10" textAnchor="start">
              ${maxPrice.toFixed(2)}
            </text>
            <text x="10" y={yScale(minPrice)} fill="#00ff41" fontSize="10" textAnchor="start">
              ${minPrice.toFixed(2)}
            </text>

            {/* Legend */}
            <g transform={`translate(${width - 120}, 20)`}>
              <rect x="0" y="0" width="110" height="50" fill="rgba(0, 0, 0, 0.7)" stroke="#00ff41" strokeWidth="1" />
              <line x1="10" y1="15" x2="25" y2="15" stroke="#00ff00" strokeWidth="2" />
              <text x="30" y="18" fill="#00ff00" fontSize="10">
                YES Price
              </text>
              <line x1="10" y1="35" x2="25" y2="35" stroke="#ff0040" strokeWidth="2" />
              <text x="30" y="38" fill="#ff0040" fontSize="10">
                NO Price
              </text>
            </g>

            {/* Current prices display */}
            <g transform={`translate(${width - 120}, 80)`}>
              <rect x="0" y="0" width="110" height="40" fill="rgba(0, 0, 0, 0.8)" stroke="#ff00ff" strokeWidth="1" />
              <text x="5" y="15" fill="#00ff00" fontSize="12" fontWeight="bold">
                YES: ${data[data.length - 1]?.yesPrice.toFixed(3)}
              </text>
              <text x="5" y="30" fill="#ff0040" fontSize="12" fontWeight="bold">
                NO: ${data[data.length - 1]?.noPrice.toFixed(3)}
              </text>
            </g>
          </svg>

          {/* Chart info */}
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              color: "#00ffff",
              fontSize: "11px",
              textShadow: "0 0 3px #00ffff",
            }}
          >
            📊 Live Price Movement - {timeframe.toUpperCase()} | Volume: ${data[data.length - 1]?.volume.toFixed(0)} |
            Spread: ${Math.abs(data[data.length - 1]?.yesPrice - data[data.length - 1]?.noPrice).toFixed(3)}
          </div>
        </div>
      )
    } else {
      // Retro mode chart
      return (
        <div
          style={{
            background: "#f8f8f8",
            borderWidth: "2px",
            borderStyle: "inset",
            borderColor: "#c0c0c0",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{ background: "#ffffff", borderWidth: "1px", borderStyle: "solid", borderColor: "#000000" }}
          >
            {/* Grid lines */}
            <defs>
              <pattern id="retro-grid" width="50" height="40" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#cccccc" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#retro-grid)" />

            {/* Price lines */}
            <path d={yesPath} fill="none" stroke="#008000" strokeWidth="2" />
            <path d={noPath} fill="none" stroke="#ff0000" strokeWidth="2" />

            {/* Data points */}
            {data.map((d, i) => (
              <g key={i}>
                <circle cx={xScale(i)} cy={yScale(d.yesPrice)} r="2" fill="#008000" />
                <circle cx={xScale(i)} cy={yScale(d.noPrice)} r="2" fill="#ff0000" />
              </g>
            ))}

            {/* Y-axis labels */}
            <text x="10" y={yScale(maxPrice)} fill="#000000" fontSize="10" textAnchor="start">
              ${maxPrice.toFixed(2)}
            </text>
            <text x="10" y={yScale(minPrice)} fill="#000000" fontSize="10" textAnchor="start">
              ${minPrice.toFixed(2)}
            </text>

            {/* Legend */}
            <g transform={`translate(${width - 120}, 20)`}>
              <rect x="0" y="0" width="110" height="50" fill="#ffffff" stroke="#000000" strokeWidth="1" />
              <line x1="10" y1="15" x2="25" y2="15" stroke="#008000" strokeWidth="2" />
              <text x="30" y="18" fill="#000000" fontSize="10">
                YES Price
              </text>
              <line x1="10" y1="35" x2="25" y2="35" stroke="#ff0000" strokeWidth="2" />
              <text x="30" y="38" fill="#000000" fontSize="10">
                NO Price
              </text>
            </g>

            {/* Current prices display */}
            <g transform={`translate(${width - 120}, 80)`}>
              <rect x="0" y="0" width="110" height="40" fill="#e0e0e0" stroke="#000000" strokeWidth="1" />
              <text x="5" y="15" fill="#008000" fontSize="12" fontWeight="bold">
                YES: ${data[data.length - 1]?.yesPrice.toFixed(3)}
              </text>
              <text x="5" y="30" fill="#ff0000" fontSize="12" fontWeight="bold">
                NO: ${data[data.length - 1]?.noPrice.toFixed(3)}
              </text>
            </g>
          </svg>

          {/* Chart info */}
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              color: "#000000",
              fontSize: "11px",
            }}
          >
            PRICE CHART - {timeframe.toUpperCase()} | Volume: ${data[data.length - 1]?.volume.toFixed(0)} | Spread: $
            {Math.abs(data[data.length - 1]?.yesPrice - data[data.length - 1]?.noPrice).toFixed(3)}
          </div>
        </div>
      )
    }
  }

  // Mock data for different markets - in real app this would come from API/database
  const marketData = {
    1: {
      title: "Apollo Moon Landing: Real Achievement vs Hollywood Hoax",
      description:
        "Did NASA really land astronauts on the moon in 1969, or was it an elaborate film production staged to win the Space Race against the Soviet Union?",
      yesPrice: 0.11,
      noPrice: 0.89,
      volume: 8930,
      posts: 1203,
      category: "Space & UFOs",
      dateCreated: "February 8, 2024",
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
    },
  }

  // Mock resolution mechanisms data
  const resolutionMechanisms = [
    {
      id: 1,
      name: "NASA Archive Document Release",
      description:
        "Market resolves YES if NASA releases classified documents that confirm the moon landing was staged. Market resolves NO if documents confirm authentic lunar missions or no new evidence emerges by December 2025.",
      type: "Government Document Release",
      votes: 23,
    },
    {
      id: 2,
      name: "Independent Lunar Probe",
      description:
        "A probe is sent to the moon to the coordinates of the supposed 1969 lunar landing. It searches for evidence including the flag, debris, or footprints.",
      type: "Scientific Analysis",
      votes: 18,
    },
    {
      id: 3,
      name: "Lunar Optical Satellite",
      description: "Independent Satellite captures images of the landing site and returns conclusive images.",
      type: "Scientific Analysis",
      votes: 12,
    },
  ]

  const market = marketData[params.id] || marketData[1]

  const handleBuyYes = () => {
    if (!betAmount || Number.parseFloat(betAmount) <= 0) {
      alert("Please enter a valid amount!")
      return
    }
    alert(`Bought YES shares: $${betAmount}`)
    setBetAmount("")
  }

  const handleBuyNo = () => {
    if (!betAmount || Number.parseFloat(betAmount) <= 0) {
      alert("Please enter a valid amount!")
      return
    }
    alert(`Bought NO shares: $${betAmount}`)
    setBetAmount("")
  }

  const handleSellYes = () => {
    alert("Sell YES functionality coming soon!")
  }

  const handleSellNo = () => {
    alert("Sell NO functionality coming soon!")
  }

  const handleFundMarket = (e) => {
    e.preventDefault()
    if (!fundAmount || Number.parseFloat(fundAmount) <= 0) {
      alert("Please enter a valid fund amount!")
      return
    }
    alert(`Market funded with: $${fundAmount}`)
    setFundAmount("")
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
          background-color: #c0c0c0;
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
          background-color: #000080;
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
          background-color: #c0c0c0;
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
          max-width: 1000px;
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
          background-color: #ffffff;
          border-width: 2px;
          border-style: inset;
          border-color: #c0c0c0;
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
        <h2
          style={{
            margin: 0,
            fontSize: isVibeMode ? "22px" : "20px",
            textShadow: isVibeMode ? "0 0 10px #00ff41" : "none",
            fontWeight: "bold",
          }}
        >
          {isVibeMode ? "🛸 MARKET DETAILS 🛸" : "MARKET DETAILS"}
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
            ? "✨ Trade on the Truth Behind History's Mysteries ✨"
            : "Trade on the Truth Behind History's Mysteries"}
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <a href="/">{isVibeMode ? "🏠 BACK TO MARKETS" : "← BACK TO MARKETS"}</a>
        <a href="/markets">{isVibeMode ? "📊 ALL MARKETS" : "ALL MARKETS"}</a>
        <a href="/portfolio">{isVibeMode ? "💼 MY PORTFOLIO" : "MY PORTFOLIO"}</a>
        <a href="/forum">{isVibeMode ? "💬 FORUM" : "FORUM"}</a>
        <a href="/connect">{isVibeMode ? "🔗 CONNECT WALLET" : "CONNECT WALLET"}</a>
      </div>

      <div className="container">
        {/* Market Header */}
        <div
          style={{
            background: isVibeMode
              ? "linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(255, 0, 255, 0.1))"
              : "#ffff99",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: isVibeMode ? "#00ff41" : "#000000",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: isVibeMode ? "0 0 15px rgba(0, 255, 65, 0.3)" : "none",
          }}
        >
          <div
            style={{
              fontSize: isVibeMode ? "20px" : "18px",
              fontWeight: "bold",
              color: isVibeMode ? "#00ff41" : "#000080",
              marginBottom: "15px",
              textShadow: isVibeMode ? "0 0 10px #00ff41" : "none",
            }}
          >
            {market.title}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "12px",
              marginBottom: "15px",
              color: isVibeMode ? "#00ffff" : "#000000",
              textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
            }}
          >
            <span>
              <strong>{isVibeMode ? "📁" : ""} Category:</strong> {market.category}
            </span>
            <span>
              <strong>{isVibeMode ? "📅" : ""} Created:</strong> {market.dateCreated}
            </span>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "20px" }}
          >
            <div style={{ display: "flex", gap: "25px", alignItems: "flex-start", flex: 1 }}>
              <div>
                <div style={{ marginBottom: "15px" }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                      marginBottom: "8px",
                      color: isVibeMode ? "#00ff41" : "#000080",
                      textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
                    }}
                  >
                    {isVibeMode ? "💰" : ""} Fund This Market:
                  </label>
                  <form onSubmit={handleFundMarket} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "bold", color: isVibeMode ? "#00ff41" : "#000080" }}>
                      $
                    </span>
                    <input
                      type="number"
                      value={fundAmount}
                      onChange={(e) => setFundAmount(e.target.value)}
                      placeholder="0.00"
                      min="0.01"
                      step="0.01"
                      style={{
                        padding: "8px",
                        borderWidth: "2px",
                        borderStyle: isVibeMode ? "solid" : "inset",
                        borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
                        background: isVibeMode ? "rgba(0, 0, 0, 0.7)" : "#ffffff",
                        color: isVibeMode ? "#00ff41" : "#000000",
                        fontFamily: isVibeMode ? '"Courier New", monospace' : '"Times New Roman", Times, serif',
                        fontSize: "13px",
                        width: "140px",
                        boxShadow: isVibeMode ? "0 0 10px rgba(0, 255, 65, 0.3)" : "none",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        background: isVibeMode ? "linear-gradient(135deg, #0066ff, #0033cc)" : "#0000ff",
                        color: "#ffffff",
                        borderWidth: "2px",
                        borderStyle: isVibeMode ? "solid" : "outset",
                        borderColor: isVibeMode ? "#0066ff" : "#0000ff",
                        padding: "10px 18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "13px",
                        marginTop: "15px",
                        transition: "all 0.3s ease",
                        textShadow: isVibeMode ? "0 0 5px #ffffff" : "none",
                        boxShadow: isVibeMode ? "0 0 10px rgba(0, 102, 255, 0.3)" : "none",
                      }}
                    >
                      {isVibeMode ? "💰 FUND" : "FUND"}
                    </button>
                  </form>
                  <div
                    style={{
                      fontSize: "11px",
                      color: isVibeMode ? "#00ffff" : "#666666",
                      marginTop: "8px",
                      textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
                    }}
                  >
                    {isVibeMode ? "🔗" : ""} Connect wallet to fund market
                  </div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    margin: "15px 0",
                    color: isVibeMode ? "#00ffff" : "#000000",
                    textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
                  }}
                >
                  {market.description}
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "25px", minWidth: "160px" }}>
              <div
                style={{
                  width: "160px",
                  height: "120px",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: isVibeMode ? "#00ff41" : "#000000",
                  background: isVibeMode
                    ? "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(75, 0, 130, 0.3))"
                    : "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  color: isVibeMode ? "#00ffff" : "#666666",
                  textAlign: "center",
                  textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
                  boxShadow: isVibeMode ? "0 0 15px rgba(0, 255, 65, 0.3)" : "none",
                }}
              >
                {isVibeMode ? "🖼️" : ""} [Market Image]
                <br />
                <small>{isVibeMode ? "📤" : ""} Upload evidence photo</small>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "12px",
              color: isVibeMode ? "#00ff41" : "#000000",
              background: isVibeMode ? "rgba(0, 0, 0, 0.6)" : "#e0e0e0",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isVibeMode ? "#00ff41" : "#000000",
              padding: "8px",
              textShadow: isVibeMode ? "0 0 3px #00ff41" : "none",
            }}
          >
            <span>
              <strong>{isVibeMode ? "📈" : ""} 24h Volume:</strong> ${market.volume.toLocaleString()}
            </span>
            <span>
              <strong>{isVibeMode ? "💬" : ""} Total Posts:</strong> {market.posts}
            </span>
            <span>
              <strong>{isVibeMode ? "🆔" : ""} Market ID:</strong> #{params.id}
            </span>
          </div>
        </div>

        {/* Trading Section */}
        <div
          style={{
            background: isVibeMode ? "rgba(0, 0, 0, 0.6)" : "#f0f0f0",
            borderWidth: "2px",
            borderStyle: isVibeMode ? "solid" : "outset",
            borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
            marginBottom: "20px",
            boxShadow: isVibeMode ? "0 0 15px rgba(0, 255, 65, 0.2)" : "none",
          }}
        >
          <div
            style={{
              background: isVibeMode ? "linear-gradient(135deg, #8b008b, #4b0082, #000080)" : "#008000",
              color: isVibeMode ? "#00ff41" : "#ffffff",
              padding: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              borderBottomWidth: "2px",
              borderBottomStyle: "solid",
              borderBottomColor: isVibeMode ? "#00ff41" : "#000000",
              textShadow: isVibeMode ? "0 0 10px #00ff41" : "none",
            }}
          >
            {isVibeMode ? "🎯" : ""} PLACE YOUR BET
          </div>
          <div style={{ padding: "20px", background: isVibeMode ? "rgba(0, 0, 0, 0.4)" : "#ffffff" }}>
            <div style={{ display: "flex", gap: "25px", justifyContent: "center" }}>
              {/* YES Section */}
              <div style={{ textAlign: "center", flex: 1 }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: isVibeMode ? "#00ff00" : "#008000",
                    marginBottom: "8px",
                    textShadow: isVibeMode ? "0 0 5px #00ff00" : "none",
                  }}
                >
                  {isVibeMode ? "✅" : ""} YES - Moon Landing was FAKE
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: isVibeMode ? "#00ff00" : "#008000",
                    marginBottom: "15px",
                    textShadow: isVibeMode ? "0 0 10px #00ff00" : "none",
                  }}
                >
                  ${market.yesPrice.toFixed(2)}
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                      marginBottom: "8px",
                      color: isVibeMode ? "#00ff41" : "#000080",
                      textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
                    }}
                  >
                    {isVibeMode ? "💵" : ""} Amount (USDC):
                  </label>
                  <span style={{ fontSize: "16px", fontWeight: "bold", color: isVibeMode ? "#00ff41" : "#000080" }}>
                    $
                  </span>
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                    style={{
                      padding: "8px",
                      borderWidth: "2px",
                      borderStyle: isVibeMode ? "solid" : "inset",
                      borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
                      background: isVibeMode ? "rgba(0, 0, 0, 0.7)" : "#ffffff",
                      color: isVibeMode ? "#00ff41" : "#000000",
                      fontFamily: isVibeMode ? '"Courier New", monospace' : '"Times New Roman", Times, serif',
                      fontSize: "13px",
                      width: "140px",
                      boxShadow: isVibeMode ? "0 0 10px rgba(0, 255, 65, 0.3)" : "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button
                    onClick={handleBuyYes}
                    style={{
                      background: isVibeMode ? "linear-gradient(135deg, #8b008b, #4b0082)" : "#008000",
                      color: isVibeMode ? "#00ff41" : "#ffffff",
                      borderWidth: "2px",
                      borderStyle: isVibeMode ? "solid" : "outset",
                      borderColor: isVibeMode ? "#00ff41" : "#008000",
                      padding: "10px 18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "13px",
                      margin: "8px",
                      transition: "all 0.3s ease",
                      textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
                      boxShadow: isVibeMode ? "0 0 10px rgba(0, 255, 65, 0.3)" : "none",
                    }}
                  >
                    {isVibeMode ? "🛒" : ""} BUY YES
                  </button>
                  <button
                    onClick={handleSellYes}
                    style={{
                      background: isVibeMode ? "linear-gradient(135deg, #ff0040, #8b0000)" : "#ff0000",
                      color: "#ffffff",
                      borderWidth: "2px",
                      borderStyle: isVibeMode ? "solid" : "outset",
                      borderColor: isVibeMode ? "#ff0040" : "#ff0000",
                      padding: "10px 18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "13px",
                      margin: "8px",
                      transition: "all 0.3s ease",
                      textShadow: isVibeMode ? "0 0 5px #ffffff" : "none",
                      boxShadow: isVibeMode ? "0 0 10px rgba(255, 0, 64, 0.3)" : "none",
                    }}
                  >
                    {isVibeMode ? "💸" : ""} SELL YES
                  </button>
                </div>
              </div>

              {/* NO Section */}
              <div style={{ textAlign: "center", flex: 1 }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: isVibeMode ? "#ff0040" : "#ff0000",
                    marginBottom: "8px",
                    textShadow: isVibeMode ? "0 0 5px #ff0040" : "none",
                  }}
                >
                  {isVibeMode ? "❌" : ""} NO - Moon Landing was REAL
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: isVibeMode ? "#ff0040" : "#ff0000",
                    marginBottom: "15px",
                    textShadow: isVibeMode ? "0 0 10px #ff0040" : "none",
                  }}
                >
                  ${market.noPrice.toFixed(2)}
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                      marginBottom: "8px",
                      color: isVibeMode ? "#00ff41" : "#000080",
                      textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
                    }}
                  >
                    {isVibeMode ? "💵" : ""} Amount (USDC):
                  </label>
                  <span style={{ fontSize: "16px", fontWeight: "bold", color: isVibeMode ? "#00ff41" : "#000080" }}>
                    $
                  </span>
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                    style={{
                      padding: "8px",
                      borderWidth: "2px",
                      borderStyle: isVibeMode ? "solid" : "inset",
                      borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
                      background: isVibeMode ? "rgba(0, 0, 0, 0.7)" : "#ffffff",
                      color: isVibeMode ? "#00ff41" : "#000000",
                      fontFamily: isVibeMode ? '"Courier New", monospace' : '"Times New Roman", Times, serif',
                      fontSize: "13px",
                      width: "140px",
                      boxShadow: isVibeMode ? "0 0 10px rgba(0, 255, 65, 0.3)" : "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button
                    onClick={handleBuyNo}
                    style={{
                      background: isVibeMode ? "linear-gradient(135deg, #8b008b, #4b0082)" : "#008000",
                      color: isVibeMode ? "#00ff41" : "#ffffff",
                      borderWidth: "2px",
                      borderStyle: isVibeMode ? "solid" : "outset",
                      borderColor: isVibeMode ? "#00ff41" : "#008000",
                      padding: "10px 18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "13px",
                      margin: "8px",
                      transition: "all 0.3s ease",
                      textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
                      boxShadow: isVibeMode ? "0 0 10px rgba(0, 255, 65, 0.3)" : "none",
                    }}
                  >
                    {isVibeMode ? "🛒" : ""} BUY NO
                  </button>
                  <button
                    onClick={handleSellNo}
                    style={{
                      background: isVibeMode ? "linear-gradient(135deg, #ff0040, #8b0000)" : "#ff0000",
                      color: "#ffffff",
                      borderWidth: "2px",
                      borderStyle: isVibeMode ? "solid" : "outset",
                      borderColor: isVibeMode ? "#ff0040" : "#ff0000",
                      padding: "10px 18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "13px",
                      margin: "8px",
                      transition: "all 0.3s ease",
                      textShadow: isVibeMode ? "0 0 5px #ffffff" : "none",
                      boxShadow: isVibeMode ? "0 0 10px rgba(255, 0, 64, 0.3)" : "none",
                    }}
                  >
                    {isVibeMode ? "💸" : ""} SELL NO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div
          style={{
            background: isVibeMode ? "rgba(0, 0, 0, 0.6)" : "#f0f0f0",
            borderWidth: "2px",
            borderStyle: isVibeMode ? "solid" : "outset",
            borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
            marginBottom: "20px",
            boxShadow: isVibeMode ? "0 0 15px rgba(0, 255, 65, 0.2)" : "none",
          }}
        >
          <div
            style={{
              background: isVibeMode ? "linear-gradient(135deg, #8b008b, #4b0082, #000080)" : "#008000",
              color: isVibeMode ? "#00ff41" : "#ffffff",
              padding: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              borderBottomWidth: "2px",
              borderBottomStyle: "solid",
              borderBottomColor: isVibeMode ? "#00ff41" : "#000000",
              textShadow: isVibeMode ? "0 0 10px #00ff41" : "none",
            }}
          >
            {isVibeMode ? "📈" : ""} PRICE CHART
          </div>
          <div style={{ padding: "20px", background: isVibeMode ? "rgba(0, 0, 0, 0.4)" : "#ffffff" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
              {["1hr", "6hr", "1d", "1w", "1m"].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  style={{
                    background:
                      selectedTimeframe === timeframe
                        ? isVibeMode
                          ? "linear-gradient(135deg, #8b008b, #4b0082)"
                          : "#000080"
                        : isVibeMode
                          ? "rgba(0, 0, 0, 0.7)"
                          : "#c0c0c0",
                    color: selectedTimeframe === timeframe ? "#ffffff" : isVibeMode ? "#00ff41" : "#000000",
                    borderWidth: "2px",
                    borderStyle: isVibeMode ? "solid" : selectedTimeframe === timeframe ? "inset" : "outset",
                    borderColor:
                      selectedTimeframe === timeframe
                        ? isVibeMode
                          ? "#ff00ff"
                          : "#c0c0c0"
                        : isVibeMode
                          ? "#00ff41"
                          : "#c0c0c0",
                    padding: "5px 12px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    textShadow:
                      selectedTimeframe === timeframe
                        ? isVibeMode
                          ? "0 0 5px #ffffff"
                          : "none"
                        : isVibeMode
                          ? "0 0 3px #00ff41"
                          : "none",
                  }}
                >
                  {timeframe.toUpperCase()}
                </button>
              ))}
            </div>
            <PriceChart data={chartData} timeframe={selectedTimeframe} />
          </div>
        </div>

        {/* Resolution Mechanisms */}
        <div
          style={{
            background: isVibeMode ? "rgba(0, 0, 0, 0.6)" : "#f0f0f0",
            borderWidth: "2px",
            borderStyle: isVibeMode ? "solid" : "outset",
            borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
            marginBottom: "20px",
            boxShadow: isVibeMode ? "0 0 15px rgba(0, 255, 65, 0.2)" : "none",
          }}
        >
          <div
            style={{
              background: isVibeMode ? "linear-gradient(135deg, #8b008b, #4b0082, #000080)" : "#008000",
              color: isVibeMode ? "#00ff41" : "#ffffff",
              padding: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              borderBottomWidth: "2px",
              borderBottomStyle: "solid",
              borderBottomColor: isVibeMode ? "#00ff41" : "#000000",
              textShadow: isVibeMode ? "0 0 10px #00ff41" : "none",
            }}
          >
            {isVibeMode ? "⚖️" : ""} HOW TO RESOLVE THIS MARKET
          </div>
          <div style={{ padding: "20px", background: isVibeMode ? "rgba(0, 0, 0, 0.4)" : "#ffffff" }}>
            {/* Resolution Mechanism Cards */}
            {resolutionMechanisms.map((mechanism) => (
              <div
                key={mechanism.id}
                style={{
                  background: isVibeMode ? "rgba(0, 0, 0, 0.6)" : "#ffffff",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isVibeMode ? "#00ff41" : "#000000",
                  padding: "15px",
                  marginBottom: "15px",
                  boxShadow: isVibeMode ? "0 0 10px rgba(0, 255, 65, 0.2)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    paddingBottom: "8px",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: isVibeMode ? "#00ff41" : "#cccccc",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: isVibeMode ? "#ff00ff" : "#0000ff",
                      textShadow: isVibeMode ? "0 0 5px #ff00ff" : "none",
                    }}
                  >
                    {mechanism.name}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: 1.5,
                      marginBottom: "10px",
                      color: isVibeMode ? "#00ffff" : "#000000",
                      textShadow: isVibeMode ? "0 0 3px #00ffff" : "none",
                    }}
                  >
                    {mechanism.description}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11px",
                      color: isVibeMode ? "#00ff41" : "#666666",
                      textShadow: isVibeMode ? "0 0 3px #00ff41" : "none",
                    }}
                  >
                    <span>
                      <strong>{isVibeMode ? "🔍" : ""} Type:</strong> {mechanism.type}
                    </span>
                    <span>
                      <strong>{isVibeMode ? "🗳️" : ""} Votes:</strong> {mechanism.votes}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => alert("View more resolution mechanisms")}
              style={{
                background: isVibeMode ? "linear-gradient(135deg, #2d2d2d, #1a1a1a)" : "#c0c0c0",
                color: isVibeMode ? "#00ff41" : "#000000",
                borderWidth: "2px",
                borderStyle: isVibeMode ? "solid" : "outset",
                borderColor: isVibeMode ? "#00ff41" : "#c0c0c0",
                padding: "8px 20px",
                fontSize: "12px",
                cursor: "pointer",
                margin: "15px 0 20px 0",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                textShadow: isVibeMode ? "0 0 5px #00ff41" : "none",
              }}
            >
              {isVibeMode ? "👁️" : ""} View More
            </button>

            <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "15px" }}>
              <button
                onClick={() => (window.location.href = "/add-resolution")}
                style={{
                  background: isVibeMode ? "linear-gradient(135deg, #ff6600, #cc4400)" : "#ff6600",
                  color: "#ffffff",
                  borderWidth: "2px",
                  borderStyle: isVibeMode ? "solid" : "outset",
                  borderColor: isVibeMode ? "#ff6600" : "#ff6600",
                  padding: "10px 20px",
                  fontSize: "13px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  textShadow: isVibeMode ? "0 0 5px #ffffff" : "none",
                  boxShadow: isVibeMode ? "0 0 10px rgba(255, 102, 0, 0.3)" : "none",
                }}
              >
                {isVibeMode ? "➕" : ""} ADD RESOLUTION MECHANISM
              </button>

              <button
                onClick={() => alert("Vote functionality coming soon!")}
                style={{
                  background: isVibeMode ? "linear-gradient(135deg, #008000, #004000)" : "#008000",
                  color: "#ffffff",
                  borderWidth: "2px",
                  borderStyle: isVibeMode ? "solid" : "outset",
                  borderColor: isVibeMode ? "#008000" : "#008000",
                  padding: "10px 20px",
                  fontSize: "13px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  textShadow: isVibeMode ? "0 0 5px #ffffff" : "none",
                  boxShadow: isVibeMode ? "0 0 10px rgba(0, 128, 0, 0.3)" : "none",
                }}
              >
                {isVibeMode ? "🗳️" : ""} VOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
