import { memo } from "react";

import Layout from "components/common/Layout";
import Typography from "components/common/Typography";
import LinkBase from "components/Link";

const NotFound = (): JSX.Element => (
  <Layout title="Not Found">
    <div className="mx-auto px-4 bg-white h-full">
      <div className="py-8 px-4 text-center">
        <div className="max-w-auto mx-auto">
          <Typography className="text-9xl">404</Typography>
          <Typography
            className="mt-8 uppercase text-xl lg:text-5xl font-black"
            variant="h2"
          >
            Page not found!
          </Typography>
          <Typography className="mt-6 uppercase text-sm lg:text-base text-gray-900">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </Typography>
          <LinkBase
            href="/"
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md"
          >
            Back To Homepage
          </LinkBase>
        </div>
      </div>
    </div>
  </Layout>
);

export default memo(NotFound);
