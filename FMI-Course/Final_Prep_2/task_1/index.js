// ## Условие:
// Създайте функция `analyzeText(text, options)`, която анализира и модифицира подаден текст според зададените опции.


function analyzeText(text , options = {}) {
    if (text == null || typeof(text) !== "string" ) {
        return {

        };
    }
    


    const {trim = true, toLowerCase = false, charCount = true, mostCommonWord = true} = options;
    
    let result = {};

    if(trim) {
        result["formattedText"] = text.trim();
    } else {
        result["formattedText"] = text;
    }

    if (toLowerCase) {
        result["formattedText"] = result["formattedText"].toLowerCase();
    }

    if (charCount) {
        let formatted = result["formattedText"];
        result["charCount"] = formatted.replace(/\s+/g, '').length;
    }

    if (mostCommonWord ) {
      const words = result.formattedText.split(/\s+/).filter(w => w !== "");
        const wordCounts = {};
        let maxWord = "";
        let maxCount = 0;

        for (let word of words) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
            if (wordCounts[word] > maxCount) {
                maxCount = wordCounts[word];
                maxWord = word;
            }
        }

        result.mostCommonWord = words.length > 0 ? maxWord : "";
    }
    if (text === "") {
        result["mostCommonWord"] = "";
    }

    return result;
}

// Example:
console.log(analyzeText("Hello hello world", { toLowerCase: true }));
// ### Параметри:
// - `text` — входен текст за анализ (ако не е string, връща празен обект `{}`)
// - `options` — обект с настройки (по подразбиране празен обект)

// ### Опции:
// - **`trim`** — премахва водещи и завършващи интервали (по подразбиране: `true`)  
// - **`toLowerCase`** — преобразува текста до малки букви (по подразбиране: `false`)  
// - **`charCount`** — ако е `true`, добавя свойство `charCount` към резултата (без интервали)  
// - **`mostCommonWord`** — ако е `true`, намира най-често срещаната дума в текста (без значение от case sensitive)

// ### Резултат:
// Функцията връща **обект** със следната структура:
// ```js
// {
//   formattedText: "...",
//   charCount: ...,
//   mostCommonWord: "..."
// }
// ```
