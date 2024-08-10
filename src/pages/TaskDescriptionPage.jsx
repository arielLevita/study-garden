/* eslint-disable react/prop-types */


const TaskDescriptionPage = ({ currentTitle, currentDescription, handleTitleChange, handleDescriptionChange }) => {

    const sectionTitle = 'Nueva tarea';

    return (
        <section id={sectionTitle} className="h-full">
            <div className='h-full w-full bg-white p-4'>
                <div className="mb-4">
                    <h3 className='text-azul text-xl font-semibold mb-1'>Nombre de la tarea</h3>
                    <input
                        className="bg-celeste rounded w-full py-1 px-2"
                        type="text"
                        name="currentTitle"
                        id="currentTitle"
                        value={currentTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mb-4">
                    <h3 className='text-azul text-xl font-semibold mb-1'>Descripción</h3>
                    <textarea
                        className="bg-celeste rounded w-full px-2"
                        name="currentDescription"
                        id="currentDescription"
                        rows={6}
                        value={currentDescription}
                        onChange={handleDescriptionChange}
                    />
                </div>

            </div>
        </section>
    )
}

export default TaskDescriptionPage