import React from 'react';
import style from './TeamCard.module.scss';

export type TeamMember = {
  id?: string | number;
  name: string;
  role: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type TeamCardProps = {
  member: TeamMember;
};

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <article className={style.card} aria-label={`${member.name} — ${member.role}`}>
      {member.imageSrc ? (
        <div className={style.avatar}>
          <img src={member.imageSrc} alt={member.imageAlt || member.name} />
        </div>
      ) : (
        <div className={style.placeholder} aria-hidden>
          <span>{member.name ? member.name.charAt(0) : '?'}</span>
        </div>
      )}

      <div className={style.content}>
        <h3 className={style.name}>{member.name}</h3>
        <div className={style.role}>{member.role}</div>
        {member.description ? <p className={style.description}>{member.description}</p> : null}
      </div>
    </article>
  );
};

export default TeamCard;
