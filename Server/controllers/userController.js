const User = require("../models/User");

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      if (!users) {
        return res.status(404).json({ error: "No users found" });
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  createUser: async (req, res) => {
    try {
      const userData = req.body;
      const existingUser = await User.findOne({ email: userData.email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
      const user = new User({
        ...userData,
      });
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const userData = req.body;
      for (const field in userData) {
        if (userData.hasOwnProperty(field)) {
          if (Array.isArray(userData[field])) {
            // Handle array fields
            if (user[field]) {
              user[field] = [...user[field], ...userData[field]];
            } else {
              user[field] = userData[field];
            }
          } else {
            // Handle non-array fields
            user[field] = userData[field] || user[field];
          }
        }
      }
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateFieldValueAtIndex: async (req, res) => {
    try {
      const newData = req.body;
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (
        user[newData.fieldName] &&
        Array.isArray(user[newData.fieldName]) &&
        newData.index >= 0 &&
        newData.index < user[newData.fieldName].length
      ) {
        user[newData.fieldName][newData.index] = newData.value;
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteFieldValueAtIndex: async (req, res) => {
    try {
      const { fieldName, index } = req.body;
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (
        user[fieldName] &&
        Array.isArray(user[fieldName]) &&
        index >= 0 &&
        index < user[fieldName].length
      ) {
        user[fieldName].splice(index, 1);
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
};
module.exports = UserController;
