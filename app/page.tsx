import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Hero Section */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center min-h-[600px] overflow-hidden">
        <section className="flex flex-col items-center justify-center flex-1 py-20 px-4 text-center relative z-10">
          <Image
            src="/logo-alt.svg"
            alt="LinkedIn Pro Image Logo"
            width={72}
            height={72}
            className="mb-6"
            priority
            unoptimized
            style={{ width: 72, height: "auto" }}
          />
          <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-800 mb-4 leading-tight">
            Upgrade Your LinkedIn. <br /> Unlock More Opportunities.
          </h1>
          <p className="text-xl sm:text-2xl text-blue-900 mb-8 max-w-2xl">
            Stand out to recruiters and employers with a professional LinkedIn
            makeover. Fast, easy, and tailored for your career goals.
          </p>
            <a
            href="#linkedin-profile-input"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold px-8 py-4 rounded-xl shadow transition mb-8"
            >
            Get Started Now
            </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-blue-700 font-medium text-base">
            <span>✔ Simple 3-step process</span>
            <span>✔ Personalized for you</span>
            <span>✔ More recruiter contacts</span>
          </div>
        </section>
      </div>
      {/* How It Works */}
      <section className="bg-white py-16 px-4 border-t border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          How It Works
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-blue-50 rounded-xl p-6 shadow text-center">
            <span className="text-4xl">1️⃣</span>
            <h3 className="font-semibold text-blue-700 mt-2 mb-1">
              Share Your Profile
            </h3>
            <p className="text-blue-900">
              Send us your LinkedIn or resume. We review your strengths and areas
              to improve.
            </p>
          </div>
          <div className="flex-1 bg-blue-50 rounded-xl p-6 shadow text-center">
            <span className="text-4xl">2️⃣</span>
            <h3 className="font-semibold text-blue-700 mt-2 mb-1">
              Get Your Plan
            </h3>
            <p className="text-blue-900">
              Receive a custom action plan and design suggestions for your
              profile.
            </p>
          </div>
          <div className="flex-1 bg-blue-50 rounded-xl p-6 shadow text-center">
            <span className="text-4xl">3️⃣</span>
            <h3 className="font-semibold text-blue-700 mt-2 mb-1">
              Shine Online
            </h3>
            <p className="text-blue-900">
              Apply the improvements and start attracting more recruiters and
              offers.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-white">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          What Clients Say
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-white rounded-xl p-6 shadow text-center border border-blue-100">
            <p className="italic text-blue-900 mb-2">
              “I got 3x more recruiter messages after my LinkedIn upgrade. Highly
              recommend!”
            </p>
            <span className="font-semibold text-blue-700">
              — Maria S., Product Manager
            </span>
          </div>
          <div className="flex-1 bg-white rounded-xl p-6 shadow text-center border border-blue-100">
            <p className="italic text-blue-900 mb-2">
              “The process was so easy and my profile looks amazing. I feel more
              confident!”
            </p>
            <span className="font-semibold text-blue-700">
              — João P., Software Engineer
            </span>
          </div>
        </div>
      </section>
     
      {/* LinkedIn Profile Input Section */}
      <section id="linkedin-profile-input" className="bg-white py-16 px-4 border-t border-blue-100">
        <h3 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          Ready to Transform Your LinkedIn?
        </h3>
        <p className="text-blue-900 mb-8 text-lg text-center">
          Connect with LinkedIn to get started instantly!
        </p>
        <div className="flex justify-center">
          <a
            href="/api/auth/linkedin" // Replace with your LinkedIn SSO endpoint
            className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow transition text-lg"
            style={{ minWidth: 280 }}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#fff"/>
              <path d="M12.5 13.5H9.5V22.5H12.5V13.5ZM11 12.25C11.8284 12.25 12.5 11.5784 12.5 10.75C12.5 9.92157 11.8284 9.25 11 9.25C10.1716 9.25 9.5 9.92157 9.5 10.75C9.5 11.5784 10.1716 12.25 11 12.25ZM14.5 13.5V22.5H17.5V17.5C17.5 16.3954 18.3954 15.5 19.5 15.5C20.6046 15.5 21.5 16.3954 21.5 17.5V22.5H24.5V17C24.5 14.5147 22.4853 12.5 20 12.5C18.6193 12.5 17.5 13.6193 17.5 15V13.5H14.5Z" fill="#2563EB"/>
            </svg>
            Connect with LinkedIn
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full py-12 bg-blue-50 text-center">
        &copy; {new Date().getFullYear()} LinkedIn Pro Image Service.
      </footer>
      
    </div>
  );
}
