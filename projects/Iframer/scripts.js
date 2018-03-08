let convertUrl = () => {
    let iframe_val = "";
    let input      = document.getElementById("url-input");
    let answer     = document.getElementById("answer");

    let youtube_url = parseUrl(input.value);
    if (youtube_url === -1) {return;}

    iframe_val = generateIframe(youtube_url);
    copyToClipboard(iframe_val);

    answer.style.color = "#16444C";
    answer.innerHTML = "<p><xmp>"+iframe_val+"</xmp></p>";
}

let handleEnter = (e) => {
    if (e.keyCode == 13) {
        convertUrl()
    }
}

let parseUrl = (youtube_url) => {
    if (youtube_url.length === 0) {
        callError(answer);
        return -1;
    }

    youtube_url = youtube_url.split("=");
    if (youtube_url.length < 2) {
        callError(answer);
        return -1;
    }

    youtube_url = youtube_url[1];

    if (!youtube_url || youtube_url.length < 2) {
        callError(answer);
        return -1;
    }

    return youtube_url;
}

let generateIframe = (youtube_url) => {
    iframe_val = '<iframe width="560" height="315" ' +
        'src="https://www.youtube.com/embed/';
    iframe_val = iframe_val + youtube_url;
    iframe_val = iframe_val + '?ecver=1" frameborder="0" ' +
        'allowfullscreen></iframe>';
    return iframe_val;
}

let copyToClipboard = (iframe_val) => {
    let button_container = document.getElementById("button-container");
    let clipboard = new Clipboard('#copy-button', {
        text: function() {
            return iframe_val;
        }
    });
    document.getElementById("copy-button").click();
    button_container.innerHTML = "Iframe copied to clipboard!";
    button_container.style.fontSize = "3rem";
    button_container.style.color = "#083D77";
}

let callError = (answer) => {
    answer.innerHTML = "<p id='xmp'><br />Oops. That didn't work.</p>";
    answer.style.color = "#DD1C1A";
}

