const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoin
  // find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await categories.findAll();
    res.status(200).json()
  } catch (err) {
    res.status(500).json(err)
  }
});

// find one CATEGORY by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  
});

// CREATE a new category
router.post('/', (req, res) => {
  
});

// UPDATE a category by its `id` value
router.put('/:id', (req, res) => {
  
});

// DELETE a category by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
