const Header = () => {
  return (
    <section className="bg-white px- py-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Grow revenue with powerful marketing
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {/* Add your short description here */}
          Streamline your marketing efforts and achieve exponential growth with
          our all-in-one platform.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
