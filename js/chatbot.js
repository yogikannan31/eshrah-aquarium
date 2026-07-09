function sendMessage() {

    const input =
        document.getElementById(
            "chat-input"
        );

    const message =
        input.value.toLowerCase();

    const output =
        document.getElementById(
            "chat-output"
        );

    if(message.includes("fish")){
        output.innerHTML =
            "We have Arowana, Goldfish and Guppy.";
    }
    else if(message.includes("plant")){
        output.innerHTML =
            "We have Java Fern and Anubias.";
    }
    else{
        output.innerHTML =
            "Please contact ESHRAH Aquarium support.";
    }
}