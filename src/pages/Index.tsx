
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProgramCard from "@/components/ProgramCard";
import NewsCard from "@/components/NewsCard";
import StatsCard from "@/components/StatsCard";
import AchievementCard from "@/components/AchievementCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Programs data
  const programs = [
    {
      title: "Computer Engineering",
      description: "Learn computer networking, hardware maintenance, installation and cybersecurity.",
      icon: "/placeholder.svg",
    },
    {
      title: "Software Engineering",
      description: "Master programming languages, software development, web and app creation.",
      icon: "/placeholder.svg",
    },
    {
      title: "Multimedia",
      description: "Create digital art, video production, animation and graphic design.",
      icon: "/placeholder.svg",
    },
    {
      title: "Accounting",
      description: "Study financial management, bookkeeping, taxation and business finance.",
      icon: "/placeholder.svg",
    },
  ];

  // News data
  const news = [
    {
      title: "SMKN 9 Students Win National Robotics Competition",
      description: "A team of students from SMKN 9 Bandar Lampung have won first place in the National Robotics Competition held in Jakarta.",
      image: "/placeholder.svg",
      date: "May 12, 2025",
      category: "Achievement",
    },
    {
      title: "New Computer Lab Facilities Unveiled",
      description: "SMKN 9 Bandar Lampung has opened its new state-of-the-art computer laboratory equipped with the latest technology.",
      image: "/placeholder.svg",
      date: "May 5, 2025",
      category: "Facilities",
    },
    {
      title: "Industry Partnership with Local Tech Companies",
      description: "SMKN 9 has formed partnerships with several local tech companies to provide internships and job opportunities for graduates.",
      image: "/placeholder.svg",
      date: "April 28, 2025",
      category: "Partnership",
    },
  ];

  // Stats data
  const stats = [
    {
      count: "1500+",
      label: "Students",
      icon: "/placeholder.svg",
    },
    {
      count: "120+",
      label: "Teachers",
      icon: "/placeholder.svg",
    },
    {
      count: "25+",
      label: "Years Experience",
      icon: "/placeholder.svg",
    },
    {
      count: "95%",
      label: "Employment Rate",
      icon: "/placeholder.svg",
    },
  ];

  // Achievements data
  const achievements = [
    {
      title: "National Robotics Champion",
      description: "First place in the Indonesia National Robotics Competition among vocational schools.",
      image: "/placeholder.svg",
      level: "National",
      year: "2025",
    },
    {
      title: "Best IT School in Lampung",
      description: "Awarded as the best IT vocational school in Lampung province by the Education Ministry.",
      image: "/placeholder.svg",
      level: "Provincial",
      year: "2024",
    },
    {
      title: "Web Development Contest",
      description: "Gold medal in the National Web Development Contest for Vocational Schools.",
      image: "/placeholder.svg",
      level: "National",
      year: "2024",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The education I received at SMKN 9 Bandar Lampung prepared me perfectly for my career in IT. The teachers are knowledgeable and genuinely care about student success.",
      name: "Budi Santoso",
      role: "Software Developer, Tech Solutions Inc.",
      avatar: "/placeholder.svg",
    },
    {
      quote: "I learned not just technical skills but also important soft skills and work ethics. SMKN 9 focuses on creating well-rounded professionals.",
      name: "Dewi Lestari",
      role: "Graphic Designer, Creative Media",
      avatar: "/placeholder.svg",
    },
    {
      quote: "The practical approach to learning at SMKN 9 meant I was job-ready immediately after graduation. I secured a position before even completing my final semester.",
      name: "Ahmad Rizky",
      role: "Network Engineer, Telkom Indonesia",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Excellence in Vocational Education"
        subtitle="Developing skilled professionals through quality vocational education at SMKN 9 Bandar Lampung"
        backgroundImage="/placeholder.svg"
      />

      {/* About Brief Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Welcome to SMKN 9 Bandar Lampung</h2>
              <p className="text-gray-600 mb-6">
                SMKN 9 Bandar Lampung is a leading vocational high school focused on producing skilled graduates ready for industry demands or higher education. With state-of-the-art facilities and experienced educators, we provide practical, hands-on training in various vocational fields.
              </p>
              <p className="text-gray-600 mb-8">
                Our curriculum is designed in collaboration with industry partners to ensure our students receive relevant, up-to-date knowledge and skills that meet current market needs.
              </p>
              <Button className="bg-school-blue hover:bg-school-green">Learn More About Us</Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="SMKN 9 Bandar Lampung School Building"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Programs"
            subtitle="Discover our diverse range of vocational programs designed to prepare students for successful careers"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProgramCard
                  title={program.title}
                  description={program.description}
                  icon={program.icon}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="hover:bg-school-blue hover:text-white">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-school-blue text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <StatsCard
                  count={stat.count}
                  label={stat.label}
                  icon={stat.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Latest News"
            subtitle="Stay updated with the latest news, events, and announcements from SMKN 9 Bandar Lampung"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NewsCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  date={item.date}
                  category={item.category}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="hover:bg-school-blue hover:text-white">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-school-light-blue">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Achievements"
            subtitle="Celebrating the success and recognition our students and school have received"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <AchievementCard
                  title={achievement.title}
                  description={achievement.description}
                  image={achievement.image}
                  level={achievement.level}
                  year={achievement.year}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-school-blue hover:bg-school-green text-white">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Student Testimonials"
            subtitle="Hear what our alumni have to say about their experience at SMKN 9 Bandar Lampung"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-school-green text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our School?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful career. Apply now for admission to SMKN 9 Bandar Lampung and secure your future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-school-green hover:bg-school-light-blue">
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
