# API Contract - Gestión de Entrenadores

## Base Path: `/trainers`

### `GET /trainers`
Lista todos los entrenadores.

### `GET /trainers/{id}`
Devuelve un entrenador por su ID.

### `POST /trainers`
Crea un nuevo entrenador.
- Body (JSON):
```json
{
  "id": "123",
  "nombre": "Ana Gómez",
  "especialidad": "Yoga",
  "horarios": ["lunes 8am"],
  "certificaciones": ["Yoga Pro"]
}
```

### `PUT /trainers/{id}`
Actualiza un entrenador.

### `DELETE /trainers/{id}`
Elimina un entrenador.

### `GET /trainers/{id}/activities`
Muestra actividades asociadas a un entrenador.
