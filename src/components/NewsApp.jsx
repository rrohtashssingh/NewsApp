import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../loader/Loader';

const NewsApp = () => {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [sports, setSports] = useState("");

    useEffect(() => {
        setIsLoading(true);
        if (query.trim() === '') {
            axios.get(`https://newsapi.org/v2/everything?q=uttarpradesh&apiKey=073988eab35344e3a3ca94fdf88134bb`)
                .then((res) => {
                    console.log(res);
                    setNews(res.data.articles);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setIsLoading(false);
                });
        } else {
            axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=073988eab35344e3a3ca94fdf88134bb`)
                .then((res) => {
                    setNews(res.data.articles);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setIsLoading(false);
                });
        }
    }, [query]);


    const handleNewTab = (url) => {
        window.open(url, "_blank");
    }

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="navbar px-3">
                <h1 className='text-3xl font-bold'>News</h1>
                <div className='d-flex border border-black p-2 rounded-lg justify-center'>
                    <input type="text" value={query} name="query" onChange={(e) => setQuery(e.target.value)} placeholder='Search Here' className="w-75 outline-none" />
                    <button onClick={handleSearch} className=''>Search</button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className='my-10 text-red-600 text-3xl font-bold'>Internet</h1>
            </div>

            {/* this is the navbar of news app  */}
            <div className="links flex justify-center items-center">
                <span className="text-base mr-2 font-semibold cursor-pointer hover:text-gray-700 sports" onClick={() => setQuery("uttar pradesh")}>All /</span>
                <span className="text-base mr-2 font-semibold cursor-pointer hover:text-gray-700 sports" onClick={() => setQuery("sports")}>Sports /</span>
                <span className="text-base mr-2 font-semibold cursor-pointer hover:text-gray-700 indian" onClick={() => setQuery("india")}>Indian /</span>
                <span className="text-base mr-2 font-semibold cursor-pointer hover:text-gray-700 international" onClick={() => setQuery("international")}>International /</span>
                <span className="text-base mr-2 font-semibold cursor-pointer hover:text-gray-700 science" onClick={() => setQuery("science")}>Science /</span>
                <span className="text-base mr-2 font-semibold cursor-pointer hover:text-gray-700 technology" onClick={() => setQuery("technology")}>Technology /</span>
                <span className="text-base mr-2 font-semibold cursor-pointer hover:text-gray-700 agriculture" onClick={() => setQuery("agriculture")}>Agriculture /</span>
                <span className="gadgets font-semibold cursor-pointer hover:text-gray-700 text-base" onClick={() => setQuery("gadgets")}>Gadgets</span>
            </div>

            {isLoading ? (
                <div className="loader_">
                    <Loader />
                </div>
            ) : (
                <div className="d-flex justify-center">
                    <div className="sm:px-80 px-5 my-3">
                        <div className="row flex justify-center">
                            {news.map((val, index) => (
                                <div className="relative pb-1 bg-gray-100 rounded-md border mx-2 my-3" style={{ width: "18rem" }} key={index}>
                                    <div className="image-container" style={{ height: "180px", overflow: "hidden" }}>
                                        {/* Conditionally render image or placeholder div */}
                                        {val.urlToImage && (
                                            <img
                                                src={val.urlToImage}
                                                className={`card-img-top pt-2 pb-3 ${isLoading ? '' : ''}`}
                                                alt={val.title}
                                                onLoad={() => setIsLoading(false)} // Set loading to false when the image is loaded
                                                onError={() => setIsLoading(false)} // Set loading to false when the image fails to load
                                            />
                                        )}
                                        {!val.urlToImage && (
                                            <div className={`image bg-gray-400 w-full h-full ${isLoading ? '' : ''}`}></div>
                                        )}
                                    </div>
                                    <div className="card-body pt-3">
                                        <h5 className="card-title hover:underline cursor-pointer">{val.title}</h5>
                                        <p className="text-sm pt-3 px-1 pb-2 mb-5">{val.description}</p>
                                        <button href="#" className="absolute bottom-2 p-2 hover:bg-blue-600 text-sm rounded-md bg-blue-500 text-white" onClick={() => handleNewTab(val.url)}>Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewsApp;
