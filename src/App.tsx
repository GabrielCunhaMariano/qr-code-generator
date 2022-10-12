import { useState } from "react";
import QRCode from "react-qr-code";

import "./globalStyles.css";

function App() {
  // const [value, setValue] = useState('BRUNO');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  return (
    <div className="card">
      <div className="qrcode-wrapper">
        <QRCode
          value="https://www.linkedin.com/in/gabriel-mariano-229646246/"
          size={160}
          viewBox={`0 0 160 160`}
          bgColor="rgba(0, 0, 0, 0)"
          fgColor="#fff"
        />
      </div>
      {/* {value}
      <input type="text" value={value} onChange={handleChange} /> */}
      <h1 className="card-title">
        Improve your front-end skills by building projects
      </h1>
      <p className="card-description">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
