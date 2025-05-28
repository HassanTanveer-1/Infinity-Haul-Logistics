import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { contactContent } from '../constants/content';
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    emailjs.send(
      'service_duef0j2',          // Your EmailJS service ID
      'template_ykr68v7',         // Your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
      'ehH4WYTSLssZb7yRM'         // Your EmailJS public key
    ).then(
      () => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      },
      (error) => {
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
        console.error(error);
      }
    );
  };

  const getIcon = (iconName: string) => {
    const iconProps = { size: 24, className: "text-primary-600" };

    switch (iconName) {
      case 'Mail':
        return <Mail {...iconProps} />;
      case 'Phone':
        return <Phone {...iconProps} />;
      case 'MapPin':
        return <MapPin {...iconProps} />;
      default:
        return <Mail {...iconProps} />;
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            {contactContent.heading}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {contactContent.subheading}
          </p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 bg-primary-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary-800">Get In Touch</h3>

            <div className="space-y-6">
              {contactContent.contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <p className="font-medium text-primary-700">{item.label}</p>
                    <p className="text-neutral-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-medium mb-4 text-primary-800">Business Hours</h4>
              <div className="space-y-2 text-neutral-700">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg p-8 shadow-md border border-neutral-100">
              <h3 className="text-2xl font-semibold mb-6 text-primary-800">Send Us a Message</h3>

              {submitSuccess && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
                  <p className="font-medium">Message sent successfully!</p>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                  <p className="font-medium">Error sending message</p>
                  <p>{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {contactContent.formFields.slice(0, 3).map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label htmlFor={field.name} className="block text-neutral-700 font-medium">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData] as string}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-neutral-700 font-medium">
                      Equipment You Have <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {contactContent.formFields[3].options?.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="block text-neutral-700 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your logistics needs"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      {contactContent.submitButton}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
