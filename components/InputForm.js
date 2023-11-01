import React from 'react';

const InputForm = ({ data, setData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className='mb-0'>
       <div className="mb-4 ">
        <label htmlFor="name" className="block font-semibold mb-2">
        Valediction (Complimentary Close)
        </label>
        <input
          type="text"
          name="valediction"
          value={data.valediction}
          onChange={handleInputChange}
          placeholder="Regards, Sincerely, Best "
          className="mb-4 p-2 rounded border w-full text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          placeholder="Your Full Name"
          className="mb-4 p-2 rounded border w-full text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="position" className="block font-semibold mb-2">
          Position
        </label>
        <input
          type="text"
          name="position"
          value={data.position}
          onChange={handleInputChange}
          placeholder="Your Position"
          className="mb-4 p-2 rounded border w-full text-black"
        />
      </div>

      

      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-2 ">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          placeholder="Your Email Address"
          className="mb-4 p-2 rounded border w-full text-black"
        />
      </div>

      <div className="">
        <label htmlFor="phone" className="block font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleInputChange}
          placeholder="Your Phone Number"
          className="p-2 rounded border w-full text-black"
        />
      </div>

      

    
    </div>
  );
};

export default InputForm;
