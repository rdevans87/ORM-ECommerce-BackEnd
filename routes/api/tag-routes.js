const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await categories.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json()
  } catch (err) {
    res.status(500).json(err)
  }
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
    try {
      const categoryData = await Category.findBypk(req.params.id, {
        include: [{ model: Product, Tag, through: ProductTag, as: 'product_tag' }]

      });

      if (!categoryData[0]) {
        res.status(404).json({ message: 'No Category by this id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {

    }
  });

  router.post('/', async (req, res) => {
    // create a new tag
    try {
      const categoryData = await Tag.create(req.body);
      res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    // update a tag's name by its `id` value
    try {
      const categoryData = await Tag.update(req.body.id, {
        where: {
          id: req.params.id
        },
      });

      if (!categoryData[0]) {
        res.status(404).json({ message: 'No Tag by this id!' });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {

    }

  });

  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });

      if (!categoryData) {
        res.status(404).json({ message: 'message: no Tag found with this id!' });
        return;
      }

      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  module.exports = router;
