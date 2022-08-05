import "./Modal.css";

import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
    return (
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div
                className={`modal ${props.show ? "show" : ""}`}
                onClick={props.onClose}
            >
                <div
                    className="modal__content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal__header">
                        <h4 className="modal__title">{props.title}</h4>
                        <button
                            className="modal__btn_close"
                            onClick={props.onClose}
                        >
                            (x)
                        </button>
                    </div>
                    <div className="modal__body">{props.children}</div>
                </div>
                <div className="modal__footer">
                    <button className="modal__btn_addtocart">
                        Add to Cart
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Modal;
