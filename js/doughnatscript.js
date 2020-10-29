
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

        function SetDoughnatLegend(data, chart){
            if(data.length>0 && chart) {
                var summary = 0;
                var persent = new Array(data.length);
                for (const element of data) {
                    summary = summary + element.value;
                }
                var index=0;
                for (const element of data) {
                    persent[index] = Math.round((100*element.value)/summary);
                    index ++;
                }
                index=0;
                for (const element of data) {
                    var legenditem = 
                    '<div class="legenditem">'
                    +'    <div class="count" style="background: '+ element.color +';">'+ persent[index] + '% / '+ element.value + ' шт</div>'
                    +'   <div class="label">'+ element.title + '</div>'
                    +'</div>';
                    chart.parents('.chart-block').find('.doughnutlegend').append(legenditem);
                    index ++;
                }
            }
        }
    });
});
