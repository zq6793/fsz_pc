<!-- 组件说明 -->
<template>
    <div class='touzi'>
        <table>
            <tr>
                <td>
                    <span>捐赠方：</span>
                    <input type="text">
                </td>
                <td>
                    <span>联系人：</span>
                    <input type="text">
                </td>
                <td>
                    <span>电话：</span>
                    <input type="text">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    //import x from ''
    export default {
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
.touzi{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    margin-left: 100px;
}
table{
    width: 100%;
    height:100%;
}
table tr{
    height: 40px;
}
table tr td{
    width: 25%;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    background: rgb(242, 242, 242);
}
table tr td input{
    width: 150px;
    height: 20px;
    margin: 0 5px;
}
table tr td p{
    float: left;
    color: #FF9900;
    margin-left: 18px;
}
</style>