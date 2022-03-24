class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        },
            this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp[condition] == undefined) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (this.listOfParticipants.some(p => p.name == name)) {
            let index = this.listOfParticipants.indexOf(p => p.name == name);
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`;
        } else {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (!this.listOfParticipants.some(p => p.name == participant1)) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listOfParticipants.some(p => p.name == participant2)) {
                throw new Error(`Invalid entered name/s.`);
            }
            let gamer1 = this.listOfParticipants.find(p => p.name == participant1);
            let gamer2 = this.listOfParticipants.find(p => p.name == participant2);

            if (gamer1.condition != gamer2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            let winner;

            if (gamer1.power > gamer2.power) {
                winner = gamer1;
            } else if (gamer2.power > gamer1.power) {
                winner = gamer2;
            } else {
                return `There is no winner.`;
            }

            winner.wins++;
            return `The ${winner.name} is winner in the game ${typeOfGame}.`;

        } else if (typeOfGame == 'Battleship') {
            let participant = this.listOfParticipants.find(p => p.name == participant1);
            participant.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        for (let participant of this.listOfParticipants.sort((a, b) => b.wins - a.wins)) {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
        }
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));