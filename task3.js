//using async await
function downloadData(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Download complete.");
      resolve("Data from " + url);
    }, 1000);
  });
}

function writeToFile(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Data written to file.txt");
      resolve("file.txt");
    }, 1000);
  });
}

function uploadFile(filename) {
  return new Promise(resolve => {
    setTimeout(() => {
      const url = "https://upload.com/" + filename;
      console.log("Upload complete to", url);
      resolve(url);
    }, 1000);
  });
}


async function runProcess() {
  try {
    console.log("Starting async flow...");

    const data = await downloadData("https://example.com");
    const filename = await writeToFile(data);
    const uploadUrl = await uploadFile(filename);

    console.log("All steps completed. File available at:", uploadUrl);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

runProcess();


