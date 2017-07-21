
function sampleLoader (url, context, callback) {
    var request = new XMLHttpRequest();
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
            callback(buffer);
        });
    };
    request.send();
};

module.exports = sampleLoader;