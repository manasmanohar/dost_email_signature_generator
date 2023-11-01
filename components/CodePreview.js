import React from 'react';

export default function codepreview({ data, generateCode, }) {
  
  const generatedCode = generateCode(data);

  const handleCopyCode = () => {
    alert('Copied to Clipboard');
  };

return (
    <div className="text-black">


      <div className='border border-gray-400 text-black rounded-lg my-5  p-3 flex flex-col'>
        <textarea className="w-full  border-2 h-32 p-4 rounded-lg bg-[#F8F9FA]" defaultValue={generatedCode} />
        <button id="copy-button"className=" mt-12 p-2 bg-blue-500 text-white rounded" onClick={handleCopyCode}>Copy Code</button>
      </div>
     
    </div>
    
  )
};
