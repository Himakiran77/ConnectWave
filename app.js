document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const speakButton = document.getElementById('speakButton');

    speakButton.addEventListener('click', () => {
        const textToSpeak = textInput.value;
        if (textToSpeak.trim() !== '') {
            speak(textToSpeak);
        } else {
            alert('Please enter some text.');
        }
    });

    function speak(text) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }
});
