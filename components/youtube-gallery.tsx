import { Button } from "./ui/button";
import YoutubeIframe from "./youtube-iframe";

const YoutubeGallery = () => {
  const videoIds = [
    "1yNhq30IuJE",
    "iy3HlJ_YnpA",
    "r9J0fQzPvSQ",
    "ZzZiGwufkQ4",
    "1AboWQxxzYo",
    "3MQOc7QZ0_0",
    "2NJesxj2tTI",
    "c0XxwtlY3wM",
  ];
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold text-gray-800">
            Watch our videos
          </h3>

          <a
            href="https://www.youtube.com/channel/UCfZ-jieUFmCtqUvi6GimYQA"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant={'outline'}>View all videos</Button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {videoIds.map((videoId, index) => (
            <div key={index} className="relative">
              <YoutubeIframe videoId={videoId} height="250" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeGallery;
