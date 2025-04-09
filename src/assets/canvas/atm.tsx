import OffcanvasWrapper from './OffcanvasWrapper';


export default function Atm({ show, onClose }) {
    return (
        <OffcanvasWrapper coustomeClass={'otp bg-danger'} show={show} onClose={onClose} id="atm" placement="bottom">
            <div className="offcanvas-header  ">
                <h5 className="offcanvas-title" id="atmLabel">ATM Offcanvas</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="offcanvas-body">
                This is ATM content.
            </div>
        </OffcanvasWrapper>
    );
}
