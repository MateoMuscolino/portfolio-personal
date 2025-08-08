import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { cn } from "./lib/utils.js";
import { useToast } from "../hooks/use-toast.js"
import { useState } from "react";
import useLanguage from "../context/useLanguage";

const texts = {
  en: {
    title: "Get In Touch",
    description: "I'm open to freelance work, internships, or new opportunities — let’s connect!",
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
    location: "Location",
    connect: "Connect With Me",
    sendMsg: "Send a Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMsg: "Your Message",
    placeholderName: "Mateo Muscolino...",
    placeholderEmail: "example@gmail.com",
    placeholderMsg: "Hello, I'd like to talk about...",
    sending: "Sending...",
    send: "Send Message",
    toastTitle: "Message sent!",
    toastDesc: "Thank you for your message. I'll get back to you soon."
  },
  es: {
    title: "Contacto",
    description: "Estoy abierto a trabajos freelance, pasantías u oportunidades nuevas — ¡conectemos!",
    contactInfo: "Información de Contacto",
    email: "Correo",
    phone: "Teléfono",
    location: "Ubicación",
    connect: "Redes Sociales",
    sendMsg: "Enviar un Mensaje",
    yourName: "Tu Nombre",
    yourEmail: "Tu Correo",
    yourMsg: "Tu Mensaje",
    placeholderName: "Mateo Muscolino...",
    placeholderEmail: "ejemplo@gmail.com",
    placeholderMsg: "Hola, me gustaría hablar sobre...",
    sending: "Enviando...",
    send: "Enviar Mensaje",
    toastTitle: "¡Mensaje enviado!",
    toastDesc: "Gracias por tu mensaje. Te responderé pronto."
  }
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: texts[language].toastTitle,
        description: texts[language].toastDesc,
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {texts[language].title.split(" ")[0]}{" "}
          <span className="text-primary">
            {texts[language].title.split(" ")[1]}
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {texts[language].description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">{texts[language].contactInfo}</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{texts[language].email}</h4>
                  <a
                    href="mailto:muscolinomateo@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    muscolinomateo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{texts[language].phone}</h4>
                  <a
                    href="tel:+5492916418360"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +54 9 291 641 8360
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{texts[language].location}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bahía Blanca, Buenos Aires, Argentina
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{texts[language].connect}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/mateo-muscolino-b8aab0234/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/mateomuscolino/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">{texts[language].sendMsg}</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {texts[language].yourName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={texts[language].placeholderName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {texts[language].yourEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={texts[language].placeholderEmail}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {texts[language].yourMsg}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={texts[language].placeholderMsg}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? texts[language].sending : texts[language].send}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;