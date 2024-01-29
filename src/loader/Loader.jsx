import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "./Card";

const Loader = () => {


    return (
        <div className="flex flex-wrap justify-center h-screen mt-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Loader;