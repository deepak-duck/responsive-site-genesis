
import React from 'react';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  // Services data
  const services = [
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance level of your digital solutions.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Accessibility Training",
      description: "Comprehensive accessibility education for your development and design teams to build accessible products from the ground up.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Remediation Services",
      description: "Expert remediation services to fix accessibility issues in your existing digital products and platforms.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Ongoing Support",
      description: "Continuous accessibility monitoring and support to ensure your digital properties remain compliant as they evolve.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Legal Compliance",
      description: "Navigate complex accessibility laws and regulations with our expert guidance and compliance services.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Accessible Design",
      description: "Create beautiful, inclusive designs that work for everyone without sacrificing aesthetics or functionality.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Services We Offer</h2>
        <p className="text-center mb-12 text-gray-300">
          Our comprehensive accessibility solutions ensure your digital presence is inclusive and compliant
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              standards={service.standards}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
