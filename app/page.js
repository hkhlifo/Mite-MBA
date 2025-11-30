"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import SimpleSidebar from "./components/Sidebar";

const ScrollRevealPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  const testimonials = [
    {
      quote: "The faculty here don't just teach—they mentor. MITE MBA helped me discover my strengths.",
      name: "Anirudh Shetty.",
      role: "Class of 2023",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://mite.ac.in/wp-content/uploads/2024/07/MBA_2010_Sheraz-500x500.jpeg"
    },
    {
      quote: "From late-night brainstorming to campus events, every moment shaped my journey.",
      name: "Arjun M.",
      role: "Marketing Specialization",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2024/07/MBA_2016_Jason-150x150.jpg"
    },
    {
      quote: "The collaborative culture and hands-on learning made me industry-ready.",
      name: "Sneha K.",
      role: "Finance Track",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2024/07/MBA_2010_Swathi-150x150.jpg"
    },
    {
      quote: "MITE MBA gave me the confidence to lead, the tools to innovate, and the network to grow.",
      name: "Karan S.",
      role: "Entrepreneurship Focus",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2024/07/MBA_2016_MaheshNayak-150x150.png"
    },
    {
      quote: "Every course, every project, every conversation pushed me to think bigger and bolder.",
      name: "Divya R.",
      role: "HR Specialization",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2024/07/MBA_2012_Deeksha-150x150.jpg"
    },
    {
      quote: "It wasn't just about academics—it was about becoming a better version of myself.",
      name: "Nikhil T.",
      role: "Operations Track",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2024/07/MBA_2018_Thilakraj-150x150.jpeg"
    }
  ];

  const [currentpage, setcurrentpage] = useState(1)
  const bookmarkperpage = 2;

  const indexlast = currentpage * bookmarkperpage
  const indexfirst = indexlast - bookmarkperpage
  const currentbookmarks = testimonials.slice(indexfirst, indexlast)

  return (
    <div className="font-poppins text-white -mt-[142px] pt-[142px] relative">
      <SimpleSidebar />
      <section className="relative w-full min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          poster="/mitehome.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-100"
        >
          <source src="/mite-mba.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent flex items-center justify-center">
          <div className="text-center px-8 py-12 md:py-20 max-w-3xl mx-auto bg-black/50 rounded-xl shadow-xl ring-1 ring-white/10">
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <ReactTyped strings={[
                'Lead with <span class="text-blue-300">Purpose</span>^500. Grow with <span class="text-indigo-200">MITE</span>. ',
                'Build with <span class="text-blue-300">Vision</span>^1000. Succeed with <span class="text-indigo-200">MITE</span>. ',
                'Learn with <span class="text-blue-300">Drive</span>^500. Lead with <span class="text-indigo-200">MITE</span>. ',
                'Shape your <span class="text-blue-300">Future</span>^1000. Grow with <span class="text-indigo-200">MITE</span>. ',
                'Think beyond <span class="text-blue-300">Limits</span>^500. Achieve with <span class="text-indigo-200">MITE</span>. '
              ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                startDelay={500}
                backDelay={700}
                smartBackspace
                showCursor
                cursorChar=" | "
                contentType="html"
              />
            </h1>
            <h2
              className="text-indigo-200 text-lg md:text-2xl font-medium tracking-wide mb-4"
              data-aos="slide-up"
              data-aos-delay="400"
            >
              Built for Future-Ready Professionals
            </h2>
            <p
              className="text-gray-300 text-sm md:text-base leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              At MITE, we shape strategic thinkers and bold leaders through immersive business education and real-world impact.
            </p>
          </div>
        </div>
      </section>
      <section id="program" className="bg-gradient-to-b from-[#e2e8f0] via-indigo-50 to-white text-gray-800 py-12">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#1e293b] mb-6"
            data-aos="fade-up"
          >
            Program Overview
          </h2>
          <p
            className="text-slate-600 text-base md:text-lg leading-relaxed mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Founded in 2008, our Department of Management Studies was created to deliver world-class education in management. The MBA program at MITE — affiliated with VTU and approved by AICTE — blends rigorous theory and hands-on practice to prepare future leaders for the evolving business landscape.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-16">
          <div
            className="bg-[#1e293b] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-4xl font-semibold text-blue-300">150</h3>
            <p className="text-sm text-slate-200 mt-2">Admissions Per Year</p>
          </div>
          <div
            className="p-6 bg-[#F3F4F6] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            data-aos="flip-up"
            data-aos-delay="300"
          >
            <h3 className="text-3xl font-bold text-blue-500">1500+</h3>
            <p className="text-sm text-gray-700 mt-2">Alumni</p>
          </div>
          <div
            className="bg-[#1e293b] p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-4xl font-semibold text-blue-300">5</h3>
            <p className="text-sm text-slate-200 mt-2">Industry/Global University Professors</p>
          </div>
          <div
            className="bg-[#1e293b] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-4xl font-semibold text-blue-300">50+</h3>
            <p className="text-sm text-slate-200 mt-2">Global Corporates for Placement</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3
            className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Elevate Your Future with an MBA from MITE!
          </h3>
          <p
            className="text-gray-700 text-sm md:text-base leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our MBA is a rigorous, 4-semester journey over two academic years. Year one focuses on core management foundations, while the final year delivers advanced knowledge and specialized skills to shape future-ready professionals.
          </p>
          <Link href={'/'}>
            <button
              className="cursor-pointer inline-block bg-[#1e293b] text-white px-6 py-3 rounded-full hover:bg-slate-700 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Explore Curriculum →
            </button>
          </Link>
        </div>
      </section>
      <hr className="w-3/4 border-gray-700 my-2 mx-auto" />
      <section id="specializations" className="bg-gradient-to-b from-white via-[#f8fafc] to-indigo-50 text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1e293b] mb-6">
            Dual Specializations Offered
          </h2>
          <p className="text-lg md:text-xl text-indigo-600 font-semibold mb-4 tracking-wide">
            Marketing & Finance · Marketing & HR · Marketing & Business Analytics
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Our MBA pedagogy blends dynamic simulation exercises including case discussions, live projects, and presentations — ensuring immersive, hands-on learning through class participation, analysis, reporting, and viva-voce.
          </p>
        </div>
        <div className="max-w-2xl mx-auto px-4 mb-10">
          <img
            src="/carrer.jpeg"
            alt="MITE Specializations Visual"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-16">
          {[
            {
              title: "Experiential Learning",
              desc: "Engage in live projects, simulations, and student-led case studies that foster practical decision-making.",
            },
            {
              title: "Leadership through Clubs",
              desc: "Explore hands-on management and leadership activities through vibrant student clubs and committees.",
            },
            {
              title: "Industry-Driven Pedagogy",
              desc: "Learn from conferences and lectures led by global corporate leaders with decades of international experience.",
            },
            {
              title: "Academic Legacy",
              desc: "Consistently ranked among the top MBA performers in the Mysore Zone with award-winning student outcomes.",
            },
            {
              title: "Social Responsibility",
              desc: "Participate in medical camps, sustainability efforts, and community development initiatives.",
            },
            {
              title: "Global Exposure",
              desc: "Guided by distinguished faculty from premier institutions, preparing students for international placements.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
            >
              <h3 className="text-xl font-bold text-[#1e293b] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center px-4" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4">
            Discover the MITE Advantage
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            At MITE, academic excellence meets practical learning. As an autonomous institution affiliated with VTU, we're dedicated to shaping tomorrow's business leaders with purpose, precision, and global perspective.
          </p>
          <Link href="/">
            <button className="inline-block bg-[#1e293b] text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-[#374151] focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer">
              Explore Faculty & Insights →
            </button>
          </Link>
        </div>
        <hr className="w-3/4 border-gray-700 mt-15 mx-auto" />
      </section>
      <section id="vision" className="bg-gradient-to-b from-indigo-50 via-white to-[#f8fafc] text-[#1e293b] py-7">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1e293b] mb-6" data-aos="fade-up">
            Vision & Mission
          </h2>
          <div
            className="bg-white shadow-md rounded-xl px-6 py-8 mb-10 border border-indigo-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              To develop transformational global leaders through perfection and innovative learning.
            </p>
          </div>
          <div
            className="bg-white shadow-md rounded-xl px-6 py-8 border border-indigo-100"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-6">Our Mission</h3>
            <ul className="space-y-4 text-gray-700 text-base md:text-lg text-left max-w-3xl mx-auto list-disc list-inside">
              <li>Developing a set of highly qualified, goal-oriented human resources</li>
              <li>Upholding the highest standards of excellence in management education</li>
              <li>Contributing positively to society by nurturing globally responsible citizens</li>
              <li>Providing a conducive environment for cutting-edge research</li>
            </ul>
          </div>
        </div>
        <hr className="w-3/4 border-gray-700 mt-15 mx-auto" />
      </section>
      <section id="placement" className="bg-gradient-to-b from-[#f8fafc] via-[#f8fafc] to-indigo-50 py-5 text-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Placement Success
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            At MITE, our MBA postgraduates are meticulously groomed to excel in top global corporates — including the Big 4 consulting firms and leading organizations across India and abroad. Backed by a robust training and placement ecosystem, we ensure students secure exceptional career opportunities with competitive packages and strategic roles.
          </p>
        </div>
        <div className="max-w-2xl mx-auto px-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          <img
            src="/placement.jpeg"
            alt="MITE Placement Showcase"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
        <hr className="w-3/4 border-gray-700 mt-15 mx-auto" />
      </section>
      <section id="campus" className="bg-gradient-to-b from-indigo-50 via-white to-[#f8fafc] py-14 text-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Campus Life at MITE
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Experience the vibrant energy of MITE through glimpses of student life, events, and campus culture. From academic excellence to spirited celebrations, our campus is where future leaders thrive.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
          {[
            {
              src: "https://www.youtube.com/embed/-FST-Hk-HwU",
              title: "Official Campus Overview"
            },
            {
              src: "https://www.youtube.com/embed/tx61kRUNfCE",
              title: "Infrastructure Highlights"
            },
            {
              src: "https://www.youtube.com/embed/BcEcQbHLlM4",
              title: "Awards & Achievements"
            },
            {
              src: "https://www.youtube.com/embed/tMlF2cmM0XI",
              title: "Industry & Global Connect"
            },
            {
              src: "https://www.youtube.com/embed/BD-2nqgy8zk",
              title: "Academics @ MITE"
            },
            {
              src: "https://www.youtube.com/embed/t7NU33DlI3U",
              title: "Shape Your Career"
            },
            {
              src: "https://www.youtube.com/embed/x4Hos3xbLyw",
              title: "Training & Placement"
            },
            {
              src: "https://www.youtube.com/embed/CwknngW-P2I",
              title: "Cultural & Co-curricular Life"
            },
          ].map((video, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 ring-1 ring-indigo-100"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="px-4 py-3 text-center">
                <h3 className="text-sm md:text-base font-medium text-indigo-600">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-3/4 border-gray-700 mt-15 mx-auto" />
      </section>
      <section id="testimonials" className="w-full bg-gradient-to-br from-[#f8fafc] via-white to-indigo-100 text-gray-900">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center">
          Testimonials
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10 text-center">
          Hear directly from students, alumni, and faculty about their experiences, insights, and journeys through the MITE MBA program.
        </p>
        <div className="max-w-6xl mx-auto px-6 pb-16 pt-7">
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={() => setcurrentpage(currentpage - 1)}
              disabled={currentpage === 1}
              className={`text-xl px-4 py-2 rounded-full font-medium transition duration-300
          ${currentpage === 1
                  ? 'text-gray-400 bg-gray-300 cursor-not-allowed'
                  : 'text-white bg-[#1e293b] hover:bg-indigo-600 hover:text-white cursor-pointer shadow-sm'}`}
            >
              &lt;
            </button>
            <button
              onClick={() => setcurrentpage(currentpage + 1)}
              disabled={currentpage === Math.ceil(testimonials.length / bookmarkperpage)}
              className={`text-xl px-4 py-2 rounded-full font-medium transition duration-300
          ${currentpage === Math.ceil(testimonials.length / bookmarkperpage)
                  ? 'text-gray-400 bg-gray-300 cursor-not-allowed'
                  : 'text-white bg-[#1e293b] hover:bg-indigo-600 hover:text-white cursor-pointer shadow-sm'}`}
            >
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentbookmarks.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border border-indigo-400"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-200 text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollRevealPage;