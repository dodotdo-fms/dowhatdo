import socketIo from 'socket.io-client';

class Socket {
    constructor(namespace) {
        this.socket = null;
        this.namespace = namespace;
        this.url = `http://${location.host}/${this.namespace}`;
        this.options = {
            multiplex: true,
            'force new connection': true
        };
        this.listeners = [];
    }

    connect() {
        this.socket = socketIo(this.url, this.options);
        return this;
    }

    listen(listener, callback) {
        if (!this.socket) throw new Error();

        this.socket.on(listener, msg => callback(msg));
        this.listeners.push(listener);

        return this;
    }

    disconnect() {
        if (!this.socket) return this;

        this.listeners.forEach(listener => this.socket.off(listener));

        if (this.socket.connected) {
            this.socket.disconnect(true);
        }

        this.socket = null;

        return this;
    }
}

export default () => Socket;
