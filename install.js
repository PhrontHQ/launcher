require("fs").copyFile(
  __dirname + "/launcher.html",
  __dirname + "/../../launcher.html", 
  error => {
    if (error) {
      throw error
    }
  }
)