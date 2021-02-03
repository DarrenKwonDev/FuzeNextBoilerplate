import React from 'react';
import CardHashTag from './CardHashTag';
import StyledCard from './style';
import Link from 'next/link';

interface ICardProps {
  hashTags?: string[]
  img?: string
  title?: string
  desc?: string
  toWhere?: string
}

// title은 강사의 경우 이름(name), 강의의 경우 강의의 이름(title)
function Card({ hashTags = [], img = '', title = '', desc = '', toWhere = '/#' }: ICardProps) {
  return (
    <StyledCard className="card-item">
      <Link href={toWhere}>
        <div className="card-image-wrapper">
          <img className="card-img" src={img}></img>
        </div>
      </Link>

      <div className="card-content">
        <div className="card-hashtag-container">
          {hashTags.map((hashTag, i) => (
            <CardHashTag text={hashTag} key={i} />
          ))}
        </div>
        <p className="card-title">{title}</p>
        <p className="card-desc">{desc}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
