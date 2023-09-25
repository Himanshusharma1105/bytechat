import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search an user" />
      </div>
      <div className="userChat">
        <img src="https://avatars.githubusercontent.com/u/7525670?v=4" alt="user" />
        <div className="userChatInfo">
          <span>John</span>
        </div>
      </div>
    </div>
  )
}

export default Search