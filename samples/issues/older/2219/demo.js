$(function () {
    $('#container').highcharts({

        chart: {
            type: 'bubble',
            zoomType: 'xy'
        },

        title: {
            text: 'Individual bubble color'
        },

        series: [{
            data: [{ x: 97, y: 36, z: 200, color: '#ff0000' },[94,74,60],[68,76,58],[64,87,56],[68,27,73],[74,99,42],[7,93,87],[51,69,40],[38,23,33],[57,86,31]]
        }, {
            data: [[25,10,87],[2,75,59],[11,54,8],[86,55,93],[5,3,58],[90,63,44],[91,33,17],[97,3,56],[15,67,48],[54,25,81]]
        }]

    });
});