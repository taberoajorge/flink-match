/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Dislike from "./actions/Dislike";
import Like from "./actions/Like";
import Rewind from "./actions/Rewind";
import SuperLike from "./actions/SuperLike";

const StyledSection = styled.section`
  height: 85vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  place-items: center;
`;

const StyledFigure = styled.figure`
  display: grid;
  place-content: center;
  place-items: center;
  height: 100%;
  width: 80vw;

  & > img {
    height: 100vh;
    width: 90vw;
    max-height: 85vh;
    max-width: 65vh;
    border-radius: 2rem;
    overflow: hidden;
  }
  & > figcaption {
    width: 100%;
    margin-top: -14rem;
    background: var(--gradient);
    border-radius: 2rem;
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
  min-width: 34rem;
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
