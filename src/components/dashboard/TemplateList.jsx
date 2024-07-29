import React from 'react';

const TemplateList = ({ onPreviewClick }) => {
  const templates = [
    { id: 1, type: 'developer', name: 'Developer Template' },
    { id: 2, type: 'marketing', name: 'Marketing Template' },
    // Add more templates as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div key={template.id} className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">{template.name}</h3>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onPreviewClick(template.type)}
          >
            Preview
          </button>
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
