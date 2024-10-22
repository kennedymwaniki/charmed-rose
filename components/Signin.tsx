import { Toaster } from "sonner";
import bg from "../public/bg.jpg";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen min-w-full">
      <Toaster position="top-center" richColors />

      <div className="lg:w-1/2 w-full h-64 lg:h-auto relative">
        <Image
          src={bg}
          alt="bg"
          quality={80}
          placeholder="blur"
          className="object-cover object-center w-full h-full"
          fill
        />
      </div>

      <div className="lg:w-1/2 w-full flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-purple-500">
            User Log In
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Log in with your data that you entered during your registration
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 p-4 rounded-lg">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usernamev
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="adminlogin"
                    className="font-semibold text-purple-600 hover:text-indigo-600"
                  >
                    are you an admin?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Keep me logged in checkbox */}
            <div className="flex items-center">
              <input
                id="keep-logged-in"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="keep-logged-in"
                className="ml-2 block text-sm text-gray-900"
              >
                Keep me logged in
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center items-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-10"
              >
                login
              </button>
            </div>

            <div className="text-sm">
              <a
                href="register"
                className="font-semibold text-indigo-500 hover:text-indigo-600"
              >
                You don't have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
