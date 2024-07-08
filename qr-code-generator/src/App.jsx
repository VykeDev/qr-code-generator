import { useState } from "react";
import QRCode from "qrcode.react";

function Form() {
  const [url, setUrl] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div id="qr-code">
      <QRCode value={url} />
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="btn-generate-code">
          Gererate
        </button>
      </form>
    </div>
  );
}

function Card() {
  return (
    <>
      <div className="card">
        <h1>Generate QR code</h1>
        <Form />
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Card />
    </>
  );
}
