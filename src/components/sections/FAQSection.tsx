
import React from 'react';
import FaqItem from '@/components/FaqItem';

const FAQSection = () => {
  // FAQ data
  const faqs = [
    {
      question: "What does 'lorem ipsum' actually mean?",
      answer: "Lorem ipsum is dummy text used in laying out print, graphic or web designs. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      question: "How do we know what kind of sounds dinosaurs made?",
      answer: "Scientists study fossilized vocal organs, compare with living relatives like birds and crocodiles, and analyze skull structure to make educated guesses about dinosaur sounds."
    },
    {
      question: "Why work from home is not as fun as we thought it would be?",
      answer: "Working from home can blur work-life boundaries, reduce social interaction, create distractions, and lead to zoom fatigue. The lack of separation between work and personal space can also increase stress."
    },
    {
      question: "In what way did human beings start using words?",
      answer: "Language likely evolved gradually from gestures and simple vocalizations to more complex communication systems. Archaeological evidence suggests symbolic communication began at least 100,000 years ago."
    },
    {
      question: "Which is the least developed area in the world",
      answer: "According to various development indexes, regions in Sub-Saharan Africa, particularly countries like South Sudan, Central African Republic, and Niger consistently rank among the least developed areas in the world."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-black">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
