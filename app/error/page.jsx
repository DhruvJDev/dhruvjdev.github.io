"use client"
import Link from "next/link";

const error = () =>{
    return (
        <span className="justify-center items-center">
            404 <span className="text-white/60">|</span> This page could not be found.
        </span>
    );
}

export default error;