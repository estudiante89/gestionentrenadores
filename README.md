# API - Gestión de Entrenadores (Reloaded GYM)

API REST desarrollada con Node.js y Express para la plataforma de administración de entrenadores de Unicatólicos Reloaded GYM.

## 📦 Endpoints

- `GET /trainers` → Listar todos los entrenadores
- `GET /trainers/:id` → Obtener un entrenador por ID
- `POST /trainers` → Crear un nuevo entrenador
- `PUT /trainers/:id` → Actualizar un entrenador
- `DELETE /trainers/:id` → Eliminar un entrenador
- `GET /trainers/:id/activities` → Listar actividades del entrenador

## 🧪 Modelo de Entrenador

```json
{
  "id": "string",
  "nombre": "string",
  "especialidad": "string",
  "horarios": ["lunes 8am", "miércoles 10am"],
  "certificaciones": ["string"]
}
```

## 🌐 Despliegue en Vercel
https://gestionentrenadores.vercel.app/

