import { useState } from "react";
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

const ContactFormPage = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "002c55a7-5044-411b-a799-941ec55bb722");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            Swal.fire({
                text: 'Su mensaje ha sido enviado con éxito',
                icon: "success",
                iconColor: "green",
                customClass: {
                    confirmButton: "text-black font-medium bg-naranja rounded-lg w-full py-2 px-4 m-1",
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
                    confirmButton: "text-black font-medium bg-naranja rounded-lg w-full py-2 px-4 m-1",
                    // cancelButton: "text-black font-medium rounded-lg w-full border border-black py-2 px-4 m-1"
                },
                buttonsStyling: false,
            });
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="h-full bg-celeste">
            <AnimatedPage>
                <div className="h-full w-full p-4">
                    <div className="max-w-md h-full mx-auto">
                        <div className="h-full overflow-y-scroll">
                            <h3 className="text-azul text-xl font-semibold mb-4">Contacto</h3>
                            <p className="text-azul">Si tenés alguna duda, consulta o sugerencia, podés comunicarte con nosotros a través de este formulario y te responderemos a la brevedad.</p>
                            <p className="text-azul mb-8">¡Saludos!</p>
                            <form onSubmit={onSubmit} className="flex flex-col gap-2">
                                <input type="hidden" name="project" value={'Study Garden'} />
                                <label htmlFor="name" className="text-azul">
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
                                <label htmlFor="email" className="text-azul">
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
                                <label htmlFor="message" className="text-azul">
                                    Mensaje
                                    <textarea
                                        className="bg-white rounded-2xl w-full px-2 py-1"
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                    ></textarea>
                                </label>

                                <div className="flex justify-between my-4">
                                    <button
                                        className="rounded-full text-azul border border-azul w-1/4 py-1"
                                        type="reset"
                                    >
                                        Borrar
                                    </button>
                                    <motion.button whileTap={{ scale: 0.97 }} className="rounded-full text-black bg-naranja shadow ml-auto w-1/2 py-1" type="submit" value="send">
                                        Enviar
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <span>{result}</span>
            </AnimatedPage>
        </section>
    );
};

export default ContactFormPage;
