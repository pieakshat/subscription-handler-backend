import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import createSubscription from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: "GET all subscriibers" });
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: "GET subscription details" });
})

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: "update subscription" });
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: "delete subscription" });
})

subscriptionRouter.get('/user/:id ', (req, res) => {
    res.send({ title: "GET all user subscriptionis" });
})

subscriptionRouter.put('/:id/cancel ', (req, res) => {
    res.send({ title: "cancel subscription" });
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: "get upcoming renewals" });
})

export default subscriptionRouter;  