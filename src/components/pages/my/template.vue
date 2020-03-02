<template>
  <div id="my">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <div class="item" v-for="blog in blogs" :key="blog.id" to="/detail" style="border-bottom:1px solid #ccc;">
        <div class="date">
          <span class="day">{{getDate(blog.createdAt).date}}</span>
          <span class="month">{{getDate(blog.createdAt).month}}</span>
          <span class="year">{{getDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
        
        <div class="actions">
          <router-link :to="`/detail/${blog.id}`" class="link" style="width:35px;">详情</router-link>
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      
      </div>
    </section>
    <section>
      <div class="block">
        <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
