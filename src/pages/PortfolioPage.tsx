
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const PortfolioPage = () => {
  // Projects data
  const projects = {
    it: [
      {
        title: "Smart Attendance System",
        description: "A facial recognition attendance system that automatically records student presence in class.",
        image: "/placeholder.svg",
        year: "2025",
        category: "IoT & Software"
      },
      {
        title: "School Management App",
        description: "A comprehensive mobile application for managing school activities, grades, and communication.",
        image: "/placeholder.svg",
        year: "2024",
        category: "Mobile Development"
      },
      {
        title: "Network Infrastructure Upgrade",
        description: "Complete redesign and implementation of the school's network infrastructure with enhanced security.",
        image: "/placeholder.svg",
        year: "2024",
        category: "Networking"
      },
      {
        title: "E-Learning Platform",
        description: "Custom e-learning platform for delivering online courses and assessments to students.",
        image: "/placeholder.svg",
        year: "2023",
        category: "Web Development"
      }
    ],
    multimedia: [
      {
        title: "School Promotional Video",
        description: "An engaging promotional video showcasing SMKN 9's facilities, programs, and student life.",
        image: "/placeholder.svg",
        year: "2025",
        category: "Video Production"
      },
      {
        title: "Digital Magazine",
        description: "Interactive digital magazine featuring student work, school events, and educational content.",
        image: "/placeholder.svg",
        year: "2024",
        category: "Digital Publishing"
      },
      {
        title: "3D School Campus Model",
        description: "Detailed 3D model of the entire school campus for virtual tours and promotional purposes.",
        image: "/placeholder.svg",
        year: "2024",
        category: "3D Modeling"
      },
      {
        title: "Animation Short Film",
        description: "Award-winning animated short film created by multimedia students, showcasing storytelling skills.",
        image: "/placeholder.svg",
        year: "2023",
        category: "Animation"
      }
    ],
    business: [
      {
        title: "School Cooperative Business",
        description: "Student-run school cooperative selling school supplies and snacks with proper business management.",
        image: "/placeholder.svg",
        year: "2025",
        category: "Business Management"
      },
      {
        title: "Marketing Campaign",
        description: "Comprehensive marketing campaign for school events and recruitment across digital and traditional channels.",
        image: "/placeholder.svg",
        year: "2024",
        category: "Marketing"
      },
      {
        title: "Business Expo Event",
        description: "Annual business exhibition showcasing student entrepreneurship projects and business plans.",
        image: "/placeholder.svg",
        year: "2024",
        category: "Event Management"
      },
      {
        title: "Financial Literacy Workshop",
        description: "Workshop series designed and delivered by business students to local community members.",
        image: "/placeholder.svg",
        year: "2023",
        category: "Community Outreach"
      }
    ]
  };

  // Awards data
  const awards = [
    {
      title: "National Robotics Competition",
      level: "National",
      achievement: "1st Place",
      year: "2025",
      description: "Championship in the annual National Robotics Competition for vocational schools."
    },
    {
      title: "Web Development Contest",
      level: "National",
      achievement: "Gold Medal",
      year: "2024",
      description: "Gold medal in the National Web Development Contest organized by the Ministry of Education."
    },
    {
      title: "Business Plan Competition",
      level: "Provincial",
      achievement: "1st Place",
      year: "2024",
      description: "First place in the Lampung Province Business Plan Competition for vocational students."
    },
    {
      title: "Animation Film Festival",
      level: "National",
      achievement: "Best Short Film",
      year: "2023",
      description: "Best Short Film award at the National Student Animation Film Festival."
    },
    {
      title: "Accounting Olympiad",
      level: "Regional",
      achievement: "1st Place",
      year: "2023",
      description: "First place in the Regional Accounting Olympiad for vocational schools in Sumatra."
    },
    {
      title: "IT Network Design Challenge",
      level: "Provincial",
      achievement: "1st Place",
      year: "2023",
      description: "Championship in the IT Network Design Challenge for vocational schools in Lampung."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Student Portfolio"
        subtitle="Explore the impressive projects and achievements of SMKN 9 Bandar Lampung students"
        backgroundImage="/placeholder.svg"
        showButtons={false}
      />

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Student Projects"
            subtitle="Discover some of the outstanding projects created by our talented students across different departments"
          />

          <Tabs defaultValue="it" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="it">IT Projects</TabsTrigger>
              <TabsTrigger value="multimedia">Multimedia Projects</TabsTrigger>
              <TabsTrigger value="business">Business Projects</TabsTrigger>
            </TabsList>
            
            {/* IT Projects */}
            <TabsContent value="it">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.it.map((project, index) => (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-school-blue text-white px-3 py-1 rounded-full text-xs">
                          {project.category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <span className="text-sm text-gray-500">{project.year}</span>
                        </div>
                        <p className="text-gray-600">{project.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Multimedia Projects */}
            <TabsContent value="multimedia">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.multimedia.map((project, index) => (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-school-green text-white px-3 py-1 rounded-full text-xs">
                          {project.category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <span className="text-sm text-gray-500">{project.year}</span>
                        </div>
                        <p className="text-gray-600">{project.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Business Projects */}
            <TabsContent value="business">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.business.map((project, index) => (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-school-blue text-white px-3 py-1 rounded-full text-xs">
                          {project.category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <span className="text-sm text-gray-500">{project.year}</span>
                        </div>
                        <p className="text-gray-600">{project.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Awards and Achievements Section */}
      <section className="section-padding bg-school-light-blue">
        <div className="container mx-auto">
          <SectionTitle
            title="Awards & Achievements"
            subtitle="Celebrating the recognition and honors our students have received in various competitions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge className="bg-school-blue">{award.level}</Badge>
                      <span className="text-sm text-gray-500">{award.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                    <div className="bg-school-light-green text-school-green font-semibold inline-block px-3 py-1 rounded-md mb-4">
                      {award.achievement}
                    </div>
                    <p className="text-gray-600">{award.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Photo Gallery"
            subtitle="Visual showcase of our students' activities, events, and school life"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src="/placeholder.svg"
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
