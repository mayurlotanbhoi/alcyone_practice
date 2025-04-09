import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atm from './assets/canvas/atm';
import Atp from './assets/canvas/Atp';
import './App.css'

export default function App() {
  const [showAtm, setShowAtm] = useState(false);
  const [showAtp, setShowAtp] = useState(false);

  useEffect(() => {
    let closeAtmTimeout;
    let openAtpTimeout;

    if (showAtm) {
      closeAtmTimeout = setTimeout(() => {
        setShowAtm(false);

        // Only set this after ATM is closed, so we don’t cancel it in cleanup.
        openAtpTimeout = setTimeout(() => {
          setShowAtp(true);
        }, 500);
      }, 5000);
    }

    return () => {
      // Cleanup the first timeout if showAtm changes or component unmounts early
      clearTimeout(closeAtmTimeout);

      // ❌ DO NOT clear openAtpTimeout here, since it’s set only after showAtm becomes false
      // ✅ Optional: only clear it if already set
      console.log("openAtpTimeout", openAtpTimeout)
      if (!openAtpTimeout) clearTimeout(openAtpTimeout);
    };
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
