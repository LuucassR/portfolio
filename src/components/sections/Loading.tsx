import React from "react";

interface LoadingSpinnerProps {
  /** Indica si la animación está activa y visible */
  show: boolean;
  /** Texto opcional que se muestra debajo del spinner */
  message?: string;
  /** Color principal del spinner (hex, rgb) - Default: Azul moderno */
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  show,
  message = "Cargando...",
  color = "#3b82f6", // Color por defecto (Tailwind Blue 500)
}) => {
  // Si show es false, no renderizamos nada
  if (!show) return null;

  return (
    <div style={styles.overlay}>
      {/* Estilos CSS con @keyframes */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div style={styles.content}>
        {/* El círculo animado */}
        <div
          style={{
            ...styles.spinner,
            borderTopColor: color, // El borde superior tiene el color principal
          }}
        />

        {/* El mensaje opcional */}
        {message && <p style={{ ...styles.text, color: color }}>{message}</p>}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "200px", // Ocupa un espacio mínimo
    padding: "20px",
    boxSizing: "border-box",
    // backgroundColor: 'rgba(255, 255, 255, 0.7)', // Descomenta si quieres fondo borroso
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "4px solid #e5e7eb", // Borde gris suave de fondo
    // borderTopColor se define en línea para usar el color dinámico
    animation: "spin 0.8s linear infinite",
  },
  text: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "sans-serif",
  },
};

export default LoadingSpinner;
