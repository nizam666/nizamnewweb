import { Target, Eye, Award, Users, TrendingUp, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering quality solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients are at the heart of everything we do. Your success is our success.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We stay ahead of technology trends to bring you cutting-edge solutions.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We're committed to continuous improvement and helping your business grow.",
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    description: "15+ years in IT consulting and business strategy",
  },
  {
    name: "Sarah Martinez",
    role: "CTO",
    description: "Expert in network engineering and cybersecurity",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    description: "Full-stack developer specializing in modern web technologies",
  },
  {
    name: "Emily Chen",
    role: "AI Solutions Director",
    description: "PhD in Machine Learning with 10+ years in AI development",
  },
];

const milestones = [
  { year: "2016", event: "Company Founded" },
  { year: "2018", event: "Expanded to Cybersecurity Services" },
  { year: "2020", event: "Launched AI Solutions Division" },
  { year: "2023", event: "Reached 500+ Completed Projects" },
  { year: "2026", event: "Leading IT Solutions Provider" },
];

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About TechSolutions</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner in comprehensive IT solutions. We've been helping businesses
              transform their technology infrastructure since 2016.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  NizamComputers was founded in 2016 with a simple mission: to provide businesses
                  with reliable, comprehensive IT services that drive growth and innovation.
                </p>
                <p>
                  What started as a small web development shop has grown into a full-service IT
                  company offering everything from website development and computer sales to
                  advanced cybersecurity and AI solutions.
                </p>
                <p>
                  Today, we serve over 250 clients across various industries, maintaining our
                  commitment to quality, innovation, and customer satisfaction. Our team of expert
                  professionals brings decades of combined experience to every project.
                </p>
                <p>
                  We believe in building long-term partnerships with our clients, understanding
                  their unique needs, and delivering solutions that make a real difference to their
                  business operations.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzkwNTc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="TechSolutions office"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To empower businesses with innovative IT solutions that drive efficiency,
                security, and growth. We're committed to delivering exceptional service and
                building lasting relationships with our clients through trust, expertise, and
                dedication.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-100 mb-6">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be the leading provider of comprehensive IT solutions, recognized for our
                innovation, reliability, and customer-centric approach. We envision a future where
                businesses of all sizes have access to enterprise-level technology services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold z-10">
                        <Clock className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      {index % 2 === 0 ? (
                        <>
                          <div className="text-right">
                            <div className="inline-block bg-white p-4 rounded-lg shadow-lg">
                              <div className="text-2xl font-bold text-blue-600">
                                {milestone.year}
                              </div>
                              <div className="text-gray-700">{milestone.event}</div>
                            </div>
                          </div>
                          <div></div>
                        </>
                      ) : (
                        <>
                          <div></div>
                          <div>
                            <div className="inline-block bg-white p-4 rounded-lg shadow-lg">
                              <div className="text-2xl font-bold text-blue-600">
                                {milestone.year}
                              </div>
                              <div className="text-gray-700">{milestone.event}</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
