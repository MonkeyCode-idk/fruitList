const defaultArr = [
    {
        id: 1,
        img: 'icon_水果/icon-test.png',
        isChecked: false,
        num: 2,
        price: 12,
        name: '香蕉',
    },
    {
        id: 2,
        img: 'icon_水果/icon-test_1.png',
        isChecked: false,
        num: 6,
        price: 10,
        name: '梨',
    },
    {
        id: 3,
        img: 'icon_水果/icon-test_2.png',
        isChecked: false,
        num: 3,
        price: 12,
        name: '西瓜',
    },
    {
        id: 4,
        img: 'icon_水果/icon-test_3.png',
        isChecked: false,
        num: 16,
        price: 5,
        name: '苹果'
    },
    {
        id: 5,
        img: 'icon_水果/icon-test_4.png',
        isChecked: false,
        num: 20,
        price: 5,
        name: '草莓'
    },
    {
        id: 6,
        img: 'icon_水果/icon-test_5.png',
        isChecked: false,
        num: 20,
        price: 5,
        name: '葡萄'
    },
    {
        id: 7,
        img: 'icon_水果/icon-test_6.png',
        isChecked: false,
        num: 4,
        price: 5,
        name: '猕猴桃'
    },
    {
        id: 8,
        img: 'icon_水果/icon-test_7.png',
        isChecked: false,
        num: 20,
        price: 5,
        name: '菠萝'
    },
]
const app = new Vue({
    el: '#app',
    data: {

        checkNum: 0,
        fruitList: JSON.parse(localStorage.getItem('list')) || defaultArr
    },
    methods: {
        // 删除
        del(value) {
            console.log(value);
            this.fruitList = this.fruitList.filter(item => item.id !== value)
        },
        // 加
        add(id) {
            const fruit = this.fruitList.find(item => item.id === id)
            // console.log(fruit);
            fruit.num++
        },
        // 减
        sub(id) {
            const fruit = this.fruitList.find(item => item.id === id)
            // console.log(fruit);
            fruit.num--

        }
    },

    computed: {
        // 默认计算属性:只能获取不能设置，要设置需要些完整写法
        // isAll() {
        //     // 必须所有的小选框都选中，全选按钮才选中 -> every
        //     return this.fruitList.every(item => item.isChecked)
        // },
        // 完整写法 = get + set
        isAll: {
            get() {
                return this.fruitList.every(item => item.isChecked)
            },
            set(value) {
                console.log(value);
                // 基于拿到的布尔值，要让所有的小选框同步状态
                this.fruitList.forEach(item => item.isChecked = value);
            }
        },
        //总计
        total() {
            // let newList = this.fruitList.filter(item => item.isChecked === true)
            // let res = newList.reduce((sum, item) => sum + (item.num * item.price), 0)
            // return res

            // redece写法
            return this.fruitList.reduce((sum, item) => {
                if (item.isChecked) {
                    return sum + item.num * item.price
                } else
                    return sum
            }, 0)
        },
        totalCount() {
            return this.fruitList.reduce((sum, item) => {
                if (item.isChecked) {
                    return sum += item.num
                } else {
                    return sum
                }
            }, 0)
        },
    },
    watch: {
        fruitList: {
            deep: true,
            handler(newValue) {
                console.log(newValue);
                // 需要将变化后的 newValue 存入本地 (转JSON)
                localStorage.setItem('list', JSON.stringify(newValue))
            }
        }
    }
})