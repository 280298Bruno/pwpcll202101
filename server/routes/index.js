import { Router } from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Bruno Castro', appName: 'WebApp', company: 'Awsom Software' });
});

/* agregando nueva ruta */

router.get('/greeting', function(req, res, next){
res.status(200).json({message: 'Hola Campeon de la Web Fullstack'})
});



module.exports = router;
