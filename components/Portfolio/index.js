import Fade from 'react-reveal/Slide';

export default ({ data }) => {
    const { title, projects } = data;
    return (
        <div id="portfolio" className="w-screen text-gray-800 px-4 py-16 md:p-16 lg:p-32">
            <Fade left>
                <h3 className="portfolio__title text-3xl font-bold mb-12">{title}</h3>
                <div className="portfolio__grid grid grid-flow-cols md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map( project => (
                        <div
                            key={project.title}
                            className="portfolio__project h-56"
                            style={{ background: `url('${project.image}') center`, backgroundSize: "cover" }}
                        >   
                            <div className="w-full h-full py-16 text-center text-transparent hover:text-white hover:bg-black hover:opacity-75">
                                <h4>{project.title}</h4>
                                <button
                                    href={project.btnLink}
                                    target="_blank"
                                    className="font-bold py-3 px-5 my-3 hover:bg-white hover:text-gray-800"
                                >
                                    {project.btnText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    )
}