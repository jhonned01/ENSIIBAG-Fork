import MainBody from "./Inicio/MainBody";
import "./globals.css";

export const metadata = {
  title: "ensiibague",
  description:
    "Descubre una nueva forma de educación tradicional, PFC y aceleración de aprendizaje en nuestra página. Nuestro enfoque innovador te permite alcanzar tus metas educativas de manera efectiva. ¡Inscríbete ahora y transforma tu camino de aprendizaje!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MainBody>{children}</MainBody>
    </html>
  );
}
