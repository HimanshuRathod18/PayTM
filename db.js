const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://1018hr:L1P4KyZLLfr1USZF@cluster0.ud8ar38.mongodb.net/"
);
// L1P4KyZLLfr1USZF
// postgresql://test_owner:AzaHD24IVYON@ep-old-term-a16gxalq.ap-southeast-1.aws.neon.tech/test?sslmode=require
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: { type: String, required: true, minLength: 6 },
  firstName: { type: String, required: true, trim: true, maxLength: 50 },
  lastName: { type: String, required: true, trim: true, maxLength: 50 },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // reference to user model
    ref: "User",
    required: true,
  },
  balance: { type: Number, required: true },
});
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
