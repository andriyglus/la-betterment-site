export default function App() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f172a",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1>A&L Betterment Co</h1>

      <p style={{ marginTop: "10px", fontSize: "1.1rem", opacity: 0.9 }}>
        Contact us
      </p>

      <div style={{ marginTop: "20px", lineHeight: "1.8" }}>
        <p>Email: contact@albetterment.co</p>
        <p>Phone: (XXX) XXX-XXXX</p>
      </div>
    </div>
  );
}