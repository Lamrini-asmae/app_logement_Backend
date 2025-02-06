import Apatment from '../models/apartment.js';
// Récupérer tous les éléments
export const getApatments = async (req, res) => {
    try {
      const items = await Apatment.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération' });
    }
};
// Créer un nouvel élément
export const createApatment = async (req, res) => {
  try {
    const item = new Apatment(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création' });
  }
};

// Mettre à jour un élément par ID
export const updateApatment = async (req, res) => {
  try {
    const item = await Apatment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erreur de mise à jour' });
  }
};

// Supprimer un élément par ID
export const deleteApatment = async (req, res) => {
  try {
    const item = await Apatment.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json({ message: 'Élément supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur de suppression' });
  }
};
// Récupérer un élément par ID
export const getApatmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Apatment.findById(id);
    if (!item) {
      return res.status(404).json({ message: "L'élément n'a pas été trouvé" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération' });
  }
};
