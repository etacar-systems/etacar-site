import React from "react";

import successIcon from "../../../../assets/icons/success.svg";

import { Section } from "../../../../components/Section";
import { about, description, principles } from "./data";
import style from "./Mission.module.scss";
import { Card } from "./components/Card";

export const Mission = () => {
  return (
    <Section title={"OUR MISSION"}>
      <div className={style.container}>
        <div>
          <div className={style.description}>{description}</div>
          <div className={style.list}>
            {principles.map((principle) => (
              <div>
                <img src={successIcon} alt={"icon"} />
                {principle}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={style.cards}>
            {about.map((data) => (
              <Card description={data.subtitle} src={data.src} title={data.title} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
