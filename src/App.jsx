export default function App() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#0b1220",
      color: "white",
      minHeight: "100vh"
    }}>

      {/* NAV */}
      <div style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        padding: "15px",
        background: "rgba(11,18,32,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "100px 20px 70px"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "25px" }}>
          L&A Betterment Co
        </h1>

        <p style={{
          opacity: 0.8,
          fontSize: "1.2rem",
          maxWidth: "650px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Reliable all-purpose labour services for homes, yards, and everyday projects.
        </p>
      </div>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "70px 20px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <h2>About Us</h2>

        <p style={{ opacity: 0.85, lineHeight: "1.7", marginTop: "15px" }}>
          We are an all-purpose labour team built on discipline, hard work, and reliability.
          Our mission is to improve the spaces and lives around us through consistent,
          high-quality service. Every job is approached with care, respect, and attention to detail.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "70px 20px",
        background: "rgba(255,255,255,0.03)",
        textAlign: "center"
      }}>
        <h2>Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "30px auto"
        }}>
          {[
            "Landscaping",
            "Gardening",
            "Cleaning",
            "Moving Help",
            "Babysitting",
            "Yard Work",
            "Home Organization",
            "General Labour",
            "Basic Repairs"
            
          ].map((service) => (
            <div key={service} style={{
              padding: "15px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.02)"
            }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2>Contact</h2>

        <p style={{ opacity: 0.8, marginTop: "10px" }}>
          For bookings, quotes, or availability, reach out using the details below.
        </p>

        <div style={{
          marginTop: "25px",
          lineHeight: "1.9",
          opacity: 0.9
        }}>
          <p>Email: contact@labetterment.co</p>
          <p>Phone: (780) XXX-XXXX</p>
        </div>
      </section>

    </div>
  );
}