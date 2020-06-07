$(document).ready(function() {
    $("#add_row").on("click", function() {
        // Dynamic Rows Code

        // Get max row id and set new id
        var newid = 0;
        $.each($("#tab_logic tr"), function() {
            if (parseInt($(this).data("id")) > newid) {
                newid = parseInt($(this).data("id"));
            }
        });
        newid++;

        var tr = $("<tr></tr>", {
            id: "addr"+newid,
            "data-id": newid
        });

        // loop through each td and create new elements with name of newid
        $.each($("#tab_logic tbody tr:nth(0) td"), function() {
            var td;
            var cur_td = $(this);
            var children = cur_td.children();

            // add new td and element if it has a name
            if ($(this).data("name") !== undefined) {
                td = $("<td></td>", {
                    "data-name": $(cur_td).data("name")
                });

                var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                c.attr("name", $(cur_td).data("name") + newid);
                c.attr("id", $(cur_td).data("name") + newid);
                c.appendTo($(td));

                // Adjust options in type selector
                if ($(this).data("name") == 'type') {
                    c.children('option').each(function() {
                        var newHide = "#td-" + $(this).attr("data-hide").split("-")[1] + "-" + newid;
                        $(this).attr("data-hide", newHide);
                        var newShow = "#td-" + $(this).attr("data-show").split("-")[1] + "-" + newid;
                        $(this).attr("data-show", newShow);
                    });
                }

                // Set id of cell to be hidden or shown
                if ($(this).data("name") == 'values' || $(this).data("name") == 'choices') {
                    td.attr("id", "td-" + $(this).data("name") + "-" + newid)
                }

                td.appendTo($(tr));
            } else {
                td = $("<td></td>", {
                    'text': $('#tab_logic tr').length
                }).appendTo($(tr));
            }
        });

        // add the new row
        $(tr).appendTo($('#tab_logic'));

        $(tr).find("td button.row-remove").on("click", function() {
             $(this).closest("tr").remove();
        });

        // Attach change function to type field to show/hide relevant cell
        $('#type'+newid).change(function () {
            $($(this).children("option:selected").attr("data-hide")).hide();
            $($(this).children("option:selected").attr("data-show")).show();
        });
        // Trigger change
        $('#type'+newid).trigger("change");
});

});


$(document).ready(function(){
   $('#type0').change(function () {
       $($(this).children("option:selected").attr("data-hide")).hide();
       $($(this).children("option:selected").attr("data-show")).show();
   });
   $("#type0").trigger("change");

});
