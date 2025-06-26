import TypingText from "../components/TypingEffect.jsx";

export default function Home() {
    return (
      <section
        id="home"
        className="h-screen flex items-center justify-center relative overflow-hidden snap-start snap-always"
      >
        {/* Center content */}
        <div className="text-center z-10">
          <div className="w-80 h-80 mx-auto relative overflow-hidden">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-morph">
              <clipPath id="blobClip">
                <path
                  fill="#000000"
                  d="M40.5,-56.7C52.2,-48.3,61.7,-34.6,64.1,-20.5C66.5,-6.3,61.8,8.2,56,22.2C50.2,36.3,43.2,49.9,31.7,58.6C20.3,67.3,4.4,71.1,-10.5,71C-25.4,71,-39.4,66.9,-50.1,57.5C-60.8,48.1,-68.2,33.4,-70.5,18.5C-72.8,3.5,-69.9,-11.6,-63,-24.5C-56.2,-37.3,-45.4,-48,-32.5,-56.8C-19.6,-65.5,-4.8,-72.2,9.2,-73.2C23.1,-74.3,46.2,-69.1,40.5,-56.7Z"
                  transform="translate(100 100)"
                />
              </clipPath>
              <image
                href="/portfolio-picture.jpeg"
                width="100%"
                height="100%"
                clipPath="url(#blobClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
          <h1 className="text-3xl mt-8 font-bold text-licorice">Hi, I'm Ayushi 👋</h1>
          <TypingText
  texts={["Full Stack Developer", "MERN Stack Enthusiast"]}
  typingSpeed={100}
  deletingSpeed={70}
  pause={1500}
/>
        </div>
      </section>
    );
  }
  