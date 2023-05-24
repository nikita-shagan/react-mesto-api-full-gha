import React from 'react';
import InfoTooltipFail from "./InfoTooltipFail";
import InfoTooltipSuccess from "./InfoTooltipSuccess";

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen && 'popup_opened'}`} onMouseDown={props.onOverlayClose}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onButtonClose}/>
                {props.isTooltipSuccess ? <InfoTooltipSuccess/> : <InfoTooltipFail/>}
            </div>
        </div>
    );
}

export default InfoTooltip;