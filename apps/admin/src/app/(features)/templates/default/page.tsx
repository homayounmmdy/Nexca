import { LinearAds } from "@/components/ads";
import { Container } from "@/components/atoms";
import {
  Banner,
  PostsSec,
  SingleCardSec,
  SliderSec,
  SportSec,
  VerticalPostsSec,
} from "@/components/organisms";
import MostTab from "@/components/organisms/MostTab";
import SiteConfig from "@/config/site";
import { SectionController } from "@/util/controller/sectionsController";
import { Metadata } from "next";
import React from "react";
import DefaultMainPosts from "./components/DefaultMainPosts";
import DefaultTeleType from "./components/DefaultTeleType";

export const metadata: Metadata = {
  title: `Default Templates page | ${SiteConfig.title}`,
  description:
    "Here you find the latest posts about varities topics like football coding news and life and more",
  keywords: "posts,football,news,life,coding,interview_question,QA",
  alternates: {
    canonical: `${SiteConfig.siteURL}/templates/default`,
  },
  openGraph: {
    title: `Default Templates page | ${SiteConfig.title}`,
    description:
      "Here you find the latest posts about varities topics like football coding news and life and more",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Here you find the latest posts about varities default topics like football coding news and life and more",
  },
};

const DemoPage: React.FC = () => {
  return (
    <>
      <h1 className="hidden">{`demo page | ${SiteConfig.title}`}</h1>

      <Container className="mt-30">
        <DefaultTeleType />

        <DefaultMainPosts />

        <Banner />
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-9">
            <SectionController sectionId={2}>
              <PostsSec />
            </SectionController>
          </div>
          <div className="col-span-12 md:col-span-3">
            <LinearAds id={1} />
          </div>
        </div>
      </Container>
      <SectionController sectionId={5}>
        <SliderSec />
      </SectionController>
      <Container>
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-3">
            <MostTab />
          </div>
          <div className="col-span-12 md:col-span-9">
            <SectionController sectionId={3}>
              <SingleCardSec />
            </SectionController>
          </div>
        </div>
        <SectionController sectionId={4}>
          <VerticalPostsSec />
        </SectionController>
        <SectionController sectionId={6}>
          <SportSec />
        </SectionController>
      </Container>
    </>
  );
};

export default DemoPage;
