import paper from "paper";

export default function Sketch() {
    window.onload = function () {
        paper.install(window);
        paper.setup("paper-canvas");


        var values = {
            fixLength: false,
            fixAngle: false,
            showCircle: false,
            showAngleLength: true,
            showCoordinates: false
        };

        var vectorStart, vector, vectorPrevious;
        var vectorItem, items, dashedItems;

        function processVector(event, drag) {
            vector = event.point - vectorStart;
            if (vectorPrevious) {
                if (values.fixLength && values.fixAngle) {
                    vector = vectorPrevious;
                } else if (values.fixLength) {
                    vector.length = vectorPrevious.length;
                } else if (values.fixAngle) {
                    vector = vector.project(vectorPrevious);
                }
            }
            drawVector(drag);
        }

         function drawVector(drag) {
            if (items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    items[i].remove();
                }
            }
            if (vectorItem)
                vectorItem.remove();
            items = [];
            var arrowVector = vector.normalize(10);
            var end = vectorStart + vector;
            vectorItem = new paper.Group([
                new paper.Path([vectorStart, end]),
                new paper.Path([
                    end + arrowVector.rotate(135),
                    end,
                    end + arrowVector.rotate(-135)
                ])
            ]);
            vectorItem.strokeWidth = 0.75;
            vectorItem.strokeColor = '#e4141b';
            // Display:
            dashedItems = [];
            // Draw Circle
            if (values.showCircle) {
                dashedItems.push(new paper.Path.Circle({
                    center: vectorStart,
                    radius: vector.length
                }));
            }
            // Draw Labels
            if (values.showAngleLength) {
                drawAngle(vectorStart, vector, !drag);
                if (!drag)
                    drawLength(vectorStart, end, vector.angle < 0 ? -1 : 1, true);
            }
            var quadrant = vector.quadrant;
            if (values.showCoordinates && !drag) {
                drawLength(vectorStart, vectorStart + [vector.x, 0],
                    [1, 3].indexOf(quadrant) != -1 ? -1 : 1, true, vector.x, 'x: ');
                drawLength(vectorStart, vectorStart + [0, vector.y],
                    [1, 3].indexOf(quadrant) != -1 ? 1 : -1, true, vector.y, 'y: ');
            }
            for (var i = 0, l = dashedItems.length; i < l; i++) {
                var item = dashedItems[i];
                item.strokeColor = 'black';
                item.dashArray = [1, 2];
                items.push(item);
            }
            // Update palette
            values.x = vector.x;
            values.y = vector.y;
            values.length = vector.length;
            values.angle = vector.angle;
        }

        function drawAngle(center, vector, label) {
            var radius = 25, threshold = 10;
            if (vector.length < radius + threshold || Math.abs(vector.angle) < 15)
                return;
            var from = new paper.Point(radius, 0);
            var through = from.rotate(vector.angle / 2);
            var to = from.rotate(vector.angle);
            var end = center + to;
            dashedItems.push(new paper.Path.Line(center,
                center + new paper.Point(radius + threshold, 0)));
            dashedItems.push(new paper.Path.Arc(center + from, center + through, end));
            var arrowVector = to.normalize(7.5).rotate(vector.angle < 0 ? -90 : 90);
            dashedItems.push(new paper.Path([
                end + arrowVector.rotate(135),
                end,
                end + arrowVector.rotate(-135)
            ]));
            if (label) {
                // Angle Label
                var text = new paper.PointText(center
                    + through.normalize(radius + 10) + new paper.Point(0, 3));
                text.content = Math.floor(vector.angle * 100) / 100 + '°';
                text.fillColor = 'black';
                items.push(text);
            }
        }

        function drawLength(from, to, sign, label, value, prefix) {
            var lengthSize = 5;
            if ((to - from).length < lengthSize * 4)
                return;
            var vector = to - from;
            var awayVector = vector.normalize(lengthSize).rotate(90 * sign);
            var upVector = vector.normalize(lengthSize).rotate(45 * sign);
            var downVector = upVector.rotate(-90 * sign);
            var lengthVector = vector.normalize(
                vector.length / 2 - lengthSize * Math.sqrt(2));
            var line = new paper.Path();
            line.add(from + awayVector);
            line.lineBy(upVector);
            line.lineBy(lengthVector);
            line.lineBy(upVector);
            var middle = line.lastSegment.point;
            line.lineBy(downVector);
            line.lineBy(lengthVector);
            line.lineBy(downVector);
            dashedItems.push(line);
            if (label) {
                // Length Label
                var textAngle = Math.abs(vector.angle) > 90
                    ? textAngle = 180 + vector.angle : vector.angle;
                // Label needs to move away by different amounts based on the
                // vector's quadrant:
                var away = (sign >= 0 ? [1, 4] : [2, 3]).indexOf(vector.quadrant) != -1
                    ? 8 : 0;
                value = value || vector.length;
                var text = new paper.PointText({
                    point: middle + awayVector.normalize(away + lengthSize),
                    content: (prefix || '') + Math.floor(value * 1000) / 1000,
                    fillColor: 'black',
                    justification: 'center'
                });
                text.rotate(textAngle);
                items.push(text);
            }
        }

        var dashItem;

        paper.view.onMouseDown = function (event){
            onMouseDown(event)
        }
        function onMouseDown(event) {
            var end = vectorStart + vector;
            var create = false;
            if (event.modifiers.shift && vectorItem) {
                vectorStart = end;
                create = true;
            } else if (vector && (event.modifiers.option
                || end && end.getDistance(event.point) < 10)) {
                create = false;
            } else {
                vectorStart = event.point;
            }
            if (create) {
                dashItem = vectorItem;
                vectorItem = null;
            }
            processVector(event, true);
//	document.redraw();
        }
        paper.view.onMouseDrag = function (event){
                onMouseDrag(event)
        }
        function onMouseDrag(event) {
            if (!event.modifiers.shift && values.fixLength && values.fixAngle)
                vectorStart = event.point;
            processVector(event, event.modifiers.shift);
        }
        paper.view.onMouseUp = function (event){
            onMouseUp(event)
        }
        function onMouseUp(event) {
            processVector(event, false);
            if (dashItem) {
                dashItem.dashArray = [1, 2];
                dashItem = null;
            }
            vectorPrevious = vector;
        }
    }
    // Most return null
    return null;
}