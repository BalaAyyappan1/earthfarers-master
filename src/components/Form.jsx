import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = ({ width }) => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    product: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_0g4kkcp'; 
    const templateID = 'template_j9qx8b9'; 
    const userID = 'ZxE38hVwrigigRci-';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Your quote request has been sent!');
        setFormData({ email: '', company: '', product: '', quantity: '' }); 
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className={`bg-white w-full ${width} h-full p-6 rounded-3xl shadow-lg`}>
      <h3 className="text-3xl font-semibold intern bluet mb-2 mt-2">
        Get a Quote
      </h3>
      <p className="mb-4 text-sm text-black">
        We only send essential and relevant emails—no spam, ever.
      </p>
      <form className="space-y-6 bluet" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="company">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
            placeholder="Company name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="product">
            Product Name
          </label>
          <input
            type="text"
            id="product"
            value={formData.product}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
            placeholder="Product name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
            placeholder="Quantity"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bluex text-white font-semibold py-3 rounded-2xl hover:bg-[#064185d9] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
