const url = "https://gscanner.s3.amazonaws.com/desktop-transparent.webp";
const dowloadS3File = () => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "desktop-transparent.webp";
      a.click();
    });
};
