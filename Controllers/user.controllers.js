import express from "express";
import { createUserModel, getUsersModel } from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getUsersModel();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: "Der skete fejl under forsøget på at finde brugere" });
  }
};

export const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await createUserModel({ name, email });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Kunne ikke oprette bruger" });
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await getUserByIdModel(id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ message: "Bruger ikke fundet" });
  }
};

details = async (req, res) => {

  const { id } = req.params || 0

  const result = await UserModel.findOne({
    attributes: ['id', 'firstname', 'lastname', 'email', 'is_active']
    // where: { id: id}
  })

  res.json(result)

}

create = async (req, res) => {
  console.log(1234);
}

export default UserController 

