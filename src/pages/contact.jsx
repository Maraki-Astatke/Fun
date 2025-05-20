import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to an API
    console.log(formData);
    alert('Form submitted! Check the console for data.');

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="flex justify-center mt-10 items-center min-h-screen bg-[#aaaa85]">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-5">Get In Touch</h1>
        <p className="mb-5">We would love to hear from you! Please fill out the form below:</p>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input 
              className="border-4 border-gray-300 p-2 w-full rounded" 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input 
              className="border-4 border-gray-300 p-2 w-full rounded" 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1">Subject</label>
            <input 
              className="border-4 border-gray-300 p-2 w-full rounded" 
              type="text" 
              id="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea 
              className="border-4 border-gray-300 p-2 w-full rounded" 
              cols={5} 
              rows={5} 
              id="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="border-4 border-[#939361] text-white bg-[#939361] font-bold py-2 px-4 rounded mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}