import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          About <span className="text-webred">Doc</span><span className="text-webnavyblue">Spot</span>
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            <strong>DocSpot</strong> is your trusted healthcare companion, providing fast and reliable access to top-rated doctors. Whether you're looking to schedule appointments, consult online, or explore specializations, our platform ensures a seamless experience tailored to your health needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-webnavyblue mb-3">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            To transform the way healthcare is accessed by fostering digital-first engagement, reducing wait times, and improving patient outcomes through technological excellence and compassionate care.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-webnavyblue mb-3">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            At DocSpot, our mission is to simplify healthcare accessibility through intuitive interfaces, real-time availability, and secure patient-doctor interactions. We aim to make health management a stress-free experience for all users.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-webnavyblue mb-3">Key Accomplishments</h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
            <li>💼 10,000+ appointments successfully completed across India.</li>
            <li>👨‍⚕️ 500+ verified doctors registered and actively consulting.</li>
            <li>🌟 99.5% average patient satisfaction score in the last year.</li>
            <li>🏆 Recognized as a top innovator by HealthTech India 2025.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-semibold text-webnavyblue mb-3">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <strong>Dr. Ananya Desai</strong><br />Co-Founder & Chief Medical Officer
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <strong>Ravi Kapoor</strong><br />CEO & Head of Product Strategy
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <strong>Meera Narang</strong><br />CTO & Full-Stack Architect
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <strong>Arjun Mehta</strong><br />Lead UX Designer
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
