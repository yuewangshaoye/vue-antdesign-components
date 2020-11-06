<template>
<!-- 
   可以增删改查的表格示例
 -->
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" :loading="loading" @click="showModal"> 新增 </a-button>
      <a-modal v-model="visible" title="信息数据识别新增" @ok="handleOk" okText="确认" cancelText="取消">
        <div>
          <a-row
            ><a-col>序号:</a-col><a-col><a-input class="input" /></a-col
          ></a-row>
          <a-row
            ><a-col>源数据库:</a-col><a-col><a-input class="input" /></a-col
          ></a-row>
          <a-row
            ><a-col>源表:</a-col><a-col><a-input class="input" /></a-col
          ></a-row>
          <a-row
            ><a-col>转换规则:</a-col><a-col><a-input class="input" /></a-col
          ></a-row>
          <a-row
            ><a-col>目标数据库:</a-col><a-col><a-input class="input" /></a-col
          ></a-row>
          <a-row
            ><a-col>目标表:</a-col><a-col><a-input class="input" /></a-col
          ></a-row>
        </div>
      </a-modal>
      <span style="margin-left: 8px">
        <template v-if="hasSelected"> 已选中 {{ selectedRowKeys.length }} 项 </template>
      </span>
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
    >
      <template
        v-for="col in ['num', 'rule', 'target', 'data', 'table', 'source']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="(e) => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">保存</a>
            <a-popconfirm title="是否保存?" okText="确认" cancelText="取消" @confirm="() => cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a>|
            <a-popconfirm
              v-if="data.length"
              okText="删除"
              cancelText="取消"
              title="是否删除?"
              @confirm="() => onDelete(record.key)"
            >
              <a>删除</a>
            </a-popconfirm>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '序号',
    dataIndex: 'num',
    scopedSlots: { customRender: 'num' },
  },
  {
    title: '源数据库',
    dataIndex: 'data',
    scopedSlots: { customRender: 'data' },
  },
  {
    title: '源表',
    dataIndex: 'table',
    scopedSlots: { customRender: 'table' },
  },
  {
    title: '转换规则',
    dataIndex: 'rule',
    scopedSlots: { customRender: 'rule' },
  },
  {
    title: '目标数据库',
    dataIndex: 'source',
    scopedSlots: { customRender: 'source' },
  },
  {
    title: '目标表',
    dataIndex: 'target',
    scopedSlots: { customRender: 'target' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
]
const data = [
  {
    key: 1,
    num: `01`,
    data: `文字内容`,
    table: `文字内容`,
    rule: `文字内容`,
    source: `文字内容`,
    target: `文字内容`,
    ellipsis: true,
  },
  {
    key: 2,
    num: `02`,
    data: `文字内容`,
    table: `文字内容`,
    rule: `文字内容`,
    source: `文字内容`,
    target: `文字内容`,
    ellipsis: true,
  },
  {
    key: 3,
    num: `03`,
    data: `文字内容`,
    table: `文字内容`,
    rule: `文字内容`,
    source: `文字内容`,
    target: `文字内容`,
    ellipsis: true,
  },
]
export default {
  data() {
    this.cacheData = data.map((item) => ({ ...item }))
    return {
      data,
      columns,
      selectedRowKeys: [],
      loading: false,
      visible: false,
      pagination: {
        total: 100,
        showQuickJumper: true,
      },
      editingKey: '',
      editable: false,
    }
  },

  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    },
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data]
      const target = newData.filter((item) => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit(key) {
      const newData = [...this.data]
      const target = newData.filter((item) => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save(key) {
      const newData = [...this.data]
      const newCacheData = [...this.cacheData]
      const target = newData.filter((item) => key === item.key)[0]
      const targetCache = newCacheData.filter((item) => key === item.key)[0]
      if (target && targetCache) {
        delete target.editable
        this.data = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
    },
    cancel(key) {
      const newData = [...this.data]
      const target = newData.filter((item) => key === item.key)[0]
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter((item) => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    },
    onDelete(key) {
      const dataSource = [...this.data]
      this.data = dataSource.filter((item) => item.key !== key)
    },
    handleOk(e) {
      this.visible = false
    },
    showModal() {
      this.visible = true
    },
    start() {
      this.loading = true
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false
        this.selectedRowKeys = []
      })
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
  },
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
.input {
  width: 80%;
  margin: 10px;
}
</style>