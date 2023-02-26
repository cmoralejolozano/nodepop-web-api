var express = require('express');
var router = express.Router();

// obtenemos el método query y validationResult de la librería express-validator variables
const {query, validationResult} = require('express-validator');
//const { default: mongoose } = require('mongoose');
const Item = require('../models/Item')

/* GET items */
router.get('/', async function(req, res, next) {
  try{
  // filtros
  const filterByName = req.query.name;
  const filterByPrice = req.query.price;
  const filterByForSale = req.query.for_sale;
  const filterByTag = req.query.tag;

  // paginación
  const skip = req.query.skip;
  const limit = req.query.limit;
  // ordernar
  const sort = req.query.sort;
  // selección de campos
  const fields = req.query.fields;

  const filter = {}

  if (filterByName) {
    filter.name =  new RegExp("^" + filterByName, "i");
  }

  if (filterByForSale) {
    filter.for_sale = filterByForSale;
  }

  if (filterByTag) {
    filter.tags = filterByTag;
  }


  if (filterByPrice){
    if (filterByPrice.startsWith('-')){
      filter.price = {"$lte": filterByPrice.slice(1)}
    } else if (filterByPrice.endsWith('-')){
      filter.price = {"$gte": filterByPrice.slice(0,-1)}
    } else if (filterByPrice.includes('-')){
      const gt = filterByPrice.split('-')[0]
      const lt = filterByPrice.split('-')[1]
      filter.price = {"$gte": gt, "$lte": lt}
    }
    else {
      filter.price = filterByPrice;
    }
  }

  const items = await Item.lista(filter, skip, limit, sort, fields);
  res.locals.items = items;

  res.render('get_items');
} catch(err) {
  next(err)
}
});


// POST home page
router.post('/', async (req, res, next)=>{
  try {
    // guardamos info de la petición
    const itemData = req.body;
    // creamos objeto con esa info
    const item = new Item(itemData)

    res.locals.item = item;
    // persistimos en la BBDD
    const itemGuardado = await item.save()

    res.render('post_items')

  } catch (error) {
    next(error)
  }
});

// DELETE an item
router.delete('/:id', async (req, res, next)=>{
  try {
    const id = req.params.id;

  await Item.deleteOne({_id: id})
  res.render('delete_items') 
  } catch (error) {
    next(error)
  }
})

module.exports = router;