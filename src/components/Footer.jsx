import React from 'react'

function Footer({data,handleModalToggle}) {
    console.log(data.title)
  return (
    <footer>
        <div>
            <h1>APOD PROJECT</h1>
            <h2>{data?.title}</h2>
        </div>
       <button onClick={handleModalToggle}>
       <i className="fa-solid fa-circle-info"></i>
       </button>

    </footer>
  )
}

export default Footer