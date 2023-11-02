
import React, { useRef } from 'react';
import HTMLReactParser from 'html-react-parser';

const LivePreview = ({ data, generateCode }) => {
  const generatedCode = generateCode(data);
  const previewRef = useRef(null);

  const handleSelectPreview = () => {

    if (previewRef.current) {
      const range = document.createRange();
      const contentNode = previewRef.current.firstChild; 
      
      if (contentNode) {
        range.selectNode(contentNode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
          document.execCommand('copy');
          alert('Copied to Clipboard');
        } catch (error) {
          console.error('Unable to copy to clipboard:', error);
        } finally {
          window.getSelection().removeAllRanges();
        }
      }
    }
  };

  return (
    <div className="text-black border border-gray-400 rounded-lg  p-4 lg:mb-6 ">
      <div ref={previewRef} className='  p-4 bg-white w-full rounded-lg selectable'>
        {HTMLReactParser(generatedCode)}
      </div>
      <button className=" mt-4 w-full mb-4 p-2 bg-blue-500 text-white rounded" onClick={handleSelectPreview}>
      Copy Singature
      </button>
    </div>
  );
};

export default LivePreview;