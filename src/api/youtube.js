export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet, statistics",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async channelInfo(id) {
    return this.apiClient
      .channel({
        params: {
          part: "snippet, statistics",
          id,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async searchByChannelId(channelId) {
    return this.apiClient
      .relatedVideos({
        params: {
          part: "snippet",
          channelId,
          maxResults: 20,
        },
      })
      .then((res) => res.data.items);
  }
}
