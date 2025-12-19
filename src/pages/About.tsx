import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Award, Rocket } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import aboutImage from "@/assets/about-ai.jpg";

const highlights = [
  "10+ Years of AI expertise",
  "200+ Successful projects",
  "Fortune 500 clients",
  "24/7 Support & maintenance",
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to democratizing AI and making it accessible to businesses of all sizes.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We partner with you every step of the way.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver nothing but the highest quality solutions, backed by rigorous testing.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We stay at the cutting edge, constantly exploring new AI frontiers.",
  },
];

const team = [
  { name: "Dr. Sarah Chen", role: "Chief AI Scientist", expertise: "Deep Learning & NLP" },
  { name: "Marcus Rodriguez", role: "Head of Engineering", expertise: "Scalable Systems" },
  { name: "Emily Watson", role: "Director of Strategy", expertise: "Digital Transformation" },
  { name: "David Kim", role: "Lead ML Engineer", expertise: "Computer Vision" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Ingenium AI
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pioneering the Future of
              <span className="gradient-text"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2014, Ingenium AI has been at the forefront of AI innovation, 
              helping businesses transform their operations through intelligent automation 
              and data-driven insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Ingenium AI, we're not just developing AI solutions—we're shaping the future 
                of how businesses operate. Our team of world-class engineers and data scientists 
                work tirelessly to deliver transformative results.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From startups to enterprise giants, we've helped organizations across industries 
                harness the power of artificial intelligence to solve their most complex challenges.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div 
                className="relative z-10 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="gradient-border rounded-2xl overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="AI Crystal Innovation"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-4xl font-bold gradient-text mb-2">Ingenium</div>
                    <div className="text-muted-foreground">Powered by Innovation</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary/20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-violet-500/20 blur-xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              What Drives <span className="gradient-text">Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-primary/50 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-violet-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
