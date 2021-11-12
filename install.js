require("fs").copyFile(
  __dirname + "/launcher.html",
  process.cwd() + "/launcher.html", 
  error => {
    if (error) {
      throw error
    }
  }
)