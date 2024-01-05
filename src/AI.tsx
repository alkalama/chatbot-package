import React from 'react';
import ChatBot from './ChatBot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

interface AIProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AI: React.FC<AIProps> = ({ isModalOpen, setIsModalOpen }) => {
    const handleIconClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {isModalOpen ? (
                <ChatBot isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            ) : (
                <div
                    className='ai-icon'
                    onClick={handleIconClick}
                >
                    <FontAwesomeIcon
                        className='ai-fa'
                        size='2xl'
                        icon={faMessage}
                    />
                </div>
            )}
        </>
    );
};

export default AI;
