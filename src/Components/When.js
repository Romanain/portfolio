import React from 'react'

export default ({ children, condition }) => {
    const shouldRender = typeof condition === 'function'
        ? condition()
        : !!condition

    if (!shouldRender) return null

    return children
}
