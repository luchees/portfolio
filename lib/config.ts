type configType = {
  [k: string]: WebsiteConfig;
};
export type WebsiteConfig = {
  folder: string;
  url: string;
  domainName: string;
};
export const config: configType = {
  "portfolio-website": {
    folder: "portfolio",
    url: "lvda.link",
    domainName: "lvda.link",
  },
};
