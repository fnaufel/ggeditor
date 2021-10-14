// deno-lint-ignore-file no-var no-unused-vars
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    // Editor
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true
	});

    // Add event handler for edit-text button
    $("#edit_text").click(handle_edit_text);

});

// Edit existing text object
function handle_edit_text(e) {

    // Clear selection list (except for first option)
    $('#edit_text option')
        .filter(function(index){ return index > 0; })
        .remove();

    // Get list of text objects from app
    var app = applet.getAppletObject();
    var objs = app.getAllObjectNames('text');

    et = $('#edit_text');

    // Populate selection list with text objects from the app
    $.each(objs, function(i, obj) {
        var op = $('<option/>')
            .attr('value', obj)
            .text(obj)
            .prop('selected', i == 1);

        et.append(op);
    });
    
}


