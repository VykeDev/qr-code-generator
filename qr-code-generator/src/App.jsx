import { useState } from "react";
function Form() {
  const [url, setUrl] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
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
  );
}

function Card() {
  return (
    <div className="card">
      <h1>Generate QR code</h1>
      <div id="qr-code"></div>
      <Form />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Card />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    </>
  );
}
