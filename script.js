        function getWordCount(v) {
            var matches = v.match(/\S+/g)
            return matches ? matches.length : 0
        }

        function getSpaceCount(v) {
            var matches = v.match(/\s+/g)
            return matches ? matches.length : 0
        }

        function getSentenceCount(v) {
            var matches = v.match(/\w[.?!](\s|$)+/g)
            return matches ? matches.length : 0
        }

        function wordAverage(words, sentences) {
            return words/sentences
        }

        document.getElementById('runReport').onclick = function() {
            var text = document.getElementById('userInput').value

            if (text.length == 0) {
                document.getElementById('userInput').value = "Please enter text in this field"

            } else {

            var words = getWordCount(text)
            var spaces = getSpaceCount(text)
            var sentences = getSentenceCount(text)
            var average = wordAverage(words, sentences)

            document.getElementById('wordTotal').innerHTML = words
            document.getElementById('spaceTotal').innerHTML = spaces
            document.getElementById('sentenceTotal').innerHTML = sentences
            document.getElementById('avgTotal').innerHTML = average

            }

            
        }      