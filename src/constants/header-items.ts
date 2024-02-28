interface HeaderItem {
  label: string;
  url: string;
}

const getHeaderItems = (): HeaderItem[] => [
  {
    label: "Projects",
    url: "/",
  },
  {
    label: "About",
    url: "/",
  },
  {
    label: "Resume",
    url: "/",
  },
  {
    label: "Contact",
    url: "/",
  },
];
