:root {
    --primary: #2563eb;
    --dark: #1e293b;
    --light: #f8fafc;
}

body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    line-height: 1.6;
    color: var(--dark);
    background-color: var(--light);
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 5%;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: bold;
}

/* Hero Section */
.hero {
    height: 80vh;
    background: linear-gradient(135deg, #1e293b 0%, #2563eb 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.btn-primary {
    display: inline-block;
    padding: 12px 30px;
    background: white;
    color: var(--primary);
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    transition: 0.3s;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

/* Features Section */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 5rem 10%;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    text-align: center;
}

footer {
    text-align: center;
    padding: 2rem;
    background: #f1f5f9;
}
