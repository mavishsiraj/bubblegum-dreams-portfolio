import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Heart, Send, ArrowUp } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="max-w-3xl mx-auto relative">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Let's Connect!</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech!
          </p>
        </div>

        {/* Contact card */}
        <div className={`glass rounded-3xl p-8 md:p-12 text-center ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {/* Email */}
          <a
            href="mailto:taiba.siraj@example.com"
            className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-full font-body font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30 mb-8"
          >
            <Send className="w-5 h-5" />
            Say Hello!
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="mailto:taiba.siraj@example.com"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/taibasiraj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <p className="font-body text-muted-foreground text-sm">
            Currently looking for SDE internship opportunities 🚀
          </p>
        </div>

        {/* Footer */}
        <div className={`mt-16 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <p className="font-body text-muted-foreground text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary animate-pulse" /> by Taiba Siraj
          </p>
          <p className="font-body text-muted-foreground/60 text-xs mt-2">
            © 2024 All rights reserved
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-soft"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
