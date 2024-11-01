import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/data/search.json");
  }

  async videos() {
    return axios.get("/data/popular.json");
  }

  async channel() {
    return axios.get("/data/channel_information.json");
  }

  async relatedVideos() {
    return axios.get("/data/related_videos.json");
  }
}
