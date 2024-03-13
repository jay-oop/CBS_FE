var records = [

    ["Flintstone", "Fred", 112, "Kidney"],
    ["Flintstone", "Fred", 113, "Heart"],
    ["Bunny", "Bugs", 111, "Kidney"],
    ["Duck", "Donald", 115, "Pancreas"],
    ["Mouse", "Mickey", 116, "Kidney"]
];

$(document).ready(function() {
    $('#registry').DataTable(
        {
            data: records
        });
});
