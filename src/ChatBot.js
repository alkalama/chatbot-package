var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faMicrophone, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'reactstrap';
import './styles.css';
var ChatBot = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    if (!isOpen)
        return null;
    var messagesEndRef = useRef(null);
    var _b = useState(''), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState([]), userMessages = _c[0], setUserMessages = _c[1];
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
    return (_jsxs("div", { className: "overlay", children: [_jsx("div", { className: "bg-overlay" }), _jsxs("div", { className: "chat-box", children: [_jsxs("div", { className: "header", children: [_jsx("div", { className: "title", children: "ChatBot" }), _jsx("div", { className: "close-button", onClick: function () { return onClose(); }, children: _jsx(FontAwesomeIcon, { icon: faTimes }) })] }), _jsx("div", { className: "messages", children: _jsxs("div", { className: "message", children: [_jsxs("div", { className: "bot-msg", children: [_jsx("div", { className: "msg-img", children: _jsx("img", { src: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png', alt: 'profile' }) }), _jsx("div", { className: "msg-bubble", children: _jsx("div", { className: "msg-text", children: "Hey! I'm ChatBot, an automated assistant. How can I help you?" }) })] }), userMessages.map(function (userMessage, index) { return (_jsxs(React.Fragment, { children: [_jsx("div", { className: "user-msg", children: _jsx("div", { className: "msg-bubble", children: _jsx("div", { className: "msg-text", children: userMessage.message }) }) }), _jsxs("div", { className: "bot-msg", children: [_jsx("div", { className: "msg-img", children: _jsx("img", { src: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png', alt: 'profile' }) }), _jsx("div", { className: "msg-bubble", children: _jsx("div", { className: "msg-text", children: "Bot's response" }) })] }), _jsx("div", { ref: messagesEndRef })] }, index)); })] }) }), _jsxs("div", { className: "input-container", children: [_jsx(Input, { className: "ask-input", placeholder: "Ask ChatBot", value: inputValue, onChange: handleInputChange, onKeyDown: function (e) {
                                    if (e.key === "Enter")
                                        handleSend();
                                } }), _jsx(FontAwesomeIcon, { className: "speak", icon: faMicrophone }), _jsx(FontAwesomeIcon, { className: "ask", icon: faPaperPlane, onClick: function () { return handleSend(); } })] })] })] }));
};
export default ChatBot;
