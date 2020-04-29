import Fade from 'react-reveal/Slide';

export default ({ data }) => {
    const { heading, text, image } = data;
    return (
        <div id="about" className="w-screen grid md:grid-cols-2 text-gray-800">
            <div className="about__left p-32">
                <Fade left>
                    <h3 className="text-3xl font-bold mb-6">{heading}</h3>
                    <p>{text}</p>
                </Fade>
            </div>
            <div
                className="about_right"
                style={{ backgroundImage: `url('${image}')`, backgroundPosition: "bottom", backgroundSize: "cover" }}
            />
        </div>
    )
}