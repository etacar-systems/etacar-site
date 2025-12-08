import React from 'react';
import TeamCard, { TeamMember } from '../TeamCard/TeamCard';
import style from './TeamGrid.module.scss';

type TeamGridProps = {
  members: TeamMember[];
  columns?: number;
};

export const TeamGrid: React.FC<TeamGridProps> = ({ members, columns = 3 }) => {
  const gridStyle = { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` } as React.CSSProperties;

  return (
    <section className={style.grid} aria-label='Leadership and core team'>
      <div className={style.container} style={gridStyle}>
        {members.map(member => (
          <TeamCard key={member.id ?? member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
