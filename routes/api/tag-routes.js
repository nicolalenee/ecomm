const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags including its associated Product data
  console.log('=======================');
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        through: ProductTag,
        as: 'tags'
      }
    ]
  })
  .then(dbTagsData => res.json(dbTagsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id` including its associated Product data
  console.log('=======================');
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        through: ProductTag,
        as: 'tags'
      }
    ]
  })
    .then(dbTagsData => {
      if (!dbTagsData) {
        res.status(404).json({ message: 'No tag found with this id'})
        return;
      }
      res.json(dbTagsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  console.log('=======================');
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagsData => res.json(dbTagsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  console.log('=======================');
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbTagsData => {
    if(!dbTagsData[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  console.log('=======================');
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagsData => {
    if (!dbTagsData) {
      res.status(404).json({ message: 'No tag found with this id'});
      return;
    }
    res.json(dbTagsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
