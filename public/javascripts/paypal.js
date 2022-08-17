
var amount = 0;
var miCheckbox1 = document.getElementById('inlineRadio1');
var miCheckbox2 = document.getElementById('inlineRadio2');
var miCheckbox3 = document.getElementById('inlineRadio3');
var miCheckbox4 = document.getElementById('inlineRadio4');
var otherD = document.getElementById('otro');
var cd;
var IsAllowed = false;

function Valores() {
    var otherD_mount = otherD.value;
    console.log('Amount other:' + otherD_mount)
    if (otherD_mount.length == 0) {
        if (miCheckbox1.checked) {
            amount = 10;
        } else if (miCheckbox2.checked) {
            amount = 25;
        } else if (miCheckbox3.checked) {
            amount = 50;
        } else if (miCheckbox4.checked) {
            amount = 75;
        }
    } else {
        amount = otherD_mount;
    }

    console.log('Amount:' + amount)
    return amount;
}
$(document).ready(function () {
    CreateCaptcha();
});
function CreateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
    }
    cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $('#CaptchaImageCode').empty().append('<canvas id="CapCode" class="capcode" width="350" height="80"></canvas>')

    var c = document.getElementById("CapCode"),
        ctx = c.getContext("2d"),
        x = c.width / 2,
        img = new Image();

    img.src = "https://pixelsharing.files.wordpress.com/2010/11/salvage-tileable-and-seamless-pattern.jpg";
    img.onload = function () {
        var pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.font = "46px Roboto Slab";
        ctx.fillStyle = '#ccc';
        ctx.textAlign = 'center';
        ctx.setTransform(1, -0.12, 0, 1, 0, 15);
        ctx.fillText(cd, x, 55);
    };


}
function ValidateCaptcha() {
    var string1 = removeSpaces(cd);
    var string2 = removeSpaces($('#UserCaptchaCode').val());
    if (string1 == string2) {
        return true;
    }
    else {
        return false;
    }
}
function removeSpaces(string) {
    return string.split(' ').join('');
}
function CheckCaptcha() {
    var result = ValidateCaptcha();
    if ($("#UserCaptchaCode").val() == "" || $("#UserCaptchaCode").val() == null || $("#UserCaptchaCode").val() == "undefined") {
        $('#WrongCaptchaError').text('Please enter code given below in a picture.').show();
        $('#UserCaptchaCode').focus();
    } else {
        if (result == false) {
            IsAllowed = false;
            $('#WrongCaptchaError').text('Invalid Captcha! Please try again.').show();
            CreateCaptcha();
            $('#UserCaptchaCode').focus().select();
        }
        else {
            IsAllowed = true;
            $('#UserCaptchaCode').val('').attr('place-holder', 'Enter Captcha - Case Sensitive');
            CreateCaptcha();
            $('#WrongCaptchaError').fadeOut(100);
            //$('#SuccessMessage').fadeIn(500).css('display', 'block').delay(5000).fadeOut(250);
            
        }
    }
}
function Submit() {
    document.getElementById('content').innerHTML='';
    document.getElementById('content').innerHTML='<div  style="visibility: hidden;" class="linea" id="lineavisible"></div><div id="paypal-button-container"></div> ';
    document.getElementById('lineavisible').style.visibility="visible";
    document.getElementById('SuccessMessage').style.visibility="visible";
    document.getElementById('capcha').style.visibility="hidden";
    document.getElementById('capcha').style.position="absolute";
    if (IsAllowed === false) {
        alert("It's False");
    } else {
        paypal.Buttons({
            style: {
                color: 'black',
                shape: 'pill',
                label: 'pay'
            },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: Valores()
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(function (orderData) {
                    console.log('Capture result', orderData);
                    document.getElementById('SuccessMessage').style.visibility="hidden";
                    document.getElementById('capcha').style.visibility="visible";
                    document.getElementById('capcha').style.removeProperty("position");
                    document.getElementById('content').innerHTML='';
                    let url = '../php/process.php';
                    return fetch(url, {
                        method: 'post',
                        headers: {
                            'content-type': 'aplication/json'
                        },
                        body: JSON.stringify({
                            orderData: orderData
                        })
                    })
                });
            },
            onCancel: function (data) {
                document.getElementById('SuccessMessage').style.visibility="hidden";
                document.getElementById('capcha').style.visibility="visible";
                document.getElementById('capcha').style.removeProperty("position");
                document.getElementById('content').innerHTML='';
                // Show a cancel page, or return to cart
              },
              onError: function (err) {
                // For example, redirect to a specific error page
              }
        }).render('#paypal-button-container');
    }

}




