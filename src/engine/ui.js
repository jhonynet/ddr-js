class Ui {

    elements = {
        container: null,
        buttons: []
    };

    constructor() {
        this.registerElements();
    }


    // disable all buttons
    disable() {
        for(let i = 0; i < this.elements.buttons.length; i++)
        {
            this.elements.buttons[i].disabled = true;
        }
    }

    // enable all buttons
    enable() {
        for(let i = 0; i < this.elements.buttons.length; i++)
        {
            this.elements.buttons[i].disabled = false;
        }
    }

    registerElements() {
        this.elements.container = document.getElementById('ui');
        this.elements.buttons = this.elements.container.querySelectorAll('input, button');
    }
}

// Engine is a singleton
export let ui = new Ui();
