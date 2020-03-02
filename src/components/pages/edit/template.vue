<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=3 autosize v-model="description" ></el-input>
    <p class="msg">限100个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=20 :autosize="{ minRows: 2, maxRows: 4}" v-model="content"></el-input>
    <p>
      <label for="">是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>
<script src="./template.js"></script>
<style src="./template.less" lang="less"></style>
