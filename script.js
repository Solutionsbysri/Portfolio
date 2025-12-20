:root {
    --bg: #0f172a;
    --card-bg: rgba(255, 255, 255, 0.03);
    --accent: #38bdf8;
    --text-main: #f8fafc;
    --text-dim: #94a3b8;
    --gradient: linear-gradient(90deg, #38bdf8, #818cf8);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; }
.logo span { color: var(--accent); }

.nav-links a {
    text-decoration: none;
    color: var(--text-dim);
    margin-left: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.3s;
}

.nav-links a:hover { color: var(--text-main); }

.nav-btn {
    background: var(--text-main);
    color: var(--bg) !important;
    padding: 10px 20px;
    border-radius: 8px;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 10%;
}

.badge {
    background: rgba(56, 189, 248, 0.1);
    color: var(--accent);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid rgba(56, 189, 248, 0.2);
}

.hero h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin: 20px 0;
    letter-spacing: -2px;
}

.gradient-text {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    max-width: 600px;
    margin: 0 auto 30px;
    color: var(--text-dim);
    font-size: 1.1rem;
}

/* Buttons */
.btn-main {
    padding: 15px 35px;
    background: var(--gradient);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    transition: 0.3s;
}

.btn-main:hover { opacity: 0.9; transform: translateY(-3px); }

.btn-outline {
    margin-left: 15px;
    padding: 15px 35px;
    border: 1px solid #334155;
    color: white;
    text-decoration: none;
    border-radius: 12px;
}

/* Cards Section */
.grid-section { padding: 100px 10%; }

.section-header { text-align: center; margin-bottom: 50px; }
.line { width: 50px; height: 4px; background: var(--accent); margin: 10px auto; border-radius: 2px; }

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.glass-card {
    background: var(--card-bg);
    border: 1px solid rgba(255,255,255,0.05);
    padding: 40px;
    border-radius: 24px;
    transition: 0.4s;
}

.glass-card:hover {
    background: rgba(255,255,255,0.06);
    transform: translateY(-10px);
    border-color: rgba(56, 189, 248, 0.3);
}

.icon { font-size: 2rem; margin-bottom: 20px; }

footer {
    padding: 50px;
    text-align: center;
    border-top: 1px solid #1e293b;
    color: var(--text-dim);
    font-size: 0.9rem;
}
    background: #f1f5f9;
}
