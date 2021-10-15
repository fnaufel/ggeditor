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

    // // Get width of applet and make button pane and editor equally wide
    // real_width = $('.applet_scaler').width();
    // $('.button_div').width(real_width);

    // Add event handler for edit-text button
    $("#edit_text").click(handle_edit_text);

});

// Edit existing text object
function handle_edit_text(e) {

    // Reference to geogebra app
    var app = applet.getAppletObject();

    // Get list of text objects from app
    var objs = app.getAllObjectNames('text');

    // If empty, exit
    if (objs.length == 0) {
        alert('No text objects defined in app.\nCreate one there first.');
        return;
    }

    // Populate options with text objects from the app
    var obj_list = $('#obj_list');
    obj_list.empty();
    $.each(objs, (i, obj) => {
        obj_list.append(
            $('<option/>').attr('value', obj).text(obj)
        );
    });

    // Make list and button visible
    $('#obj_list, #go, #cancel_pick').toggle(true);

    // Disable edit text button
    $('#edit_text').attr('disabled', 'disabled');

}

