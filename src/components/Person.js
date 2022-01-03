/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Dislike from "./actions/Dislike";
import Like from "./actions/Like";
import Rewind from "./actions/Rewind";
import SuperLike from "./actions/SuperLike";

const StyledSection = styled.section`
  height: 85vh;
  width: 100%;
  overflow: hidden;
`;

const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 52rem;


  & > img {
    width: 90%;
    max-width: 34rem;
    border-radius: 2rem;
    overflow: hidden;
    height: 52rem;
    min-height: 52rem;
    
  }

  & > figcaption {
    border-radius: 2rem;
    overflow: hidden;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 18%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    max-width: 34rem;
    position: absolute;
    bottom: 12rem;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: white;
  padding: 1rem;
`;

const StyledSubTitle = styled.p`
  font-size: 2rem;
  color: white;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

const StyledButtonContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  min-width: 34 rem;
`;

function Person({ person, likePerson, superLikePerson, dislikePerson }) {
  const { name, age, gender, image, id } = person;
  return (
    <StyledSection>
      <StyledFigure>
        <img src={image} alt="waifu" />
        <figcaption>
          <StyledTitle>
            {name} {age}
          </StyledTitle>
          <StyledSubTitle>{gender}</StyledSubTitle>
          <StyledButtonContainer>
            <Rewind userId={id} />
            <Dislike name={name} dislikePerson={dislikePerson} />
            <SuperLike name={name} superLikePerson={superLikePerson} />
            <Like name={name} likePerson={likePerson} />
          </StyledButtonContainer>
        </figcaption>
      </StyledFigure>
    </StyledSection>
  );
}

export default Person;
