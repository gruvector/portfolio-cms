export default ({ data }) => {
    const { text } = data;
    return (
        <div className="w-screen bg-gray-100 px-32 py-16 text-center">
            {text}
        </div>
    )
}