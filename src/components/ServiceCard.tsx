
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  standards: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, standards }) => {
  const navigate = useNavigate();
  
  const handleLearnMore = () => {
    // Navigate to a service detail page or contact page
    navigate('/contact-us', { 
      state: { 
        service: title,
        message: `I'm interested in learning more about your ${title} services.` 
      } 
    });
  };
  
  return (
    <div className="dark-card text-white h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="text-sm mb-6 flex-grow">
        {standards.map((standard, idx) => (
          <p key={idx} className="my-1 text-gray-300">{standard}</p>
        ))}
      </div>
      <Button 
        className="lime-button w-full mt-4"
        onClick={handleLearnMore}
      >
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;
