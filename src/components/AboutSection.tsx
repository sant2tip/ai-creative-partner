import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "10+ Years of AI expertise",
  "200+ Successful projects",
  "Fortune 500 clients",
  "24/7 Support & maintenance",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of
              <span className="gradient-text"> AI Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At AgencyAI, we're not just developing AI solutions—we're shaping the future 
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden gradient-border">
              <div className="aspect-square bg-gradient-to-br from-card to-secondary p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-bold gradient-text mb-4">AI</div>
                  <div className="text-xl text-muted-foreground">Powered by Innovation</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary/20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-violet-500/20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
