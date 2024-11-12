import React from "react";
import data from "../../../data/data";

function ButtonLink() {
    const { ticketlink } = data;
    return(
        <section className="flex justify-center items-center">
            <div className="text-center">
                <a 
                    className="button text-4xl font-extrabold m-2 mb-4" 

                    href={ticketlink} target="_blank" rel="noopener noreferrer"
                    >Reserve Your Tickets Now Here
                </a>
            </div>
        </section>
    )
    
}

export default ButtonLink;