const experiences = [
  { year: "2023 - Present", role: "Software Engineer", company: "Company A" },
  { year: "2022 - 2023", role: "Full-Stack Developer", company: "Company B" },
  { year: "2021 - 2022", role: "Intern", company: "Company C" },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold">Experience</h1>
      <div className="mt-6 flex flex-col items-center space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center group">
            <div className="w-4 h-4 bg-blue-500 rounded-full group-hover:scale-125 transition-all"></div>
            <div className="ml-6 text-left">
              <h2 className="text-xl font-bold">{exp.role} - {exp.company}</h2>
              <p className="text-gray-600">{exp.year}</p>
            </div>
          </div>
        ))}
        <div className="h-20 border-l-2 border-blue-500"></div>
      </div>
    </div>
  );
}