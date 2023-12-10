import ReactDOM from "react-dom"
import React from "react"
import ProjectsContainer from "./ProjectsContainer"

function Gallery(){    

    return(
        <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden">
            {/* heading */}
            <div className="flex justify-center w-3/4 py-5">
                <h1 className=""> 
                    Project Gallery
                </h1>
            </div>
            <hr className="container mx-auto"></hr>
            <ProjectsContainer/>
            <button
                //onClick={displayGallery}
                className="expand-btn w-40 h-8 mt-2 text-[white] rounded-full bg-[#34b252] active:scale-105
                hover:text-[#34b525] hover:border-2 hover:border-[#34b525] hover:bg-[white]">
                    Show more
            </button>
            <hr className="container mx-auto"></hr>
        </div>
    )

  
}

export default Gallery
