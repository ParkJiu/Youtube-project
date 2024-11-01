import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { count } from "../util/count";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: channel,
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => youtube.channelInfo(id),
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong!</p>;
  return (
    <>
      <div className='flex items-center gap-4'>
        <img
          src={channel.snippet.thumbnails.medium.url}
          alt='channel icon'
          className='rounded-full'
          width='50'
          height='50'
        />
        <div>
          <h3 className='text-white font-bold text-sm'>{name}</h3>
          <p>구독자 {count(channel.statistics.subscriberCount)}</p>
        </div>
      </div>
    </>
  );
}
