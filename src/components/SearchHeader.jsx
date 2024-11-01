import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);
  return (
    <header className='full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center cursor-pointer'>
        <FaYoutube className='text-brand text-4xl' />
        <h1 className='text-3xl font-bold text-white ml-2'>Youtube</h1>
      </Link>
      <form
        className='flex items-center justify-center m-auto relative'
        onSubmit={handleSubmit}
      >
        <input
          className='bg-white p-2 rounded-md '
          type='text'
          placeholder='검색'
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></input>
        <button className='absolute right-2 text-black'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
