const projects = [
    { title: "Chat Application with WebSockets ", description: "Developed a real-time chat application using Spring Boot WebSockets for seamless messaging.", tech: "Java, Spring Boot, React.js, WebSocket, MongoDB" },
    { title: "Online Job Portal", description: "Developed a job portal as a part of an academic project, designed to handle multi-user job applications efficiently. Implemented Spring Boot & React for a responsive UI and optimized backend queries for faster processing. Integrated JWT-based authentication with Spring Security for secure access.", tech: "Spring Boot,Spring Security,JWT,MySQL" },
    { title: "Image Recognition Model", description: "Engineered and implemented an image recognition model employing keras, autokeras, gridsearchcv, and numpy.Conducted a comparative analysis, demonstrating superior accuracy metrics ( 10%) of the custom model over AutoKeras, with efficient processing times ( 200%).", tech: "Python,Keras,Autokeras,numpy,panda,GridsearchCV" },
    {title: "Playstream", description: " Implemented a YouTube-like application with a responsive design, leveraging efficient state management and reusable components,increasing user engagement by 20%.", tech: "React, Redux, YouTube API, Node.js, Express.js, MongoDB, WebSockets" }
  ];
  
  export default function Projects() {
    return (
      <div className="min-h-screen flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-gray-900">Projects</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <p className="mt-2 text-sm text-blue-500">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }