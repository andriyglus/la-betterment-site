import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { name: "Landscaping", emoji: "🌿" },
    { name: "Gardening", emoji: "🌱" },
    { name: "Cleaning", emoji: "🧹" },
    { name: "Moving Assistance", emoji: "📦" },
    { name: "Babysitting", emoji: "👶" },
    { name: "Yard Maintenance", emoji: "🍂" },
    { name: "Home Organization", emoji: "🏠" },
    { name: "General Labour", emoji: "🔧" },
    { name: "Basic Repairs", emoji: "🛠️" },
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh", width: "100%", transition: "background 0.3s, color 0.3s" }}>

      {/* NAV */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "var(--nav-bg)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 24px",
        fontSize: "0.95rem",
        fontWeight: 500,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s"
      }}>
        <div style={{
          background: dark ? "#000000" : "#ffffff",
          border: "1px solid var(--border)",
          padding: "8px 14px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s"
        }}>
          <img
            src={dark ? "/la-logo-white.png" : "/la-logo.png"}
            alt="L&A Betterment Co logo"
            style={{ height: "34px", width: "auto" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
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
        </div>
      </header>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* BACKGROUND SLIDESHOW */}
        {["/garden.jpg", "/lawn.jpg", "/rocks.jpg"].map((img, i) => (
          <div key={img} style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: slide === i ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: 0
          }} />
        ))}

        {/* DARK OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1
        }} />

        {/* BOTTOM GRADIENT FADE */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: `linear-gradient(to bottom, transparent, var(--bg))`,
          zIndex: 2
        }} />

        {/* TEXT */}
        <div style={{ position: "relative", zIndex: 3 }}>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            marginBottom: "18px",
            color: "#ffffff",
            letterSpacing: "-1px"
          }}>
            L&A Betterment Co
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#dddddd",
            maxWidth: "600px",
            lineHeight: "1.7",
            marginBottom: "32px"
          }}>
            Reliable all-purpose labour services for homes, yards, and everyday projects.
          </p>
          <a href="#contact" style={{
            display: "inline-block",
            background: "#ffffff",
            color: "#111111",
            padding: "12px 32px",
            borderRadius: "50px",
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
          }}
            onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.target.style.transform = "scale(1)"}
          >
            Get a Quote
          </a>
        </div>

        {/* SLIDE DOTS */}
        <div style={{
          position: "absolute",
          bottom: "200px",
          display: "flex",
          gap: "8px",
          zIndex: 3
        }}>
          {[0, 1, 2].map(i => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: slide === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "50px",
                background: slide === i ? "#ffffff" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s"
              }}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        background: "var(--bg)",
        transition: "background 0.3s"
      }}>
        <div style={{
          maxWidth: "850px",
          width: "100%",
          border: "1px solid var(--border)",
          borderLeft: "4px solid #4ade80",
          borderRadius: "16px",
          padding: "35px",
          transition: "border-color 0.3s"
        }}>
          <h2 style={{ color: "var(--text-h)", marginBottom: "16px" }}>About Us</h2>
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
        padding: "80px 20px",
        background: "var(--bg)",
        textAlign: "center",
        transition: "background 0.3s"
      }}>
        <h2 style={{ color: "var(--text-h)", marginBottom: "8px" }}>Services</h2>
        <p style={{ color: "var(--text)", marginBottom: "40px", fontSize: "1rem" }}>
          Here's what we can help you with
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "950px",
          margin: "0 auto"
        }}>
          {services.map(({ name, emoji }) => (
            <div
              key={name}
              style={{
                padding: "24px 18px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                color: "var(--text-h)",
                cursor: "default",
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#4ade80";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(74,222,128,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{emoji}</div>
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          marginBottom: "32px",
          transition: "border-color 0.3s"
        }}>
          <h2 style={{ color: "var(--text-h)", marginBottom: "30px" }}>Contact</h2>
          <div style={{ marginTop: "20px", lineHeight: "2", fontSize: "1.05rem", color: "var(--text)" }}>
            <p>📧 Email: contact@albetterment.co</p>
            <p>📞 Phone: (780) XXX-XXXX</p>
            <p>📍 Edmonton, Alberta</p>
          </div>
        </div>

        {/* GOOGLE MAPS EMBED */}
        <div style={{
          maxWidth: "700px",
          width: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid var(--border)"
        }}>
          <iframe
            title="Edmonton Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154142.87579920475!2d-113.71320!3d53.52700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00e29948bdb!2sEdmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1680000000000"
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
