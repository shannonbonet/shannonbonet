import { useStaticQuery, graphql } from "gatsby";

export const projectData = [
  {
    title: "The Washington Post",
    tag: "wapo",
    role: "swe intern",
    link: "/wapo",
    date: new Date("2023-6-1"),
  },
  {
    title: "Cadence",
    tag: "cadence",
    role: "swe intern",
    link: "/cadence",
    date: new Date("2022-8-1"),
  },
  {
    title: "SIREN",
    tag: "siren",
    role: "project manager",
    link: "/siren",
    date: new Date("2021-8-1"),
  },
  {
    title: "We Care Solar",
    tag: "wcs",
    role: "developer",
    link: "/wecaresolar",
    date: new Date("2020-8-1"),
  },
  {
    title: "The Daily Californian",
    tag: "dc",
    role: "head projects editor",
    link: "/dailycal",
    date: new Date("2021-8-1"),
  },
  // {
  //   title: "renachoring code annotations",
  //   tag: "cmu",
  //   role: "cmu hci reu",
  //   link: "https://drive.google.com/file/d/13L5PMN0T1TlCsPQQpEIsNQyX4Tfc89Xx/view?usp=sharing",
  //   date: new Date("2022-5-1"),
  // },
];

export const journalismData = [
  {
    title: "The Daily Californian",
    tag: "dc",
    role: "head projects editor",
    link: "/dailycal",
    date: new Date("2021-8-1"),
  },
  {
    title: "reading between the redlines",
    tag: "redlining",
    role: "data journalism",
    link: "https://dailycal-projects.netlify.app/2021-07-10-redlining",
    date: new Date("2021-6-1"),
  },
];

export const allData = projectData.concat(journalismData); // useful later?

const recentThreshold = new Date("2022-7-30");
export const recentData = projectData
  .filter((p) => p.date > recentThreshold)
  .sort((a, b) => b.date - a.date);
