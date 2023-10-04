const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the database");
    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  }catch(err){
    console.log("Cannot connecting to the database",err);
    process.exit();
  }
}

startServer();
