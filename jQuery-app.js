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
       
        let contactList = $('#contact_form').serializeArray();
        const tbody = $("<tbody></tbody");
            const tr =
                `<tr>
                    <td>${$('input[name=id]').val()}</td><td>${$('input[name=name]').val()}</td><td>${$('input[name=phone]').val()}</td><td>${$('input[name=email]').val()}</td><td><button class="btn btn-outline-primary">Edit</button> <button class="btn btn-outline-danger">Delete</button></td>
                </tr>`
            tbody.append(tr);
        $("#contact_table").append(tbody);
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