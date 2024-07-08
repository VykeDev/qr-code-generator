function Card() {
  return (
    <div className="card">
      <h1>Generate QR code</h1>
      <div className="qr-code"></div>
      <button className="btn-generate-code">Gererate</button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Card />
    </>
  );
}
