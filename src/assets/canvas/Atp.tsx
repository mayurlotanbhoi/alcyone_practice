import OffcanvasWrapper from './OffcanvasWrapper';

export default function Atp({ show, onClose }) {
    return (
        <OffcanvasWrapper show={show} onClose={onClose} id="atp" placement="bottom">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="atpLabel">ATP Offcanvas</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="offcanvas-body">
                This is ATP content.
            </div>
        </OffcanvasWrapper>
    );
}
