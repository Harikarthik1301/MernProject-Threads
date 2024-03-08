import React from 'react'
import UserHeader from '../UserHeader'
import UserPost from '../UserPost'

const UserPage = () => {
  return (
    <>
    <UserHeader/>
    <UserPost likes={7294} comments={498} postImage="/post1.jpg" postTitle="Happy for Getting ODI trophy to our Country"/>
    <UserPost likes={10733} comments={1241} postImage="/post2.jpg" postTitle="CSK ku Whistle Podu"/>
    <UserPost likes={17732} comments={2415} postImage="/post3.jpg" postTitle="Pushing ourself to get another trophy for our fans"/>
    <UserPost likes={30717} comments={3187} postImage="/post4.jpg" postTitle="Will get the world cup this year"/>
    </>
  )
}

export default UserPage