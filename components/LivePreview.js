
import React, { useRef } from 'react';
import HTMLReactParser from 'html-react-parser';

const LivePreview = ({ data, generateCode }) => {
  const generatedCode = generateCode(data);
  const previewRef = useRef(null);

  const handleSelectPreview = () => {
    if (previewRef.current) {
      const range = document.createRange();
      range.selectNode(previewRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      alert('Copied to Clipboard');
    }
  };

  return (
    <div className="text-black border border-gray-400 rounded-lg  p-4 lg:mb-6 ">
      <div ref={previewRef} className=' border-2  p-4 bg-white w-full rounded-lg selectable'>
        {HTMLReactParser(generatedCode)}
      </div>
      <button className=" mt-4 w-full mb-4 p-2 bg-blue-500 text-white rounded" onClick={handleSelectPreview}>
      Copy Singature
      </button>
    </div>
  );
};

export default LivePreview;
