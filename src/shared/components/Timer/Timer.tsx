import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Timer = ({ max }) => {
    const [counter, setCounter] = useState(max)
    const navigate = useNavigate()

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000)
        }
        if (counter === 0) {
            return navigate('/login')
        }
    }, [counter])

    return (
        <span>
            {counter}
        </span>
    )
}
Timer.propTypes = { max: PropTypes.node.isRequired, }

export default Timer
