// ### Параметри:
// - `text` — входен текст за анализ (ако не е string, връща празен обект `{}`)
// - `options` — обект с настройки (по подразбиране празен обект)


function analyzeText(text, options) {

    if (typeof (text) !== "string") {
        return "The type of text parameter is not string.";
    }

    let resultText = "";
    let result = [];

    if (text.trim) {
        resultText = text.trim();
    }
    else {
        resultText = text;
    }

    if (options.toLowerCase) {
        resultText = resultText.toLowerCase();
    }

    result["formattedText"] = resultText;

    if (options.charCount) {
        result["charCount"] = resultText.replace(/\s+/g, '').length;
    }

    if (options.mostCommonWord) {
        
       let processed = resultText
        .toLowerCase()
        .replace(/[^\w\s]/g, '')  
        .replace(/\s+/g, ' ')
        .trim()
        .split(" ");

        let mostOcc = 0;
        let mostOccWord = "";
        let words = {};

        for (let word of processed) {
            if(words[word]) {
                words[word] = words[word] + 1;
            } else {
                words[word] = 1;
            }
             if (words[word] > mostOcc) {
                mostOcc = words[word];
                mostOccWord = word;
            }
        }
        result["mostCommonWord"] = mostOccWord;
    }

    return result;
}

console.log(analyzeText(" HEllo, Worldd!", {trim:true,toLowerCase:true,charCount:true, mostCommonWord: true}));