const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  console.log('=======================');
  // find all categories including its associated Products
  Category.findAll({
    include: {
      model:Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  console.log('=======================');
  // find one category by its `id` value including its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model:Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({message: 'No category found with this id'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  console.log('=======================');
  // create a new category | expects -> {'category_name': 'Video Games'}
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  console.log('=======================');
  // update a category by its `id` value | expects -> {'category_name': 'Video Games'}
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

router.delete('/:id', (req, res) => {
  console.log('=======================');
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No user found with this id'});
        return;
      }
      res.json(dbCategoryData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
