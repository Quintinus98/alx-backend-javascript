export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('https://example.com/');
    }, 200);
  });
}
