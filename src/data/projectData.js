import { useStaticQuery, graphql } from "gatsby";

export const projectData = [
  {
    title: "siren",
    tag: "siren",
    role: "project manager",
    link: "/siren",
    date: new Date("2021-8-1"),
  },
  {
    title: "we care solar",
    tag: "wcs",
    role: "software developer",
    link: "/wecaresolar",
    date: new Date("2020-8-1"),
  },
  {
    title: "renachoring code annotations",
    tag: "cmu",
    role: "cmu hci reu",
    link: "https://drive.google.com/file/d/13L5PMN0T1TlCsPQQpEIsNQyX4Tfc89Xx/view?usp=sharing",
    date: new Date("2022-5-1"),
  },
];

export const journalismData = [
  {
    title: "daily californian",
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

const recentThreshold = new Date("2021-7-30");
export const recentData = projectData
  .filter((p) => p.date > recentThreshold)
  .sort((a, b) => b.date - a.date);
