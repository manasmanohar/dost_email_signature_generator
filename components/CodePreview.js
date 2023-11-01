import React from 'react';

export default function codepreview({ data, generateCode, }) {
  
  const generatedCode = generateCode(data);

  const handleCopyCode = () => {
    alert('Copied to Clipboard');
  };

return (
    <div className="text-black">


      <div className='border-2 text-black rounded-lg my-12 p-4 flex flex-col'>
        <textarea className="w-full  border-2 h-32 p-4 rounded-lg bg-[#F8F9FA]" defaultValue={generatedCode} />
        <button id="copy-button"className=" mt-12 p-2 bg-blue-500 text-white rounded" onClick={handleCopyCode}>Copy Code</button>
      </div>
     
    </div>
    
  )
};
