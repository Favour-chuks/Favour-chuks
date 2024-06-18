import BentoGrid from "../component/bentoGrid";
import IconSlider from "../component/iconSlider";

function Portfolio() {
  return (
    <>
      <section id="skillsandtools" className="h-[10vh] w-[100%]">
        <IconSlider />
      </section>
      <section id="portfolio" className="h-[100vh] w-[100%]  p-1">
        <h2 className="text-4xl font-normal mb-8">Portfolio</h2>
        {/* i want this to be some kind of bento grid */}
        <BentoGrid
          portfolioColor="green"
          projectLink={"www.facebook.com"}
          codeLink={"www.facebook.com"}
          portfolioDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corporis provident maxime dolorum officiis, ea ratione dignissimos modi doloribus sequi repellendus. Architecto ipsa aspernatur odit ullam labore consectetur necessitatibus sit?"
          }
        />
        <BentoGrid
          portfolioColor="green"
          projectLink={"www.facebook.com"}
          codeLink={"www.facebook.com"}
          portfolioDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corporis provident maxime dolorum officiis, ea ratione dignissimos modi doloribus sequi repellendus. Architecto ipsa aspernatur odit ullam labore consectetur necessitatibus sit?"
          }
        />
      </section>
    </>
  );
}

export default Portfolio;
