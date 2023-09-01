const Footer = ({ data }) => {
  const { text } = data;
  return (
    <div
      data-test-id="footer"
      className="w-screen bg-gray-100 px-32 py-16 text-center"
    >
      {text}
    </div>
  );
};

export default Footer;
