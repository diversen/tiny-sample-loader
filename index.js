function sampleLoader (context, url) {
    
    var promise = new Promise((resolve, reject) => { 
        var request = new XMLHttpRequest();
    
        request.open('get', url, true);
        request.responseType = 'arraybuffer';
        request.onload = function () {
            if(request.status === 200){
                context.decodeAudioData(request.response, function (buffer) {
                    resolve(buffer);
                });
            } else {
                reject('tiny-sample-loader request failed');
            }

        };
        request.send();
    });
    
    return promise;
};

module.exports = sampleLoader;
