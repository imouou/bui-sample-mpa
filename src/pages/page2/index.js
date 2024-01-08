bui.ready(function () {
    // 合并接收默认参数
    let props = bui.history.getParams("url");
    
    // 初始化数据行为存储
    var bs = bui.store({
        scope: "page",
        data: {
            form: {
                id: props.id
            }
        },
        methods: {
            bind() {
                // 绑定按钮跳转
                bui.btn({ id: ".bui-page", handle: ".bui-btn" }).load();
            },

            getProps() {
                bui.alert(`id:${props.id}`);
            }
        },
        watch: {},
        computed: {},
        templates: {},
        beforeMount: function () {
            // 数据解析前执行, 修改data的数据示例
            // this.$data.a = 2
        },
        mounted: function () {
            // 数据解析后执行
            this.bind();
        }
    });

});
