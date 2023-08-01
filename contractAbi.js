const fs = require("fs");
const root = "./artifacts/contracts";
fs.readdir(root, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      const root2 = root + "/" + file;
      if (file.includes(".sol")) {
        fs.readdir(root2, (err, touchs) => {
          if (err) console.log(err);
          else {
            touchs.forEach((touch) => {
              const root3 = root2 + "/" + touch;
              if (!touch.includes("dbg")) {
                fs.copyFile(
                  root3,
                  "../dsd-labs-app/src/contracts/ABIs" + "/" + touch,
                  (err) => {
                    if (err) {
                      console.log("Errreur ", +err);
                    } else {
                      console.log("done");
                    }
                  }
                );
                console.log(root3 + "deplaced");
              }
            });
          }
        });
      }
    });
  }
});
