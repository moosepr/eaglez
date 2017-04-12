new QWebChannel(qt.webChannelTransport, function (channel) {
    var cpAPI = channel.objects.noInternetAPIInterface;

    window.onclick = function(e){
        if(e.target.localName == 'a'){
            cpAPI.checkStatus(function(result){
            });
            e.preventDefault();
            return false;
        }
    }
});
