import {Howl} from 'howler';

export default {
    load: function (fileName) {
        if (!fileName) {
            return;
        }

        return new Howl({
            preload: true,
            src: [fileName]
        });
    }
}