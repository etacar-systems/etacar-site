import React from "react";
import { useNavigate } from "react-router-dom";

import { SERVICES } from "../../../../routes";
import { Section } from "../../../../components/Section";
import { ServiceCard } from "./components";
import { services } from "./data";
import styles from "./Services.module.scss";

export const Services = () => {
  const navigate = useNavigate();

  return (
    <Section theme={"extraLight"} title={"SERVICES"}>
      <div className={styles.container}>
        {services.map((data, index) => (
          <ServiceCard
            text={data.title}
            icon={data.icon}
            key={index}
            onClick={
              index === services.length - 1
                ? () => navigate(SERVICES)
                : undefined
            }
          />
        ))}
      </div>
    </Section>
  );
};
