import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Swal from 'sweetalert2';
import './App.css'

export const LOCAL_STORAGE_KEY = 'tasks';

function App() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt',
      (event) => {
        event.preventDefault();
        setDeferredPrompt(event);
      });

    if (matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
  }, []);

  const InstallAppSwal = Swal.mixin({
    customClass: {
      confirmButton: "text-black font-medium bg-colorAcento rounded-lg w-full py-2 px-4 m-1",
      cancelButton: "text-black font-medium rounded-lg w-full border border-black py-2 px-4 m-1"
    },
    buttonsStyling: false,
    background: '#f3f4f6',
    width: '75%',
    color: '#0b0b0b'
  });

  const handleInstall = () => {
    if (deferredPrompt) {
      InstallAppSwal.fire({
        title: "¿Desea continuar con la instalación?",
        text: "La instalación de la aplicación facilita el acceso y mejora la experiencia de uso.",
        icon: "question",
        iconColor: "#1a3551",
        showCancelButton: true,
        confirmButtonText: "CONTINUAR",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          deferredPrompt.prompt();

          deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
              InstallAppSwal.fire({
                title: "¡Muchas gracias!",
                text: "Por favor, confirme la creación del acceso directo.",
                icon: "success",
                iconColor: 'green'
              });
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            setDeferredPrompt(null);
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          InstallAppSwal.fire({
            title: "Cancelado",
            icon: "error",
            iconColor: 'red'
          });
        }
      });
    }
  };

  return (
    <>
      <div className='flex flex-col h-screen mx-auto overflow-x-hidden'>
        <div className='w-screen grow-0 z-50'>
          <Topbar isInstalled={isInstalled} handleInstall={handleInstall} />
        </div>

        <div className='h-[calc(100vh-152px)] overflow-y-scroll'>
          <Outlet />
        </div>

        <div className='w-screen grow-0 z-50'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
