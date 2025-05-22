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
            href="#get-started"
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
      <section className="w-full text-center text-blue-900 text-base py-8 bg-white border-t border-blue-100 font-semibold tracking-wide">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">
          Ready to Transform Your LinkedIn?
        </h3>
        <p className="text-blue-900 mb-6 text-lg">
          Enter your LinkedIn profile URL below and take the first step toward more opportunities!
        </p>
        <form className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
        type="url"
        placeholder="Your LinkedIn profile URL"
        className="flex-1 px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
        required
          />
          <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow transition whitespace-nowrap"
          >
        Let's GO
          </button>
        </form>
      </section>
      {/* Footer */}
      <footer className="w-full py-12 bg-blue-50 text-center">
        &copy; {new Date().getFullYear()} LinkedIn Pro Image Service.
      </footer>
      
    </div>
  );
}
