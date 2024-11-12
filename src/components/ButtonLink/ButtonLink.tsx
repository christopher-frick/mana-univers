"use client";
import React from "react";
import data from "../../../data/data";

function ButtonLink() {
    const { ticketlink } = data;
    return(
        <section className="flex justify-center items-center">
            <div className="text-center">
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => { window.open(ticketlink, "_blank") }}
            >
                Get Your Ticket Here 
            </button>
            </div>
        </section>
    )
    
}

export default ButtonLink;