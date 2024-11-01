import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos";
import { count } from "../util/count";
import ChannelInfo from "../components/ChannelInfo";
import { format } from "timeago.js";

export default function VideoDetail() {
  const { id } = useParams();
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className='flex flex-col lg:flex-row p-2'>
      <article className='basis-4/6 ml-4'>
        <iframe
          id='player'
          title={title}
          type='text/html'
          width='100%'
          height='640'
          className='m-auto w-full'
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
        />
        <h2 className='text-white font-bold text-xl mt-2'>{title}</h2>
        <div className='flex mt-4 justify-between'>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className='text-white flex bg-box_gray w-36 h-12 rounded-3xl items-center cursor-pointer'>
            <div className='flex-1 flex justify-center items-center hover:bg-slate-300 rounded-l-3xl h-full'>
              <AiOutlineLike style={{ width: 25, height: 25 }} />
              <span className='ml-1'>{count(video.statistics?.likeCount)}</span>
            </div>

            <div className='flex-1 flex justify-center items-center hover:bg-slate-300 rounded-r-3xl h-full'>
              <AiOutlineDislike style={{ width: 25, height: 25 }} />
            </div>
          </div>
        </div>

        <div className='text-white bg-box_gray rounded-xl p-4 mt-4'>
          <p>
            조회수 {count(video.statistics?.viewCount)}{" "}
            {format(video.snippet?.publishedAt, "ko")}
          </p>
          <pre className='whitespace-pre-wrap break-words'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos channelId={channelId} />
      </section>
    </section>
  );
}
