import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atm from './assets/canvas/atm';
import Atp from './assets/canvas/Atp';

export default function App() {
  const [showAtm, setShowAtm] = useState(false);
  const [showAtp, setShowAtp] = useState(false);

  useEffect(() => {
    let timer;
    if (showAtm) {
      timer = setTimeout(() => {
        setShowAtm(false);
        setShowAtp(true)
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showAtm]);

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary me-2"
        onClick={() => {
          setShowAtm(true);
        }}
      >
        Open ATM
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setShowAtp(true);
        }}
      >
        Open ATP
      </button>

      <Atm show={showAtm} onClose={() => setShowAtm(false)} />
      <Atp show={showAtp} onClose={() => setShowAtp(false)} />
    </div>
  );
}
