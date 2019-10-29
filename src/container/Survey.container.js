import React from 'react'
import FormSubmit from '../component/Form/Form.component'
import Introduction from '../component/Introduction/Introduction.component';
export default function Survey() {
    return (
        <div className="container">
            <Introduction/>
            <FormSubmit/>
        </div>
    )
}
