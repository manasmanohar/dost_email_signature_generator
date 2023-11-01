import React from 'react';

export default function LivePreview ({ data, generateCode })  {
  const generatedCode = generateCode(data);

  return (
    <div className="text-black">
      <div className='bg-white  w-full rounded-lg '  dangerouslySetInnerHTML={{ __html: generatedCode }}>

      </div>



     
    </div>
    
  );
};

