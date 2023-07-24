const mongoose = require("mongoose");
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

class Database {

    constructor(){
        this.connect()
    }

  connect() {
    mongoose
      .connect(
       process.env.MONGO_DB_URI
      )
      .then(() => {
        console.log("Database connection established");
      })
      .catch((e) => {
        console.log("database connection error " + e.message);
      });
  }
}

module.exports = new Database();