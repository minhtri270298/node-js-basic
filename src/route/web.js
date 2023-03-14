import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute =(app) => {
    router.get(`/`, homeController.getHomepage);

    router.get('/', (req, res) => {
        res.send('Hello World! and Chao Xìn ')
      })
    
    router.get('/about', (req, res) => {
        res.send('Nhìn cái gì mà nhìn ')
      })  

    return app.use('/', router);  
}

module.exports = initWebRoute;