import {RoadFactory} from "./road.js";

export class RoadUI{
    static uiAddGameRow(roadRow) {
        let rowDiv = document.createElement('div');
        rowDiv.className = "road-row";
        rowDiv.style = `height: ${RoadUI.ROWHEIGHT}px;` // We are this desperate at this point.

        let leftDiv = document.createElement('div');
        let rightDiv = document.createElement('div');
        let roadDiv = document.createElement('div');
        leftDiv.className = 'leftedge';
        rightDiv.className = 'rightedge';
        roadDiv.className = 'road';

        leftDiv.style.width = (roadRow.leftEdge * 100) + '%';
        roadDiv.style.width = (roadRow.rightEdge - roadRow.leftEdge) * 100 + '%';
        rightDiv.style.width = (1 - roadRow.rightEdge) * 100 + '%';

        rowDiv.appendChild(leftDiv);
        rowDiv.appendChild(roadDiv);
        rowDiv.appendChild(rightDiv);

        return rowDiv;
    }
}

RoadUI.ROWHEIGHT = window.innerHeight / RoadFactory.MAP_ROWS;

