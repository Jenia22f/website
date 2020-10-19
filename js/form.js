$("input[type=tel]").intlTelInput({
    autoFormat: true,
    autoPlaceholder: "aggressive",
    defaultCountry: "auto",
    geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(
            resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    nationalMode: false,
    hiddenInput: "phone",
    numberType: "MOBILE",
    utilsScript: "js/utils.js"
});

function checkIp() {
    $.getJSON('http://apileads.3snet.tech/check-ip', function (data) {
        console.log(data);
        if (typeof data.ip != 'undefined') {
            var ip = data.ip;
            $('input[name=ip]').attr('value', ip);
        }
    });
}