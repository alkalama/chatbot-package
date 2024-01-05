import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ChatBot from './ChatBot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
var AI = function (_a) {
    var isModalOpen = _a.isModalOpen, setIsModalOpen = _a.setIsModalOpen;
    var handleIconClick = function () {
        setIsModalOpen(!isModalOpen);
    };
    return (_jsx(_Fragment, { children: isModalOpen ? (_jsx(ChatBot, { isOpen: isModalOpen, onClose: function () { return setIsModalOpen(false); } })) : (_jsx("div", { className: 'ai-icon', onClick: handleIconClick, children: _jsx(FontAwesomeIcon, { className: 'ai-fa', size: '2xl', icon: faMessage }) })) }));
};
export default AI;
