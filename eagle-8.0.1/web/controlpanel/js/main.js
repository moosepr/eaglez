var version = "7.7.0";

// INTERFACE
function setLicenseName(name){
    _html('js-license__name', name);
}

function setLicenseType(type){
    switch (type) {
        case "free":
            _html('js-license__type', "EAGLE Free License for non-commercial use and evaluation purposes");
            break;
        case "education":
            _html('js-license__type', "EAGLE Education License for non-commercial educational use");
            break;
        case "standard":
            _html('js-license__type', "EAGLE Standard License for commercial use");
            break;
        case "premium":
            _html('js-license__type', "EAGLE Premium License for commercial use");
            _html('js-license__upgrade', ""); // hide UPGRADE LICENSE button, as this is the top tier license
            break;
        default:
            _html('js-license__type', "EAGLE Free License for non-commercial use and evaluation purposes");
    }
}

function setVersion(versionNumber){
    version = versionNumber;
    _html('js-logo__version', versionNumber);
    checkForUpdate();
}

function compareRemoteAndLocalVersions(remoteString, localString){
    var remoteVersion = remoteString.split(".");
    var ourVersion = localString.split(".");
    for(var i=0; i<ourVersion.length; i++){
        var r = parseInt(remoteVersion[i]);
        var o = parseInt(ourVersion[i]);
        if(o > r){
            return false;
        }
        if(r > o){
            return true;
        }
    }

    return false;
}

function checkForUpdate(){
    try{
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://s3.amazonaws.com/eagle-updates/latest_eagle_version.json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                var parsedJSON = JSON.parse(xhr.responseText);
                // CHECK FOR UPDATE
                var update_available = compareRemoteAndLocalVersions(parsedJSON.version, version);

                if(update_available){
                    _removeClass('js-logo__update', 'hidden');
                    var updateTxt = "";
                    for(var i=0; i<parsedJSON.updates.length; i++){
                        updateTxt += '<li>'+parsedJSON.updates[i]+'</li>';
                    }
                    _html('js-logo__update__list', updateTxt);
                    _changeHref('js-logo__update__btn', parsedJSON.download);
                }
            }
        };
        xhr.send();
    }
    catch(e){
        // SILENT IGNORE
        console.log(e);
    }
}



// SET COPYRIGHT YEAR
_html('js-logo__copy__year', moment().format('YYYY'));

new QWebChannel(qt.webChannelTransport, function (channel) {
    var cpAPI = channel.objects.controlPanelAPIInterface;
    cpAPI.getFullName(setLicenseName);
    cpAPI.getEdition(setLicenseType);
    cpAPI.getVersion(setVersion);
    window.onclick = function(e){
        if(e.target.localName == 'a'){
            cpAPI.openExternalWebPage(e.target.href);
            e.preventDefault();
            return false;
        }
    }
});

// DOM HELPER
function _html(klass, txt){
    document.getElementsByClassName(klass)[0].innerHTML = txt;
}
function _addClass(target, klass){
    document.getElementsByClassName(target)[0].classList.add(klass);
}
function _removeClass(target, klass){
    document.getElementsByClassName(target)[0].classList.remove(klass);
}
function _changeHref(target, link){
    document.getElementsByClassName(target)[0].setAttribute('href', link);
}
