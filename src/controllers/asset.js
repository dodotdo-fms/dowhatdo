import { Router } from 'express';
import values from 'lodash.values';
import BookModel from '../models/book';
import HardwareModel from '../models/hardware';
import hardwareType from '../constants/hardwareType';
import pushService from '../services/push';

const router = new Router();

router.get('/hardware', async (req, res) => {
    const hardwares = await HardwareModel.all();
    res.json(hardwares);
});

router.post('/hardware', async (req, res) => {
    const hardwareInfo = HardwareModel.parseInfo(req.body);
    const newHardware = HardwareModel.buildNewHardware(hardwareInfo);

    await newHardware.save();

    res.json(newHardware.toJSON());
    pushService.emitNewHardware(newHardware.toJSON());
});

router.post('/hardware/:id/own', async (req, res) => {
    const hardwareId = req.params.id;
    const owner = req.body.owner;

    const hardware = await HardwareModel.findById(hardwareId);

    await hardware.update({ owner });

    res.json(hardware.toJSON());
    pushService.emitHardwareChanged(hardware.toJSON());
});

router.delete('/hardware/:id/own', async (req, res) => {
    const hardwareId = req.params.id;
    const hardware = await HardwareModel.findById(hardwareId);

    await hardware.update({ owner: null });

    res.json(hardware.toJSON());
    pushService.emitHardwareChanged(hardware.toJSON());
});

router.get('/hardware/type', (req, res) => {
    res.json(values(hardwareType));
});

router.get('/book', async (req, res) => {
    const books = await BookModel.all();
    res.json(books);
});

router.post('/book', async (req, res) => {
    const bookInfo = BookModel.parseInfo(req.body);
    const newBook = BookModel.buildNewBook(bookInfo);

    await newBook.save();

    res.json(newBook.toJSON());
    pushService.emitNewBook(newBook.toJSON());
});

router.post('/book/:id/rental', async (req, res) => {
    const bookId = req.params.id;
    const owner = req.body.owner;
    const rentalDate = new Date();

    const book = await BookModel.findById(bookId);
    await book.rental(owner, rentalDate);

    res.json(book.toJSON());
    pushService.emitBookChanged(book.toJSON());
});

router.post('/book/:id/return', async (req, res) => {
    const bookId = req.params.id;

    const book = await BookModel.findById(bookId);
    await book.return();

    res.json(book.toJSON());
    pushService.emitBookChanged(book.toJSON());
});

export default router;
