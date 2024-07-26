document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    // Funkcja do pobierania danych z pliku JSON
    async function fetchTexts() {
        try {
            const response = await fetch('text.json'); // Załaduj dane z pliku JSON
            const texts = await response.json();
            createSquares(texts);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
        }
    }

    // Funkcja do tworzenia kwadratów z tekstem
    function createSquares(textArray) {
        textArray.forEach(text => {
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = text;
            container.appendChild(square);
        });
    }

    // Wywołanie funkcji pobierającej dane z JSON
    fetchTexts();
});