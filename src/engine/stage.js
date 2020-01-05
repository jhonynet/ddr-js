import * as PIXI from 'pixi.js';
import debug from "../utils/debug";

// The Stage class is responsible for creating new PIXI items
class Stage {
    constructor() {
        this._scene = new PIXI.Application(window.innerWidth, window.innerHeight, {
            transparent: true,
            antialias: true,
            autoResize: true,
            resolution: devicePixelRatio
        });
        window.addEventListener('resize', this._resize.bind(this));
        this._resize();
    }

    _resize() {
        // Resize the renderer
        this._scene.renderer.resize(window.innerWidth, window.innerHeight);
    }

    // Utility function for creating PIXI containers
    createContainer(x, y) {
        var container = new PIXI.Container();

        container.x = x;
        container.y = y;

        return container;
    }

    addChild(child) {
        this._scene.stage.addChild(child);
    }

    get view() {
        return this._scene.view;
    }

    get scene() {
        return this._scene;
    }

    get width() {
        return window.innerWidth;
    }

    get height() {
        return window.innerHeight;
    }
}

export default Stage 