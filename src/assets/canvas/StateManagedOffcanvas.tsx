import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StateManagedOffcanvas = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                Open Offcanvas
            </button>

            {/* Manually controlled Bootstrap offcanvas */}
            <div
                className={`offcanvas offcanvas-start ${isOpen ? 'show' : ''}`}
                tabIndex="-1"
                id="customOffcanvas"
                aria-labelledby="customOffcanvasLabel"
                style={{ visibility: isOpen ? 'visible' : 'hidden' }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="customOffcanvasLabel">
                        Custom Offcanvas
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setIsOpen(false)}
                    ></button>
                </div>
                <div className="offcanvas-body">
                    This offcanvas is controlled by React state only — no JS init!
                </div>
            </div>

            {/* Optional backdrop */}
            {isOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default StateManagedOffcanvas;
