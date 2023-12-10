import React from "react"
import Project from "./GalleryTest"
import CompletedProjects from "./CompletedProjects"

export default function (){
    return(
            <div className="flex flex-col relative items-center w-3/4 h-1/2">
                <h3 className="h-[10%] pt-2">
                    Completed Projects
                </h3>
                <div className="grid grid-cols-3 gap-5 w-[90%] h-[90%]">
                    <Project
                        props={CompletedProjects[0]}
                    />
                </div>
            </div>
    )
}

