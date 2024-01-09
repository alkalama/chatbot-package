var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'reactstrap';
import './styles.css';
var ChatBot = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    if (!isOpen)
        return null;
    var messagesEndRef = useRef(null);
    var _b = useState(false), option = _b[0], setOption = _b[1];
    var _c = useState(''), inputValue = _c[0], setInputValue = _c[1];
    var _d = useState([]), userMessages = _d[0], setUserMessages = _d[1];
    var handleInputChange = function (e) {
        setInputValue(e.target.value);
    };
    var handleSend = function () {
        if (inputValue.trim() !== '') {
            var date = new Date();
            var timestamp_1 = date.getHours().toString().padStart(2, '0')
                + ':' +
                date.getMinutes().toString().padStart(2, '0');
            setUserMessages(function (prevMessages) { return __spreadArray(__spreadArray([], prevMessages, true), [{ message: inputValue, timestamp: timestamp_1 }], false); });
            setInputValue('');
        }
    };
    useEffect(function () {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [userMessages]);
    return (_jsxs("div", { className: "z-20 fixed inset-0 flex items-end justify-end p-4", children: [_jsx("div", { className: "bg-black bg-opacity-50 fixed inset-0" }), _jsxs("div", { className: "bg-white w-auto max-w-[29rem] rounded-lg shadow-lg absolute bottom-8 right-8", children: [_jsxs("div", { className: "flex justify-between items-center bg-slate-200 rounded-t-lg p-2", children: [_jsx("h5", { className: "text-2xl font-semibold text-gray-700", children: "ChatBot" }), _jsx("div", { className: "cursor-pointer text-gray-700 hover:text-red-600", onClick: function () { return onClose(); }, children: _jsx(FontAwesomeIcon, { icon: faTimes }) })] }), _jsx("div", { className: "h-[19.5rem] overflow-y-auto mb-4 p-4", children: _jsxs("div", { className: "msg", children: [_jsxs("div", { className: "left-msg mt-2 flex", children: [_jsx("div", { className: "msg-img w-10 h-10 rounded-full mr-1", children: _jsx("img", { src: '/images/bot.png', alt: 'profile' }) }), _jsxs("div", { className: "msg-bubble p-2  min-w-[6rem] max-w-[17rem] bg-zinc-300  rounded-tr-xl rounded-b-xl", children: [_jsxs("div", { className: "msg-info flex justify-between", children: [_jsx("div", { className: "msg-info-name font-bold", children: "BOT" }), _jsx("div", { className: "msg-info-time text-xs", children: "12:45" })] }), _jsx("div", { className: "msg-text", children: "Hey! I'm ChatBot, an automated assistant. How can I help you?" })] })] }), userMessages.map(function (userMessage, index) { return (_jsxs(React.Fragment, { children: [_jsxs("div", { className: "right-msg mt-2 flex justify-end", children: [_jsx("div", { className: "msg-img w-10 h-10 rounded-full ml-1 order-last", children: _jsx("img", { src: '/images/user.png', alt: 'profile' }) }), _jsxs("div", { className: "msg-bubble p-2 min-w-[6rem] max-w-[17rem] bg-blue-300  rounded-tl-xl rounded-b-xl", children: [_jsxs("div", { className: "msg-info flex justify-between", children: [_jsx("div", { className: "msg-info-name font-bold", children: "USER" }), _jsx("div", { className: "msg-info-time text-xs", children: userMessage.timestamp })] }), _jsx("div", { className: "msg-text", children: userMessage.message })] })] }), _jsxs("div", { className: "left-msg mt-2 flex", children: [_jsx("div", { className: "msg-img w-10 h-10 rounded-full mr-1", children: _jsx("img", { src: '/images/bot.png', alt: 'profile' }) }), _jsxs("div", { className: "msg-bubble p-2  min-w-[6rem] max-w-[17rem] bg-zinc-300  rounded-tr-xl rounded-b-xl", children: [_jsxs("div", { className: "msg-info flex justify-between", children: [_jsx("div", { className: "msg-info-name font-bold", children: "BOT" }), _jsx("div", { className: "msg-info-time text-xs", children: userMessage.timestamp })] }), _jsx("div", { className: "msg-text", children: "Bot's response" })] })] }), _jsx("div", { ref: messagesEndRef })] }, index)); }), !option &&
                                    _jsx(_Fragment, { children: _jsxs("div", { className: "mt-1 right-option flex justify-end max-w-[19rem] flex-wrap", children: [_jsx("div", { className: "msg-option m-1 cursor-pointer p-2 w-auto border border-blue-300 hover:bg-blue-300 rounded-xl", children: _jsx("div", { className: "option-text", onClick: function () { return setOption(true); }, children: "About" }) }), _jsx("div", { className: "msg-option m-1 cursor-pointer p-2 w-auto border border-blue-300 hover:bg-blue-300 rounded-xl", children: _jsx("div", { className: "option-text", children: "Contact" }) }), _jsx("div", { className: "msg-option m-1 cursor-pointer p-2 w-auto border border-blue-300 hover:bg-blue-300 rounded-xl", children: _jsx("div", { className: "option-text", children: "Support" }) }), _jsx("div", { className: "msg-option m-1 cursor-pointer p-2 w-auto border border-blue-300 hover:bg-blue-300 rounded-xl", children: _jsx("div", { className: "option-text", children: "Contact" }) }), _jsx("div", { className: "msg-option m-1 cursor-pointer p-2 w-auto border border-blue-300 hover:bg-blue-300 rounded-xl", children: _jsx("div", { className: "option-text", children: "Features" }) }), _jsx("div", { className: "msg-option m-1 cursor-pointer p-2 w-auto border border-blue-300 hover:bg-blue-300 rounded-xl", children: _jsx("div", { className: "option-text", children: "Other" }) })] }) })] }) }), _jsxs("div", { className: "flex border rounded-b-lg", children: [_jsx(Input, { className: "ask-input flex-1 p-2 mr-2 border-r rounded-bl-lg focus:outline-none", placeholder: "Ask ChatBot", value: inputValue, onChange: handleInputChange, onKeyDown: function (e) {
                                    if (e.key === "Enter")
                                        handleSend();
                                } }), _jsx(FontAwesomeIcon, { className: "ask cursor-pointer text-blue-500 p-2 hover:text-blue-600", size: "1x", icon: faPaperPlane, onClick: function () { return handleSend(); } })] })] })] }));
};
export default ChatBot;
