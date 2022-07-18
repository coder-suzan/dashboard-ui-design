function readURLOne(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreviewOne').css('background-image', 'url('+e.target.result +')');
            $('#imagePreviewOne').hide();
            $('#imagePreviewOne').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUploadOne").change(function() {
    readURLOne(this);
});

function readURLTwo(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreviewTwo').css('background-image', 'url('+e.target.result +')');
            $('#imagePreviewTwo').hide();
            $('#imagePreviewTwo').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUploadTwo").change(function() {
    readURLTwo(this);
});