
jQuery(function ($) {
    $(document).ready(function () {
        if(dataManufactory && $('#ManufactoryDoughnatChart').length>0) {
            $("#ManufactoryDoughnatChart").drawDoughnutChart(dataManufactory);
            SetDoughnatLegend(dataManufactory, $("#ManufactoryDoughnatChart"));
        }
        if(dataPlace && $('#PlaceDoughnatChart').length>0) {
            $("#PlaceDoughnatChart").drawDoughnutChart(dataPlace);
            SetDoughnatLegend(dataPlace, $("#PlaceDoughnatChart"));
        }

        if(dataReseach && $('#ReseachDoughnatChart').length>0) {
            $("#ReseachDoughnatChart").drawDoughnutChart(dataReseach);
            SetDoughnatLegend(dataReseach, $("#ReseachDoughnatChart"));
        }

        function SetDoughnatLegend(data, chart){
            if(data.length>0 && chart) {
                var summary = 0;
                var persent = new Array(data.length);
                for (var i = 0; i < data.length; i++) {
                    summary = summary + data[i].value;
                }
                var index=0;
                for (var i = 0; i < data.length; i++) {
                    if(data[i].value > 0) {
                        persent[index] = Math.round((100*data[i].value)/summary);
                    }
                    else {
                        persent[index] = 0;
                    }
                    index ++;
                }
                index=0;
                for (var i = 0; i < data.length; i++) {
                    var legenditem = 
                    '<div class="legenditem">'
                    +'    <div class="count" style="background: '+ data[i].color +';">'+ persent[index] + '% / '+ data[i].value + ' шт</div>'
                    +'   <div class="label">'+ data[i].title + '</div>'
                    +'</div>';
                    chart.parents('.chart-block').find('.doughnutlegend').append(legenditem);
                    index ++;
                }
            }
        }
    });
});
