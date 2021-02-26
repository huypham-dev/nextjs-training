import React from "react";
import { FooterDataType } from "models";

type Props = {
  data: FooterDataType
}

const Footer = ({ data }: Props) => (
  <div className="-mx-6 bg-white px-6 py-12">
    <div className="mx-auto container text-gray-800 text-sm flex justify-between">
      <span>{data.leftText}</span>
      <span>{data.rightText}</span>
    </div>
  </div>
);

export default Footer;
