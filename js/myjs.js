// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();

    var x = Math.floor((Math.random() * 10) + 1);
    var y = 10 - x;

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['agree', 159],
        ['disagree', 251]
    ]);
    // var foo = '[["2004", 1000, 400],["2005", 1170, 460],["2006", 660, 1120],["2007", 1030, 540]]';
    // data.addRows(JSON.parse(foo));

    // Set chart options
    var options = {
        'titleTextStyle': {
            color: 'white', // any HTML string color ('red', '#cc00cc')
            fontSize: 20, // 12, 18 whatever you want (don't specify px)
        },
        'title': 'agree or disagree?',
        'backgroundColor': { 'fill': 'transparent' },
        'width': 400,
        'height': 300,
        'colors': ['#3F51B5', '#F44336', '#ec8f6e', '#f3b49f', '#f6c7b6']
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}


$("#text").html("<b>本demo是分析ptt上一篇「 [爆卦] 川普 : 不尊敬習近平 北韓太壞了 」網民對本篇的意見傾向分析。</b>"+
    "<b>正面詞彙：159 負面詞彙：251 共計：410 筆詞彙 分數為：38.78。本篇經人工判斷此程式正確率為85.6%。</b>"+
    "<b>點擊INFOGRAPHIC可以看到我將此篇資料視覺化之結果（分數越高則球體越圓滑，分數越低則趨近正方形）</b>");
