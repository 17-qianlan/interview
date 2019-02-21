<template>
    <div class="login container">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm form-group col-md-6 ml-auto ml-auto mr-auto mt-md-5">
            <el-form-item label="账号" prop="user">
                <el-input v-model="ruleForm2.user"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="submitForm('ruleForm2')" class="offset-md-3">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            var checkUser;
            checkUser = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('账号不能为空'));
                }
                setTimeout(() => {
                    if (!(/^[0-9a-zA-Z]{5,12}?$/.test(value))) {
                        callback(new Error('账号5-12位, 可以是字母和数字'));
                    } else {
                        callback();
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (/^(?=.*[a-zA-Z])\w{6,16}$/.test(this.ruleForm2.pass)) {
                        callback();
                    } else {
                        callback(new Error('密码类型不对, 6-16位数字和字母且必须包含一个字母'));
                    }
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    user: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    user: [
                        { validator: checkUser, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');  通过检测
                        const opt = {username: this.ruleForm2.user, password: this.ruleForm2.pass};
                        this.axios.post('/user/login', opt).then(({data}) => {
                            console.log(data);
                        }).catch( error => {
                            console.log(error);
                        });
                    } else {
                        // console.log('error submit!!'); 没有通过检测
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>

<style scoped lang="scss">
    @import url("//unpkg.com/element-ui@2.5.4/lib/theme-chalk/index.css");
</style>
