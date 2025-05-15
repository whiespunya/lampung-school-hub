
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Hadi Wibowo",
      role: "School Principal",
      image: "/placeholder.svg",
    },
    {
      name: "Siti Nurhaliza, M.Ed",
      role: "Vice Principal, Curriculum",
      image: "/placeholder.svg",
    },
    {
      name: "Agung Prabowo, M.Sc",
      role: "Vice Principal, Student Affairs",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Rina Anggraini",
      role: "Head of IT Department",
      image: "/placeholder.svg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="About Our School"
        subtitle="Learn about the history, vision, and mission of SMKN 9 Bandar Lampung"
        backgroundImage="/placeholder.svg"
        showButtons={false}
      />

      {/* Vision and Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionTitle title="Our Vision" center={false} />
              <p className="text-gray-600 mb-6">
                To be a leading vocational education institution that produces graduates who are competent, competitive, and have strong character based on faith and academic excellence.
              </p>
              <div className="bg-school-light-blue p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Our Core Values</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Excellence in everything we do</li>
                  <li>Integrity and ethical behavior</li>
                  <li>Innovation and continuous improvement</li>
                  <li>Respect for diversity and inclusion</li>
                  <li>Collaboration and teamwork</li>
                </ul>
              </div>
            </div>
            <div>
              <SectionTitle title="Our Mission" center={false} />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                    <div className="w-2 h-2 bg-school-green rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Provide quality vocational education that meets industry standards and needs.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                    <div className="w-2 h-2 bg-school-green rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Develop students' technical skills, knowledge, and character to succeed in their careers.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                    <div className="w-2 h-2 bg-school-green rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Foster innovation, creativity, and entrepreneurial spirit among students.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                    <div className="w-2 h-2 bg-school-green rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Build strategic partnerships with industries, businesses, and the community.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                    <div className="w-2 h-2 bg-school-green rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Create a positive learning environment that promotes academic and personal growth.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-school-light-blue">
        <div className="container mx-auto">
          <SectionTitle
            title="Our History"
            subtitle="The story of how SMKN 9 Bandar Lampung became a leading vocational school in the region"
          />
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-school-blue text-white text-lg font-bold py-2 px-4 rounded-lg md:w-36 text-center flex-shrink-0">
                  1998
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                  <p className="text-gray-600">
                    SMKN 9 Bandar Lampung was established to address the growing need for skilled workers in the Lampung province, focusing initially on business and management programs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-school-blue text-white text-lg font-bold py-2 px-4 rounded-lg md:w-36 text-center flex-shrink-0">
                  2005
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expansion of Programs</h3>
                  <p className="text-gray-600">
                    The school expanded its offerings by introducing technology programs, including Computer and Network Engineering, to meet the demands of the digital era.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-school-blue text-white text-lg font-bold py-2 px-4 rounded-lg md:w-36 text-center flex-shrink-0">
                  2010
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">National Recognition</h3>
                  <p className="text-gray-600">
                    SMKN 9 gained national recognition for its excellent educational programs and was awarded a national standard school status by the Ministry of Education.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-school-blue text-white text-lg font-bold py-2 px-4 rounded-lg md:w-36 text-center flex-shrink-0">
                  2015
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
                  <p className="text-gray-600">
                    The school established strong partnerships with local and national industries, providing students with internship opportunities and enhancing employment prospects.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-school-blue text-white text-lg font-bold py-2 px-4 rounded-lg md:w-36 text-center flex-shrink-0">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modern Campus</h3>
                  <p className="text-gray-600">
                    A major renovation project was completed, transforming SMKN 9 into a modern campus with state-of-the-art facilities, including specialized laboratories and workshops.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-school-green text-white text-lg font-bold py-2 px-4 rounded-lg md:w-36 text-center flex-shrink-0">
                  Today
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Leading Vocational School</h3>
                  <p className="text-gray-600">
                    Today, SMKN 9 Bandar Lampung stands as a leading vocational school in Lampung province, offering diverse programs and producing graduates who excel in their chosen fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the dedicated professionals who lead SMKN 9 Bandar Lampung"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Facilities"
            subtitle="Explore the modern facilities and resources available at SMKN 9 Bandar Lampung"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <img
                src="/placeholder.svg"
                alt="Computer Lab"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Computer Laboratories</h3>
              <p className="text-gray-600">
                Modern computer labs equipped with the latest hardware and software for programming, design, and networking practice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <img
                src="/placeholder.svg"
                alt="Workshop"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Technical Workshops</h3>
              <p className="text-gray-600">
                Specialized workshops for hands-on training in various technical skills including electronics and engineering.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <img
                src="/placeholder.svg"
                alt="Library"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Modern Library</h3>
              <p className="text-gray-600">
                A comprehensive library with both physical and digital resources to support student research and learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <img
                src="/placeholder.svg"
                alt="Auditorium"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Auditorium</h3>
              <p className="text-gray-600">
                A spacious auditorium for school events, seminars, and student performances with modern audio-visual equipment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <img
                src="/placeholder.svg"
                alt="Sports Facilities"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Sports Facilities</h3>
              <p className="text-gray-600">
                Indoor and outdoor sports facilities including a basketball court, soccer field, and fitness center.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <img
                src="/placeholder.svg"
                alt="Student Lounge"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Student Lounge</h3>
              <p className="text-gray-600">
                Comfortable spaces for students to relax, collaborate on projects, and engage in extracurricular activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-school-blue text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Educational Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Become a part of SMKN 9 Bandar Lampung - where we transform potential into excellence through quality vocational education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-school-blue hover:bg-school-light-blue">
              Apply for Admission
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
