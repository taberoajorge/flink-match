import React from 'react'
import Footer from '../components/Footer'
import useLocalStorage from '../hooks/useLocalStorage'

function LikedUsers() {
  const { likedPerson } = useLocalStorage();

  return (
    <>
    {likedPerson.length > 0 && (
      likedPerson.map((person)=>(
        <p>{person.name}</p>
      ))
    )}
    <Footer />
    </>
  )
}

export default LikedUsers
