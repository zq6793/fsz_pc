<!-- 组件说明 -->
<template>
  <div class="Classtab">
    <Soso :pagetitle="pagetitle" style="margin-left:20px;"></Soso>
    <el-row class="celect-box m20">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <span class="demonstration">院系：</span>
          <el-select v-model="school" placeholder="请选择院系">
            <el-option
              v-for="item in schoolS"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <span class="demonstration">专业：</span>
          <el-select v-model="major" placeholder="请选择专业">
            <el-option
              v-for="item in majorS"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <span class="demonstration">年级：</span>
          <el-select v-model="grade" placeholder="请选择年级">
            <el-option
              v-for="item in gradeS"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <span class="demonstration">班级：</span>
          <el-select v-model="school" placeholder="请选择院系">
            <el-option
              v-for="item in schoolS"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <span class="demonstration">状态：</span>
          <el-select v-model="major" placeholder="请选择专业">
            <el-option
              v-for="item in majorS"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <span class="demonstration">学期：</span>
          <el-select v-model="grade" placeholder="请选择年级">
            <el-option
              v-for="item in gradeS"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>

    <el-row class="m20">
      <el-button type="success" plain>发布</el-button>
      <el-button plain>下线</el-button>
      <el-button type="success" round style="float:right">下载课表模板</el-button>
    </el-row>

    <!-- 表格 -->
    <el-table
      class="m20"
      :data="tableData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid',
}"
    >
      <el-table-column prop="yuanxi" label="院系" width="180" align="center"></el-table-column>
      <el-table-column prop="zhuanye" label="专业" width="180" align="center"></el-table-column>
      <el-table-column prop="nianji" label="年级" align="center"></el-table-column>
      <el-table-column prop="banji" label="班级" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="学期" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="状态" align="center"></el-table-column>
      <el-table-column prop label="操作" align="center">
        <router-link to="/Myclass">
          <a class="a-active" href="javascript:;">
            <i class="i-1"></i> 查看
          </a>
        </router-link>
        <a class="a-active" href="javascript:;">
          <i class="i-2"></i> 导入
        </a>
        <a class="a-active" href="javascript:;" @click="dialogFormVisible = true">
          <i class="i-3"></i> 复制课表
        </a>
      </el-table-column>
      
    </el-table>
    <Paging class="Paging"></Paging>
    <el-dialog title="复制课表" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
        <el-form :model="form">
          <el-form-item label="学期：" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="院系：" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item><el-form-item label="专业：" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年级：" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item><el-form-item label="班级：" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";
export default {
  components: {
    Soso,
    Paging
  },
  data() {
    return {
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      pagetitle: "课表管理", //当前页面标题
      tableData: [
        {
          yuanxi: "材料科学与化学工程",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019-02-25~2019-07-10",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "材料科学与化学工程",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019-02-25~2019-07-10",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "材料科学与化学工程",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019-02-25~2019-07-10",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "材料科学与化学工程",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019-02-25~2019-07-10",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "材料科学与化学工程",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019-02-25~2019-07-10",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "材料科学与化学工程",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019-02-25~2019-07-10",
          zhuangtai: "未发布"
        }
      ],
      schoolS: [
        {
          value: "选项1",
          label: "A院校"
        },
        {
          value: "选项2",
          label: "B院校"
        }
      ],
      majorS: [
        {
          value: "选项1",
          label: "电子商务"
        },
        {
          value: "选项2",
          label: "计算机"
        },
        {
          value: "选项3",
          label: "软件工程"
        }
      ],
      gradeS: [
        {
          value: "选项1",
          label: "15级"
        },
        {
          value: "选项2",
          label: "16级"
        },
        {
          value: "选项3",
          label: "17级"
        },
        {
          value: "选项4",
          label: "18级"
        }
      ],
      school: "",
      major: "",
      grade: ""
    };
  },
  computed: {},
  methods: {
    copy() {
      //查看
    }
  }
};
</script>

<style scoped>
.el-table :nth-child() {
  background: red !important;
}
/* 选择框容器 */
.celect-box {
  width: 98%;
  text-align: left;
  padding: 10px 20px;
  background: rgb(242, 242, 242);
}
/* 下拉框间距 */
.el-select {
  margin-right: 50px;
}
/* 响应式间距 */
.el-row {
  width: 95%;
}
.el-col {
  margin: 10px 0;
}
/* 操作按钮样式 */
.a-active {
  margin-right: 15px;
  color: #555555;
  transition: all 0.3s;
}
i {
  width: 18px;
  height: 20px;
  position: relative;
  top: 2px;
  display: inline-block;
}
/* 表格样式 */
table tr {
  transition: all 0.3s;
  border-bottom: 1px solid rgb(230, 230, 230);
}
table tr:hover {
  transition: all 0.3s;
  background: #f2f2f2;
}
table th {
  padding: 9px 15px;
  line-height: 20px;
  text-align: left;
  width: 180px;
}
table td {
  padding: 9px 15px;
}
table .el-input {
  width: 185px;
}
</style>