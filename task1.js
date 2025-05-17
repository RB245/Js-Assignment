//using callbacks
//downloading data from a URL
function downloadData(url, callback) {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
        const data = `Data from ${url}`;
        console.log(`Downloaded: ${data}`);
        callback(data);
    }, 1000);
}

url = "C:\Users\DELL\Downloads\oops"

downloadData(url, (data) => {
    console.log('Data:', data);
});

// Simulate writing data to a file
function writeToFile(data, callback) {
  console.log("Writing data to file...");
  setTimeout(() => {
    const filename = "file.txt";
    console.log(`Data written to ${filename}`);
    callback(filename);
  }, 1000);
}

// Simulate uploading the file
function uploadFile(filename, callback) {
  console.log(`Uploading ${filename}...`);
  setTimeout(() => {
    const uploadUrl = `https://upload.com/${filename}`;
    console.log(`Upload complete to ${uploadUrl}`);
    callback(uploadUrl);
  }, 1000);
}

// Chaining using callbacks
downloadData(url, function (data) {
  writeToFile(data, function (filename) {
    uploadFile(filename, function (uploadUrl) {
      console.log("All steps completed. File available at:", uploadUrl);
    });
  });
});