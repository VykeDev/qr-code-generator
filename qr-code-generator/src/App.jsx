import { useState } from "react";
import QRCode from "qrcode.react";

function Form() {
  const [url2, setUrl2] = useState("");
  const [url, setUrl] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setUrl2(url);
  }
  return (
    <div id="qr-code">
      <QRCode value={url2} />
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
