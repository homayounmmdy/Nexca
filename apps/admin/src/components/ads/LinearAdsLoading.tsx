import React from "react";
import { SectionsTitle } from "../atoms";

const LinearAdsLoading: React.FC = () => {
  return (
    <>
      <SectionsTitle>Ads Default Template</SectionsTitle>
      <div className="flex flex-col gap-4 mb-3">
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
      </div>
    </>
  );
};

export default LinearAdsLoading;
