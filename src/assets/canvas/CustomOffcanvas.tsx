import React, { useState } from 'react';

const CustomOffcanvas = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="btn btn-primary" onClick={() => setOpen(true)}>
                Open Custom Offcanvas
            </button>

            {/* Fake offcanvas */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform z-50 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    <h5 className="text-lg font-bold">Custom Offcanvas</h5>
                    <button className="btn-close" onClick={() => setOpen(false)} />
                </div>
                <div className="p-4">Put your content here</div>
            </div>

            {/* Optional backdrop */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
};

export default CustomOffcanvas;
