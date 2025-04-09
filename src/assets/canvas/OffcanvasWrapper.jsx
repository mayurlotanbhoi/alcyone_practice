import { useEffect, useRef } from 'react';
import { Offcanvas } from 'bootstrap'; // ✅ direct named import

export default function OffcanvasWrapper({
    show,
    onClose,
    children,
    id = 'offcanvas1',
    placement = 'start',
    coustomeClass = "",
    options = { backdrop: 'static', keyboard: false }
}) {
    const offcanvasRef = useRef(null);
    const bsInstance = useRef(null);

    useEffect(() => {
        if (!bsInstance.current && offcanvasRef.current) {
            bsInstance.current = new Offcanvas(offcanvasRef.current, options);
            offcanvasRef.current.addEventListener('hidden.bs.offcanvas', () => {
                if (typeof onClose === 'function') onClose();
            });
        }
        if (bsInstance.current) {
            show ? bsInstance.current.show() : bsInstance.current.hide();
        }
    }, [show, onClose]);

    return (
        <div
            className={`offcanvas offcanvas-${placement} ${coustomeClass}`}
            tabIndex="-1"
            id={id}
            ref={offcanvasRef}
            aria-labelledby={`${id}Label`}
        >
            {children}
        </div>
    );
}
