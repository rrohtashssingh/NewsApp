import React from 'react'

const Card = () => {
    return (
        <>
            <div className="card_container m-2">
                <div className="one_card p-2 rounded-md flex flex-col justify-center bg-gray-600 h-[400px] w-[300px]">
                    <div className="image bg-gray-400 w-[280px] h-[180px] p-2">
                    </div>
                    <div className="text mt-3 w-[280px] h-[10px] bg-gray-400"></div>
                    <div className="text mt-3 w-[280px] h-[10px] bg-gray-400"></div>
                    <div className="text mt-3 w-[280px] h-[10px] bg-gray-400"></div>
                    <div className="text mt-3 w-[280px] h-[10px] bg-gray-400"></div>
                    <div className="text mt-3 w-[180px] h-[10px] bg-gray-400"></div>
                    <div className="btn mt-3 w-[50px] h-[20px] mr-5 bg-gray-400"></div>
                </div>
            </div>
        </>
    )
}

export default Card