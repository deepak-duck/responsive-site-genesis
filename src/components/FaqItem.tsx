
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-akcess-lime" size={20} />
        ) : (
          <ChevronDown className="text-akcess-lime" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
