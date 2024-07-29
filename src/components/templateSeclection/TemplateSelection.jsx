// src/components/TemplateSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const templates = [
  { id: 'developer', name: 'Developer', image: '/path/to/developer-image.jpg' },
  { id: 'marketing', name: 'Marketing', image: '/path/to/marketing-image.jpg' },
  { id: 'business', name: 'Business', image: '/path/to/business-image.jpg' },
  { id: 'photography', name: 'Photography', image: '/path/to/photography-image.jpg' },
];

function TemplateSelection() {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId) => {
    // Store the selected template in local storage or state management
    localStorage.setItem('selectedTemplate', templateId);
    navigate('/dashboard'); // Navigate to dashboard after selecting a template
  };

  return (
    <div className="template-selection-container flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Select Your Template</h1>
      <div className="templates grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={template.image}
              alt={`${template.name} Template`}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">{template.name}</h2>
              <button
                onClick={() => handleTemplateSelect(template.id)}
                className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelection;
