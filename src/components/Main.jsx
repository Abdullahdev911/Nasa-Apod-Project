import React from 'react'

function Main({data}) {
    
    const imgUrl = data.hdurl;

    return (
    <main>
        <img src={imgUrl} alt="" />
    </main>
  )
}

export default Main