import React from "react";

import successIcon from "../../../../assets/icons/success.svg";

import { Section } from "../../../../components/Section";
import { about, description, principles } from "./data";
import { Card } from "./components/Card";
import { Button } from "../../../../components/Button";
import style from "./Mission.module.scss";
import { useNavigate } from "react-router-dom";
import { ABOUT } from "../../../../routes";

export const Mission = () => {
  const navigate = useNavigate();

  return (
    <Section theme={'blueLight'} title={`OUR \n MISSION`}>
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
          <Button fullWidth onClick={() => navigate(ABOUT)} icon title={'About us'} type={'ghost'}  />
        </div>
      </div>
    </Section>
  );
};
