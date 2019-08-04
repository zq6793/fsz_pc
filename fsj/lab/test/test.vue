<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

</body>

</html>
<script>
import {request} from '../request'
    var arr = [
        {
            name: "one",
            age: "男"
        },
        {
            name: "2",
            age: "女"
        }
    ]
    arr.forEach(function (item) {
        for (let key in item) {
            console.log(item.name)
        }
    })
</script>