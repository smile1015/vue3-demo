/**
 * 设置默认数据
 * @param params1
 * @param params2
 */
export function defaults(params1, params2) {
    if (!params1) {
        params1 = {}
    }
    if (params2 instanceof Object) {
        Object.keys(params2).forEach((key) => {
            if (params2[key] instanceof Object) {
                const temp = {}
                if (!params1[key]) {
                    defaults(temp, params2[key])
                    params1[key] = temp
                }
            } else {
                !params1[key] && (params1[key] = params2[key])
            }
        })
    }
}


/**
 * 获取对象的值
 * @param target 目标对象
 * @param keyName 对象的键名
 * @param defaultValue 不存在时的默认值
 */
export function get(target, keyName, defaultValue) {
    if (target instanceof Object) {
        return target[keyName] || defaultValue
    }
    throw new Error('target is not object')
}