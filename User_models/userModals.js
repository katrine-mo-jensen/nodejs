import { executeQuery } from "../dbConfig.js";

export const getUsersModel = async () => {
  try {
    const query = "SELECT id,  name, email FROM users"; // Exclude sensitive fields like password
    const results = await executeQuery(query);
    return results;
  } catch (error) {
    throw error;
  }
};

export const createUserModel = async ({ name, email }) => {
  try {
    const query = "INSERT INTO users ( name,  email) VALUES (?, ?)";

    await executeQuery(query, [name, email]);
    const newUser = { name, email };

    return newUser;
  } catch (error) {
    throw error;
  }
};

// Function to get a user by their ID from the "users" table
export const getUserByIdModel = async (id) => {
  try {
    const query = "SELECT id, name, email FROM users WHERE id = ?";
    const results = await executeQuery(query, [id]);

    return results[0];
  } catch (error) {
    throw error;
  }
};