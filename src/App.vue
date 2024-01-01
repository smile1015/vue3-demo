<script setup>
import {useMouse} from './mouse.js'
import {onMounted} from "vue";
import {getTableDataApi} from './api/index.js'
import {useTable} from "./hooks/useTable.js";
const { x, y } = useMouse()

const params = {}
const [tableData, refresh, pagination, loading] = useTable(getTableDataApi, params)
params.id = 1
onMounted(refresh)
</script>

<template>
  <div>
    <div>
      Mouse position is at: {{ x }}, {{ y }}
    </div>


    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <button @click="pagination.reset">refresh</button>
    <!-- 分页器 -->
    <el-pagination
        v-model:current-page="pagination.current"
        :page-size="pagination.size"
        layout="total, prev, pager, next"
        :page-sizes="pagination.sizeOption"
        :total="pagination.total"
        @size-change="(size) => pagination.onSizeChange(size, {})"
        @current-change="(page)=>pagination.onPageChange(page, {test: 'test'})"
    />
  </div>
</template>

<style scoped>
</style>
