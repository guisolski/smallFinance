function menu(id) {
    var active = $('#' + id).attr('class').trim().split(" ").pop() == "active";
    if (active) {
        $("#" + id).removeClass("active");
        $("#" + id + "Acordion").html("");
    } else {
        $("#" + id).addClass("active");
        $("#" + id + "Acordion").html(drawDivider() + drawCards([{ name: "teste", value: 15, data: "22/10" }, { name: "teste", value: -15, data: "22/10" }]));
    }
}
function drawDivider() {
    return '<div class="ui divider"></div>';
}
function downArrow() {
    return '<i class="red arrow down icon"></i>';
}
function upArrow() {
    return '<i class="green arrow up icon"></i>';
}
function drawType(name, balance) {
    let html = '';
    html += '<div class="menus pointer marginTop" id="' + name + '">';
    html += '<div class="ui blue ribbon label">' + name;
    html += '<div class="detail"> Balance: ';
    html += balance >= 0 ? upArrow() : downArrow();
    html += ' ' + balance > 0 ? balance : balance * -1;
    html += '</div> </div> </div>';
    html += '<div class="content field">';
    html += '<div id="' + name + 'Acordion"></div> </div> ';
    return html;
}
function drawPlusType() {
    let html = '';
    html += '<div class="menus pointer marginTop" id="addAnother">';
    html += '<div class="ui blue ribbon label">';
    html += '<i class="plus icon"></i>';
    html += '</div> </div>';
    return html;
}
function drawCards(cards) {
    html = '<div class="overflowX">';
    console.log(cards);
    for (a in cards) {
        console.log(a);
        html += drawCard(cards[a].name, cards[a].value, cards[a].data);
    }
    html += "</div>";
    return html;
}
function drawCard(name, value, data) {
    html = '';
    html += '<div class="ui basic'
    html += ' ' + value > 0 ? " green " : " red ";
    html += 'large label">';
    html += name + ' ';
    html += value >= 0 ? upArrow() : downArrow();
    html += ' ' + value > 0 ? value : value * -1;
    html += '<a class="detail">'
    html += data;
    html += '</a></div>';
    return html;
}
function initi() {
    let html = '';
    html += drawType('Money', 14);
    html += drawType('Bank', -14);
    html += drawPlusType();
    $("#types").html(html);
}
$(document).ready(function () {
    initi();
    $('#addModal').modal('setting', 'transition', 'vertical flip');
    $(".menus").click(function () {
        var id = $(this).attr('id');
        if (id == 'addAnother')
            $('#addModal').modal('show');
        else
            menu(id);
    });

});