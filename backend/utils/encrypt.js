const bcrypt = require("bcrypt");

const saltRounds = 10;

// Hash the password using async/await
const hashPassword = async (password) => {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hash = await bcrypt.hash(password, salt);

    // Return the hashed password
    console.log(typeof hash.toString());
    return hash.toString();
  } catch (err) {
    throw new Error(`Error hashing password: ${err.message}`);
  }
};

module.exports = hashPassword;
