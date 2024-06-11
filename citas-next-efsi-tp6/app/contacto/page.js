import { Navbar } from "@/components/Navbar/Navbar";
import { Text } from "@/components/Text/Text";

export default function Page() {

  const textoContacto = `
  En Clínica Veterinaria Emipa, nos encantaría saber de ti y de tus adorables mascotas. Si tienes alguna pregunta, necesitas más información sobre nuestros servicios o deseas reservar una cita, no dudes en contactarnos.
  Puedes comunicarte con nosotros de las siguientes maneras:
  
  Teléfono: 333-666-999
  Correo Electrónico: emipa@gamil.com
  Dirección: Mi clínica
  Además, también puedes visitarnos en persona durante nuestro horario de atención para hablar con nuestro equipo de veterinarios y personal de apoyo.
  
  Nuestro compromiso es proporcionar un servicio excepcional y personalizado para ti y tus mascotas. ¡Esperamos tener noticias tuyas pronto!`;

  return (
    <>
      <Navbar />
      <h1>¡Estamos aquí para ayudarte!</h1>
      <Text txt={textoContacto} />
    </>
  );
}