const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({ include: Product });
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// find one CATEGORY by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {include: Product });
      // include: [{ model: Product, through: Category, as: 'product_id' }]
    if (!categoryData) {
      res.status(404).json({ message: 'No Category by this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a category by its `id` value
router.put('/:id', async (req, res) => {
  
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }});

    // if (!categoryData) {
    //   res.status(404).json({ message: 'No Category by this id!' });
    //   return;
    // }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'no Category found with this id!' });
      // return;
    }

   res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
