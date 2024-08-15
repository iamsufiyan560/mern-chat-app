const GenderCheckbox = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <div className="form-control">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="checkbox h-5 w-5 text-blue-600 rounded border-gray-50  focus:ring-blue-500"
          />
          <span className="ml-2 text-gray-700">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className=" h-5 w-5 text-blue-600 rounded border-gray-50 focus:ring-blue-500 checkbox"
          />
          <span className="ml-2 text-gray-700">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
