import Button from "components/common/Button";
import Typography from "components/common/Typography";

type Props = {
  onClose: () => void;
};

const LoginForm = ({ onClose }: Props): JSX.Element => {
  const handleSignIn = () => {
    //TODO
  };

  return (
    <div className="fixed top-0 left-0 bg-gray-600 bg-opacity-50 z-50 overflow-hidden min-h-screen w-full p-6 flex justify-center items-center">
      <Button
        className="bg-white p-1 absolute top-0 right-0"
        label="Close"
        onClick={onClose}
      />
      <div className="w-full max-w-xs">
        <div className="bg-white border p-8 shadow rounded w-full mb-6">
          <Typography
            variant="h2"
            className="mb-6 text-lg text-gray-900 font-thin"
          >
            Login to your account
          </Typography>

          <form method="POST" action="/login">
            <fieldset className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-900 mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                name="email"
                required
              />
            </fieldset>

            <fieldset className="mb-4">
              <div className="w-full flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-900 mb-2"
                >
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                name="password"
                required
              />
            </fieldset>

            <div className="pt-1 pb-5 text-sm text-gray-darker font-thin">
              <label>
                <input
                  className="mr-1"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                Remember me
              </label>
            </div>

            <Button
              onClick={handleSignIn}
              label="Sign in"
              className="block w-full bg-blue-600 text-white rounded-sm py-3 text-sm tracking-wide"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
