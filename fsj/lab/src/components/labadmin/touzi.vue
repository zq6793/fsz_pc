<!-- 组件说明 -->
<template>
    <div class='touzi'>
        <table>
            <tr>
                <td>
                    <span>省教育厅：</span>
                    <input type="text">
                    <i>%</i>
                </td>
                <td>
                    <span>市教育厅：</span>
                    <input type="text">
                    <i>%</i>
                </td>
                <td>
                    <span>区教育厅：</span>
                    <input type="text">
                    <i>%</i>
                </td>
                <td>
                    <span>本学校：</span>
                    <input type="text">
                    <i>%</i>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <p>
                        填写的占比数字需精确到小数点后两位
                    </p>
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
    height: 45px;
}
table tr td{
    width: 25%;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    background: rgb(242, 242, 242);
}
table tr td input{
    width: 80px;
    height: 20px;
    margin: 0 5px;
}
table tr td p{
    float: left;
    color: #FF9900;
    margin-left: 18px;
}
</style>