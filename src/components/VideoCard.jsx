import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video, videoId, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";
  return (
    <>
      <li
        className={`text-white cursor-pointer mt-4 ${
          isList && "flex gap-1 m-2"
        }`}
        key={videoId}
        onClick={() => {
          navigate(`/videos/watch/${video.id}`, { state: { video } });
        }}
      >
        <img
          src={thumbnails.medium.url}
          alt='thumbnail'
          className={`relative transition ease-in-out delay-150 hover:-translate-y-1 hover:opacity-30  rounded-xl ${
            isList ? "w-40 h-30 mr-2" : "w-full"
          }`}
        />
        <div>
          <p className='font-semibold my-2 line-clamp-2'>{title}</p>
          <p className='text-sm opacity-80'>{channelTitle}</p>
          <p className='text-sm opacity-80'>{formatAgo(publishedAt, "ko")}</p>
        </div>
      </li>
    </>
  );
}
