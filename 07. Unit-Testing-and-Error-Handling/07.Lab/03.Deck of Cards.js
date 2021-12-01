function printDeckOfCards(cards) {
    let result = [];
    let card;
    for (let i = 0; i < cards.length; i++) {
        let current = cards[i];
        let suit = current[current.length - 1];
        let face = current.slice(0, current.length - 1);
        try{
            card = createCard(face, suit);
        } catch(ex){
            console.log(ex.message);
            return;
        }
        result.push(card);
    }
    console.log(result.join(' '));

    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if (!faces.includes(face) || suits[suit] == undefined || suits[suit] == null) {
            throw new Error('Invalid card: ' + face + suit);
        }

        let toString = function () {
            return face + suits[suit];
        }
        return toString();
    }
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);