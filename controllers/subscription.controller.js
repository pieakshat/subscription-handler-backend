import { json } from 'express';
import Subscription from '../models/subscription.model';

export const getSubscriptions = async (req, res, next) => {
    try {
        const subscriptions = await Subscription.find();

        res.status(200).json({ success: true, data: subscriptions });
    } catch (error) {
        next(error);
    }
}

export const getSubscription = async (req, res, next) => {
    try {

        const subscription = await Subscription.findById(req.params.id);

        if (!subscription) {
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ success: true, data: subscription });

    } catch (error) {
        next(error)
    }
}

