/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';
import useUsers from '../hooks/useUsers';
import Footer from '../components/Footer';
import Person from '../components/Person';
import PeopleCardContainer from '../containers/PeopleCardContainer';

const StyledButton = styled.button`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  font-size: 3rem;
`;

function SearchPage() {
  const {
    likedPerson,
    getLikeds,
    users,
    likePerson,
    superLikePerson,
    dislikePerson,
    resetData,
  } = useUsers();


  return (
    <>
      <PeopleCardContainer>
        {users.length === 0 && ( <StyledButton onClick={()=> resetData()}>Mostrar personas cerca de ti</StyledButton>)}
        {users.length > 0 && (
            <Person
              key={users[0].id}
              person={users[0]}
              likePerson={likePerson}
              superLikePerson={superLikePerson}
              dislikePerson={dislikePerson}
            />
        )}
      </PeopleCardContainer>
      <Footer likePerson={likedPerson} getLikeds={getLikeds} />
    
    </>
  );
}

export default SearchPage;
