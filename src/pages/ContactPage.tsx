
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  // FAQs data
  const faqs = [
    {
      question: "What are the school hours?",
      answer: "SMKN 9 Bandar Lampung operates from Monday to Friday, 7:00 AM to 3:30 PM. Some extracurricular activities may take place after regular school hours or on Saturdays."
    },
    {
      question: "How can I apply for admission?",
      answer: "You can apply for admission online through our website or by visiting our admissions office in person. The application process typically includes form submission, document verification, entrance examination, and interview."
    },
    {
      question: "Are there scholarships available?",
      answer: "Yes, SMKN 9 Bandar Lampung offers various scholarships for academically excellent students and those from economically disadvantaged backgrounds. Contact our administration office for details about available scholarships and eligibility criteria."
    },
    {
      question: "Do you offer extracurricular activities?",
      answer: "Yes, we offer a wide range of extracurricular activities including sports (basketball, soccer, volleyball), arts (choir, dance, drama), technical clubs (robotics, coding), and various student organizations to enhance student development beyond academics."
    },
    {
      question: "How can parents get involved?",
      answer: "Parents can join our Parent-Teacher Association (PTA), attend regular parent-teacher meetings, participate in school events, and volunteer for various school activities. We encourage active parental involvement in their children's education."
    },
    {
      question: "What facilities does the school have?",
      answer: "Our school has modern classrooms, specialized laboratories (computer, science), workshops for practical training, a library, sports facilities, a cafeteria, and an auditorium. All facilities are designed to provide an optimal learning environment for students."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Get in touch with SMKN 9 Bandar Lampung - we're here to answer your questions"
        backgroundImage="/placeholder.svg"
        showButtons={false}
      />

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionTitle title="Get In Touch" center={false} />
              <p className="text-gray-600 mb-8">
                Have questions about our programs, admission process, or anything else? Feel free to reach out to us using the contact form or the information provided below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-school-light-blue p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      Jl. Pangeran Tirtayasa No. 88<br />
                      Bandar Lampung, Lampung 35145<br />
                      Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-school-light-blue p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main Office: +62 721 123456<br />
                      Admissions: +62 721 654321<br />
                      Student Affairs: +62 721 789012
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-school-light-blue p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@smkn9bdl.sch.id<br />
                      Admissions: admissions@smkn9bdl.sch.id<br />
                      Student Affairs: students@smkn9bdl.sch.id
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-school-light-blue p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["Facebook", "Twitter", "Instagram", "YouTube"].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-gray-100 hover:bg-school-light-blue transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 bg-school-blue rounded"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle title="Send Us a Message" center={false} />
              <div className="bg-white rounded-lg shadow-lg p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gray-200 rounded-lg h-96 w-full">
            {/* Placeholder for map - In a real implementation, you would integrate Google Maps or another map service */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-lg">
              <div className="text-center">
                <div className="mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-600">Map of SMKN 9 Bandar Lampung location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-school-light-blue">
        <div className="container mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about SMKN 9 Bandar Lampung"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-school-blue">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
