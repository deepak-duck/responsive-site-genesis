
import React from 'react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  standards: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, standards }) => {
  return (
    <div className="dark-card text-white h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="text-sm mb-6 flex-grow">
        {standards.map((standard, idx) => (
          <p key={idx} className="my-1 text-gray-300">{standard}</p>
        ))}
      </div>
      <Button className="lime-button w-full mt-4">Learn More</Button>
    </div>
  );
};

export default ServiceCard;
