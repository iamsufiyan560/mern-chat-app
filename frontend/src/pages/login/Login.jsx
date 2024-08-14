const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-10">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg backdrop-blur-xl bg-opacity-70">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Login to
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white placeholder-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white placeholder-gray-500"
            />
          </div>

          <div className="text-right mb-4">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline hover:text-blue-600"
            >
              Don't have an account?
            </a>
          </div>

          <button className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
