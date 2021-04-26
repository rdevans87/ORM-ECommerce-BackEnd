const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

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
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findById(req.params.id, {
      include: [{model: Product, through: Tag, as: 'product_id'}]
});

// CREATE a new category
router.post('/', async (req, res) => {
 try {
  const categoryData = await Category.create(req.body);
  res.status(200).json(C)

  }
});

// UPDATE a category by its `id` value
router.put('/:id', (req, res) => {
  
});

// DELETE a category by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
