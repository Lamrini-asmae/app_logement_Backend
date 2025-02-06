import Reservation from '../models/reservation.js';

export const getReservations = async (req, res) => {
    try {
      const items = await Reservation.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération' });
    }
};
// Créer un nouvel élément
export const createReservation = async (req, res) => {
  try {
    const item = new Reservation(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création' });
  }
};

// Mettre à jour un élément par ID
export const updateReservation = async (req, res) => {
  try {
    const item = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erreur de mise à jour' });
  }
};

// Supprimer un élément par ID
export const deleteReservation = async (req, res) => {
  try {
    const item = await Reservation.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json({ message: 'Élément supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur de suppression' });
  }
};
// Récupérer un élément par ID
export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Reservation.findById(id);
    if (!item) {
      return res.status(404).json({ message: "L'élément n'a pas été trouvé" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération' });
  }
};
