import React from 'react';
import {
  CardContainer,
  Title,
  VideoContainer,
  Description,
  TextContainer,
} from '../RecommendedCard/RecommendedCard.styles';

const RecomendedCard = ({
  videoContent,
  title,
  decription,
  handleRelatedVideo,
}) => {
  return (
    <CardContainer onClick={handleRelatedVideo}>
      <VideoContainer>
        <img src={videoContent} />
      </VideoContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{decription}</Description>
      </TextContainer>
    </CardContainer>
  );
};

export default RecomendedCard;
