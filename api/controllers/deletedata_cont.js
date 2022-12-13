const mongoose = require("mongoose");
const userSchema = require("../../models/model");

const getUserModel = mongoose.model("POST", userSchema);

module.exports = {
  deleteData: async (query) => {
    try {
      console.log("Query", query);
      const deletedData = await getUserModel.deleteMany(query);
      return deletedData;
    } catch (error) {
      throw error;
    }
  },
};
