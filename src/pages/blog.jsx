import React from 'react';
import { data } from './data';

export function Blog(props) {
  const [visibleItems, setVisibleItems] = React.useState(3);

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, data.length));
  };

  const handleShowLess = () => {
    setVisibleItems((prev) => Math.max(prev - 3, 3));
  };

  return (
    <>
      <div className="text-center mt-10" id="blogplace">
        <h2 className="text-3xl font-bold mb-5">Memoryable Places</h2>
      </div>
      <div className="flex flex-wrap justify-around mt-5">
        {data.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="border-4 border-transparent p-4 m-4 w-86 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-[#f0f0f0]"
          >
            <img
              src={item.image}
              alt={`Blog Post ${item.id}`}
              className="mb-4 w-64 h-64"
            />
            <h1 className="text-xl text-center font-bold">{item.Title}</h1>
            <p className="text-[#5c5c2d]">{item.Description}</p>
            <button
              className="w-full bg-[#bbbb8d] hover:bg-[#aaaa85] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 mt-4"
            >
              REGISTER
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {visibleItems < data.length && (
          <button
            className="border-4 border-black text-[#939361] font-bold py-2 px-4 rounded mr-2"
            onClick={handleLoadMore}
          >
            LOAD MORE
          </button>
        )}
        <button
          className="border-4 border-black text-[#939361] font-bold py-2 px-4 rounded"
          onClick={handleShowLess}
        >
          SHOW LESS
        </button>
      </div>
    </>
  );
}