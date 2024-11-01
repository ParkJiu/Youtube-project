import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ channelId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: relatedVideos,
  } = useQuery({
    queryKey: ["relatedVideos", channelId],
    queryFn: () => youtube.searchByChannelId(channelId),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong!!</p>;
  // 개선점 !!
  // 이전에는 연관된 동영상을 VideoCard컴포넌트를 활용하지 않고, 이 컴포넌트에 따로 만들었는데
  // VideoCard에 type을 전달함으로써 컴포넌트 재사용성을 높임
  return (
    <>
      {relatedVideos.map((item) => (
        <VideoCard key={item.id} videoId={item.id} video={item} type='list' />
      ))}
    </>
  );
}
