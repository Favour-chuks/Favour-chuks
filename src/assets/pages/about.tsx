function About() {
  return (
    <>
      <h1 className="text-4xl font-normal mb-8">About</h1>
      <div id="about" className=" pb-5 mb-5 bg-lime-500">
        <p className="text-left text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos neque
          harum, natus quod, molestiae deserunt numquam ipsam, eaque dolores ab
          velit fugiat unde. Deserunt facilis esse veniam iste natus fuga!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          dolorum doloribus incidunt quasi illum adipisci numquam autem natus
          voluptatibus provident impedit, saepe culpa eaque inventore ratione
          voluptas laudantium iusto aut!
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
          dignissimos voluptatibus doloremque perferendis, dolores earum
          laudantium alias officiis numquam totam quia accusamus distinctio
          culpa minus! Distinctio inventore voluptates vel sequi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Exercitationem, cum
          porro. Explicabo doloribus eveniet eum quia nesciunt vitae, dolores
          neque quidem non accusamus nobis debitis! Velit atque accusantium non
          eum!
        </p>
        <button className="justify-self-center">pointer arrow</button>
      </div>

      <h2 className="text-4xl font-normal mb-8">Videos</h2>
      <div
        id="videos"
        className="h-[100vh] py-5 mb-5  bg-red-500 grid grid-cols-3 gap-4">
        <div className="h-[80vh] w-[100%] border border-1 border-gray-950"></div>
        <div className="h-[80vh] w-[100%] bg-white border border-1 border-gray-950"></div>
        <div className="h-[80vh] w-[100%] bg-white border border-1 border-gray-950"></div>
        <button className="col-span-3 border border-1 border-gray-950 h-[3rem]">
          view more videos
        </button>
      </div>
      <div id="contact" className="h-[100vh]  bg-blue-500">
        padding
      </div>
    </>
  );
}

export default About;
