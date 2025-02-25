# Lab 5 - Sistema de Encuesta con Validación en Tiempo Real

## Características
- Sistema de encuesta estructurado implementado a través de un formulario.
- Validación en tiempo real que asegura que solo se acepten respuestas válidas.
- Barra de progreso dinámica que se actualiza a medida que los usuarios completan el formulario.
- El formulario no puede ser enviado a menos que todos los campos requeridos sean válidos.
- La encuesta incluye:
  - Al menos tres tipos diferentes de entradas (por ejemplo, texto, correo electrónico, botones de opción).
  - Una barra de progreso que muestra el porcentaje de finalización.
  - Un mensaje de éxito que se muestra después del envío.
- Se utiliza un marco de interfaz de usuario (Material-UI) para mejorar la experiencia del usuario y la apariencia visual.
- Los componentes están organizados en una carpeta `components/` dentro de `src/`.

##estructura 
src/
  components/
    SurveyForm.js        # Componente principal para el formulario de encuesta
  App.js                 # Componente raíz
  index.js               # Punto de entrada para la aplicación React
public/
  index.html             # Plantilla HTML


live preview:https://xh34tx.csb.app/
