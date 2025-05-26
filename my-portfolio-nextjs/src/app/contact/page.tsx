import { MainLayout } from "@/components/layout/main-layout";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Contact() {
  return (
    <MainLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-foreground">
            Get In <span className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] to-[#d2177e] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-20 max-w-3xl mx-auto">
            I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground"
                    placeholder="Your message..."
                  />
                </div>
                
                <div className="flex items-center relative">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] via-[#d2177e] to-[#eb9fed] text-primary-foreground rounded-full py-5 px-16 pr-28 text-lg font-normal relative z-10 hover:shadow-lg transition-shadow"
                  >
                    Send Message
                  </button>
                  <div className="absolute right-1 bg-primary-foreground w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center">
                    <HiOutlineArrowRight className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-foreground text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">ernie.ryan@example.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Tokyo, Japan</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg mb-2">Response Time</h3>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 