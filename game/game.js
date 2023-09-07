import {RoadFactory} from "../domain/road.js";

export class Game {
    constructor () {
        this.state = {
            map: [],
            rFactory: new RoadFactory(),
            car: 0.5,
            isRunning: false,
            speed: 1,
        }

        this.initializeState();
    }

    addNewMapRow(){
        if (this.state.map.length >= RoadFactory.MAP_ROWS) {
            this.state.map.splice(0,1);
        }
        this.state.map.push(this.state.rFactory.newRoadRow());
    }

    initializeState() {
        this.leftEdge = 0.3;
        this.rightEdge = this.leftEdge + RoadFactory.ROAD_MINIMUM_WIDTH * 2;
        for (let index = 0; index < RoadFactory.MAP_ROWS; index++) {
            this.addNewMapRow()
            // this.addNewMapRow();
        }
    }
}
