import React from "react"

//project body.
function Project ({props}){

    // const [comProjects, setComProjects] = React.useState(CompletedProjects)

    return(

        <section className="h-full shadow-md hover:shadow-lg rounded-md">
            <div className="w-full h-1/2">
                <img
                    id="image"
                    src={props.img}
                    alt=""
                    className="w-full h-full rounded-t-md"
                />
            </div>
            <div className="flex flex-col items-center w-full h-1/2">
                <h4 
                    id="heading"
                    className="text-center my-2 w-2/3"
                >
                    {props.heading}
                </h4>
                <p 
                    id="overview"
                    className="mx-2"
                >
                    {props.overview}
                    <span className="text-sm text-[#34b252] hover:underline">
                        <a href="#"> ...Read more.</a>
                    </span>
                </p>
            </div>
        </section>

    )
}

export default Project
