<!-- 组件说明 -->
<template>
  <div class="inform">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="m20">
      <button class="addbtn" @click="Addinform">发布</button>
    </el-row>
    <el-row
      class="msg-box m20"
      v-for="(list) in msgdata"
      :key="list.id"
      @click.native="toshow(list.id)"
    >
      <div class="msg-list">
        <ul class="msg-title">
          <span>[标题]</span>
          <li>
            <a href="javascripty:;">{{list.title}}</a>
          </li>
        </ul>
        <ul class="msg-date">
          <i class="el-icon-s-custom"></i>
          <li>{{list.name}}</li>
          <li>{{list.date}}</li>
        </ul>
        <el-button type="danger" icon="el-icon-delete" circle @click.stop="deletelist(list.id)"></el-button>
      </div>
    </el-row>
    <Paging></Paging>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";
import Addinform from "./addinform";

export default {
  components: {
    Soso,
    Paging,
    Addinform
  },
  data() {
    return {
      pagetitle: "通知公告", //页面标题
      msgdata: [
        {
          id: 0,
          title: "关于2019年端午节放假安排的通知",
          name: "杨立春",
          date: "2023-10-26 10:43",
          data:
            "11111111111111111111111数据数据数据数据数据数据数据数据数据数据数据数据数据数据数据"
        },
        {
          id: 1,
          title: "第七届全国民族体育学术研讨会征文通知",
          name: "付国荣",
          date: "2022-10-26 10:43",
          data:
            "2222222222222222222222222数据数据数据数据数据数据数据数据数据数据数据数据"
        },
        {
          id: 2,
          title: "关于天府国际体育赛事研究院举办第二期博士教师学术沙龙的通知",
          name: "周润发",
          date: "2021-10-26 10:43",
          data: "3333333数据数据数据数据数据数据数据333333"
        },
        {
          id: 3,
          title: "图书馆关于2019届毕业生离校工作的通知",
          name: "李泽东",
          date: "2020-10-26 10:43",
          data: "444444444444数据数据数据数据数据数据数据数据"
        },
        {
          id: 4,
          title: "关于印发《成都体育学院国内公务接待管理办法（修订）》的通知",
          name: "马晓宇",
          date: "2019-10-26 10:43",
          data:
            "w1111111111111111115555555555555555数据数据数据数据数据数据数据数据数据数据5"
        },
        {
          id: 5,
          title: "关于印发《成都体育学院国内公务接待管理办法（修订）》的通知",
          name: "马晓宇",
          date: "2019-10-26 10:43",
          data:
            "wwwwwwww5555555555555555数据数据数据数据数据数据数据数据数据数据5"
        }
      ]
    };
  },
  computed: {},
  methods: {
    //   发布
    Addinform() {
      this.$router.push("./Addinform");
    },
    //   删除
    deletelist(id) {
      var index = this.msgdata.findIndex(function(item) {
        if (item.id == id) 
        return true;
      });
      this.$confirm('此操作将永久删除该通知, 是否继续?', '提示', {
        confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.msgdata.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    //   查看
    toshow(id) {
      this.$router.push({
        name: "Showinform",
        query: {
          title: this.msgdata[id].title,
          name: this.msgdata[id].name,
          date: this.msgdata[id].date,
          data: this.msgdata[id].data
        }
      });
    },
  }
};
</script>

<style scoped>
/* 通知 */
.inform {
  width: 100%;
  height: 100%;
  /* background: red; */
}
/* 发布按钮 */
.addbtn {
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  line-height: 38px;
  padding: 0 20px;
  color: #53cac3;
  background: transparent;
  border: 1px solid #53cac3;
}
.addbtn:hover {
  color: #fff;
  background: #53cac3;
  transition: all 0.5s;
}
/* 默认20margin */

/* 消息大盒子 */
.msg-box {
  height: 78px;
  width: calc(95% - 20px);
  color: #333333;
  cursor: pointer;
  padding: 10px;
  overflow: hidden;
  font-size: 14px;
  transition: all 0.3s;
  /* box-shadow: 0 0 5px rgba(204, 204, 204, 1); */
  border: 1px solid rgba(204, 204, 204, 1);
}
.msg-box:hover {
  color: #53cac3;
  transition: all 0.3s;
  transform: translateY(-5px);
  box-shadow: 10px 5px 10px rgba(204, 204, 204, 1);
}
/* 补充A */
.msg-box:hover a {
  color: #53cac3;
}
/* li内容间距 */
.msg-title span,
.msg-date span,
.msg-title li,
.msg-date li {
  margin-right: 10px;
  margin-bottom: 10px;
}
.msg-date i {
  font-size: 25px;
  padding: 0 5px;
  margin-right: 12px;
}
/* li */
.msg-box li {
  display: inline;
}
/* 标题 */
.msg-title {
  margin-bottom: 10px;
}
.msg-title li a {
  color: #333333;
}
.msg-date {
  color: #b3b3b3;
}
.msg-list {
  position: relative;
}
.msg-box:hover .el-button {
  transition: all 0.5s;
  right: 40px;
  display: block;
}
.el-button {
  position: absolute;
  top: 20%;
  right: -100px;
  transition: all 0.5s;
}
</style>