import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'reactstrap';
import './styles.css';
var ChatBot = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    if (!isOpen)
        return null;
    return (_jsxs("div", { className: "overlay", children: [_jsx("div", { className: "bg-overlay" }), _jsxs("div", { className: "chat-box", children: [_jsxs("div", { className: "header", children: [_jsx("div", { className: "title", children: "ChatBot" }), _jsx("div", { className: "close-button", onClick: function () { return onClose(); }, children: _jsx(FontAwesomeIcon, { icon: faTimes }) })] }), _jsx("div", { className: "messages", children: _jsxs("div", { className: "message", children: [_jsxs("div", { className: "bot-msg", children: [_jsx("div", { className: "msg-img", children: _jsx("img", { src: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png', alt: 'profile' }) }), _jsx("div", { className: "msg-bubble", children: _jsx("div", { className: "msg-text", children: "Hey! I'm ChatBot, an automated assistant. How can I help you?" }) })] }), _jsx("div", { className: "user-msg", children: _jsx("div", { className: "msg-bubble", children: _jsx("div", { className: "msg-text", children: "User message" }) }) }), _jsxs("div", { className: "bot-msg", children: [_jsx("div", { className: "msg-img", children: _jsx("img", { src: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png', alt: 'profile' }) }), _jsx("div", { className: "msg-bubble", children: _jsx("div", { className: "msg-text", children: "Bot's response" }) })] })] }) }), _jsxs("div", { className: "input-container", children: [_jsx(Input, { className: "ask-input", placeholder: "Ask ChatBot" }), _jsx(FontAwesomeIcon, { className: "ask", icon: faPaperPlane })] })] })] }));
};
export default ChatBot;
