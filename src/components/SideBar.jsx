import React from 'react'

function SideBar({data,handleModalToggle}) {
  return (
    
        <div className="back-drop" onClick={handleModalToggle}>
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="title">

                       <h1> {data?.title} </h1>
                    </div>
                    <div className="data">
                        <h3>{data?.date}</h3>
                    </div>
                    <div className="text">
                        {data?.explanation}
                    </div>
              </div>
              <button onClick={handleModalToggle}>
              <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

        </div>
    
  )
}

export default SideBar