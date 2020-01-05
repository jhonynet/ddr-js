const debug = true;

export default args => {
    if (!debug) return;
    console.debug(`DEBUG: ${args}`);
}