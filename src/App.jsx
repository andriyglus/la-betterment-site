import { useState, useEffect } from "react";
import "./app.css";

export default function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh", width: "100%", transition: "background 0.3s, color 0.3s" }}>

      {/* NAV */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "var(--nav-bg)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "16px",
        fontSize: "0.95rem",
        fontWeight: 500,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s"
      }}>
        <a href="#about" style={{ color: "var(--text-h)" }}>About</a>
        <a href="#services" style={{ color: "var(--text-h)" }}>Services</a>
        <a href="#contact" style={{ color: "var(--text-h)" }}>Contact</a>

        <button
          onClick={() => setDark(!dark)}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "4px 12px",
            cursor: "pointer",
            fontSize: "0.9rem",
            color: "var(--text-h)",
            transition: "border-color 0.3s, color 0.3s"
          }}
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* HERO */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        background: "var(--bg)",
        transition: "background 0.3s"
      }}>
        <h1 style={{ fontSize: "3.4rem", marginBottom: "18px", color: "var(--text-h)" }}>
          L&A Betterment Co
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text)", maxWidth: "700px", lineHeight: "1.7" }}>
          Reliable all-purpose labour services for homes, yards, and everyday projects.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "100px 20px",
        display: "flex",
        justifyContent: "center",
        background: "var(--bg)",
        transition: "background 0.3s"
      }}>
        <div style={{
          maxWidth: "850px",
          width: "100%",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "35px",
          transition: "border-color 0.3s"
        }}>
          <h2 style={{ color: "var(--text-h)", marginBottom: "30px" }}>About Us</h2>
          <p style={{ color: "var(--text)", lineHeight: "1.8" }}>
            Founded by two high school students, Andriy and Laith, L&A Betterment Co
            is built on discipline, hard work, and a strong commitment to service.
            We are dedicated to improving the world around us and giving back to
            our community through reliable, high-quality work.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "100px 20px",
        background: "var(--bg)",
        textAlign: "center",
        transition: "background 0.3s"
      }}>
        <h2 style={{ color: "var(--text-h)", marginBottom: "30px" }}>Services</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "950px",
          margin: "0 auto"
        }}>
          {[
            "Landscaping", "Gardening", "Cleaning",
            "Moving Assistance", "Babysitting", "Yard Maintenance",
            "Home Organization", "General Labour", "Basic Repairs"
          ].map((service) => (
            <div key={service} style={{
              padding: "18px",
              borderRadius: "12px",
              border: "1px solid var(--border)",
              color: "var(--text-h)",
              transition: "border-color 0.3s, color 0.3s"
            }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "100px 20px",
        display: "flex",
        justifyContent: "center",
        background: "var(--bg)",
        transition: "background 0.3s"
      }}>
        <div style={{
          maxWidth: "700px",
          width: "100%",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "35px",
          textAlign: "center",
          transition: "border-color 0.3s"
        }}>
          <h2 style={{ color: "var(--text-h)", marginBottom: "30px" }}>Contact</h2>
          <div style={{ marginTop: "20px", lineHeight: "2", fontSize: "1.05rem", color: "var(--text)" }}>
            <p>Email: contact@albetterment.co</p>
            <p>Phone: (780) XXX-XXXX</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "30px",
        fontSize: "0.85rem",
        color: "var(--text)",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        transition: "background 0.3s, border-color 0.3s"
      }}>
        © {new Date().getFullYear()} L&A Betterment Co. Built by Andriy & Laith.
      </footer>

    </div>
  );
}
