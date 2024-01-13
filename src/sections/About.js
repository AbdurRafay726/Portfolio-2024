import FadeInSection from "../components/FadeIn";

export default function About() {
  return (
    <div
      id="about"
      className="pt-6 md:pt-12 pb-6 sm:pb-10 md:pb-16 max-w-screen-1200px"
    >
      <div className="mx-auto px-8 sm:px-16 md:px-0 md:w-2/3 text-center relative">
        <img
          src={`${process.env.PUBLIC_URL}/../images/pngegg.png`}
          alt=""
          className="w-10 h-10 sm:h-14 sm:w-14 absolute top-12 left-16 sm:top-14 sm:left-20 scale-125 qouteClrChange md:h-20 md:w-20 md:top-14 md:left-10"
        />
        <h2 className="font-bold text-xl xsm:text-3xl md:text-4xl pt-4 sm:pt-6 z-10">
          This is all about me :)
        </h2>
        <FadeInSection>
          <p className="mt-4 sm:mt-6 text-base xsm:text-lg md:text-xl text-justify z-10 tracking-normal md:tracking-wide leading-5 sm:leading-6 md:leading-7 ">
            I am an{" "}
            <span className="text-gray-800"> enthusiastic engineer</span> from{" "}
            <span className="text-green-600">Pakistan</span> with a passion for
            crafting engaging and dynamic web experiences. My journey into the
            world of programming began with HTML, CSS, and JavaScript, and I've
            since delved deep into the realm of modern web development. I thrive
            on the versatility of JavaScript and its frameworks, especially
            React.js. Building sleek and responsive user interfaces that bring
            ideas to life is my forte. Alongside that, I have a strong command
            over various CSS frameworks, leveraging their power to create
            visually stunning and intuitive designs. With a keen eye for detail
            and a love for clean code, I'm always exploring new technologies and
            methodologies to enhance my skills and deliver top-notch solutions.
            My goal is not just to write code but to craft seamless digital
            experiences that resonate with users. When I'm not coding, you might
            find me exploring new tech trends. Let's collaborate and turn your
            visions into captivating digital realities!
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
