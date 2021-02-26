import React, { memo } from "react"; 
import Image from "next/image";
import { IntroduceType } from "models";

type Props = {
  data: IntroduceType;
};

const Introduce = ({ data }: Props) => {
  const { heading, intro, desc, image } = data;

  return (
    <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      <div className="mb-12">
        <h1 className="text-3xl lg:text-4xl text-center mb-6 tracking-wider">
          {heading}
        </h1>

        <p className="tracking-wide text-sm mb-6 leading-relaxed mx-auto max-w-xl text-center">
          {intro}
        </p>

        <p className="tracking-wide text-xs text-gray-600 leading-loose mx-auto max-w-xl text-center">
          {desc}
        </p>
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="w-full h-64">
          <Image src={image} width={976} height={256} />
        </div>
      </div>
    </div>
  );
};

export default memo(Introduce);
