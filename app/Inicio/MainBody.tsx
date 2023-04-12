"use client";
import React from "react";
import Header from "../(Header)/Header";
import Footer from "../(Footer)/Footer";

const MainBody = ({ children }: any) => {
  const [zoom, setZoom] = React.useState(1);
  const [contraste, setContraste] = React.useState(false);
  return (
    <body
      style={{ zoom: `${zoom}` }}
      className={`${contraste ? "grayscale" : "grayscale-0"}`}
    >
      <Header setZoom={setZoom} zoom={zoom} setContraste={setContraste} />

      <div className="lg:-mt-[162px]">{children}</div>

      <Footer />
    </body>
  );
};

export default MainBody;
