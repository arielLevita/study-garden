import { LOCAL_STORAGE_KEY } from "../App";
import Swal from 'sweetalert2'

const ResetAppButton = () => {

    const handleResetApp = () => {

        const ResetAppSwal = Swal.mixin({
            customClass: {
                confirmButton: "text-black font-medium bg-naranja rounded-lg w-full py-2 px-4 m-1",
                cancelButton: "text-black font-medium rounded-lg w-full border border-black py-2 px-4 m-1"
            },
            buttonsStyling: false,
            background: '#f3f4f6',
            width: '75%',
            color: '#0b0b0b'
        });
        ResetAppSwal.fire({
            title: "¿Seguro que desea reiniciar?",
            text: "Su historial y tareas guardadas serán eliminados. Esta acción no se puede revertir.",
            icon: "warning",
            iconColor: "orange",
            showCancelButton: true,
            confirmButtonText: "REINICIAR",
            cancelButtonText: "CANCELAR",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
                ResetAppSwal.fire({
                    title: "Reiniciado!",
                    text: "Su historial y tareas guardadas serán eliminados.",
                    icon: "success",
                    iconColor: 'green',
                    didClose() {location.reload()}
                });
                
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                ResetAppSwal.fire({
                    title: "Cancelado",
                    text: "Su historial y tareas guardadas continúan activos.",
                    icon: "error",
                    iconColor: 'red'
                });
            }
        });
    }

    return (
        <button
            onClick={handleResetApp}
            className="w-full text-azul font-medium p-1"
        >
            Reiniciar aplicación
        </button>
    )
}

export default ResetAppButton