const video = document.getElementById("bgVideo") as HTMLVideoElement;

video.addEventListener("loadedmetadata", () => {
  video.playbackRate = 0.6;
});