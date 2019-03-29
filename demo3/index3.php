<!doctype html>
<html lang="en">
<head>
  <title>React Demo</title>
  <meta charset="utf-8"/>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<?php
  echo "PHP also works!!";
  $User_Name = 'Jenny';
?>
<script>
  var U_name = <?php echo json_encode($User_Name); ?> ;
</script>
<script src="demo3.js" type="text/babel"></script>
<!-- React v15.6.2 -->
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<!-- ReactDOM v15.6.2 -->
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
<!-- Babel -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</body>
</html>