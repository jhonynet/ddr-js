import audio from './audio.js';
import Stage from './stage.js'
import * as AssetManager from './asset_manager.js';

class Engine {
    constructor() {
        this._audio = audio;
        this._assetManager = AssetManager;
    }

    get audio() {
        return this._audio;
    }

    get AM() {
        return this._assetManager;
    }

    createStage() {
        return new Stage();
    }
}

// Engine is a singleton
export let engine = new Engine();
