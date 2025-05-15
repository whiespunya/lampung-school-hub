import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProgramsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Academic Programs"
        subtitle="Explore our comprehensive vocational programs designed to prepare you for a successful career"
        backgroundImage="/placeholder.svg"
        showButtons={false}
      />

      {/* Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Vocational Programs"
            subtitle="SMKN 9 Bandar Lampung offers a diverse range of vocational programs that combine theoretical knowledge with practical skills"
          />

          <Tabs defaultValue="it" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="it">Information Technology</TabsTrigger>
              <TabsTrigger value="business">Business & Management</TabsTrigger>
              <TabsTrigger value="multimedia">Multimedia</TabsTrigger>
              <TabsTrigger value="accounting">Accounting</TabsTrigger>
              <TabsTrigger value="office">Office Administration</TabsTrigger>
            </TabsList>
            
            {/* IT Department */}
            <TabsContent value="it">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg"
                      alt="IT Department"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="bg-school-light-blue p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Career Opportunities</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>System Administrator</li>
                        <li>Network Engineer</li>
                        <li>Software Developer</li>
                        <li>Web Developer</li>
                        <li>IT Support Specialist</li>
                        <li>Database Administrator</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Computer and Network Engineering</h2>
                      <Badge className="bg-school-blue">3 Years Program</Badge>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our Computer and Network Engineering program equips students with comprehensive knowledge and skills in computer systems, networks, and IT infrastructure. Students learn everything from hardware components to complex network design and management.
                    </p>

                    <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Computer Systems</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            Learn computer architecture, hardware components, and system assembly.
                          </CardDescription>
                        </CardContent>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Networking Fundamentals</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            Understand network topologies, protocols, and infrastructure design.
                          </CardDescription>
                        </CardContent>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Operating Systems</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            Master Windows, Linux, and server administration.
                          </CardDescription>
                        </CardContent>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Network Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            Learn about cybersecurity threats, prevention, and security protocols.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">Industry Certifications</h3>
                    <p className="text-gray-600 mb-6">
                      Our program prepares students for internationally recognized certifications including:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <Badge variant="outline" className="text-school-blue border-school-blue">CompTIA A+</Badge>
                      <Badge variant="outline" className="text-school-blue border-school-blue">CompTIA Network+</Badge>
                      <Badge variant="outline" className="text-school-blue border-school-blue">Cisco CCNA</Badge>
                      <Badge variant="outline" className="text-school-blue border-school-blue">Microsoft Certified</Badge>
                    </div>

                    <Button className="bg-school-green hover:bg-school-blue">Apply for This Program</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Other departments (simplified) */}
            <TabsContent value="business">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg"
                      alt="Business Department"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="bg-school-light-blue p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Career Opportunities</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Business Administrator</li>
                        <li>Marketing Assistant</li>
                        <li>Sales Representative</li>
                        <li>Customer Service Manager</li>
                        <li>Human Resource Assistant</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Business Management</h2>
                      <Badge className="bg-school-blue">3 Years Program</Badge>
                    </div>
                    <p className="text-gray-600 mb-6">
                      The Business Management program prepares students for careers in business administration, marketing, and entrepreneurship. Students learn essential business principles, management strategies, and practical skills for the modern business environment.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Business Fundamentals</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Marketing Principles</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Business Communication</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Entrepreneurship</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>

                    <Button className="bg-school-green hover:bg-school-blue">Apply for This Program</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="multimedia">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg"
                      alt="Multimedia Department"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="bg-school-light-blue p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Career Opportunities</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Graphic Designer</li>
                        <li>Video Editor</li>
                        <li>Animation Artist</li>
                        <li>Web Designer</li>
                        <li>Digital Content Creator</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Multimedia and Design</h2>
                      <Badge className="bg-school-blue">3 Years Program</Badge>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our Multimedia program focuses on developing creative and technical skills for digital media production. Students learn graphic design, video production, animation, and interactive media creation.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Digital Imaging</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Video Production</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">2D and 3D Animation</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Web Design</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>

                    <Button className="bg-school-green hover:bg-school-blue">Apply for This Program</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="accounting">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg"
                      alt="Accounting Department"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="bg-school-light-blue p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Career Opportunities</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Accounting Clerk</li>
                        <li>Bookkeeper</li>
                        <li>Tax Assistant</li>
                        <li>Payroll Administrator</li>
                        <li>Accounts Receivable/Payable</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Accounting and Finance</h2>
                      <Badge className="bg-school-blue">3 Years Program</Badge>
                    </div>
                    <p className="text-gray-600 mb-6">
                      The Accounting program provides students with comprehensive knowledge of financial principles, bookkeeping, taxation, and accounting software. Students develop skills for managing financial records and reports.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Basic Accounting</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Tax Procedures</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Financial Reports</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Accounting Software</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>

                    <Button className="bg-school-green hover:bg-school-blue">Apply for This Program</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="office">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg"
                      alt="Office Administration Department"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="bg-school-light-blue p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Career Opportunities</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Administrative Assistant</li>
                        <li>Secretary</li>
                        <li>Office Coordinator</li>
                        <li>Records Manager</li>
                        <li>Executive Assistant</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Office Administration</h2>
                      <Badge className="bg-school-blue">3 Years Program</Badge>
                    </div>
                    <p className="text-gray-600 mb-6">
                      The Office Administration program prepares students for careers in office management and administrative roles. Students develop organizational, communication, and technological skills essential for modern office environments.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Office Management</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Business Communication</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Document Processing</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="bg-gray-50 border-none">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Office Technology</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>

                    <Button className="bg-school-green hover:bg-school-blue">Apply for This Program</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="section-padding bg-school-light-blue">
        <div className="container mx-auto">
          <SectionTitle
            title="Admission Requirements"
            subtitle="Learn about the requirements and process for joining our vocational programs"
          />
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">General Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                      <div className="w-2 h-2 bg-school-green rounded-full"></div>
                    </div>
                    <p className="text-gray-600">Completed junior high school (SMP) or equivalent education</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                      <div className="w-2 h-2 bg-school-green rounded-full"></div>
                    </div>
                    <p className="text-gray-600">Valid national exam results (UN/UNBK)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                      <div className="w-2 h-2 bg-school-green rounded-full"></div>
                    </div>
                    <p className="text-gray-600">Age not exceeding 18 years at the time of admission</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                      <div className="w-2 h-2 bg-school-green rounded-full"></div>
                    </div>
                    <p className="text-gray-600">Good health condition (medical certificate required)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-school-light-green p-2 rounded-full mt-1 mr-4">
                      <div className="w-2 h-2 bg-school-green rounded-full"></div>
                    </div>
                    <p className="text-gray-600">Passing the school entrance examination</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Application Process</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-school-blue text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Registration</h4>
                      <p className="text-gray-600">Complete the online registration form or visit our admissions office</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-school-blue text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Document Submission</h4>
                      <p className="text-gray-600">Submit all required documents including academic records</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-school-blue text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Entrance Examination</h4>
                      <p className="text-gray-600">Take written tests and attend an interview session</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-school-blue text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Admission Results</h4>
                      <p className="text-gray-600">Receive admission decision within 2 weeks after examination</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-school-blue text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Enrollment</h4>
                      <p className="text-gray-600">Complete enrollment process and pay registration fees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Application Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Early Registration</CardTitle>
                    <CardDescription>January - February</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Early registration with special consideration for outstanding applicants.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Regular Registration</CardTitle>
                    <CardDescription>March - May</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Main registration period for all prospective students.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Late Registration</CardTitle>
                    <CardDescription>June</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Limited spots available based on remaining capacity.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-school-green text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Vocational Journey With Us
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to pursue your passion? Apply now to join SMKN 9 Bandar Lampung and begin your journey toward a successful career.
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
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramsPage;
