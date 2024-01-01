import {reactive, toRefs} from "vue";

/**
 * 使用 reactive 和 toRefs 可以快速创建多个 ref 对象, 并在结构后使用时不丢失其响应性和原先数据的关联性
 */
export function usePagination(cb, sizeOption=  [5, 10, 20, 50, 100, 200]) {
    const pagination = reactive({
        current: 1,
        total: 0,
        sizeOption,
        size: sizeOption[0],
        onPageChange: (page, extraData) => {
            pagination.current = page
            return extraData ? cb(extraData) : cb()
        },
        onSizeChange: (size, extraData) => {
            pagination.size = size
            return extraData ? cb(extraData) : cb()
        },
        setTotal: (total) => {
            pagination.total = total
        },
        reset: () => {
            pagination.current = 1
            pagination.total = 0
            pagination.size = sizeOption[0]
            return cb()
        }
    })

    return [
        pagination,
        pagination.onPageChange,
        pagination.onSizeChange,
        pagination.setTotal
    ]
}