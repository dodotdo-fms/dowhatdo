import socketIo from 'socket.io';

let io = null;

const emit = (namespace, listener, packets) => {
    io.of(namespace).emit(listener, packets);
};

const pushService = {
    init(app) {
        io = socketIo(app);
    },

    emitNewHardware(newHardware) {
        emit('hardware', 'newHardware', newHardware);
    },

    emitHardwareChanged(changedHardware) {
        emit('hardware', 'hardwareChanged', changedHardware);
    },

    emitHardwareDeleted(hardwareId) {
        emit('hardware', 'hardwareDeleted', { id: hardwareId });
    },

    emitNewBook(newBook) {
        emit('book', 'newBook', newBook);
    },

    emitBookChanged(changedBook) {
        emit('book', 'bookChanged', changedBook);
    }
};

export default pushService;
