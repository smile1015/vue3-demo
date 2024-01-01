import {ref} from "vue";
import {usePagination} from "./usePagination.js";
import {defaults, get} from "../utils/index.js";


export function useTable(api, params = {}, options = {}) {
    // 参数处理
    defaults(options, {
        path: {data: "data", total: "total", page: "page", size: "limit"},
        immediate: false,
    })

    const [pagination, , , setTotal] = usePagination((extraData) => extraData ? refresh(extraData) : refresh())
    const data = ref([])
    const loading = ref(false)

    const refresh = (extraData = {}) => {
        const requestData = {
            [options?.path?.page]: pagination.current,
            [options?.path?.size]: pagination.size
        }
        if (typeof params === 'function') {
            Object.assign(requestData, params())
        } else {
            Object.assign(requestData, params)
        }
        if (typeof extraData === 'function') {
            Object.assign(requestData, extraData())
        } else {
            Object.assign(requestData, extraData)
        }

        loading.value = true

        return api(requestData).then((res) => {
            data.value = get(res, options?.path?.data , [])
            setTotal(get(res, options?.path?.total , 0))
        }).finally(() => {
            loading.value = false
        })
    }

    return [data, refresh, pagination, loading]
}