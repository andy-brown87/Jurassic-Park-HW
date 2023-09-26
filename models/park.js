class Park {
    constructor(name, ticket_price) {
    this.name = name
    this.ticket_price = ticket_price
    this.collection_of_dinosaurs = []
    }
    

    addDinosaur(dinosaur) {
        this.collection_of_dinosaurs.push(dinosaur)
    }


    removeDinosaur(collection_of_dinosaurs) {
        const indexOfDinosaur = this.collection_of_dinosaurs.indexOf(collection_of_dinosaurs)
        this.collection_of_dinosaurs.splice(indexOfDinosaur, 1)
    }

    // guestsAttractedPerDay = function () {
    //     let maxIndex = 0;
    //         for (let i = 1; i < collection_of_dinosaurs.guestsAttractedPerDay; i++) {
    //             if (arr[i] > arr[maxIndex]) {
    //                 maxIndex = i;
    //             }
    //         }
    //         return maxIndex;
    //     }

    numberOfVisitorsPerDay() {
            return this.collection_of_dinosaurs.guestsAttractedPerDay.length
        }
    }




module.exports = Park