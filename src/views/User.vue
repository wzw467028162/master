<template>
  <div class="mange">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="38%">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :inline="true"
        :rules="rules"
        :before-close="handleClose"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择活动区域">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生日期" prop="birth">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.birth"
              style="width: 195%"
              value-format="yyyy-MM-DD"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2"></el-col>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定 </el-button>
      </span>
    </el-dialog>
    <div class="mange-header">
      <el-button @click="handleAdd" type="primary"> + 新增 </el-button>
      <!-- form搜索区域 -->
      
    </div>
    <el-table height="90%" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span>{{ scope.row.sex == 1 ? "男" : "女" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="birth" label="出生日期"> </el-table-column>
      <el-table-column prop="addr" label="地址"></el-table-column>
      <el-table-column prop="addr" label="地址">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div>
        <el-pagination layout="prev, pager, next" :total="total" @current-change = "handlePage"> </el-pagination>
      </div>
  </div>
</template>

<script>
import { getUser, addUser, editUser, delUser } from "@/api";
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true, message: "请选择性别" }],
        birth: [{ required: true, message: "请选择出生日期" }],
        addr: [{ required: true, message: "请填写地址" }],
      },
      tableData: [],
      madalType: 0, // 0表示的是新增的弹窗，1表示编辑
      total:0 ,
      pageData:{
        page:1,
        limit:10
      }
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          //后续对表单进行处理
          if (this.madalType === 0) {
            addUser(this.form).then(() => {
              // 重新获取列表的接口
              this.getList();
            });
          } else {
            editUser(this.form).then(() => {
              // 重新获取列表的接口
              this.getList();
            });
          }
          console.log(this.form);

          //用户填写完成 确定后关闭弹窗
          this.dialogVisible = false;
        }
      });
    },
    // 弹窗关闭的时候
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    cancel() {
      this.handleClose();
    },
    handleEdit(row) {
      this.madalType = 1;
      this.dialogVisible = true;
      // 注意需要对当前行数据进行深拷贝，否则会出错
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delUser(row.id).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleAdd() {
      this.madalType = 0;
      this.dialogVisible = true;
    },
    // 选择页码的回调函数
    handlePage(val){
        this.pageData.page = val
        this.getList();
    },
    getList() {
      //获取列表数据
      getUser({params:this.pageData}).then(({ data }) => {
        console.log(data);
        this.tableData = data.list;
        this.total = data.count || 0
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
.el-input--suffix {
  .el-input--suffix {
    padding-right: 0;
  }
}
.mange {
  height: 90%;
}
</style>