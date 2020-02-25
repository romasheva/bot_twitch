var tmi = require('tmi.js');
var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "first_video_",
        password: "oauth:5kinemca3wemv4wgrs8ity6h74j02o"
    },
    channels: ["first_video_"]
};
