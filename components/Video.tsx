"use client";
import React from "react";

interface VideoProps {
  width?: string;
  height?: string;
}

const Video = ({ width = "560", height = "315" }: VideoProps) => {
  return (
    <div>
      <b>
        <h1 className="text-5xl mb-6">Planilha | Fluxo de Caixa</h1>
      </b>
      {/* Added margin-bottom */}
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/8LCZKhGL4Ms?si=aPMBN2QYem5nHLQA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Video;
