$(document).ready(function () {

    $('#addContact').click(function (e) {
        showForm()
    });

    $("#closeForm").click(function (e) {
        hideForm();
    });


    // ---------- Save Data ----------

    $('#saveData').click(function (e) {
        e.preventDefault();

        createContact();
        $(":input").val("");
        hideForm();
    });


    // --------------- Create Data Function-----------------

    function createContact() {
        let rowTable = $(":input").serializeArray();
        $('#contact_table').append(`
            <tbody><tr><td>${rowTable[0].value}</td><td>${rowTable[1].value}</td><td>${rowTable[2].value}</td><td>${rowTable[3].value}</td><td><button id="editInfo" class="btn btn-outline-primary">Edit</button> <button class="btn btn-outline-danger">Delete</button></td></tr></tbody>
        `)
    }


    // -------- Show Form function --------

    function showForm() {
        $('#form').css("margin-right", "0px");
    }

    // -------- Hide Form function --------

    function hideForm() {
        $('#form').css("margin-right", "-272px");
    }

});