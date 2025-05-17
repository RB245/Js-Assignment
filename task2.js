//using promises
function downloadData(url) {
    console.log(`Starting download from ${url}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = `Data from ${url}`;
            console.log("Download complete.");
            resolve(data);
        }, 1000);
    });
}

url = "C:\Users\DELL\Downloads\oops"

function writeToFile(data) {
  console.log("Writing data to file...");
  return new Promise((resolve) => {
    setTimeout(() => {
      const filename = "file.txt";
      console.log(`Data written to ${filename}`);
      resolve(filename);
    }, 1000);
  });
}

function uploadFile(filename) {
  console.log(`Uploading ${filename}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const uploadUrl = `https://upload.com/${filename}`;
      console.log(`Upload complete to ${uploadUrl}`);
      resolve(uploadUrl);
    }, 1000);
  });
}

// Chain with .then()
downloadData(url)
  .then(writeToFile)
  .then(uploadFile)
  .then((uploadUrl) => {
    console.log("All steps completed. File available at:", uploadUrl);
  });


// async function runProcess() {
//   try {
//     console.log("Starting async flow...");

//     const data = await downloadData("https://example.com");
//     const filename = await writeToFile(data);
//     const uploadUrl = await uploadFile(filename);

//     console.log("All steps completed. File available at:", uploadUrl);
//   } catch (error) {
//     console.error("Something went wrong:", error);
//   }
// }

// runProcess();

