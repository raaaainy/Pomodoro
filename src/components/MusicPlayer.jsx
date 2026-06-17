
const MusicPlayer = ({ youtubeEmbed }) => (
  <iframe
    className="rounded"
    width="853"
    height="480"
    src={youtubeEmbed}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
);

export default MusicPlayer;
