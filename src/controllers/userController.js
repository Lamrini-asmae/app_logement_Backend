import User from '../models/user.js';
// Récupérer tous les éléments
export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération' });
    }
};
// Créer un nouvel élément
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création' });
  }
};

// Mettre à jour un élément par ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur de mise à jour' });
  }
};

// Supprimer un élément par ID
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json({ message: 'Élément supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur de suppression' });
  }
};
// Récupérer un élément par ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "L'élément n'a pas été trouvé" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération' });
  }
};
