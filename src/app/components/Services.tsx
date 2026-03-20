import { Code2, Monitor, Video, Shield, Network, Brain, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Transform your digital presence with custom-built websites and web applications that drive results.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzczOTc5MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "API Integration",
      "SEO Optimization",
    ],
    color: "blue",
  },
  {
    icon: Monitor,
    title: "Computer Sales & Services",
    description:
      "From hardware sales to repairs and upgrades, we provide comprehensive computer solutions for businesses and individuals.",
    image: "https://images.unsplash.com/photo-1627281796892-39e266ee50be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3Mzk3OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Desktop & Laptop Sales",
      "Hardware Repairs",
      "System Upgrades",
      "Data Recovery",
      "Performance Optimization",
      "Warranty Support",
    ],
    color: "green",
  },
  {
    icon: Video,
    title: "CCTV Installation & Service",
    description:
      "Professional surveillance systems to protect your property with state-of-the-art security camera technology.",
    image: "https://images.unsplash.com/photo-1672073311074-f60c4a5e7b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMENDVFYlMjBzdXJ2ZWlsbGFuY2V8ZW58MXx8fHwxNzczOTQyNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "HD Camera Installation",
      "Remote Monitoring Setup",
      "Night Vision Systems",
      "Motion Detection",
      "Cloud Storage Solutions",
      "Maintenance & Support",
    ],
    color: "purple",
  },
  {
    icon: Shield,
    title: "Cyber Security Advisory",
    description:
      "Protect your digital assets with comprehensive cybersecurity solutions and expert consulting services.",
    image: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzM5NjY3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Firewall Configuration",
      "Threat Assessment",
      "Security Training",
      "Compliance Consulting",
    ],
    color: "red",
  },
  {
    icon: Network,
    title: "Network Engineering",
    description:
      "Design, implement, and maintain robust network infrastructure that keeps your business connected and productive.",
    image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VydmVyJTIwcm9vbXxlbnwxfHx8fDE3NzM5MDUyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Network Design",
      "Infrastructure Setup",
      "Wi-Fi Solutions",
      "VPN Configuration",
      "Network Monitoring",
      "Troubleshooting & Support",
    ],
    color: "orange",
  },
  {
    icon: Brain,
    title: "Local AI Solutions",
    description:
      "Harness the power of artificial intelligence with locally deployed AI systems for enhanced privacy and performance.",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM5MTYxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "AI Model Deployment",
      "Machine Learning Integration",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Predictive Analytics",
      "Custom AI Development",
    ],
    color: "indigo",
  },
];

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to meet all your technology needs. From development
            to security, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-${service.color}-100 mb-4`}>
                      <Icon className={`h-8 w-8 text-${service.color}-600`} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We can create tailored IT solutions that perfectly fit your unique business requirements
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
