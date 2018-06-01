'use strict';

module.exports = (needle, haystack, options) => {

    const blockText = options.fn(this);
    return blockText.replace(new RegExp(needle, 'g'), haystack);
};
