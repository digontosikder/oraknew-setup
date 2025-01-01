

const SectionTitle = ({subhedding,hedding}) => {
    return (
        <div className="md:w-96 mx-auto text-center ">
            <p className="text-yellow-600">---{subhedding}---</p>
            <h1 className="text-4xl text-gray-400 border-y-4 my-3 py-2">{hedding}</h1>
        </div>
    );
};

export default SectionTitle;