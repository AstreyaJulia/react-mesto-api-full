import React from "react";
import Popup from "./Popup";
import Tooltip_error from "../images/tooltip_error.svg";
import Tooltip_success from "../images/tooltip_succes.svg";

/** Всплывашка с уведомлениями
 * @param props - {popupOpen - Открыта или нет, onClose - ф-я колбек закрывающая, type - тип из объекта tooltip_types}
 * @returns {JSX.Element}
 * @constructor
 */
const InfoTooltip = (props) => {

    /** Объект типов ошибок с изображениями
     * @type {{success: *, error: *}}
     */
    const tooltip_types = {
        success: Tooltip_success, // успешная регистрация
        error: Tooltip_error
    };

    return (<Popup
            className={props.popupOpen ? "popup popup_opened" : "popup"}
            closeHandler={props.onClose}
        >
            <div
                className={["popup__container"].join(" ")}
            >
                <button
                    className="popup__close-button button"
                    type="button"
                    aria-label="Закрыть всплывающее окно"
                    onClick={props.onClose}
                />
                <div className="popup__tooltip">
                    <img className="popup__tooltip-image" src={tooltip_types[props.type]}
                         alt={tooltip_types[props.message]}/>
                    <p className="popup__tooltip-text">{props.message}</p>
                </div>
            </div>
        </Popup>);
};

export default InfoTooltip;
