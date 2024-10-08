import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

const ContactFormPage = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "002c55a7-5044-411b-a799-941ec55bb722");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                text: 'Su mensaje ha sido enviado con éxito',
                icon: "success",
                iconColor: "green",
                customClass: {
                    confirmButton: "text-black font-medium bg-colorAcento rounded-lg w-full py-2 px-4 m-1",
                    // cancelButton: "text-black font-medium rounded-lg w-full border border-black py-2 px-4 m-1"
                },
                buttonsStyling: false,
                didClose() {
                    event.target.reset();
                }
            });
        } else {
            Swal.fire({
                text: ('Su mensaje no pudo ser enviado. Error: ', data),
                icon: "error",
                iconColor: "red",
                customClass: {
                    confirmButton: "text-black font-medium bg-colorAcento rounded-lg w-full py-2 px-4 m-1",
                    // cancelButton: "text-black font-medium rounded-lg w-full border border-black py-2 px-4 m-1"
                },
                buttonsStyling: false,
            });
            console.log("Error", data);
        }
    };

    return (
        <section className="h-full bg-colorPrincipal">
            <AnimatedPage>
                <div className="h-full w-full p-4">
                    <div className="max-w-md h-full mx-auto">
                        <div className="h-full overflow-y-scroll">
                            <h3 className="text-colorSecundario text-xl font-semibold mb-4">Contacto</h3>
                            <p className="text-colorSecundario">Si tenés alguna duda, consulta o sugerencia, podés comunicarte con nosotros a través de este formulario y te responderemos a la brevedad.</p>
                            <p className="text-colorSecundario mb-8">¡Saludos!</p>
                            <form onSubmit={onSubmit} className="flex flex-col gap-2">
                                <input type="hidden" name="project" value={'Study Garden'} />
                                <label htmlFor="name" className="text-colorSecundario">
                                    Nombre
                                    <input
                                        className="bg-white rounded-full w-full py-1 px-2"
                                        id="name"
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        required
                                    />
                                </label>
                                <label htmlFor="email" className="text-colorSecundario">
                                    Correo electrónico
                                    <input
                                        className="bg-white rounded-full w-full py-1 px-2"
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                    />
                                </label>
                                <label htmlFor="message" className="text-colorSecundario">
                                    Mensaje
                                    <textarea
                                        className="bg-white rounded-2xl w-full px-2 py-1"
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                    ></textarea>
                                </label>

                                <div className="w-full flex justify-around items-center py-4">
                                    <button
                                        className="w-2/5 bg-colorPrincipal rounded-full border border-colorSecundario p-2"
                                        type="reset"
                                    >
                                        Borrar
                                    </button>
                                    <motion.button whileTap={{ scale: 0.97 }} className="w-2/5 bg-colorAcento rounded-full p-2" type="submit" value="send">
                                        Enviar
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </section>
    );
};

export default ContactFormPage;
