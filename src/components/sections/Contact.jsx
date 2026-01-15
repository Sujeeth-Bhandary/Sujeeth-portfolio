import RevealOnScroll from "../Reveal";
import emailjs from 'emailjs-com';


const handleSubmit=(e)=>{
  e.preventDefault();
  emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(()=>alert("Message sent successfully!")).catch((err)=>alert("Failed to send message, please try again later."));
  e.target.reset();
}
export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen relative flex items-center justify-center px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl text-center z-10">
          
          {/* Heading */}
          <h1
            className="text-4xl md:text-7xl font-extrabold tracking-tight
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
            bg-[length:200%_200%] bg-clip-text text-transparent
            animate-gradient drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Get in Touch
          </h1>

          <p className="mt-4 text-gray-400">
            Have a project or want to collaborate? Let’s talk.
          </p>

          {/* Form */}
          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
              name="name"
                type="text"
                required
                placeholder="Your Name"
                className="bg-gray-900/60 border border-gray-800 text-white
                px-4 py-3 rounded-xl focus:outline-none focus:ring-2
                focus:ring-blue-500 transition"
              />

              <input
              name="email"
                type="email"
                required
                placeholder="Your Email"
                className="bg-gray-900/60 border border-gray-800 text-white
                px-4 py-3 rounded-xl focus:outline-none focus:ring-2
                focus:ring-blue-500 transition"
              />

              <textarea
              name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="bg-gray-900/60 border border-gray-800 text-white
                px-4 py-3 rounded-xl focus:outline-none focus:ring-2
                focus:ring-blue-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-blue-500 to-purple-600
              hover:opacity-90 transition-all duration-300
              hover:-translate-y-1"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
