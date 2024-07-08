function Card() {
  return (
    <div className="card">
      <h1>Generate QR code</h1>
      <div className="qr-code"></div>
      <form>
        <input type="url" name="url" id="url" placeholder="url" />
        <button className="btn-generate-code">Gererate</button>
      </form>
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
