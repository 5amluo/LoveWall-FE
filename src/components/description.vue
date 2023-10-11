<template>

    <div>
      <el-radio-group v-model="size" label="size control">
        <el-radio-button label="large">large</el-radio-button>
        <el-radio-button label="default">default</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="labelPosition" label="position control">
        <el-radio-button label="left">Left</el-radio-button>
        <el-radio-button label="right">Right</el-radio-button>
        <el-radio-button label="top">Top</el-radio-button>
      </el-radio-group>
    </div>
    <br />
    <el-form
      ref="form"
      :model="sizeForm"
      label-width="auto"
      :label-position="labelPosition"
      :size="size"
    >
      <el-form-item label=" username">
        <el-input v-model="sizeForm.name" />
      </el-form-item>
      <el-form-item label="sex">
        <el-select
          v-model="sizeForm.sex"
          placeholder="please select your sex"
        >
          <el-option label="靓仔" value="男" />
          <el-option label="靓妹" value="女" />
          <el-option label="mixed" value="混合"/>
        </el-select>
      </el-form-item>
      <el-form-item label=" telephone">
        <el-input v-model="sizeForm.phonenum" />
      </el-form-item>
      <el-form-item label=" major">
        <el-input v-model="sizeForm.major" />
      </el-form-item>
      <el-form-item label="age">
        <el-input v-model="sizeForm.age" />
    </el-form-item>
    <el-form-item label="motto">
        <el-input v-model="sizeForm.motto" />
    </el-form-item>
    
      <el-form-item label="birthday">
        <el-col :span="11">
          <el-date-picker
            v-model="sizeForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
    </el-form-item>
        <el-form-item label=" constellation">
        <el-input v-model="sizeForm. constellation" />
</el-form-item>
<el-form-item label="emails">
        <el-input v-model="sizeForm. emails" />
</el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>


  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  
  const size = ref('default')
  const labelPosition = ref('right')
  
  const sizeForm = reactive({
    name: '',
    sex: '',
    phonenum: '',
    major: '',
    age: '',
    motto: '',
    date1: '',
    date2: '',
    delivery: false,
    constellation: '',
    emails: '',
    type: [],
    resource: '',
    desc: '',
  })
  
  function onSubmit() {
    console.log('submit!')
  }
  </script>
  
  <style>
  .el-radio-group {
    margin-right: 12px;
  }

  </style> 
