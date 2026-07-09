function startVoiceSearch() {

    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice search not supported.");
        return;
    }

    const recognition =
        new webkitSpeechRecognition();

    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = function(event) {

        const transcript =
            event.results[0][0].transcript;

        const input =
            document.getElementById(
                "search-input"
            );

        if(input){
            input.value = transcript;
            searchProducts();
        }
    };
}