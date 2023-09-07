export class Road {
    constructor(leftEdge, rightEdge) {
        this.leftEdge = leftEdge
        this.rightEdge = rightEdge
    }
}
export class RoadFactory{
    constructor() {
        this.previousLeft = Math.random() / 2 + 0.15
        this.previousRight = this.previousLeft + RoadFactory.ROAD_MINIMUM_WIDTH

        if(this.previousLeft < 0.05) this.previousLeft = 0.05;
        if(this.previousRight > 0.95) this.previousRight = 0.95;

        if((this.previousRight - this.previousLeft) < RoadFactory.ROAD_MINIMUM_WIDTH){
            this.previousRight = this.previousLeft + RoadFactory.ROAD_MINIMUM_WIDTH
        }
    }
    newRoadRow(){
        this.currentLeft = ((Math.random() - 0.5) * 2) / RoadFactory.WIDTH;
        this.currentRight = ((Math.random() - 0.5) * 2) / RoadFactory.WIDTH;

        this.testValueL = this.previousLeft +
            ((this.currentLeft * RoadFactory.ROAD_MINIMUM_WIDTH) / RoadFactory.NOISE);

        this.testValueR = this.previousRight +
            ((this.currentRight * RoadFactory.ROAD_MINIMUM_WIDTH) / RoadFactory.NOISE);

        if((this.testValueR - this.testValueL) < RoadFactory.ROAD_MINIMUM_WIDTH ){
            this.testValueR = this.testValueL + RoadFactory.ROAD_MINIMUM_WIDTH;
        }

        if((this.testValueL + RoadFactory.ROAD_MINIMUM_WIDTH) > 0.95){
            this.testValueL = 0.95 - RoadFactory.ROAD_MINIMUM_WIDTH;
        }

        if(this.testValueL < 0.05) this.testValueL = 0.05;
        if(this.testValueR > 0.95) this.testValueR = 0.95;

        if((this.testValueR - this.testValueL) >= (RoadFactory.ROAD_MINIMUM_WIDTH * 3)) {
            this.testValueR = this.previousLeft + RoadFactory.ROAD_MINIMUM_WIDTH * 3
            this.previousRight = this.testValueR
        }else{
            this.previousLeft = this.testValueL
            this.previousRight = this.testValueR
        }

        return new Road(this.testValueL, this.testValueR, null)
    }
}

RoadFactory.MAP_ROWS = 500;
RoadFactory.ROAD_MINIMUM_WIDTH = 0.4
RoadFactory.NOISE = 6
RoadFactory.WIDTH = 15