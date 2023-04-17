"use client";
import React from "react";

function CompCargando() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-8 h-8 border-4 border-[#006f46] rounded-full animate-spin"
        />
        <p className="ml-2">Cargando...</p>
      </div>
    </>
  );
}

export default CompCargando;
