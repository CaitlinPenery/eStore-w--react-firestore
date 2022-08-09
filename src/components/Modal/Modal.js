// MVP requires product page, so Modal not in use.

import "./Modal.css";

// import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
    return (
        // Transition causing errors in strict mode follow up before using.
        // <CSSTransition
        //     in={props.show}
        //     unmountOnExit
        //     timeout={{ enter: 0, exit: 300 }}
        // >
        <div
            className={`modal ${props.show ? "show" : ""}`}
            onClick={props.onClose}
        >
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal__header">
                    <div className="modal__btn_close">
                        <button
                            // className="modal__btn_close"
                            onClick={props.onClose}
                        >
                            (x)
                        </button>
                    </div>
                    <h4 className="modal__title">{props.title}</h4>
                </div>
                <div className="modal__body">{props.children}</div>
                <div className="modal__footer"></div>
                <button className="modal__btn_addtocart">Add to Cart</button>
            </div>
        </div>
        // </CSSTransition>
    );
};

export default Modal;
