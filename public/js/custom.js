$(() => {
    $('#upload-form').submit((e) => {
        event.preventDefault();

        var form = $('#upload-form');
        var url = form.attr('action');

        const myForm = document.getElementById("upload-form");

        var formData = new FormData(myForm);

        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
            success: (data) => {
                $("#upload-result").text(data);
                $("#upload-result").css("color", "green");
            },
            error: (e) => {
                console.log(e);
                $("#upload-result").text(JSON.stringify(e));
                $("#upload-result").css("color", "red");
            }
        });
    });
});