import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import Loading from "../components/Loading";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi(); // 우산에 있는 데이터를 받아옴
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword), // 내부 구현사항을 네트워크 모듈로 뺌
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      {isLoading && <Loading />}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              video={video}
            ></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
}
