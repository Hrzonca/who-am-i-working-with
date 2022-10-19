const formatHtml = function () {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <title>Office Team</title>
</head>
<body>

<section class="card">
<div>
<h1> ${manager} </h1>
<div> 👔Manager </div>
<div>ID: ${employeeNumber}</div>
<div href='#' class="card-link">Email: ${email}</div>
<div>Office: ${office}</div>
</div>
</section>

</body>
    `
}