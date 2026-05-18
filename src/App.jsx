export default function App() {
  const sectionTitle = {
    color: "#000",
    marginBottom: "30px"
  };

  const borderStyle = "1px solid #000";

  return (
    <div
      style={{
        fontFamily: "system-ui, Arial, sans-serif",
        background: "#ffffff",
        color: "#1a1a1a",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden"
      }}
    >
      {/* NAV */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "#ffffff",
          borderBottom: borderStyle,
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "16px",
          fontSize: "0.95rem",
          fontWeight: 500
        }}
      >
        <a href="#about" style={{ color: "#000", textDecoration: "none" }}>
          About
        </a>
        <a href="#services" style={{ color: "#000", textDecoration: "none" }}>
          Services
        </a>
        <a href="#contact" style={{ color: "#000", textDecoration: "none" }}>
          Contact
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          width: "100%",
          background: "#ffffff"
        }}
      >
        <h1 style={{ fontSize: "3.4rem", marginBottom: "18px", color: "#000" }}>
          A&L Betterment Co
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            maxWidth: "700px",
            lineHeight: "1.7"
          }}
        >
          Reliable all-purpose labour services for homes, yards, and everyday projects.
        </p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 20px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            width: "100%",
            background: "#ffffff",
            border: borderStyle,
            borderRadius: "16px",
            padding: "35px"
          }}
        >
          <h2 style={sectionTitle}>About Us</h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              marginTop: "12px"
            }}
          >
            Founded by two high school students, Andriy and Laith, A&L Betterment Co
            is built on discipline, hard work, and a strong commitment to service.
            We are dedicated to improving the world around us and giving back to
            our community through reliable, high-quality work.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "100px 20px",
          background: "#ffffff",
          textAlign: "center",
          width: "100%"
        }}
      >
        <h2 style={sectionTitle}>Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            maxWidth: "950px",
            margin: "0 auto"
          }}
        >
          {[
            "Landscaping",
            "Gardening",
            "Cleaning",
            "Moving Assistance",
            "Babysitting",
            "Yard Maintenance",
            "Home Organization",
            "General Labour",
            "Basic Repairs"
          ].map((service) => (
            <div
              key={service}
              style={{
                padding: "18px",
                borderRadius: "12px",
                border: borderStyle,
                background: "#ffffff"
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "100px 20px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            width: "100%",
            background: "#ffffff",
            border: borderStyle,
            borderRadius: "16px",
            padding: "35px",
            textAlign: "center"
          }}
        >
          <h2 style={sectionTitle}>Contact</h2>

          <div
            style={{
              marginTop: "20px",
              lineHeight: "2",
              fontSize: "1.05rem",
              color: "#555"
            }}
          >
            <p>Email: contact@albetterment.co</p>
            <p>Phone: (780) XXX-XXXX</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          fontSize: "0.85rem",
          color: "#888",
          borderTop: borderStyle,
          width: "100%",
          background: "#ffffff"
        }}
      >
        © {new Date().getFullYear()} A&L Betterment Co. Built by Andriy & Laith.
      </footer>
    </div>
  );
}