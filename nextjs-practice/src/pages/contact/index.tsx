import Head from "next/head";
import { NextPage } from "next";
import Button from "components/common/Button";

const Contact: NextPage = () => {
  const handleClick = () => {
    // TODO
  };

  return (
    <div className="mx-auto max-w-6xl bg-white py-4 px-10 shadow-xl mb-24">
      <Head>
        <title>Contact | Blog</title>
      </Head>
      <div className="w-full bg-white">
        <div className="text-center py-12 mb-6 bg-gray-100 border-b">
          <h1 className="text-xl md:text-4xl pb-4">Contact Us</h1>
          <p className="leading-loose text-gray-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="container max-w-4xl mx-auto pb-10 px-12 md:px-0">
          <div className="flex flex-wrap justify-start items-start -mx-4">
            <div className="w-full md:w-1/2 p-4">
              <form>
                <fieldset className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-dark pb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="block w-full border rounded py-2 px-3 text-sm text-gray-700"
                    type="text"
                  />
                </fieldset>

                <fieldset className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-dark pb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="block w-full border rounded py-2 px-3 text-sm text-gray-700"
                    type="text"
                  />
                </fieldset>

                <fieldset className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-dark pb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32"
                  ></textarea>
                </fieldset>

                <Button
                  className="text-sm py-2 px-3 bg-black text-white rounded disabled:opacity-60"
                  onClick={handleClick}
                  label="Submit"
                />
              </form>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <div className="overflow-hidden rounded border mb-6">
                <iframe
                  title="map"
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106000.49300263195!2d151.1141413582031!3d-33.8763776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1547515706012"
                ></iframe>
              </div>

              <p className="text-black font-bold mb-1">My Blog</p>
              <p className="text-sm mb-2">
                3 Doris St,
                <br />
                North Sydney,
                <br />
                NSW 2060
              </p>

              <a href="tel:0353247036" className="text-black font-bold">
                0353247036
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
