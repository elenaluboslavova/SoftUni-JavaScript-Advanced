function playingCards(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };
    if (!faces.includes(face) || suits[suit] == undefined || suits[suit] == null) {
        throw new Error('Error');
    }

    let toString = function () {
        console.log(face + suits[suit]);
    }
    return toString();
}

playingCards('A', 'S');
playingCards('10', 'H');
playingCards('1', 'C');