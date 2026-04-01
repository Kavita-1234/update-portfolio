import React from "react";

export default function Career() {
    const education = [
        {
            title: "Master of Computer Applications (MCA)",
            institute: "Rajasthan College of Engineering for Women, Jaipur",
            year: "2024",
            details: "CGPA: 9.98 • RTU Topper",
        },
        {
            title: "Bachelor of Computer Applications (BCA)",
            institute: "Kanoria PG Mahila Mahavidyalaya, Jaipur",
            year: "2022",
            details: "Percentage: 72%",
        },
        {
            title: "Senior Secondary (12th)",
            institute: "Maharana Pratap Senior Secondary School, Jaipur",
            year: "2019",
            details: "Percentage: 80%",
        },
        {
            title: "Secondary (10th)",
            institute: "Maharana Pratap Senior Secondary School, Jaipur",
            year: "2017",
            details: "Percentage: 78%",
        },
    ];

    const experience = [
        {
            role: "Java Developer Trainee",
            company: "Kugelblitz Pvt. Ltd.",
            duration: "September 2025 - Present",
            points: [
                "Developed RESTful APIs for document download in ZIP format.",
                "Integrated third-party APIs for data storage and management.",
                "Enhanced API documentation using Swagger.",
                "Improved APIs by adding new features and functionalities.",
            ],
        },
        {
            role: "Java Developer Trainee",
            company: "CoreTeams Softech Pvt. Ltd.",
            duration: "June 2025 - August 2025",
            points: [
                "Built APIs for user wallet and winning coin data.",
                "Developed comparison APIs for users’ teams and players.",
                "Integrated APIs for state and city data management.",
                "Enhanced API documentation with Swagger.",
                "Added new features like unannounced player fetching.",
            ],
        },
        {
            role: "Java Developer Intern",
            company: "HulkHire Tech",
            duration: "Feb 2025 - May 2025",
            points: [
                "Designed and implemented a scalable payment system using Stripe.",
                "Developed multi-payment support (credit/debit cards).",
                "Built complete payment flow with webhook-based updates.",
                "Ensured high performance, reliability, and fault tolerance.",
                "Followed PCI DSS compliance for secure transactions.",
            ],
        },
    ];

    return (
        <section
            id="career"
            className="px-6 md:px-10 py-20 bg-black text-white min-h-screen"
        >
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center">My Career</h2>
            <div className="w-32 h-1 bg-yellow-500 mx-auto mt-3 mb-16 rounded"></div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* 🎓 Education */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                        🎓 Education
                    </h3>

                    <div className="space-y-6 border-l-2 border-gray-700 pl-6">
                        {education.map((edu, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -left-3 top-2 w-3 h-3 bg-purple-500 rounded-full"></div>

                                <h4 className="font-semibold">{edu.title}</h4>
                                <p className="text-gray-400 text-sm">{edu.institute}</p>
                                <p className="text-gray-400 text-sm">{edu.year}</p>
                                <p className="text-gray-300 text-sm mt-1">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 💼 Experience */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-green-400">
                        💼 Experience
                    </h3>

                    <div className="space-y-8 border-l-2 border-gray-700 pl-6">
                        {experience.map((exp, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -left-3 top-2 w-3 h-3 bg-green-500 rounded-full"></div>

                                <h4 className="font-semibold">{exp.role}</h4>
                                <p className="text-gray-400 text-sm">
                                    {exp.company} • {exp.duration}
                                </p>

                                <ul className="text-gray-300 text-sm mt-2 space-y-1 list-disc ml-4">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}