import { useEffect, useRef } from 'react';

export default function OffcanvasWrapper({ show, onClose, children, id = 'offcanvas1', placement = 'start' }) {
    const offcanvasRef = useRef(null);
    const bsInstance = useRef(null);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
            if (!bsInstance.current && offcanvasRef.current) {
                bsInstance.current = new bootstrap.Offcanvas(offcanvasRef.current);

                offcanvasRef.current.addEventListener('hidden.bs.offcanvas', () => {
                    if (typeof onClose === 'function') onClose();
                });
            }

            if (bsInstance.current) {
                if (show) {
                    bsInstance.current.show();
                } else {
                    bsInstance.current.hide();
                }
            }
        });
    }, [show]);

    return (
        <div
            className={`offcanvas offcanvas-${placement}`}
            tabIndex="-1"
            id={id}
            ref={offcanvasRef}
            aria-labelledby={`${id}Label`}
        >
            {children}
        </div>
    );
}
