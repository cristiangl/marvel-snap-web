import React from 'react'

export default function ImageModal({showModal, setShowModal, content}) {

    if (!showModal) {
        return null
    }

    return (
        <div className="fixed inset-0 p-8 xl:p-0 z-10 overflow-y-auto w-full flex items-center justify-center">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-50"
                onClick={() => setShowModal(false)}
            >
                
            </div>
            <div className="flex items-center md:h-3/4 lg:h-3/4" onClick={() => setShowModal(false)}>
                {content}
            </div>
        </div>
    )
}
