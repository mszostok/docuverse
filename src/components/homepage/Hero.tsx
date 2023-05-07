import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./Hero.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';

const heroData = {
  title: (
    <>
      Documentation
      <br />
      Universe
    </>
  ),
  subtitle: (
    <>
      The central hub that is responsible for hosting documentation for all projects that I own. <br />
    </>
  ),
  illustrationSrc: "/img/undraw_taking_notes_re_bnaf.svg",
};

const IllustrationColumn: FunctionComponent<{
  src: string;
  className?: string;
}> = ({ src, className }) => (
  <div className={clsx(styles.illustrationWrapper, className)}>
    <img src={useBaseUrl(src)} className={styles.illustration} />
  </div>
);

export const Hero: FunctionComponent = () => {
  const { title, subtitle, illustrationSrc } = heroData;

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
          </div>
          <IllustrationColumn
            src={illustrationSrc}
            className="col col--5 mobile-hide"
          />
        </div>
      </div>
    </header>
  );
};
