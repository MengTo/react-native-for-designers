module.exports = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1">
        <meta name="format-detection" content="telephone=no">
        <meta name="format-detection" content="date=no">
        <meta name="format-detection" content="address=no">
        <meta name="format-detection" content="email=no">

        <title>$title</title>

        <style type="text/css">
            body {
                font-family: Roboto, '-apple-system', Helvetica Neue, Arial;
            }
            b, strong {
                font-family: Roboto, '-apple-system', Helvetica Neue, Arial;
                font-weight: bold;
            }
            h1, h2, h3, h4, h5, h6 {
                font-family: Roboto, '-apple-system', Helvetica Neue, Arial;
                font-weight: bold;
            }
            $pureCSS
        </style>
    </head>
    <body>
        $body
    </body>
</html>`;
