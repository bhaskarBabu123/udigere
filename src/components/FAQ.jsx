import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const FAQ = ({ title = "Frequently Asked Questions", faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-3">{title}</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Find quick answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-md border-indigo-300' : 'hover:border-indigo-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-medium text-slate-900 pr-6">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-500 flex-shrink-0" />
                )}
              </button>

              <div
                id={`faq-content-${index}`}
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-slate-700 leading-relaxed py-5">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {faqs.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No questions available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;