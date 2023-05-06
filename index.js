const { WebSocket } = require('ws');

module.exports = class SyncPlugin {
    constructor(app, store) {
        this.i = 0;
        this.j = 0;
    }

    // Called when the backend is ready
    onReady(win) {
        console.log(`[Plugin][${this.name}] Ready`);

        this.ws = new WebSocket('ws://127.0.0.1:8763');
    
        ws.once('error', console.error);
        ws.once('open', () => {
            console.log(`[Plugin][${this.name}] Connected`);
        });

    }

    onPlaybackStateDidChange(attributes) {
        this.ws.send(attributes);
    }

    onNowPlayingItemDidChange(attributes) {
        this.ws.send(attributes);
    }
}